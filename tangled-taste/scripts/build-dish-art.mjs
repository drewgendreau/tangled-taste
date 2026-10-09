// Turns the pictures in art/dishes/ and art/ingredients/ into what the site loads.
//
//   art/dishes/TT-0001.webp   (any square-ish webp/png/jpg; the name is the permanent dish ID)
//     -> public/dish-art/previews/TT-0001.<hash>.webp   1024 px cutout, shown in the dish panel
//     -> public/dish-art/thumbs-<n>.<hash>.webp         192 px cutouts packed into 2048 px sheets (map + lists)
//     -> public/dish-art/manifest.json                  what the app reads
//   art/ingredients/olive-oil.webp   (the name is the ingredient's name, lower case, spaces as hyphens)
//     -> public/ingredient-art/thumbs-<n>.<hash>.webp + manifest.json   (thumbnails only)
//
// To change a picture: replace its file (same name). To add one: drop in a new file.
// This runs automatically before `pnpm dev` and `pnpm build`; unchanged images are skipped (cache in .cache/dish-art).
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import crypto from 'node:crypto';
import sharp from 'sharp';
import { DISHES, INGREDIENT_CATEGORY, ingredientSlug } from '../src/data.js';

const ROOT = fileURLToPath(new URL('..', import.meta.url));
const CACHE = path.join(ROOT, '.cache/dish-art');
// any change to this script re-renders everything (the cache key includes the script itself)
const PIPELINE_VERSION = crypto.createHash('sha256').update(fs.readFileSync(fileURLToPath(import.meta.url))).digest('hex').slice(0, 10);

const PREVIEW = 1024; // preview size in px
const CELL = 192; // thumbnail size in px
const GUTTER = 2; // empty px around each thumbnail in a sheet
const STRIDE = CELL + GUTTER * 2;
const SHEET = 2048;
const COLS = Math.floor(SHEET / STRIDE);
const PER_SHEET = COLS * COLS;
const FILL = 0.84; // the dish fills this share of the square, so every dish has the same visual weight

const sha = (buf, n = 8) => crypto.createHash('sha256').update(buf).digest('hex').slice(0, n);
fs.mkdirSync(CACHE, { recursive: true });

// ---------------------------------------------------------------- cutout
// The supplied images have a white (or very light grey) background. Everything connected to the border that is
// light, neutral and smooth counts as background; a soft contact shadow stays as semi-transparent shadow.
async function cutout(input) {
  const { data, info } = await sharp(input).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const W = info.width, H = info.height, N = W * H;
  const mn = new Uint8Array(N), sat = new Uint8Array(N), lum = new Uint8Array(N);
  for (let i = 0; i < N; i++) {
    const r = data[i * 4], g = data[i * 4 + 1], b = data[i * 4 + 2];
    const lo = Math.min(r, g, b), hi = Math.max(r, g, b);
    mn[i] = lo; sat[i] = hi - lo; lum[i] = (r * 0.3 + g * 0.59 + b * 0.11) | 0;
  }
  const eligible = (i) => {
    if (sat[i] > 20 || mn[i] < 190) return false;
    const x = i % W, y = (i / W) | 0;
    const gx = x + 1 < W ? Math.abs(lum[i] - lum[i + 1]) : 0, gy = y + 1 < H ? Math.abs(lum[i] - lum[i + W]) : 0;
    return gx <= 5 && gy <= 5; // soft areas only: outlines and rims are sharp
  };
  const bg = new Uint8Array(N);
  const queue = new Uint32Array(N);
  let head = 0, tail = 0;
  const push = (i) => { if (!bg[i] && eligible(i)) { bg[i] = 1; queue[tail++] = i; } };
  for (let x = 0; x < W; x++) { push(x); push((H - 1) * W + x); }
  for (let y = 0; y < H; y++) { push(y * W); push(y * W + W - 1); }
  while (head < tail) {
    const i = queue[head++], x = i % W;
    if (x > 0) push(i - 1);
    if (x < W - 1) push(i + 1);
    if (i >= W) push(i - W);
    if (i < N - W) push(i + W);
  }
  // light fringe left by anti-aliasing around the dish: absorb up to 2 px of light pixels into the background
  for (let pass = 0; pass < 2; pass++) {
    const add = [];
    for (let i = 0; i < N; i++) {
      if (bg[i] || mn[i] < 205 || sat[i] > 40) continue;
      const x = i % W;
      if ((x > 0 && bg[i - 1]) || (x < W - 1 && bg[i + 1]) || (i >= W && bg[i - W]) || (i < N - W && bg[i + W])) add.push(i);
    }
    for (const i of add) bg[i] = 1;
  }
  // dish mask, eroded by one pixel and softened
  const mask = Buffer.alloc(N);
  for (let i = 0; i < N; i++) {
    if (bg[i]) continue;
    const x = i % W;
    const edge = (x > 0 && bg[i - 1]) || (x < W - 1 && bg[i + 1]) || (i >= W && bg[i - W]) || (i < N - W && bg[i + W]);
    mask[i] = edge ? 90 : 255;
  }
  const blurred = await sharp(mask, { raw: { width: W, height: H, channels: 1 } }).blur(1.1).extractChannel(0).raw().toBuffer({ resolveWithObject: true });
  const soft = blurred.data, sc = blurred.info.channels;
  const out = Buffer.alloc(N * 4);
  for (let i = 0; i < N; i++) {
    const m = soft[i * sc];
    let a = m, r = data[i * 4], g = data[i * 4 + 1], b = data[i * 4 + 2];
    if (bg[i] || m < 128) {
      // background pixel: only a faint warm shadow where the image was darker than paper white
      const s = mn[i] < 232 ? Math.min(1, (232 - mn[i]) / 46) * 0.5 : 0; // ignores the faint grey vignettes some pictures have
      const sa = Math.round(s * 255);
      if (sa > a) { a = sa; r = 72; g = 56; b = 44; }
    }
    out[i * 4] = r; out[i * 4 + 1] = g; out[i * 4 + 2] = b; out[i * 4 + 3] = a;
  }
  return { data: out, width: W, height: H };
}

// trim to the dish and re-centre it on a transparent square so all dishes share the same margins
async function normalise({ data, width, height }) {
  const raw = sharp(data, { raw: { width, height, channels: 4 } });
  let x0 = width, y0 = height, x1 = 0, y1 = 0;
  for (let y = 0; y < height; y++) for (let x = 0; x < width; x++) {
    if (data[(y * width + x) * 4 + 3] > 60) { if (x < x0) x0 = x; if (x > x1) x1 = x; if (y < y0) y0 = y; if (y > y1) y1 = y; }
  }
  const w = x1 - x0 + 1, h = y1 - y0 + 1;
  const box = Math.round(PREVIEW * FILL);
  const k = Math.min(box / w, box / h);
  const tw = Math.max(1, Math.round(w * k)), th = Math.max(1, Math.round(h * k));
  const crop = await raw.extract({ left: x0, top: y0, width: w, height: h }).resize(tw, th, { kernel: 'lanczos3' }).png().toBuffer();
  const canvas = await sharp({ create: { width: PREVIEW, height: PREVIEW, channels: 4, background: { r: 0, g: 0, b: 0, alpha: 0 } } })
    .composite([{ input: crop, left: Math.round((PREVIEW - tw) / 2), top: Math.round((PREVIEW - th) / 2) }])
    .png().toBuffer();
  const touches = x0 < 4 || y0 < 4 || x1 > width - 5 || y1 > height - 5;
  return { canvas, touches };
}

// ---------------------------------------------------------------- run
const problems = [];
const ingredientNames = Object.keys(INGREDIENT_CATEGORY);
const ingredientCount = new Map();
for (const d of DISHES) for (const nm of new Set(d.ingredients)) ingredientCount.set(nm, (ingredientCount.get(nm) || 0) + 1);

const SETS = [
  {
    label: 'dish art', src: 'art/dishes', out: 'public/dish-art', previews: true,
    pattern: /^(TT-\d{4})\.(webp|png|jpe?g)$/i,
    lookup: new Map(DISHES.map((d) => [d.uid, { weight: d.popularity }])),
    unknown: (id) => `no dish has the ID ${id}`,
  },
  {
    label: 'ingredient art', src: 'art/ingredients', out: 'public/ingredient-art', previews: false,
    pattern: /^([a-z0-9][a-z0-9-]*)\.(webp|png|jpe?g)$/,
    lookup: new Map(ingredientNames.map((nm) => [ingredientSlug(nm), { weight: ingredientCount.get(nm) || 0 }])),
    unknown: (id) => `no ingredient is called "${id.replace(/-/g, ' ')}"`,
  },
];

async function buildSet(cfg) {
  const SRC = path.join(ROOT, cfg.src), OUT = path.join(ROOT, cfg.out);
  fs.mkdirSync(path.join(OUT, 'previews'), { recursive: true });
  fs.mkdirSync(SRC, { recursive: true });
  const files = fs.readdirSync(SRC).filter((f) => cfg.pattern.test(f)).sort();
  const items = [];
  for (const f of files) {
    const id = f.match(cfg.pattern)[1];
    const entry = cfg.lookup.get(id);
    if (!entry) { problems.push(`${cfg.src}/${f}: ${cfg.unknown(id)}`); continue; }
    const source = fs.readFileSync(path.join(SRC, f));
    const key = sha(Buffer.concat([source, Buffer.from(PIPELINE_VERSION)]), 12);
    const cached = path.join(CACHE, `${id}.${key}.json`);
    let rec;
    if (fs.existsSync(cached) && fs.existsSync(path.join(CACHE, `${id}.${key}.preview.webp`))) rec = JSON.parse(fs.readFileSync(cached, 'utf8'));
    else {
      const meta = await sharp(source).metadata();
      if (Math.abs(meta.width - meta.height) > Math.min(meta.width, meta.height) * 0.1) problems.push(`${cfg.src}/${f}: not square (${meta.width}x${meta.height}); it will still be used`);
      if (Math.min(meta.width, meta.height) < 512) problems.push(`${cfg.src}/${f}: small (${meta.width}x${meta.height}); 1024 px is recommended`);
      const { canvas, touches } = await normalise(await cutout(source));
      const preview = await sharp(canvas).webp({ quality: 86, alphaQuality: 90, effort: 5 }).toBuffer();
      const thumb = await sharp(canvas).resize(CELL, CELL, { kernel: 'lanczos3' }).png().toBuffer();
      fs.writeFileSync(path.join(CACHE, `${id}.${key}.preview.webp`), preview);
      fs.writeFileSync(path.join(CACHE, `${id}.${key}.thumb.png`), thumb);
      rec = { id, key, touches, previewHash: sha(preview) };
      fs.writeFileSync(cached, JSON.stringify(rec));
    }
    if (rec.touches) problems.push(`${cfg.src}/${f}: the picture runs to the edge; leave a margin if you can`);
    items.push({ ...rec, id, weight: entry.weight });
  }
  items.sort((a, b) => b.weight - a.weight || a.id.localeCompare(b.id));

  const manifest = { version: 1, thumbs: { cell: CELL, gutter: GUTTER, stride: STRIDE, size: SHEET, columns: COLS, sheets: [] }, previews: {} };
  for (const f of fs.readdirSync(path.join(OUT, 'previews'))) fs.unlinkSync(path.join(OUT, 'previews', f));
  for (const f of fs.readdirSync(OUT)) if (/^thumbs-/.test(f)) fs.unlinkSync(path.join(OUT, f));
  for (const it of items) {
    // ingredient pictures are only shown small, so they have a thumbnail but no large preview
    const name = `previews/${it.id}.${it.previewHash}.webp`;
    if (cfg.previews) fs.copyFileSync(path.join(CACHE, `${it.id}.${it.key}.preview.webp`), path.join(OUT, name));
    manifest.previews[it.id] = cfg.previews ? name : true;
  }
  // thumbnail sheets, most popular first
  for (let s = 0; s * PER_SHEET < items.length; s++) {
    const group = items.slice(s * PER_SHEET, (s + 1) * PER_SHEET);
    const composites = group.map((it, i) => ({
      input: path.join(CACHE, `${it.id}.${it.key}.thumb.png`),
      left: (i % COLS) * STRIDE + GUTTER,
      top: Math.floor(i / COLS) * STRIDE + GUTTER,
    }));
    const rows = Math.ceil(group.length / COLS);
    const sheet = await sharp({ create: { width: SHEET, height: rows * STRIDE, channels: 4, background: { r: 0, g: 0, b: 0, alpha: 0 } } })
      .composite(composites).webp({ quality: 85, alphaQuality: 90, effort: 5 }).toBuffer();
    const file = `thumbs-${s}.${sha(sheet)}.webp`;
    fs.writeFileSync(path.join(OUT, file), sheet);
    manifest.thumbs.sheets.push({ file, width: SHEET, height: rows * STRIDE, items: Object.fromEntries(group.map((it, i) => [it.id, [i % COLS, Math.floor(i / COLS)]])) });
  }
  fs.writeFileSync(path.join(OUT, 'manifest.json'), JSON.stringify(manifest));
  const bytes = fs.readdirSync(OUT, { recursive: true }).reduce((n, f) => { const p = path.join(OUT, f); return n + (fs.statSync(p).isFile() ? fs.statSync(p).size : 0); }, 0);
  console.log(`${cfg.label}: ${items.length} images, ${manifest.thumbs.sheets.length} sheet(s), ${(bytes / 1e6).toFixed(1)} MB`);
}

for (const cfg of SETS) await buildSet(cfg);
for (const p of problems) console.warn(`  note: ${p}`);
