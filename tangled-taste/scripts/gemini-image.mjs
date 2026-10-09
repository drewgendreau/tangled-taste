// Makes dish and ingredient pictures with Google's Gemini image model ("Nano Banana") and files them where the
// site picks them up. Nothing here is a secret: the API key comes from the GEMINI_API_KEY environment variable
// or from a git-ignored file, tangled-taste/.env.local, containing the line  GEMINI_API_KEY=your-key
//
//   node scripts/gemini-image.mjs dish "Birria Tacos"          (or the dish ID: TT-0650)
//   node scripts/gemini-image.mjs ingredient "olive oil"       (or the ingredient ID: TI-0012)
//   node scripts/gemini-image.mjs dishes --missing --limit 10        most popular dishes that have no picture yet
//   node scripts/gemini-image.mjs ingredients --missing --limit 10   most used ingredients with no picture yet
//
// Options: --force (replace an existing picture), --dry-run (show the prompt, call nothing), --extra "text"
// (added to the prompt, e.g. "show it served in a clay bowl"), --model name (default gemini-2.5-flash-image).
// The prompts are the editable files in art/prompts/. Pictures are saved as 1024 px WebP in art/dishes/ or
// art/ingredients/, named by permanent ID (dishes TT-0650, ingredients TI-0012); `pnpm art:build` (run automatically by dev and build) turns them into the site's images.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';
import { DISHES, INGREDIENT_CATEGORY, INGREDIENT_NOTES, INGREDIENT_IDS, CATEGORIES } from '../src/data.js';

const ROOT = fileURLToPath(new URL('..', import.meta.url));
const args = process.argv.slice(2);
const flag = (name) => args.includes(`--${name}`);
const option = (name) => { const i = args.indexOf(`--${name}`); return i >= 0 ? args[i + 1] : undefined; };
const positional = args.filter((a, i) => !a.startsWith('--') && !['--extra', '--model', '--limit'].includes(args[i - 1]));
const [kind, ...rest] = positional;

const MODEL = option('model') || process.env.GEMINI_IMAGE_MODEL || 'gemini-2.5-flash-image';
const API = (process.env.GEMINI_API_BASE || 'https://generativelanguage.googleapis.com/v1beta').replace(/\/$/, '');

function apiKey() {
  if (process.env.GEMINI_API_KEY) return process.env.GEMINI_API_KEY.trim();
  const file = path.join(ROOT, '.env.local');
  if (fs.existsSync(file)) {
    const m = fs.readFileSync(file, 'utf8').match(/^\s*GEMINI_API_KEY\s*=\s*(.+?)\s*$/m);
    if (m) return m[1].replace(/^["']|["']$/g, '');
  }
  return null;
}

const template = (name) => fs.readFileSync(path.join(ROOT, 'art/prompts', `${name}.md`), 'utf8').trim();
const fill = (t, vars) => t.replace(/\{\{(\w+)\}\}/g, (_, k) => vars[k] ?? '').replace(/\n{3,}/g, '\n\n').trim();

// ---- what to make
const ingredientNames = Object.keys(INGREDIENT_CATEGORY);
const ingredientCount = new Map();
for (const d of DISHES) for (const nm of new Set(d.ingredients)) ingredientCount.set(nm, (ingredientCount.get(nm) || 0) + 1);

function dishJob(query) {
  const d = DISHES.find((x) => x.uid.toLowerCase() === query.toLowerCase() || x.name.toLowerCase() === query.toLowerCase());
  if (!d) throw new Error(`No dish "${query}". Use its exact name or its ID (TT-0001).`);
  return {
    label: `${d.name} (${d.uid})`,
    file: path.join(ROOT, 'art/dishes', `${d.uid}.webp`),
    prompt: fill(template('dish'), { name: d.name, cuisine: d.cuisine, note: d.note, ingredients: d.ingredients.slice(0, 8).join(', '), extra: option('extra') }),
  };
}
function ingredientJob(query) {
  const name = ingredientNames.find((n) => n.toLowerCase() === query.toLowerCase() || INGREDIENT_IDS[n].toLowerCase() === query.toLowerCase());
  if (!name) throw new Error(`No ingredient "${query}". Use its exact name, such as "olive oil", or its ID (TI-0001).`);
  return {
    label: `${name} (${INGREDIENT_IDS[name]})`,
    file: path.join(ROOT, 'art/ingredients', `${INGREDIENT_IDS[name]}.webp`),
    prompt: fill(template('ingredient'), { name, category: CATEGORIES[INGREDIENT_CATEGORY[name]].label.toLowerCase(), description: INGREDIENT_NOTES[name] || '', extra: option('extra') }),
  };
}

function jobs() {
  if (kind === 'dish') return [dishJob(rest.join(' '))];
  if (kind === 'ingredient') return [ingredientJob(rest.join(' '))];
  const limit = +option('limit') || 5;
  if (kind === 'dishes') {
    const todo = [...DISHES].sort((a, b) => b.popularity - a.popularity || a.id - b.id).filter((d) => flag('force') || !fs.existsSync(path.join(ROOT, 'art/dishes', `${d.uid}.webp`)));
    return todo.slice(0, limit).map((d) => dishJob(d.uid));
  }
  if (kind === 'ingredients') {
    const todo = [...ingredientNames].sort((a, b) => ingredientCount.get(b) - ingredientCount.get(a)).filter((n) => flag('force') || !fs.existsSync(path.join(ROOT, 'art/ingredients', `${INGREDIENT_IDS[n]}.webp`)));
    return todo.slice(0, limit).map((n) => ingredientJob(n));
  }
  throw new Error('Usage: gemini-image.mjs dish "Name" | ingredient "name" | dishes --missing --limit N | ingredients --missing --limit N');
}

// ---- the Gemini call
async function generate(prompt, key) {
  const body = (aspect) => JSON.stringify({
    contents: [{ parts: [{ text: prompt }] }],
    generationConfig: { responseModalities: ['IMAGE'], ...(aspect ? { imageConfig: { aspectRatio: '1:1' } } : {}) },
  });
  let aspect = true;
  for (let attempt = 1; attempt <= 4; attempt++) {
    const res = await fetch(`${API}/models/${MODEL}:generateContent`, { method: 'POST', headers: { 'content-type': 'application/json', 'x-goog-api-key': key }, body: body(aspect) });
    const text = await res.text();
    if (res.status === 400 && aspect && /imageConfig|aspectRatio|Unknown name/i.test(text)) { aspect = false; attempt--; continue; } // older models ignore the setting
    if (res.status === 429 || res.status >= 500) {
      const wait = 2000 * 2 ** attempt;
      console.warn(`  ${res.status}; waiting ${wait / 1000}s before trying again`);
      await new Promise((r) => setTimeout(r, wait));
      continue;
    }
    if (!res.ok) throw new Error(`Gemini answered ${res.status}: ${text.slice(0, 400)}`);
    const json = JSON.parse(text);
    const parts = json.candidates?.[0]?.content?.parts || [];
    const image = parts.find((p) => p.inlineData || p.inline_data);
    if (image) return Buffer.from((image.inlineData || image.inline_data).data, 'base64');
    const said = parts.map((p) => p.text).filter(Boolean).join(' ') || json.promptFeedback?.blockReason || json.candidates?.[0]?.finishReason || 'no image in the answer';
    throw new Error(`Gemini returned no image: ${said}`);
  }
  throw new Error('Gemini kept failing; try again later');
}

async function main() {
  const list = jobs();
  if (!list.length) return console.log('Nothing to do: every one of those already has a picture.');
  const key = apiKey();
  if (!key && !flag('dry-run')) throw new Error('No API key. Put GEMINI_API_KEY=... in tangled-taste/.env.local (git-ignored) or set the GEMINI_API_KEY environment variable.');
  for (const job of list) {
    if (fs.existsSync(job.file) && !flag('force')) { console.log(`skip ${job.label}: ${path.relative(ROOT, job.file)} exists (use --force to replace)`); continue; }
    if (flag('dry-run')) { console.log(`--- ${job.label} -> ${path.relative(ROOT, job.file)}\n${job.prompt}\n`); continue; }
    process.stdout.write(`making ${job.label} … `);
    const raw = await generate(job.prompt, key);
    fs.mkdirSync(path.dirname(job.file), { recursive: true });
    const out = await sharp(raw).resize(1024, 1024, { fit: 'contain', background: '#ffffff' }).flatten({ background: '#ffffff' }).webp({ quality: 90 }).toBuffer();
    fs.writeFileSync(job.file, out);
    console.log(`saved ${path.relative(ROOT, job.file)} (${Math.round(out.length / 1024)} KB)`);
  }
}
main().catch((e) => { console.error(`error: ${e.message}`); process.exit(1); });
