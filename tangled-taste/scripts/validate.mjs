// Sanity checks for the curated dataset. Run with `pnpm validate`.
// Hard problems fail the run; "goals" only warn unless --strict is passed.
import { CATEGORIES, CUISINES, DISH_TYPES, DISHES, INGREDIENTS, INGREDIENT_CATEGORY } from '../src/data.js';
import { hasIllustration } from '../src/illustrations.js';

const strict = process.argv.includes('--strict');
const MIN_DISHES_PER_CUISINE = 6;
const MIN_DISHES_PER_INGREDIENT = 3;
const errors = [];
const goals = [];
const err = (m) => errors.push(m);
const goal = (m) => goals.push(m);

// ---- structure
for (const [cat, names] of Object.entries(INGREDIENTS)) {
  if (!CATEGORIES[cat]) err(`ingredients: unknown family "${cat}"`);
  if (!names.length) err(`ingredients: family "${cat}" is empty`);
}
const seen = new Map();
for (const [cat, names] of Object.entries(INGREDIENTS)) {
  for (const n of names) {
    if (seen.has(n)) err(`ingredient "${n}" listed in both ${seen.get(n)} and ${cat}`);
    seen.set(n, cat);
    if (n !== n.trim() || n !== n.toLowerCase()) err(`ingredient "${n}" should be trimmed lowercase`);
    if (!hasIllustration(n)) err(`ingredient "${n}" has no illustration in src/illustrations.js`);
  }
}
for (const c of Object.keys(CATEGORIES)) if (!INGREDIENTS[c]) err(`family "${c}" has no ingredients`);

for (const [name, c] of Object.entries(CUISINES)) {
  if (!(c.lat >= -90 && c.lat <= 90 && c.lng >= -180 && c.lng <= 180)) err(`cuisine ${name}: bad coordinates`);
  if (!/^#[0-9a-f]{6}$/i.test(c.color)) err(`cuisine ${name}: bad colour ${c.color}`);
  if (!c.country || !c.region) err(`cuisine ${name}: missing country or region`);
}

// ---- near-duplicate ingredient names (typos, plurals, spacing)
const squash = (s) => s.replace(/[\s'’-]+/g, '').replace(/(ies)$/, 'y').replace(/(es|s)$/, '');
const lev = (a, b) => {
  const d = Array.from({ length: a.length + 1 }, (_, i) => [i, ...Array(b.length).fill(0)]);
  for (let j = 1; j <= b.length; j++) d[0][j] = j;
  for (let i = 1; i <= a.length; i++) for (let j = 1; j <= b.length; j++) d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
  return d[a.length][b.length];
};
const ingredientNames = [...seen.keys()];
for (let i = 0; i < ingredientNames.length; i++) {
  for (let j = i + 1; j < ingredientNames.length; j++) {
    const a = squash(ingredientNames[i]), b = squash(ingredientNames[j]);
    if (a === b || (Math.min(a.length, b.length) > 5 && lev(a, b) <= 1)) err(`ingredients "${ingredientNames[i]}" and "${ingredientNames[j]}" look like duplicates`);
  }
}

// ---- dishes
const names = new Set();
const dishCount = {};
const used = {};
for (const d of DISHES) {
  const where = `dish "${d.name}"`;
  if (names.has(d.name.toLowerCase())) err(`${where}: duplicate name`);
  names.add(d.name.toLowerCase());
  if (!CUISINES[d.cuisine]) err(`${where}: unknown cuisine "${d.cuisine}"`);
  if (!DISH_TYPES[d.type]) err(`${where}: unknown type "${d.type}"`);
  if (!Number.isInteger(d.popularity) || d.popularity < 0 || d.popularity > 100) err(`${where}: popularity ${d.popularity} is not an integer 0-100`);
  if (!d.note || d.note.length < 12) err(`${where}: missing note`);
  if (d.ingredients.length < 2) err(`${where}: needs at least 2 ingredients`);
  if (d.ingredients.length > 16) goal(`${where}: ${d.ingredients.length} ingredients is a lot`);
  if (new Set(d.ingredients).size !== d.ingredients.length) err(`${where}: repeats an ingredient`);
  for (const i of d.ingredients) {
    if (!INGREDIENT_CATEGORY[i]) err(`${where}: unknown ingredient "${i}"`);
    used[i] = (used[i] || 0) + 1;
  }
  dishCount[d.cuisine] = (dishCount[d.cuisine] || 0) + 1;
}
for (const i of ingredientNames) if (!used[i]) err(`ingredient "${i}" is not used by any dish`);
for (const c of Object.keys(CUISINES)) if (!dishCount[c]) err(`cuisine "${c}" has no dishes`);

// ---- goals
for (const [c, n] of Object.entries(dishCount)) if (n < MIN_DISHES_PER_CUISINE) goal(`cuisine ${c} has ${n} dishes (goal ${MIN_DISHES_PER_CUISINE}+)`);
for (const [i, n] of Object.entries(used)) if (n < MIN_DISHES_PER_INGREDIENT) goal(`ingredient "${i}" is used by ${n} dish${n > 1 ? 'es' : ''} (goal ${MIN_DISHES_PER_INGREDIENT}+)`);

const fail = errors.length > 0 || (strict && goals.length > 0);
console.log(`${DISHES.length} dishes · ${Object.keys(CUISINES).length} cuisines · ${ingredientNames.length} ingredients`);
if (errors.length) console.log(`\n${errors.length} error${errors.length > 1 ? 's' : ''}:\n` + errors.map((e) => '  ✗ ' + e).join('\n'));
if (goals.length) console.log(`\n${goals.length} goal${goals.length > 1 ? 's' : ''} not yet met${strict ? ' (strict)' : ''}:\n` + goals.slice(0, 40).map((e) => '  · ' + e).join('\n') + (goals.length > 40 ? `\n  … and ${goals.length - 40} more` : ''));
if (!fail) console.log('\n✓ dataset is valid');
process.exit(fail ? 1 : 0);
