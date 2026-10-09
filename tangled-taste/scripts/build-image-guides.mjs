// Writes the two reference guides that track which dish and ingredient pictures exist:
//   ../docs/dish-images.md        ../docs/ingredient-images.md
// Each lists every dish / ingredient with its permanent ID, description, expected file name, format, pixel size and
// target file size, and whether the picture is already in the project. Hand a guide to Gemini to "top off" what is
// missing. Generated: run by `pnpm art:build` (so by `pnpm dev` and `pnpm build`); do not edit by hand.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { DISHES, INGREDIENT_CATEGORY, INGREDIENT_IDS, INGREDIENT_NOTES, CATEGORIES } from '../src/data.js';

const ROOT = fileURLToPath(new URL('..', import.meta.url));
const DOCS = path.join(ROOT, '..', 'docs');
const esc = (s) => String(s ?? '').replace(/\|/g, '\\|').replace(/\s+/g, ' ').trim();
const DONE = '✅ created', TODO = '⬜ to create';

const SPEC = {
  format: 'WebP (.webp)',
  pixels: '1024 × 1024 px (square)',
  size: '150–300 KB (hard limit 400 KB)',
};

function find(dir, id) {
  for (const ext of ['webp', 'png', 'jpg', 'jpeg']) {
    const file = path.join(ROOT, dir, `${id}.${ext}`);
    if (fs.existsSync(file)) return { file, ext, kb: Math.round(fs.statSync(file).size / 1024) };
  }
  return null;
}
const promptTemplate = (name) => fs.readFileSync(path.join(ROOT, 'art/prompts', `${name}.md`), 'utf8').trim();

function guide({ title, intro, template, dir, noun, rows, extraColumns, listColumns }) {
  const found = rows.map((r) => ({ ...r, hit: find(dir, r.id) }));
  const todo = found.filter((r) => !r.hit);
  const out = [];
  out.push(`# ${title}`, '');
  out.push('> Generated file: it is rebuilt automatically (`pnpm art:build`, which `pnpm dev` and `pnpm build` run). Do not edit it by hand.', '');
  out.push(`**${found.length - todo.length} of ${found.length} ${noun} pictures are created. ${todo.length} still to create.**`, '');
  out.push(intro, '');
  out.push('## What every picture must be', '');
  out.push('| | |', '|---|---|', `| File format | ${SPEC.format} |`, `| Pixel size | ${SPEC.pixels} |`, `| Target file size | ${SPEC.size} |`, `| Saved in | \`tangled-taste/${dir}/\` |`, '| File name | the item\'s permanent ID plus `.webp` (see the "Expected file name" column) |', '');
  out.push('### Prompt template', '', 'Use this for every item, filling the `{{…}}` placeholders from the item\'s row (details under each list). Leave `{{extra}}` empty unless told otherwise.', '', '```text', template, '```', '');
  out.push(`## Still to create (${todo.length})`, '');
  if (todo.length) {
    out.push(`| ${listColumns.map((c) => c.head).join(' | ')} | Expected file name |`, `|${listColumns.map(() => '---').join('|')}|---|`);
    for (const r of todo) out.push(`| ${listColumns.map((c) => esc(c.get(r))).join(' | ')} | \`${r.id}.webp\` |`);
  } else out.push('Nothing: every picture exists.');
  out.push('', `## All ${noun}s`, '');
  out.push(`| Status | ID | ${extraColumns.map((c) => c.head).join(' | ')} | Expected file name | Format | Pixel size | Target file size | Current size |`, `|---|---|${extraColumns.map(() => '---').join('|')}|---|---|---|---|---|`);
  for (const r of found) {
    const note = r.hit && r.hit.ext !== 'webp' ? ` (found as .${r.hit.ext}; convert to .webp)` : '';
    out.push(`| ${r.hit ? DONE : TODO} | ${r.id} | ${extraColumns.map((c) => esc(c.get(r))).join(' | ')} | \`${r.id}.webp\` | WebP | 1024 × 1024 px | 150–300 KB | ${r.hit ? `${r.hit.kb} KB${note}` : '—'} |`);
  }
  out.push('');
  return out.join('\n');
}

const dishRows = DISHES.map((d) => ({ id: d.uid, name: d.name, cuisine: d.cuisine, note: d.note, ingredients: d.ingredients.slice(0, 8).join(', ') }));
fs.mkdirSync(DOCS, { recursive: true });
fs.writeFileSync(path.join(DOCS, 'dish-images.md'), guide({
  title: 'Dish image reference guide',
  intro: 'One picture per dish. Placeholders in the prompt template: `{{name}}` = Dish, `{{cuisine}}` = Cuisine, `{{note}}` = Description, `{{ingredients}}` = Key ingredients (listed in the "Still to create" table). Every picture is a single dish centered on a pure white background with a clear margin; see the template.',
  template: promptTemplate('dish'), dir: 'art/dishes', noun: 'dish', rows: dishRows,
  extraColumns: [{ head: 'Dish', get: (r) => r.name }, { head: 'Cuisine', get: (r) => r.cuisine }, { head: 'Description', get: (r) => r.note }],
  listColumns: [{ head: 'ID', get: (r) => r.id }, { head: 'Dish', get: (r) => r.name }, { head: 'Cuisine', get: (r) => r.cuisine }, { head: 'Description', get: (r) => r.note }, { head: 'Key ingredients', get: (r) => r.ingredients }],
}));

const used = new Map();
for (const d of DISHES) for (const nm of new Set(d.ingredients)) used.set(nm, (used.get(nm) || 0) + 1);
const ingredientRows = Object.keys(INGREDIENT_CATEGORY).map((nm) => ({ id: INGREDIENT_IDS[nm], name: nm, family: CATEGORIES[INGREDIENT_CATEGORY[nm]].label, note: INGREDIENT_NOTES[nm] || '', used: used.get(nm) || 0 }))
  .sort((a, b) => a.id.localeCompare(b.id));
fs.writeFileSync(path.join(DOCS, 'ingredient-images.md'), guide({
  title: 'Ingredient image reference guide',
  intro: 'One picture per ingredient. Placeholders in the prompt template: `{{name}}` = Ingredient, `{{category}}` = Family (lower case), `{{description}}` = Description. Ingredients have no cuisine; the Family column says what kind of ingredient it is. Pictures are shown small on the site, so keep the subject simple and bold.',
  template: promptTemplate('ingredient'), dir: 'art/ingredients', noun: 'ingredient', rows: ingredientRows,
  extraColumns: [{ head: 'Ingredient', get: (r) => r.name }, { head: 'Family', get: (r) => r.family }, { head: 'Description', get: (r) => r.note }, { head: 'Used in', get: (r) => `${r.used} dishes` }],
  listColumns: [{ head: 'ID', get: (r) => r.id }, { head: 'Ingredient', get: (r) => r.name }, { head: 'Family', get: (r) => r.family }, { head: 'Description', get: (r) => r.note }],
}));
const total = (rows, dir) => rows.filter((r) => find(dir, r.id)).length;
console.log(`image guides: ${total(dishRows, 'art/dishes')}/${dishRows.length} dishes, ${total(ingredientRows, 'art/ingredients')}/${ingredientRows.length} ingredients created`);
