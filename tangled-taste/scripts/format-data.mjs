// Re-groups the dish files by cuisine (in the order of src/data/cuisines.js) and
// normalises their formatting. Append new dishes to any dish file, then run
// `pnpm format:data` to tidy up.
import fs from 'node:fs';
import { CUISINES, DISHES } from '../src/data.js';

const FILES = {
  europe: ['Southern Europe', 'Western Europe', 'Central Europe', 'Northern Europe', 'Eastern Europe', 'Caucasus'],
  americas: ['North America', 'South America', 'Caribbean'],
  'asia-pacific': ['East Asia', 'Southeast Asia', 'South Asia', 'Central Asia', 'Pacific'],
  'africa-middle-east': ['Middle East', 'North Africa', 'East Africa', 'West Africa', 'Southern Africa'],
};
const q = (s) => "'" + String(s).replace(/\\/g, '\\\\').replace(/'/g, "\\'") + "'";
const total = {};
for (const [file, regions] of Object.entries(FILES)) {
  let body = '';
  for (const [cuisine, info] of Object.entries(CUISINES)) {
    if (!regions.includes(info.region)) continue;
    const ds = DISHES.filter((d) => d.cuisine === cuisine);
    if (!ds.length) continue;
    body += `\n  // ${cuisine}\n` + ds.map((d) => `  [${q(d.name)}, ${q(d.cuisine)}, ${d.popularity}, ${q(d.ingredients.join(', '))}, ${q(d.note)}, ${q(d.type)}],`).join('\n') + '\n';
    total[file] = (total[file] || 0) + ds.length;
  }
  fs.writeFileSync(new URL(`../src/data/dishes/${file}.js`, import.meta.url), '// [dish, cuisine, popularity 0-100, ingredients, note, type]\nexport default [' + body + '];\n');
}
const sum = Object.values(total).reduce((a, b) => a + b, 0);
if (sum !== DISHES.length) throw new Error(`dishes lost while formatting: ${sum} of ${DISHES.length} (is a cuisine in a region with no file?)`);
console.log('formatted', total, 'total', sum);
