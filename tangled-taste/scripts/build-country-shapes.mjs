// Builds src/data/countryShapes.js: one small, simplified outline per cuisine's country.
//
//   node scripts/build-country-shapes.mjs path/to/ne_50m_admin_0_countries.geojson
//
// Source: Natural Earth admin-0 countries (public domain, https://www.naturalearthdata.com).
// Each country is projected (Lambert azimuthal equal-area, centred on itself) so it keeps its
// familiar shape, fitted into a [-1, 1] box with north up, and simplified.
import fs from 'node:fs';
import { CUISINES } from '../src/data.js';

const US = 'United States of America';
// cuisine -> country, optionally limited to a lng/lat box [west, south, east, north]
// (to leave out far-flung territories such as French Guiana or Alaska)
const COUNTRY = {
  Italian: 'Italy', French: ['France', [-5.5, 41, 10, 51.5]], Spanish: ['Spain', [-10, 35, 5, 44]], Greek: 'Greece',
  Mexican: 'Mexico', American: [US, [-125, 24, -66, 50]], Peruvian: 'Peru', Brazilian: 'Brazil', Japanese: 'Japan',
  Chinese: 'China', Korean: 'South Korea', Thai: 'Thailand', Vietnamese: 'Vietnam', Indian: 'India', Levantine: 'Lebanon',
  Moroccan: 'Morocco', Ethiopian: 'Ethiopia', Turkish: 'Turkey', Persian: 'Iran', Indonesian: 'Indonesia',
  Filipino: 'Philippines', Jamaican: 'Jamaica', 'West African': 'Nigeria', Argentine: ['Argentina', [-75, -56, -53, -21]],
  German: 'Germany', Hungarian: 'Hungary', British: 'United Kingdom', Russian: ['Russia', [19, 41, 180, 82]],
  Swedish: 'Sweden', Polish: 'Poland', Portuguese: ['Portugal', [-10, 36, -6, 42.5]], Cuban: 'Cuba', Malaysian: 'Malaysia',
  Georgian: 'Georgia', 'Sri Lankan': 'Sri Lanka', Colombian: 'Colombia', Hawaiian: [US, [-161, 18.5, -154, 22.5]],
  Egyptian: 'Egypt', Irish: 'Ireland', Uzbek: 'Uzbekistan', Burmese: 'Myanmar', Nepali: 'Nepal', 'South African': 'South Africa',
  Canadian: 'Canada', Chilean: ['Chile', [-76, -56, -66, -17]], Ukrainian: 'Ukraine', Czech: 'Czechia', Austrian: 'Austria',
  Swiss: 'Switzerland', Dutch: ['Netherlands', [3, 50.5, 7.5, 53.8]], Belgian: 'Belgium', Norwegian: ['Norway', [4, 57, 32, 72]],
  Finnish: 'Finland', Singaporean: 'Singapore', Cambodian: 'Cambodia', Taiwanese: 'Taiwan', Pakistani: 'Pakistan',
  Australian: ['Australia', [112, -44, 154, -10]], Israeli: 'Israel', Tunisian: 'Tunisia', Senegalese: 'Senegal', Kenyan: 'Kenya',
  Armenian: 'Armenia', Venezuelan: 'Venezuela', 'Puerto Rican': 'Puerto Rico',
  Danish: ['Denmark', [8, 54.5, 15.3, 57.8]], Romanian: 'Romania', Croatian: 'Croatia', Icelandic: 'Iceland',
  Ecuadorian: ['Ecuador', [-82, -5.1, -75, 1.6]], Haitian: 'Haiti', Trinidadian: 'Trinidad and Tobago', Bangladeshi: 'Bangladesh',
  Mongolian: 'Mongolia', Laotian: 'Laos', Afghan: 'Afghanistan', Ghanaian: 'Ghana', Algerian: 'Algeria', Iraqi: 'Iraq',
  Bolivian: 'Bolivia', Guatemalan: 'Guatemala', Salvadoran: 'El Salvador', Dominican: 'Dominican Republic', Uruguayan: 'Uruguay',
  Bulgarian: 'Bulgaria', Serbian: 'Republic of Serbia', Lithuanian: 'Lithuania', Kazakh: 'Kazakhstan', Yemeni: 'Yemen',
  Saudi: 'Saudi Arabia', Eritrean: 'Eritrea', Somali: 'Somalia', Tanzanian: 'United Republic of Tanzania',
  'New Zealander': ['New Zealand', [166, -48, 179, -34]],
};

const src = process.argv[2];
if (!src) throw new Error('usage: node scripts/build-country-shapes.mjs <ne_50m_admin_0_countries.geojson>');
const world = JSON.parse(fs.readFileSync(src, 'utf8'));
const byName = new Map(world.features.map((f) => [f.properties.ADMIN, f.geometry]));

const rad = Math.PI / 180;
const mean = (ring) => [ring.reduce((s, p) => s + p[0], 0) / ring.length, ring.reduce((s, p) => s + p[1], 0) / ring.length];
const polygons = (g) => (g.type === 'Polygon' ? [g.coordinates] : g.coordinates).map((p) => p[0]); // outer rings only

function simplify(pts, tol) {
  if (pts.length < 4) return pts;
  const [ax, ay] = pts[0], [bx, by] = pts[pts.length - 1];
  const len = Math.hypot(bx - ax, by - ay) || 1e-9;
  let worst = -1, at = 0;
  for (let i = 1; i < pts.length - 1; i++) {
    const d = Math.abs((by - ay) * pts[i][0] - (bx - ax) * pts[i][1] + bx * ay - by * ax) / len;
    if (d > worst) { worst = d; at = i; }
  }
  if (worst <= tol) return [pts[0], pts[pts.length - 1]];
  return [...simplify(pts.slice(0, at + 1), tol).slice(0, -1), ...simplify(pts.slice(at), tol)];
}
// A ring's first and last points coincide, so split it at the point farthest from the start first.
function simplifyRing(ring, tol) {
  const pts = ring.slice(0, -1);
  let far = 0, best = -1;
  pts.forEach((p, i) => { const d = Math.hypot(p[0] - pts[0][0], p[1] - pts[0][1]); if (d > best) { best = d; far = i; } });
  const a = simplify(pts.slice(0, far + 1), tol), b = simplify([...pts.slice(far), pts[0]], tol);
  return [...a.slice(0, -1), ...b.slice(0, -1)];
}
const area = (r) => Math.abs(r.reduce((s, p, i) => s + p[0] * r[(i + 1) % r.length][1] - r[(i + 1) % r.length][0] * p[1], 0)) / 2;

const out = {};
for (const cuisine of Object.keys(CUISINES)) {
  const [admin, box] = [].concat(COUNTRY[cuisine] || []);
  if (!admin) throw new Error(`no country mapped for ${cuisine}`);
  const geom = byName.get(admin);
  if (!geom) throw new Error(`${admin} not found`);
  let rings = polygons(geom);
  if (box) rings = rings.filter((r) => { const [x, y] = mean(r); return x >= box[0] && x <= box[2] && y >= box[1] && y <= box[3]; });
  // centre of the projection = middle of what we keep
  const xs = rings.flat().map((p) => p[0]), ys = rings.flat().map((p) => p[1]);
  const l0 = ((Math.min(...xs) + Math.max(...xs)) / 2) * rad, p0 = ((Math.min(...ys) + Math.max(...ys)) / 2) * rad;
  const project = ([lng, lat]) => {
    const l = lng * rad, p = lat * rad;
    const k = Math.sqrt(2 / (1 + Math.sin(p0) * Math.sin(p) + Math.cos(p0) * Math.cos(p) * Math.cos(l - l0)));
    return [k * Math.cos(p) * Math.sin(l - l0), k * (Math.cos(p0) * Math.sin(p) - Math.sin(p0) * Math.cos(p) * Math.cos(l - l0))];
  };
  let flat = rings.map((r) => r.map(project));
  // fit into [-1, 1], north up
  const px = flat.flat().map((p) => p[0]), py = flat.flat().map((p) => p[1]);
  const cx = (Math.min(...px) + Math.max(...px)) / 2, cy = (Math.min(...py) + Math.max(...py)) / 2;
  const span = Math.max(Math.max(...px) - Math.min(...px), Math.max(...py) - Math.min(...py)) / 2;
  flat = flat.map((r) => r.map(([x, y]) => [(x - cx) / span, -(y - cy) / span]));
  // drop specks, keep the main shapes
  const total = flat.reduce((s, r) => s + area(r), 0);
  flat = flat.filter((r) => area(r) / total >= 0.004 || flat.length === 1).sort((a, b) => area(b) - area(a)).slice(0, 14);
  out[cuisine] = flat
    .map((r) => simplifyRing(r, 0.011))
    .filter((r) => r.length >= 3)
    .map((r) => r.map(([x, y]) => [Math.round(x * 1000) / 1000, Math.round(y * 1000) / 1000]));
}

const body = Object.entries(out).map(([k, polys]) => `  ${JSON.stringify(k)}: ${JSON.stringify(polys)},`).join('\n');
fs.writeFileSync(new URL('../src/data/countryShapes.js', import.meta.url),
  `// Generated by scripts/build-country-shapes.mjs from Natural Earth (public domain).\n// One entry per cuisine: the outline(s) of its country, fitted into [-1, 1], north up.\nexport default {\n${body}\n};\n`);
const kb = Math.round(fs.statSync(new URL('../src/data/countryShapes.js', import.meta.url)).size / 1024);
console.log(`wrote ${Object.keys(out).length} shapes, ${kb} KB, ${Object.values(out).reduce((s, p) => s + p.flat().length, 0)} points`);
