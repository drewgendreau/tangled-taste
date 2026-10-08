// Watercolor illustrations of every ingredient, painted procedurally on canvas.
// Each drawing is composed from simple shapes that are rendered with a
// watercolor treatment: a light first wash, wandering glazes, soft form shading,
// wet-in-wet blotches, granulation, pigment pooling at the edges, a crisp
// highlight and a loose ink liner.

export const SIZE = 256;
const TAU = Math.PI * 2;
const INK = '#3b2a20';
let ctx, rand;

function mulberry32(seed) {
  return function () {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
const R = (a = 1) => (rand() - 0.5) * 2 * a;
const hash = (s) => [...s].reduce((h, c) => (Math.imul(h, 31) + c.charCodeAt(0)) | 0, 7);

// ---------------------------------------------------------------- colour
function rgb(hex) {
  const n = parseInt(hex.slice(1), 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}
const rgba = ([r, g, b], a) => `rgba(${r | 0},${g | 0},${b | 0},${a})`;
const tone = ([r, g, b], f) => (f < 0 ? [r * (1 + f), g * (1 + f), b * (1 + f)] : [r + (255 - r) * f, g + (255 - g) * f, b + (255 - b) * f]);

// ---------------------------------------------------------------- geometry
function E(cx, cy, rx, ry, rot = 0, wob = 0.03, n = 48) {
  const h = [[2, R(wob), rand() * TAU], [3, R(wob * 0.7), rand() * TAU], [5, R(wob * 0.4), rand() * TAU]];
  const c = Math.cos(rot), s = Math.sin(rot);
  const pts = [];
  for (let i = 0; i < n; i++) {
    const t = (i / n) * TAU;
    let r = 1;
    for (const [k, a, p] of h) r += a * Math.sin(k * t + p);
    const x = Math.cos(t) * rx * r, y = Math.sin(t) * ry * r;
    pts.push([cx + x * c - y * s, cy + x * s + y * c]);
  }
  return pts;
}
function arc(cx, cy, rx, ry, a0, a1, n = 24) {
  const pts = [];
  for (let i = 0; i <= n; i++) {
    const t = a0 + ((a1 - a0) * i) / n;
    pts.push([cx + Math.cos(t) * rx, cy + Math.sin(t) * ry]);
  }
  return pts;
}
function rotate(pts, cx, cy, ang) {
  const c = Math.cos(ang), s = Math.sin(ang);
  return pts.map(([x, y]) => [cx + (x - cx) * c - (y - cy) * s, cy + (x - cx) * s + (y - cy) * c]);
}
function densify(pts, step = 6, closed = true) {
  const out = [];
  const n = pts.length;
  for (let i = 0; i < (closed ? n : n - 1); i++) {
    const [x0, y0] = pts[i], [x1, y1] = pts[(i + 1) % n];
    const k = Math.max(1, Math.ceil(Math.hypot(x1 - x0, y1 - y0) / step));
    for (let j = 0; j < k; j++) out.push([x0 + ((x1 - x0) * j) / k, y0 + ((y1 - y0) * j) / k]);
  }
  if (!closed) out.push(pts[n - 1]);
  return out;
}
const poly = (pts) => densify(pts, 5);
function rrect(x, y, w, h, r, ang = 0) {
  const pts = [];
  const corners = [[x + w - r, y + r, -Math.PI / 2], [x + w - r, y + h - r, 0], [x + r, y + h - r, Math.PI / 2], [x + r, y + r, Math.PI]];
  for (const [cx, cy, a0] of corners) for (let i = 0; i <= 5; i++) {
    const t = a0 + (i / 5) * (Math.PI / 2);
    pts.push([cx + Math.cos(t) * r, cy + Math.sin(t) * r]);
  }
  const d = densify(pts, 6);
  return ang ? rotate(d, x + w / 2, y + h / 2, ang) : d;
}
// tapered band along a quadratic curve
function band(p0, p1, p2, w0, w1, n = 28, prof = (t) => 1) {
  const L = [], Rr = [];
  for (let i = 0; i <= n; i++) {
    const t = i / n, u = 1 - t;
    const x = u * u * p0[0] + 2 * u * t * p1[0] + t * t * p2[0];
    const y = u * u * p0[1] + 2 * u * t * p1[1] + t * t * p2[1];
    const dx = 2 * u * (p1[0] - p0[0]) + 2 * t * (p2[0] - p1[0]);
    const dy = 2 * u * (p1[1] - p0[1]) + 2 * t * (p2[1] - p1[1]);
    const len = Math.hypot(dx, dy) || 1;
    const w = (w0 + (w1 - w0) * t) * prof(t);
    L.push([x - (dy / len) * w, y + (dx / len) * w]);
    Rr.push([x + (dy / len) * w, y - (dx / len) * w]);
  }
  return L.concat(Rr.reverse());
}
function curve(p0, p1, p2, n = 20) {
  const pts = [];
  for (let i = 0; i <= n; i++) {
    const t = i / n, u = 1 - t;
    pts.push([u * u * p0[0] + 2 * u * t * p1[0] + t * t * p2[0], u * u * p0[1] + 2 * u * t * p1[1] + t * t * p2[1]]);
  }
  return pts;
}
// leaf with its base at (x,y), pointing along ang
function leaf(x, y, len, w, ang, o = {}) {
  const n = 18, a = [], b = [];
  for (let i = 0; i <= n; i++) {
    const t = i / n;
    let hw = w * Math.pow(Math.sin(Math.PI * Math.pow(t, o.skew || 0.75)), 0.85);
    if (o.serr) hw *= 1 + 0.13 * Math.abs(Math.sin(t * o.serr * Math.PI));
    a.push([t * len, hw]);
    b.push([t * len, -hw * (o.asym || 1)]);
  }
  const pts = a.concat(b.reverse());
  const c = Math.cos(ang), s = Math.sin(ang);
  return pts.map(([px, py]) => [x + px * c - py * s, y + px * s + py * c]);
}
// mirrored profile around cx: prof = [[dx, y], ...] from top to bottom
function sym(cx, prof) {
  const right = prof.map(([dx, y]) => [cx + dx, y]);
  const left = prof.map(([dx, y]) => [cx - dx, y]).reverse();
  return densify(right.concat(left), 5);
}
function bbox(pts) {
  let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
  for (const [x, y] of pts) {
    if (x < x0) x0 = x;
    if (y < y0) y0 = y;
    if (x > x1) x1 = x;
    if (y > y1) y1 = y;
  }
  return { x0, y0, x1, y1, w: x1 - x0, h: y1 - y0 };
}
function pathOf(pts, closed = true) {
  const p = new Path2D();
  const n = pts.length;
  if (!closed) {
    p.moveTo(pts[0][0], pts[0][1]);
    for (let i = 1; i < n - 1; i++) p.quadraticCurveTo(pts[i][0], pts[i][1], (pts[i][0] + pts[i + 1][0]) / 2, (pts[i][1] + pts[i + 1][1]) / 2);
    p.lineTo(pts[n - 1][0], pts[n - 1][1]);
    return p;
  }
  const mid = (i) => [(pts[i][0] + pts[(i + 1) % n][0]) / 2, (pts[i][1] + pts[(i + 1) % n][1]) / 2];
  const m0 = mid(0);
  p.moveTo(m0[0], m0[1]);
  for (let i = 1; i <= n; i++) {
    const [x, y] = pts[i % n];
    const m = mid(i % n);
    p.quadraticCurveTo(x, y, m[0], m[1]);
  }
  p.closePath();
  return p;
}
function wander(pts, a) {
  const f = 0.2 + rand() * 0.3, ph = rand() * TAU, ph2 = rand() * TAU;
  return pts.map(([x, y], i) => [x + Math.sin(i * f + ph) * a, y + Math.cos(i * f * 0.8 + ph2) * a]);
}

// ---------------------------------------------------------------- watercolor painting
function paint(pts, color, opts = {}) {
  const o = { shade: 0.5, light: 0.4, gloss: false, gran: true, liner: true, edge: 0.5, wash: 0.65, glaze: 2, blot: true, ...opts };
  const base = rgb(color);
  const p = pathOf(pts);
  const b = bbox(pts);
  const small = o.small || b.w * b.h < 500;
  ctx.save();
  ctx.fillStyle = rgba(tone(base, 0.22), o.wash);
  ctx.fill(p);
  if (!small) {
    for (let j = 0; j < o.glaze; j++) {
      ctx.fillStyle = rgba(base, 0.3);
      ctx.fill(pathOf(wander(pts, Math.max(1.2, Math.min(b.w, b.h) * 0.025))));
    }
  } else {
    ctx.fillStyle = rgba(base, 0.55);
    ctx.fill(p);
  }
  ctx.clip(p);
  // soft form shading from an upper-left window light
  const lx = b.x0 + b.w * (o.lx ?? 0.3), ly = b.y0 + b.h * (o.ly ?? 0.25);
  const rad = Math.hypot(b.w, b.h) * 0.85;
  const g = ctx.createRadialGradient(lx, ly, 0, lx, ly, rad);
  g.addColorStop(0, rgba(tone(base, 0.6), o.light));
  g.addColorStop(0.45, rgba(base, 0));
  g.addColorStop(1, rgba(tone(base, -0.5), o.shade));
  ctx.fillStyle = g;
  ctx.fillRect(b.x0 - 2, b.y0 - 2, b.w + 4, b.h + 4);
  if (!small && o.blot) {
    ctx.filter = `blur(${Math.max(2, b.w * 0.05)}px)`;
    for (let j = 0; j < 3; j++) {
      ctx.beginPath();
      ctx.arc(b.x0 + b.w * (0.35 + rand() * 0.6), b.y0 + b.h * (0.35 + rand() * 0.6), Math.min(b.w, b.h) * (0.12 + rand() * 0.15), 0, TAU);
      ctx.fillStyle = rgba(tone(base, -0.3), 0.16);
      ctx.fill();
    }
    ctx.filter = 'none';
  }
  if (o.gran && !small) {
    const count = Math.min(1600, (b.w * b.h) / 45);
    for (let i = 0; i < count; i++) {
      ctx.fillStyle = rgba(tone(base, -0.45), rand() * 0.2);
      ctx.fillRect(b.x0 + rand() * b.w, b.y0 + rand() * b.h, 0.8 + rand() * 1.4, 0.8 + rand() * 1.4);
    }
  }
  ctx.restore();
  // pigment pooled at the dried edge
  ctx.save();
  if (!small) ctx.filter = 'blur(0.6px)';
  ctx.strokeStyle = rgba(tone(base, -0.35), o.edge);
  ctx.lineWidth = Math.max(0.8, Math.min(2.6, Math.min(b.w, b.h) * 0.03));
  ctx.stroke(p);
  ctx.restore();
  if (o.liner && !small) {
    const n = pts.length;
    const start = Math.floor(rand() * n), len = Math.floor(n * (0.45 + rand() * 0.3));
    const seg = [];
    for (let i = 0; i < len; i++) {
      const [x, y] = pts[(start + i) % n];
      seg.push([x + 0.8, y - 0.6]);
    }
    ink(seg, { color: rgba(tone(base, -0.65), 1), a: 0.6, w: 1.3 });
  }
  if (o.gloss) {
    ctx.save();
    ctx.translate(lx - b.w * 0.04, ly);
    ctx.rotate(-0.6);
    ctx.beginPath();
    ctx.ellipse(0, 0, Math.max(1.5, b.w * 0.09), Math.max(1, b.h * 0.045), 0, 0, TAU);
    ctx.fillStyle = 'rgba(255,255,250,0.78)';
    ctx.fill();
    ctx.restore();
  }
}
function ink(pts, o = {}) {
  ctx.save();
  ctx.strokeStyle = o.color || INK;
  ctx.globalAlpha = o.a ?? 0.55;
  ctx.lineWidth = o.w ?? 1.3;
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  ctx.stroke(pathOf(pts, false));
  ctx.restore();
}
const line = (x0, y0, x1, y1, o) => ink([[x0, y0], [(x0 + x1) / 2 + R(1), (y0 + y1) / 2 + R(1)], [x1, y1]], o);
function dot(x, y, r, color, a = 0.7) {
  ctx.beginPath();
  ctx.arc(x, y, r, 0, TAU);
  ctx.fillStyle = rgba(rgb(color), a);
  ctx.fill();
}
function shadow(cx, cy, rx, ry) {
  ctx.save();
  ctx.filter = 'blur(6px)';
  ctx.beginPath();
  ctx.ellipse(cx, cy, rx, ry, 0, 0, TAU);
  ctx.fillStyle = 'rgba(110,80,55,0.18)';
  ctx.fill();
  ctx.restore();
}
function pile(n, cx, cy, w, h, item) {
  const ps = [];
  for (let i = 0; i < n; i++) {
    const dx = R(1);
    ps.push([cx + dx * w, cy - rand() * h * (1 - Math.abs(dx) * 0.8)]);
  }
  ps.sort((a, b) => a[1] - b[1]).forEach(([x, y], i) => item(x, y, i));
}

// ---------------------------------------------------------------- composites
function bowl(content, o = {}) {
  const cx = 128, rimY = o.rimY ?? 132, rx = o.rx ?? 92, depth = o.depth ?? 70;
  shadow(cx, rimY + depth + 4, rx * 0.75, 10);
  paint(E(cx, rimY, rx, 22, 0, 0.005), o.inside || '#e6dccb', { gran: false, liner: false, blot: false, shade: 0.3 });
  if (content) content(cx, rimY, rx);
  const front = arc(cx, rimY, rx, depth, 0, Math.PI, 30).concat(arc(cx, rimY, rx, 22, Math.PI, 0, 30));
  paint(front, o.color || '#efe8db', { shade: 0.45, light: 0.5, blot: false, gran: false, lx: 0.25, ly: 0.2 });
  ink(arc(cx, rimY + 9, rx * 0.985, 22, Math.PI * 0.97, Math.PI * 0.03, 30), { color: o.stripe || '#4d77a6', a: 0.7, w: 2.6 });
  ink(arc(cx, rimY, rx, 22, Math.PI * 0.05, Math.PI * 0.95, 24), { a: 0.45, w: 1.1 });
}
function mound(color, cx, rimY, rx, h = 44, o = {}) {
  const pts = [];
  for (let i = 0; i <= 30; i++) {
    const t = i / 30;
    pts.push([cx - rx * 0.86 + t * rx * 1.72, rimY - Math.pow(Math.sin(Math.PI * t), 1.3) * h + R(1.2)]);
  }
  pts.push([cx + rx * 0.8, rimY + 14], [cx - rx * 0.8, rimY + 14]);
  paint(densify(pts, 5), color, { gloss: false, ...o });
}
const powderBowl = (color, extra) => bowl((cx, y, rx) => {
  mound(color, cx, y, rx);
  if (extra) extra(cx, y, rx);
});
const grainBowl = (color, item, n = 70) => bowl((cx, y, rx) => {
  mound(color, cx, y, rx, 40, { gran: false });
  pile(n, cx, y - 2, rx * 0.72, 38, item);
});
const liquidBowl = (color, extra) => bowl((cx, y, rx) => {
  paint(E(cx, y + 3, rx * 0.9, 17, 0, 0.005), color, { liner: false, blot: false, light: 0.6, gloss: true });
  if (extra) extra(cx, y, rx);
});

function bottle(kind, liquid, o = {}) {
  const profs = {
    wine: [[9, 26], [10, 76], [24, 98], [33, 122], [33, 214], [30, 220]],
    oil: [[7, 30], [8, 84], [20, 106], [30, 124], [30, 214], [27, 220]],
    sauce: [[8, 46], [9, 74], [26, 108], [31, 128], [31, 214], [28, 220]],
    cruet: [[6, 42], [7, 86], [26, 126], [38, 170], [34, 210], [24, 220]],
    slim: [[7, 34], [8, 78], [18, 104], [24, 126], [24, 214], [21, 220]],
  };
  const cx = 128;
  const pts = sym(cx, profs[kind]);
  shadow(cx, 220, 40, 7);
  const glass = o.glass || '#cfd8c8';
  paint(pts, glass, { wash: 0.35, shade: 0.35, liner: false, blot: false, gran: false });
  const level = o.level ?? 112;
  ctx.save();
  ctx.clip(pathOf(pts));
  const liq = densify([[cx - 45, level], [cx + 45, level + 3], [cx + 45, 225], [cx - 45, 225]], 6);
  paint(liq, liquid, { liner: false, light: 0.5, shade: 0.6 });
  ctx.restore();
  ink(pts.slice(0, Math.floor(pts.length * 0.55)), { a: 0.5, w: 1.2 });
  const top = profs[kind][0];
  paint(rrect(cx - top[0] - 2, top[1] - 14, (top[0] + 2) * 2, 18, 3), o.cap || '#8a6a4a', { liner: false, gran: false });
  if (o.label !== false) {
    const lw = profs[kind][4][0] * 2 - 8;
    paint(rrect(cx - lw / 2, 150, lw, 40, 3), o.labelColor || '#f3ead6', { shade: 0.25, gran: false, blot: false, liner: false, wash: 0.85 });
    line(cx - lw / 2 + 8, 165, cx + lw / 2 - 8, 165, { a: 0.4, w: 1 });
    line(cx - lw / 2 + 12, 175, cx + lw / 2 - 16, 175, { a: 0.3, w: 1, color: o.cap || INK });
  }
  // glass highlight
  ink([[cx - 20, 132], [cx - 21, 170], [cx - 20, 205]], { color: '#fffdf6', a: 0.7, w: 3 });
}
function jar(content, lid, o = {}) {
  const cx = 128, w = o.w ?? 104, top = o.top ?? 92, bottom = 214;
  shadow(cx, bottom + 2, w * 0.55, 8);
  paint(rrect(cx - w / 2, top, w, bottom - top, 18), content, { gloss: true, light: 0.5 });
  paint(rrect(cx - w / 2 - 4, top - 26, w + 8, 30, 6), lid, { gran: false, gloss: true });
  for (let i = 0; i < 6; i++) line(cx - w / 2 + 6 + i * ((w - 12) / 5), top - 22, cx - w / 2 + 6 + i * ((w - 12) / 5), top + 2, { a: 0.25, w: 1 });
  if (o.label !== false) {
    paint(rrect(cx - w / 2 + 12, top + 40, w - 24, 46, 4), o.labelColor || '#f3ead6', { shade: 0.2, gran: false, blot: false, liner: false, wash: 0.85 });
    line(cx - 24, top + 58, cx + 24, top + 58, { a: 0.4, w: 1 });
    line(cx - 16, top + 68, cx + 16, top + 68, { a: 0.3, w: 1 });
  }
  if (o.extra) o.extra(cx, top);
}
function sprig(color, leafFn, o = {}) {
  const p0 = o.p0 || [86, 222], p1 = o.p1 || [118, 130], p2 = o.p2 || [150, 36];
  const stem = curve(p0, p1, p2, 30);
  ink(stem, { color: o.stem || '#5b6e36', a: 0.85, w: o.stemW ?? 2.4 });
  const n = o.n ?? 7;
  for (let i = 0; i < n; i++) {
    const t = 0.15 + (i / (n - 1)) * 0.82;
    const idx = Math.round(t * 30);
    const [x, y] = stem[idx];
    const [nx, ny] = stem[Math.min(30, idx + 1)];
    const dir = Math.atan2(ny - y, nx - x);
    const side = o.opposite ? [1, -1] : [i % 2 ? 1 : -1];
    for (const sd of side) leafFn(x, y, dir + sd * (o.spread ?? 0.9) + R(0.15), 1 - t * (o.taper ?? 0.45), i);
  }
}
function veins(pts, base, ang, len, o = {}) {
  const c = Math.cos(ang), s = Math.sin(ang);
  ink([[base[0], base[1]], [base[0] + c * len * 0.5, base[1] + s * len * 0.5], [base[0] + c * len * 0.92, base[1] + s * len * 0.92]], { a: 0.35, w: 1, color: o.color || '#2e4a22' });
}
function stdLeaf(color, len, w, o = {}) {
  return (x, y, a, k) => {
    const L = len * k, W = w * k;
    paint(leaf(x, y, L, W, a, o), color, { gloss: o.gloss, liner: L > 30 });
    if (L > 22) veins(null, [x, y], a, L, o);
  };
}
function roundFruit(cx, cy, r, color, o = {}) {
  shadow(cx + 4, cy + r * 0.92, r * 0.85, r * 0.16);
  paint(E(cx, cy, r * (o.sx ?? 1), r * (o.sy ?? 0.95), o.rot ?? 0, o.wob ?? 0.03), color, { gloss: o.gloss ?? true, ...o.paint });
}
function cube(x, y, s, top, front, side) {
  paint(poly([[x, y], [x + s, y], [x + s * 1.35, y - s * 0.35], [x + s * 0.35, y - s * 0.35]]), top, { liner: false, shade: 0.2, gran: false, blot: false });
  paint(poly([[x, y], [x + s, y], [x + s, y + s], [x, y + s]]), front, { liner: false, blot: false });
  paint(poly([[x + s, y], [x + s * 1.35, y - s * 0.35], [x + s * 1.35, y + s * 0.65], [x + s, y + s]]), side, { liner: false, blot: false, shade: 0.6 });
  ink([[x, y + s], [x, y], [x + s, y], [x + s, y + s]], { a: 0.4, w: 1 });
}
function wedge(rind, body, o = {}) {
  shadow(130, 204, 92, 10);
  const tip = [34, 176], back = [192, 86], front = [220, 132], drop = 54;
  const top = poly([tip, back, front]);
  const face = poly([tip, front, [front[0], front[1] + drop], [tip[0], tip[1] + drop * 0.7]]);
  const rindFace = poly([front, back, [back[0], back[1] + drop], [front[0], front[1] + drop]]);
  paint(rindFace, rind, { liner: false, shade: 0.55 });
  paint(face, body, { liner: true, light: 0.3 });
  paint(top, tone3(body, 0.3), { liner: false, shade: 0.12, gran: false });
  if (o.holes) for (let i = 0; i < 6; i++) {
    const t = 0.25 + rand() * 0.65;
    paint(E(tip[0] + (front[0] - tip[0]) * t, tip[1] + (front[1] - tip[1]) * t + 12 + rand() * drop * 0.55, 4 + rand() * 6, 3 + rand() * 5), tone3(body, -0.25), { small: true, liner: false });
  }
  if (o.crystals) for (let i = 0; i < 40; i++) {
    const t = 0.15 + rand() * 0.8;
    dot(tip[0] + (front[0] - tip[0]) * t, tip[1] + (front[1] - tip[1]) * t + 4 + rand() * drop * 0.6, 0.9, '#fff8e6', 0.85);
  }
}
const tone3 = (hex, f) => {
  const [r, g, b] = tone(rgb(hex), f);
  return '#' + [r, g, b].map((v) => Math.round(v).toString(16).padStart(2, '0')).join('');
};
function steak(meat, fat, o = {}) {
  shadow(130, 192, 88, 13);
  const pts = E(128, 132, 92, 62, -0.15, 0.09);
  paint(pts, fat, { liner: true, gran: false });
  paint(E(124, 136, 80, 50, -0.15, 0.08), meat, { gloss: true, shade: 0.55 });
  for (let i = 0; i < 9; i++) {
    const x = 70 + rand() * 110, y = 110 + rand() * 50;
    ink([[x, y], [x + 8 + R(4), y + R(6)], [x + 16 + R(6), y + R(8)]], { color: '#f6e6d6', a: 0.55, w: 1.3 });
  }
  if (o.bone) {
    paint(E(150, 128, 18, 16), '#efe3cc', { liner: true, gran: false });
    paint(E(150, 128, 9, 8), '#b5683f', { small: true });
  }
}

// ---------------------------------------------------------------- the ingredients
const greenLeaf = '#4f8a3e';
const D = {
  // ---- vegetables
  tomato() {
    roundFruit(128, 136, 80, '#d8453a');
    ink(arc(128, 136, 50, 66, -1.9, -1.2, 10), { a: 0.25 });
    for (let i = 0; i < 5; i++) {
      const a = -Math.PI / 2 + (i / 5) * TAU + R(0.2);
      paint(leaf(128, 66, 34, 8, a, { skew: 0.5 }), '#5f8f3e', { liner: false });
    }
    ink([[128, 66], [126, 52], [131, 42]], { color: '#4b6b2e', a: 0.9, w: 4 });
  },
  onion() {
    shadow(128, 208, 70, 10);
    const pts = sym(128, [[2, 36], [16, 62], [52, 96], [74, 138], [68, 180], [40, 204], [6, 210]]);
    paint(pts, '#c9873e', { gloss: true });
    for (const k of [-0.75, -0.4, 0, 0.4, 0.75]) ink(curve([128, 50], [128 + k * 100, 130], [128 + k * 30, 206]), { a: 0.28, w: 1 });
    for (let i = 0; i < 7; i++) line(122 + i * 2, 210, 114 + i * 4 + R(3), 224 + R(3), { a: 0.5, w: 0.9 });
    ink([[128, 40], [124, 26], [130, 14]], { color: '#8a5a2a', a: 0.8, w: 2.5 });
  },
  garlic() {
    shadow(128, 208, 72, 10);
    const pts = sym(128, [[3, 48], [14, 72], [48, 100], [78, 140], [70, 184], [36, 206], [4, 210]]);
    paint(pts, '#eee3d2', { gloss: true, shade: 0.35 });
    ctx.save();
    ctx.clip(pathOf(pts));
    ctx.filter = 'blur(6px)';
    for (const x of [92, 128, 166]) {
      ctx.beginPath();
      ctx.ellipse(x, 180, 16, 30, 0, 0, TAU);
      ctx.fillStyle = 'rgba(160,110,170,0.25)';
      ctx.fill();
    }
    ctx.restore();
    for (const k of [-0.7, -0.3, 0.1, 0.5]) ink(curve([128, 60], [128 + k * 110, 140], [128 + k * 40, 206]), { a: 0.35, w: 1.1 });
    for (let i = 0; i < 7; i++) line(122 + i * 2, 210, 116 + i * 3.5 + R(3), 222 + R(3), { a: 0.5, w: 0.9 });
    ink([[128, 50], [126, 32], [130, 22]], { color: '#b8a888', a: 0.8, w: 3 });
  },
  scallion() {
    for (let i = 0; i < 3; i++) {
      const ox = i * 16 - 16;
      paint(band([70 + ox, 220], [120 + ox, 150], [190 + ox, 30 + i * 8], 7, 6), '#6ea24a', { liner: false });
      paint(band([70 + ox, 220], [84 + ox, 196], [98 + ox, 172], 8, 7), '#ecefd8', { liner: false, gran: false });
      for (let j = 0; j < 5; j++) line(70 + ox, 222, 60 + ox + j * 4, 236, { a: 0.4, w: 0.8 });
    }
  },
  radish() {
    for (let i = 0; i < 3; i++) paint(leaf(128, 98, 70, 18, -Math.PI / 2 + (i - 1) * 0.5, { skew: 0.6 }), '#5c9444', { liner: false });
    roundFruit(128, 140, 52, '#d24a63');
    paint(band([128, 186], [134, 206], [140, 230], 10, 1), '#e8d0d0', { liner: false, gran: false });
    paint(E(110, 160, 22, 14, 0.4), '#f6eaea', { small: true, liner: false });
  },
  carrot() {
    for (let i = 0; i < 4; i++) ink(curve([170, 64], [180 + i * 8, 40], [176 + i * 14, 14 + R(6)]), { color: '#4f8a3e', a: 0.9, w: 2.4 });
    paint(band([172, 62], [130, 130], [72, 214], 24, 3), '#e8853a', { gloss: true });
    for (let i = 0; i < 6; i++) {
      const t = 0.15 + i * 0.12;
      const x = 172 - t * 100, y = 62 + t * 150;
      line(x - 14 * (1 - t), y - 8 * (1 - t), x + 6 * (1 - t), y + 4 * (1 - t), { a: 0.35, w: 1 });
    }
  },
  potato() {
    roundFruit(128, 136, 82, '#c9a06a', { sy: 0.68, rot: -0.2, wob: 0.08, gloss: false });
    for (let i = 0; i < 6; i++) {
      const x = 80 + rand() * 100, y = 112 + rand() * 50;
      ink([[x - 3, y], [x, y + 1.5], [x + 3, y]], { a: 0.6, w: 1.2 });
    }
  },
  'sweet potato'() {
    shadow(128, 176, 90, 12);
    paint(band([36, 150], [128, 100], [222, 132], 10, 6, 30, (t) => 1 + 3.2 * Math.sin(Math.PI * t)), '#b8604a', { gloss: true });
    for (let i = 0; i < 5; i++) line(70 + i * 28, 118 + R(10), 76 + i * 28, 132 + R(10), { a: 0.3, w: 1 });
  },
  eggplant() {
    shadow(128, 210, 60, 10);
    paint(band([100, 64], [110, 130], [150, 196], 14, 34, 30, (t) => 0.7 + Math.sin(Math.PI * Math.min(1, t * 1.1)) * 0.6), '#5e3a6e', { gloss: true, shade: 0.6 });
    for (let i = 0; i < 5; i++) paint(leaf(100, 66, 30, 9, Math.PI * 0.2 + i * 0.4), '#6b8e3d', { liner: false });
    ink([[100, 64], [94, 46], [100, 34]], { color: '#5b6e36', a: 0.9, w: 5 });
  },
  zucchini() {
    shadow(128, 180, 100, 12);
    const pts = band([40, 180], [128, 130], [214, 76], 26, 22);
    paint(pts, '#4f7d3a', { gloss: true });
    for (let i = 0; i < 4; i++) ink(curve([50, 172 + i * 4 - 8], [128, 124 + i * 4 - 6], [204, 76 + i * 4 - 8]), { color: '#a9c27a', a: 0.45, w: 1.5 });
    paint(rrect(204, 64, 22, 18, 6, -0.6), '#8a8a4a', { small: true });
  },
  cucumber() {
    shadow(118, 176, 90, 12);
    paint(band([30, 170], [110, 126], [196, 86], 22, 20), '#3f6e33', { gloss: true });
    for (let i = 0; i < 14; i++) dot(50 + i * 11, 160 - i * 5.5 + R(6), 1.6, '#a6c27a', 0.8);
    paint(E(184, 170, 36, 34), '#cfe0a6', { liner: true, gran: false, light: 0.5 });
    ink(arc(184, 170, 36, 34, 0, TAU, 36), { color: '#3f6e33', a: 0.8, w: 3 });
    for (let i = 0; i < 8; i++) {
      const a = (i / 8) * TAU;
      paint(E(184 + Math.cos(a) * 15, 170 + Math.sin(a) * 14, 3.2, 2, a), '#f1f0d0', { small: true });
    }
  },
  'bell pepper'() {
    shadow(128, 206, 76, 10);
    const pts = [];
    for (let i = 0; i < 60; i++) {
      const t = (i / 60) * TAU;
      const r = 1 + 0.07 * Math.cos(3 * (t - Math.PI / 2)) - (Math.sin(t) < -0.85 ? 0.12 : 0);
      pts.push([128 + Math.cos(t) * 76 * r, 138 + Math.sin(t) * 74 * r * (Math.sin(t) > 0 ? 1 : 0.9)]);
    }
    paint(pts, '#d8402f', { gloss: true });
    ink(curve([104, 80], [96, 140], [108, 200]), { a: 0.3 });
    ink(curve([152, 80], [160, 140], [148, 200]), { a: 0.3 });
    paint(band([128, 76], [124, 58], [140, 44], 9, 6), '#4f7a33', { liner: false });
  },
  mushroom() {
    shadow(128, 210, 70, 10);
    paint(rrect(104, 120, 48, 92, 18), '#efe4cf', { shade: 0.35 });
    const cap = arc(128, 132, 92, 86, Math.PI, TAU, 30).concat(arc(128, 132, 92, 16, 0, Math.PI, 20));
    paint(cap, '#b98a5e', { gloss: true });
    for (let i = 0; i < 12; i++) line(48 + i * 14, 140, 128 + (i - 6) * 6, 150, { a: 0.3, w: 0.9 });
  },
  cabbage() {
    roundFruit(128, 136, 84, '#a9c77f', { gloss: false });
    for (let i = 0; i < 4; i++) paint(arc(128, 140, 84 - i * 4, 80 - i * 6, Math.PI * (0.55 + i * 0.12), Math.PI * (1.6 + i * 0.12), 20).concat([[128, 140]]), i % 2 ? '#bcd593' : '#94b86a', { liner: false, gran: false, wash: 0.4 });
    for (let i = 0; i < 7; i++) ink(curve([128, 210], [100 + i * 10, 150], [60 + i * 22, 70 + R(10)]), { color: '#f2f5e0', a: 0.6, w: 1.6 });
  },
  lettuce() {
    shadow(128, 206, 82, 10);
    const pts = [];
    for (let i = 0; i < 96; i++) {
      const t = (i / 96) * TAU;
      const r = 80 * (1 + 0.05 * Math.sin(14 * t) + 0.04 * Math.sin(5 * t + 1));
      pts.push([128 + Math.cos(t) * r, 136 + Math.sin(t) * r * 0.85]);
    }
    paint(pts, '#9cc75f');
    paint(E(130, 150, 50, 40), '#c9e08e', { liner: false, gran: false, wash: 0.5 });
    for (let i = 0; i < 6; i++) ink(curve([128, 200], [110 + i * 6, 150], [70 + i * 24, 80]), { color: '#eef5d6', a: 0.7, w: 1.4 });
  },
  spinach() {
    for (let i = 0; i < 3; i++) {
      const a = -Math.PI / 2 + (i - 1) * 0.55;
      const bx = 128 + (i - 1) * 6, by = 214;
      ink([[bx, by], [bx + Math.cos(a) * 30, by + Math.sin(a) * 30]], { color: '#6f8e3c', a: 0.9, w: 3 });
      paint(leaf(bx + Math.cos(a) * 26, by + Math.sin(a) * 26, 128, 40, a, { skew: 0.55 }), '#3f7a3a', { gloss: true });
      veins(null, [bx + Math.cos(a) * 26, by + Math.sin(a) * 26], a, 120, { color: '#b5d08a' });
    }
  },
  celery() {
    for (let i = 0; i < 3; i++) {
      const ox = i * 18 - 18;
      paint(band([86 + ox, 226], [110 + ox, 140], [140 + ox, 62], 11, 9), '#a7c56a', { liner: true });
      ink(curve([86 + ox, 226], [110 + ox, 140], [140 + ox, 62]), { color: '#6f8e3c', a: 0.3, w: 1 });
      for (let j = 0; j < 4; j++) paint(leaf(140 + ox, 62, 26, 10, -Math.PI / 2 + (j - 1.5) * 0.5, { serr: 3 }), '#5c9444', { liner: false });
    }
  },
  fennel() {
    for (let i = 0; i < 3; i++) ink(curve([128 + (i - 1) * 16, 130], [128 + (i - 1) * 26, 90], [128 + (i - 1) * 40, 54]), { color: '#8fb35a', a: 1, w: 9 });
    for (let i = 0; i < 40; i++) {
      const x = 80 + rand() * 96, y = 26 + rand() * 40;
      line(x, y, x + R(10), y - 8 - rand() * 8, { color: '#6f9a4a', a: 0.8, w: 1 });
    }
    shadow(128, 212, 66, 10);
    paint(sym(128, [[30, 120], [56, 150], [66, 180], [50, 206], [10, 212]]), '#e2e8c4', { gloss: true, shade: 0.4 });
    for (const k of [-0.5, 0, 0.5]) ink(curve([128 + k * 50, 124], [128 + k * 90, 170], [128 + k * 40, 208]), { a: 0.25 });
  },
  'bamboo shoot'() {
    shadow(128, 212, 56, 9);
    for (let i = 0; i < 5; i++) paint(sym(128, [[2, 36 + i * 22], [24 + i * 8, 110 + i * 14], [36 + i * 6, 200], [10, 212]]), i % 2 ? '#d9c38a' : '#cbb176', { liner: i === 4, gran: i === 4 });
    paint(sym(128, [[2, 30], [10, 56], [14, 70]]), '#8a7a3a', { small: true });
  },
  'green beans'() {
    for (let i = 0; i < 5; i++) {
      const oy = i * 18 - 36;
      paint(band([36, 150 + oy], [128, 110 + oy + R(14)], [220, 140 + oy], 6, 5, 28, (t) => 0.6 + Math.sin(Math.PI * t) * 0.6), i % 2 ? '#5d9a3e' : '#6eac48', { liner: i === 2, gloss: true });
    }
  },
  peas() {
    shadow(128, 180, 100, 12);
    paint(band([30, 150], [128, 106], [226, 120], 10, 6, 30, (t) => 0.5 + Math.sin(Math.PI * t) * 2.6), '#5f9a3a');
    for (let i = 0; i < 6; i++) paint(E(62 + i * 27, 132 - Math.sin((i / 5) * Math.PI) * 14, 13, 13), '#86bd4a', { gloss: true, liner: false });
    paint(band([30, 150], [128, 162], [226, 122], 6, 4, 30, (t) => 0.5 + Math.sin(Math.PI * t) * 1.4), '#4e8530', { liner: false });
  },
  'bean sprouts'() {
    for (let i = 0; i < 16; i++) {
      const x0 = 50 + rand() * 150, y0 = 60 + rand() * 120;
      const pts = curve([x0, y0], [x0 + R(40), y0 + 40], [x0 + R(50), y0 + 80 + R(20)]);
      ink(pts, { color: '#e8e2c8', a: 1, w: 4 });
      ink(pts, { color: '#a89a70', a: 0.35, w: 1 });
      paint(E(x0, y0, 6, 4, rand() * 3), '#d8cf6a', { small: true });
    }
  },
  olive() {
    paint(leaf(60, 170, 150, 14, -0.6), '#8a9a72', { liner: false });
    paint(leaf(90, 150, 110, 12, -1.2), '#7b8c66', { liner: false });
    for (const [x, y, c] of [[110, 150, '#7d8a3a'], [158, 140, '#4a3a44'], [138, 182, '#8a963c']]) {
      shadow(x + 4, y + 26, 22, 5);
      paint(E(x, y, 22, 28, 0.3), c, { gloss: true });
    }
  },
  avocado() {
    shadow(128, 212, 70, 10);
    const outer = sym(128, [[12, 30], [34, 52], [50, 96], [74, 150], [70, 192], [40, 214], [8, 218]]);
    paint(outer, '#3e5a2a', { liner: true });
    const inner = sym(128, [[8, 40], [26, 60], [40, 100], [62, 150], [60, 186], [34, 206], [6, 210]]);
    paint(inner, '#c7d77a', { light: 0.5, shade: 0.3, gran: false });
    paint(E(128, 158, 32, 34), '#8a5a32', { gloss: true });
  },
  pickle() {
    shadow(128, 186, 90, 12);
    paint(band([40, 170], [128, 120], [216, 100], 22, 18), '#6c7f35', { gloss: true });
    for (let i = 0; i < 18; i++) dot(50 + rand() * 160, 110 + rand() * 60 - (rand() * 30), 2.2, '#4a5a24', 0.6);
  },
  seaweed() {
    shadow(128, 206, 90, 12);
    paint(rotate(rrect(46, 54, 164, 150, 3), 128, 128, -0.15), '#2f3d2c', { shade: 0.4, light: 0.25 });
    for (let i = 0; i < 9; i++) ink(rotate([[56, 70 + i * 16], [128, 66 + i * 16 + R(3)], [200, 70 + i * 16]], 128, 128, -0.15), { color: '#6a7d58', a: 0.4, w: 1 });
  },

  // ---- herbs
  basil() {
    sprig('#3f8c4a', stdLeaf('#3f8c4a', 84, 32, { skew: 0.55, gloss: true }), { n: 5, opposite: true, spread: 0.75, p0: [100, 230], p1: [124, 140], p2: [140, 40] });
  },
  parsley() {
    for (const [dx, a] of [[-26, -0.35], [24, 0.3], [0, 0]]) sprig('#4f9a3c', (x, y, ang, k) => {
      for (let j = 0; j < 3; j++) paint(leaf(x, y, 40 * k, 17 * k, ang + (j - 1) * 0.55, { serr: 3, skew: 0.6 }), j === 1 ? '#4f9a3c' : '#5fa84a', { liner: false });
    }, { n: 5, p0: [128, 232], p1: [128 + dx * 0.5, 150], p2: [128 + dx * 2.6, 46 + Math.abs(dx)], stemW: 2 });
  },
  cilantro() {
    for (const dx of [-30, 26, 0]) sprig('#68a84a', (x, y, a, k) => {
      for (let j = 0; j < 3; j++) paint(E(x + Math.cos(a + (j - 1) * 0.6) * 26 * k, y + Math.sin(a + (j - 1) * 0.6) * 26 * k, 17 * k, 13 * k, a, 0.14), j === 1 ? '#68a84a' : '#78b456', { liner: false });
      ink([[x, y], [x + Math.cos(a) * 20 * k, y + Math.sin(a) * 20 * k]], { color: '#5b8a36', a: 0.8, w: 1.2 });
    }, { n: 5, stemW: 1.8, p0: [128, 232], p1: [128 + dx * 0.4, 150], p2: [128 + dx * 2.4, 46 + Math.abs(dx)] });
  },
  mint() {
    sprig('#5aa46a', stdLeaf('#5aa46a', 70, 30, { serr: 8, skew: 0.5 }), { n: 5, opposite: true, spread: 0.95, p0: [104, 232], p1: [122, 140], p2: [136, 42] });
  },
  dill() {
    for (const dx of [-24, 20]) {
      const stem = curve([128, 232], [128 + dx * 0.3, 140], [128 + dx * 2, 36], 30);
      ink(stem, { color: '#6f9a4a', a: 0.9, w: 2.4 });
      for (let i = 3; i < 30; i += 2) {
        const [x, y] = stem[i];
        for (let j = 0; j < 6; j++) {
          const a = -Math.PI / 2 + R(1.5);
          const L = 26 + rand() * 34;
          ink(curve([x, y], [x + Math.cos(a) * L * 0.5, y + Math.sin(a) * L * 0.5 + R(5)], [x + Math.cos(a) * L, y + Math.sin(a) * L]), { color: j % 2 ? '#5f9440' : '#7cae52', a: 0.85, w: 1.4 });
        }
      }
    }
  },
  thyme() {
    for (let s = 0; s < 4; s++) {
      const stem = curve([110 + s * 10, 232], [100 + s * 20 + R(16), 140], [80 + s * 32 + R(16), 36], 30);
      ink(stem, { color: '#7a5a3a', a: 0.9, w: 1.8 });
      for (let i = 2; i < 30; i++) {
        const [x, y] = stem[i];
        paint(leaf(x, y, 13, 5, (i % 2 ? -0.9 : 0.9) - Math.PI / 2), i % 3 ? '#6e8a52' : '#7f9a62', { small: true });
      }
    }
  },
  oregano() {
    for (const dx of [-22, 22]) sprig('#6f9450', (x, y, a, k) => paint(E(x + Math.cos(a) * 16 * k, y + Math.sin(a) * 16 * k, 18 * k, 13 * k, a), '#6f9450', { liner: false }), { n: 7, opposite: true, spread: 1.1, stemW: 1.8, stem: '#7a5a3a', p0: [128, 232], p1: [128 + dx * 0.4, 140], p2: [128 + dx * 2.2, 40] });
  },
  'bay leaf'() {
    shadow(128, 200, 80, 8);
    paint(leaf(40, 180, 170, 30, -0.55), '#7b8c4a', { gloss: false });
    veins(null, [40, 180], -0.55, 170, { color: '#d6dcb0' });
    paint(leaf(70, 210, 150, 26, -0.9), '#8f9a58', { gloss: false });
    veins(null, [70, 210], -0.9, 150, { color: '#d6dcb0' });
  },
  lemongrass() {
    for (let i = 0; i < 2; i++) {
      paint(band([80 + i * 30, 226], [120 + i * 30, 120], [160 + i * 30, 20], 11, 8), '#c7cf86');
      paint(band([80 + i * 30, 226], [88 + i * 30, 200], [96 + i * 30, 170], 12, 11), '#e3d7b0', { liner: false });
    }
  },
  'curry leaves'() {
    sprig('#3e6e32', stdLeaf('#3e6e32', 34, 10, { gloss: true }), { n: 8, opposite: true, spread: 1.1, stemW: 1.6 });
  },

  // ---- fruits
  lemon() {
    shadow(128, 194, 84, 10);
    const pts = [];
    for (let i = 0; i < 60; i++) {
      const t = (i / 60) * TAU;
      const tip = Math.pow(Math.abs(Math.cos(t)), 12) * 0.18;
      pts.push([128 + Math.cos(t) * 82 * (1 + tip), 140 + Math.sin(t) * 58]);
    }
    paint(rotate(pts, 128, 140, -0.2), '#ecc94b', { gloss: true });
    for (let i = 0; i < 30; i++) dot(70 + rand() * 120, 105 + rand() * 70, 1, '#b8932a', 0.35);
    paint(leaf(186, 96, 60, 16, -0.9), greenLeaf, { gloss: true });
  },
  lime() {
    roundFruit(104, 140, 62, '#7cb342');
    paint(E(180, 168, 44, 42), '#cfe29a', { gran: false, light: 0.5 });
    ink(arc(180, 168, 44, 42, 0, TAU, 40), { color: '#5d8f2a', a: 0.9, w: 3.5 });
    for (let i = 0; i < 8; i++) line(180, 168, 180 + Math.cos((i / 8) * TAU) * 36, 168 + Math.sin((i / 8) * TAU) * 34, { color: '#f4f8e2', a: 0.9, w: 2 });
  },
  orange() {
    roundFruit(128, 140, 80, '#ec9234');
    for (let i = 0; i < 50; i++) dot(70 + rand() * 120, 90 + rand() * 100, 1, '#b8641a', 0.35);
    paint(leaf(132, 64, 64, 18, -0.5), greenLeaf, { gloss: true });
    dot(128, 64, 3, '#5b6e36', 0.9);
  },
  apple() {
    shadow(128, 208, 74, 10);
    const pts = [];
    for (let i = 0; i < 70; i++) {
      const t = (i / 70) * TAU;
      const notch = Math.exp(-Math.pow((t - 1.5 * Math.PI) / 0.35, 2)) * 0.16;
      pts.push([128 + Math.cos(t) * 80, 140 + Math.sin(t) * 72 * (1 - notch)]);
    }
    paint(pts, '#c8423a', { gloss: true });
    ink([[128, 80], [124, 60], [132, 46]], { color: '#5a3a24', a: 0.9, w: 3.5 });
    paint(leaf(130, 62, 50, 15, -0.4), greenLeaf, { gloss: true });
  },
  pineapple() {
    for (let i = 0; i < 9; i++) paint(leaf(128, 92, 60 + rand() * 30, 9, -Math.PI / 2 + (i - 4) * 0.28), i % 2 ? '#4f8a3e' : '#6a9e4a', { liner: false });
    shadow(128, 222, 60, 9);
    const pts = E(128, 156, 60, 72);
    paint(pts, '#d8a33a', { gloss: true });
    ctx.save();
    ctx.clip(pathOf(pts));
    for (let i = -6; i < 7; i++) {
      line(128 + i * 20 - 70, 80, 128 + i * 20 + 70, 236, { a: 0.35, w: 1.1 });
      line(128 + i * 20 + 70, 80, 128 + i * 20 - 70, 236, { a: 0.35, w: 1.1 });
    }
    ctx.restore();
  },
  mango() {
    shadow(128, 204, 80, 10);
    const pts = rotate(E(128, 138, 86, 64, 0, 0.06), 128, 138, -0.35);
    paint(pts, '#eaa03a', { gloss: true });
    ctx.save();
    ctx.clip(pathOf(pts));
    ctx.filter = 'blur(14px)';
    ctx.beginPath();
    ctx.ellipse(90, 100, 60, 40, -0.3, 0, TAU);
    ctx.fillStyle = 'rgba(200,60,50,0.45)';
    ctx.fill();
    ctx.restore();
    ink([[190, 98], [200, 86]], { color: '#5a3a24', a: 0.9, w: 3 });
  },
  papaya() {
    shadow(128, 200, 92, 10);
    const outer = rotate(E(128, 136, 98, 54, 0, 0.03), 128, 136, -0.2);
    paint(outer, '#c9b44a');
    const inner = rotate(E(128, 136, 88, 45), 128, 136, -0.2);
    paint(inner, '#ef8a4a', { light: 0.5, gloss: true });
    const cav = rotate(E(138, 136, 48, 18), 128, 136, -0.2);
    paint(cav, '#d8703a', { liner: false });
    for (let i = 0; i < 26; i++) {
      const [x, y] = rotate([[100 + rand() * 76, 128 + rand() * 18]], 128, 136, -0.2)[0];
      paint(E(x, y, 4, 4), '#2a2420', { small: true, gloss: true });
    }
  },
  pear() {
    shadow(128, 212, 64, 10);
    paint(sym(128, [[6, 52], [24, 66], [34, 100], [62, 148], [68, 180], [46, 208], [6, 214]]), '#c3c25a', { gloss: true });
    ctx.save();
    ctx.filter = 'blur(10px)';
    ctx.beginPath();
    ctx.ellipse(150, 170, 26, 30, 0, 0, TAU);
    ctx.fillStyle = 'rgba(210,110,60,0.3)';
    ctx.fill();
    ctx.restore();
    ink([[128, 54], [130, 38], [138, 26]], { color: '#5a3a24', a: 0.9, w: 3 });
    paint(leaf(132, 40, 46, 12, -0.3), greenLeaf, { liner: false });
  },
  pomegranate() {
    roundFruit(120, 134, 72, '#b8323e');
    paint(poly([[106, 66], [112, 48], [120, 60], [128, 46], [134, 60], [142, 48], [138, 68]]), '#8a2a30', { liner: false });
    for (let i = 0; i < 9; i++) paint(E(178 + R(26), 196 + R(10), 7, 8, rand()), '#d8364a', { gloss: true, small: true });
  },
  apricot() {
    roundFruit(128, 138, 74, '#eda24e');
    ctx.save();
    ctx.filter = 'blur(12px)';
    ctx.beginPath();
    ctx.ellipse(104, 116, 34, 28, 0, 0, TAU);
    ctx.fillStyle = 'rgba(220,90,50,0.35)';
    ctx.fill();
    ctx.restore();
    ink(curve([132, 66], [160, 130], [140, 208]), { a: 0.3, w: 1.4 });
  },
  coconut() {
    roundFruit(104, 128, 64, '#7a5435', { paint: { gloss: false } });
    for (let i = 0; i < 40; i++) line(60 + rand() * 90, 80 + rand() * 90, 60 + rand() * 90, 80 + rand() * 90, { a: 0.18, w: 0.8 });
    shadow(176, 206, 46, 8);
    paint(arc(172, 172, 52, 40, 0, Math.PI, 24).concat(arc(172, 172, 52, 16, Math.PI, 0, 24)), '#6a4a30');
    paint(E(172, 172, 46, 14), '#f6f1e6', { gran: false, liner: false });
  },
  tamarind() {
    for (let i = 0; i < 2; i++) {
      const oy = i * 40 - 20;
      paint(band([40, 150 + oy], [128, 100 + oy], [216, 140 + oy], 13, 10, 32, (t) => 1 + 0.25 * Math.sin(t * 5 * TAU)), '#8a6141', { gloss: true });
    }
  },

  // ---- spices
  'black pepper'() {
    bowl((cx, y, rx) => pile(70, cx, y + 2, rx * 0.78, 36, (x, yy) => paint(E(x, yy, 5, 5, 0, 0.1), '#3a302a', { small: true, gloss: true })), { rx: 80, rimY: 140, depth: 60 });
  },
  chili() {
    paint(band([60, 70], [80, 190], [212, 206], 18, 2), '#c8302a', { gloss: true });
    paint(band([60, 70], [70, 90], [76, 102], 20, 18), '#4f7a33', { liner: false });
    ink([[60, 70], [48, 52], [52, 36]], { color: '#4f7a33', a: 0.9, w: 4 });
    paint(band([150, 50], [130, 120], [180, 170], 12, 2), '#5e9a3a', { gloss: true });
    ink([[150, 50], [156, 36]], { color: '#4f7a33', a: 0.9, w: 3 });
  },
  paprika: () => powderBowl('#c4452e'),
  cumin() {
    shadow(128, 190, 90, 12);
    pile(220, 128, 196, 96, 110, (x, y) => paint(leaf(x - 6, y, 14, 3.4, rand() * TAU), '#9a7448', { small: true }));
  },
  coriander() {
    shadow(128, 196, 96, 12);
    pile(150, 128, 196, 96, 104, (x, y) => {
      paint(E(x, y, 7.5, 7.5), '#b89a62', { small: true, gloss: true });
      line(x - 3, y - 2, x + 3, y + 2, { a: 0.3, w: 0.7 });
    });
  },
  cinnamon() {
    shadow(128, 186, 96, 12);
    for (let i = 0; i < 3; i++) {
      const y = 120 + i * 22, x0 = 36 + i * 8, x1 = 214 - i * 6;
      paint(rotate(rrect(x0, y, x1 - x0, 20, 8), 128, 140, -0.25), '#9a5a32', { gloss: i === 0 });
      const [ex, ey] = rotate([[x1 - 2, y + 10]], 128, 140, -0.25)[0];
      paint(E(ex, ey, 6, 10, -0.25), '#c88a5a', { small: true });
      ink(arc(ex, ey, 4, 7, 0, TAU * 0.8, 12), { a: 0.6, w: 1 });
    }
  },
  nutmeg() {
    roundFruit(96, 140, 50, '#8b5e3c', { sy: 0.85 });
    for (let i = 0; i < 6; i++) ink(curve([60, 110 + i * 10], [96, 100 + i * 12 + R(8)], [136, 120 + i * 8]), { color: '#d8b48a', a: 0.4, w: 1.2 });
    roundFruit(176, 168, 38, '#c9a27a', { sy: 0.85, paint: { gloss: false } });
    for (let i = 0; i < 18; i++) ink([[150 + rand() * 50, 150 + rand() * 36], [150 + rand() * 50, 150 + rand() * 36]], { color: '#6a3a22', a: 0.45, w: 1.2 });
  },
  saffron() {
    shadow(128, 190, 70, 10);
    for (let i = 0; i < 90; i++) {
      const x = 56 + rand() * 140, y = 96 + rand() * 96;
      const a = rand() * TAU, L = 20 + rand() * 18;
      const p = curve([x, y], [x + Math.cos(a) * L * 0.5 + R(6), y + Math.sin(a) * L * 0.5 + R(6)], [x + Math.cos(a) * L, y + Math.sin(a) * L]);
      ink(p, { color: '#c8361f', a: 0.95, w: 2.6 });
      dot(p[p.length - 1][0], p[p.length - 1][1], 2.2, '#e8902a', 0.9);
    }
  },
  turmeric() {
    powderBowl('#e09a1f');
    paint(band([150, 214], [190, 200], [230, 210], 9, 7), '#b8742a', { gloss: true });
  },
  ginger() {
    shadow(128, 192, 90, 12);
    for (const [x, y, rx, ry, r] of [[110, 150, 60, 34, -0.1], [168, 128, 34, 22, -0.8], [70, 118, 26, 18, 0.9], [150, 176, 30, 18, 0.3]]) paint(E(x, y, rx, ry, r, 0.08), '#d4b27a', { gloss: true, liner: false });
    for (let i = 0; i < 6; i++) ink(arc(70 + i * 22, 150, 6, 18, -1, 1, 8), { a: 0.35, w: 1 });
  },
  galangal() {
    shadow(128, 192, 90, 12);
    for (const [x, y, rx, ry, r] of [[110, 150, 62, 30, 0], [172, 130, 30, 20, -0.7], [72, 122, 24, 16, 1]]) paint(E(x, y, rx, ry, r, 0.06), '#e0b39a', { gloss: true, liner: false });
    for (let i = 0; i < 7; i++) ink(arc(60 + i * 18, 150, 5, 22, -1.1, 1.1, 8), { color: '#a8584a', a: 0.45, w: 1.2 });
  },
  'garam masala': () => powderBowl('#8b4a2b', (cx, y) => {
    paint(E(cx - 20, y - 30, 12, 6, 0.3), '#8fa75a', { small: true, gloss: true });
    paint(rrect(cx + 4, y - 42, 34, 8, 4, -0.3), '#9a5a32', { small: true });
  }),
  cardamom() {
    shadow(128, 186, 80, 10);
    for (let i = 0; i < 5; i++) {
      const x = 70 + i * 30, y = 140 + R(30), a = R(0.8) - 0.4;
      paint(leaf(x - 30, y, 66, 20, a), i % 2 ? '#8fa75a' : '#a2b86a', { gloss: true, liner: false });
      ink([[x - 16, y], [x + 18, y + Math.sin(a) * 34]], { a: 0.3, w: 1 });
    }
  },
  'star anise'() {
    shadow(128, 176, 80, 12);
    for (let i = 0; i < 8; i++) {
      const a = (i / 8) * TAU;
      paint(leaf(128, 132, 74, 20, a, { skew: 0.6 }), '#7a4128', { gloss: true, liner: true });
      paint(E(128 + Math.cos(a) * 40, 132 + Math.sin(a) * 40, 7, 4.5, a), '#c9945a', { small: true, gloss: true });
    }
    paint(E(128, 132, 10, 10), '#5a2c18', { small: true });
  },
  'sichuan pepper'() {
    shadow(128, 190, 90, 12);
    pile(120, 128, 196, 96, 104, (x, y) => {
      paint(E(x, y, 9, 8, 0, 0.18), '#9b3a2a', { small: true });
      dot(x + 1, y - 1, 2, '#2a1810', 0.8);
    });
  },
  'five-spice': () => powderBowl('#7a5236', (cx, y) => {
    for (let i = 0; i < 8; i++) paint(leaf(cx + 20, y - 40, 18, 5, (i / 8) * TAU), '#6a3420', { small: true });
  }),
  fenugreek() {
    shadow(128, 190, 90, 12);
    pile(240, 128, 196, 96, 104, (x, y) => paint(poly([[x - 4, y - 4], [x + 5, y - 3], [x + 4, y + 4], [x - 5, y + 3]]), '#c09a4a', { small: true }));
  },
  'mustard seed'() {
    bowl((cx, y, rx) => pile(120, cx, y + 2, rx * 0.8, 36, (x, yy) => paint(E(x, yy, 3.6, 3.6), '#d7b247', { small: true, gloss: true })), { rx: 80, rimY: 140, depth: 60, stripe: '#3f6a8a' });
  },
  berbere: () => powderBowl('#a8361f'),
  wasabi() {
    shadow(128, 196, 92, 12);
    paint(E(128, 168, 96, 30), '#efe8db', { liner: true, gran: false });
    paint(densify([[70, 172], [92, 130], [118, 112], [140, 108], [164, 124], [186, 170]].concat([[128, 180]]), 5), '#9cbf5a', { gloss: true });
    for (let i = 0; i < 5; i++) ink(curve([96 + i * 18, 168], [100 + i * 16, 140], [118 + i * 8, 118]), { color: '#6f9040', a: 0.35, w: 1 });
  },
  vanilla() {
    for (let i = 0; i < 3; i++) paint(band([40 + i * 10, 200 - i * 20], [120, 120 - i * 10 + R(10)], [220, 70 + i * 26], 5, 3), '#3a2a22', { gloss: true });
    for (let i = 0; i < 5; i++) paint(leaf(180, 190, 30, 13, (i / 5) * TAU), '#f1e3b0', { liner: false });
    dot(180, 190, 5, '#d9b85a', 0.9);
  },

  // ---- meat
  beef() {
    steak('#a8303a', '#f1e2cf');
    for (let i = 0; i < 4; i++) ink([[70 + i * 26, 104], [96 + i * 26, 164]], { color: '#5a1a1a', a: 0.4, w: 4 });
  },
  veal: () => steak('#d58a7a', '#f4e8d8', { bone: true }),
  lamb() {
    shadow(128, 196, 82, 12);
    paint(rrect(130, 54, 18, 80, 8, 0.35), '#efe3cc', { liner: true });
    paint(E(110, 150, 70, 50, 0.2, 0.08), '#f1e2cf');
    paint(E(104, 154, 56, 38, 0.2, 0.07), '#c25a5a', { gloss: true });
  },
  pork() {
    shadow(128, 196, 88, 12);
    paint(rotate(rrect(54, 72, 150, 20, 9), 128, 82, -0.12), '#efe3cc', { liner: true });
    paint(E(118, 142, 84, 52, -0.1, 0.06), '#f6ead8');
    paint(E(112, 146, 70, 40, -0.1, 0.06), '#e39a8e', { gloss: true });
  },
  chicken() {
    shadow(128, 200, 86, 12);
    paint(rrect(150, 60, 18, 90, 8, 0.6), '#f1e7d4', { liner: true });
    paint(E(158, 58, 13, 11), '#f1e7d4', { small: true });
    paint(E(176, 70, 13, 11), '#f1e7d4', { small: true });
    paint(densify(sym(0, [[2, 0], [26, 30], [54, 82], [56, 120], [34, 146], [4, 150]]).map(([x, y]) => [x * 1 + 104, y + 60]), 5).map(([x, y]) => rotate([[x, y]], 120, 140, -0.7)[0]), '#d9a25a', { gloss: true });
    for (let i = 0; i < 20; i++) dot(70 + rand() * 80, 110 + rand() * 80, 1.4, '#9a5a22', 0.35);
  },
  duck() {
    shadow(128, 204, 96, 12);
    paint(E(124, 150, 92, 54, 0, 0.04), '#9a4a2a', { gloss: true, shade: 0.6 });
    paint(E(176, 172, 40, 24, -0.4), '#a8582f', { gloss: true });
    paint(E(212, 152, 9, 8), '#f1e7d4', { small: true });
    for (let i = 0; i < 5; i++) ink(curve([60 + i * 24, 120], [70 + i * 24, 150], [64 + i * 24, 180]), { color: '#f4c08a', a: 0.35, w: 1.2 });
  },
  bacon() {
    for (let i = 0; i < 2; i++) {
      const oy = i * 56 - 28;
      const prof = (t) => 1;
      const bandPts = (w, off) => {
        const pts = [], pts2 = [];
        for (let k = 0; k <= 30; k++) {
          const t = k / 30, x = 30 + t * 196, y = 128 + oy + Math.sin(t * TAU * 1.5 + i) * 12;
          pts.push([x, y + off - w]);
          pts2.push([x, y + off + w]);
        }
        return pts.concat(pts2.reverse());
      };
      paint(bandPts(22, 0), '#f1d9c4', { liner: true });
      paint(bandPts(5, -10), '#b5463a', { liner: false, gran: false });
      paint(bandPts(5, 8), '#c25a4a', { liner: false, gran: false });
      prof(0);
    }
  },
  guanciale() {
    shadow(128, 200, 90, 12);
    paint(rrect(40, 90, 176, 110, 14), '#f3e2cf', { liner: true });
    paint(rrect(40, 90, 176, 22, 10), '#8a4a2a', { liner: false });
    paint(rrect(46, 140, 164, 18, 8), '#c25a50', { liner: false, gran: false });
    paint(rrect(46, 172, 164, 12, 6), '#d27a6a', { liner: false, gran: false });
  },
  sausage() {
    shadow(128, 192, 96, 12);
    const centers = [[70, 150], [128, 124], [186, 142]];
    centers.forEach(([x, y], i) => paint(rotate(rrect(x - 34, y - 18, 68, 36, 18), x, y, [0.5, 0, -0.4][i]), '#a8503a', { gloss: true }));
    ink([[100, 136], [98, 128]], { a: 0.8, w: 2 });
    ink([[156, 130], [158, 124]], { a: 0.8, w: 2 });
  },

  // ---- seafood
  fish() {
    shadow(128, 186, 100, 10);
    const body = densify([[24, 132], [70, 96], [140, 92], [186, 118], [206, 132], [186, 146], [140, 170], [70, 168]], 6);
    paint(body, '#6f8fa8', { gloss: true });
    paint(densify([[30, 136], [80, 150], [140, 162], [186, 146], [140, 170], [70, 168]], 6), '#d8e0e4', { liner: false, gran: false, wash: 0.5 });
    paint(poly([[200, 132], [236, 100], [228, 132], [236, 164]]), '#5a7890');
    paint(poly([[110, 94], [130, 72], [160, 98]]), '#5a7890', { liner: false });
    dot(50, 124, 5, '#f4f1e6', 1);
    dot(51, 124, 2.6, '#1f2a30', 1);
    ink(arc(66, 132, 10, 26, -1.2, 1.2, 10), { a: 0.5 });
    for (let i = 0; i < 18; i++) ink(arc(84 + (i % 6) * 18, 110 + Math.floor(i / 6) * 16, 6, 6, -1.2, 1.2, 6), { color: '#3a5a70', a: 0.3, w: 0.9 });
  },
  shrimp() {
    shadow(128, 190, 80, 10);
    const n = 7;
    for (let i = n - 1; i >= 0; i--) {
      const a = Math.PI * 0.95 + (i / n) * Math.PI * 1.25;
      const r = 60 - i * 3;
      const x = 128 + Math.cos(a) * r, y = 128 + Math.sin(a) * r * 0.9;
      paint(E(x, y, 26 - i * 2, 20 - i * 1.6, a + Math.PI / 2), i % 2 ? '#ec8a6a' : '#f09a7a', { gloss: i === 2, liner: false });
    }
    const ta = Math.PI * 0.95 + Math.PI * 1.25;
    for (let j = 0; j < 3; j++) paint(leaf(128 + Math.cos(ta) * 40, 128 + Math.sin(ta) * 36, 30, 10, ta + Math.PI / 2 + (j - 1) * 0.5), '#e26a4a', { small: true });
    for (let j = 0; j < 2; j++) ink(curve([76, 116], [40, 60 + j * 10], [90, 30 + j * 14]), { color: '#c8503a', a: 0.7, w: 1 });
    dot(80, 112, 3, '#1f1a1a', 0.9);
  },
  shellfish() {
    shadow(128, 196, 96, 12);
    paint(E(176, 150, 40, 62, 0.5, 0.02), '#2e3446', { gloss: true });
    ink(curve([150, 100], [180, 150], [200, 200]), { color: '#8a9ab8', a: 0.5, w: 1.5 });
    const fan = [[96, 196]];
    for (let i = 0; i <= 20; i++) {
      const t = Math.PI * (1.05 + (i / 20) * 0.9);
      fan.push([96 + Math.cos(t) * 76, 186 + Math.sin(t) * 86]);
    }
    paint(densify(fan, 5), '#d9c4a6', { gloss: true });
    for (let i = 0; i < 9; i++) {
      const t = Math.PI * (1.1 + (i / 8) * 0.8);
      line(96, 192, 96 + Math.cos(t) * 72, 186 + Math.sin(t) * 82, { color: '#8a6a4a', a: 0.4, w: 1.1 });
    }
  },

  // ---- dairy
  egg() {
    const eggPts = (cx, cy, s) => sym(cx, [[2, cy - 62 * s], [30 * s, cy - 50 * s], [46 * s, cy - 10 * s], [48 * s, cy + 22 * s], [36 * s, cy + 48 * s], [4, cy + 56 * s]]);
    shadow(96, 200, 50, 8);
    paint(eggPts(96, 146, 1), '#d9a57a', { gloss: true });
    shadow(170, 206, 40, 7);
    paint(eggPts(168, 160, 0.82), '#efe3cf', { gloss: true, shade: 0.4 });
  },
  butter() {
    shadow(128, 196, 96, 12);
    paint(poly([[44, 116], [168, 116], [214, 92], [92, 92]]), '#f6e3a0', { liner: false, shade: 0.2 });
    paint(poly([[44, 116], [168, 116], [168, 182], [44, 182]]), '#f1d77c', { gloss: true });
    paint(poly([[168, 116], [214, 92], [214, 156], [168, 182]]), '#e2c062', { liner: false, shade: 0.6 });
    paint(densify([[30, 196], [60, 182], [100, 186], [140, 200], [110, 214], [60, 212]], 5), '#e9ddc4', { liner: true, gran: false });
  },
  milk() {
    bottle('slim', '#f6f4ee', { glass: '#e8eef0', cap: '#4d77a6', level: 70, labelColor: '#dbe6f0' });
  },
  cream() {
    shadow(120, 210, 70, 10);
    const body = sym(120, [[40, 92], [48, 120], [58, 170], [50, 204], [40, 212]]);
    paint(body, '#efe8db', { gloss: true });
    paint(densify([[160, 96], [190, 82], [176, 104]], 4), '#efe8db', { small: true });
    ink(arc(186, 150, 22, 34, -1.4, 1.4, 14), { a: 0.6, w: 6, color: '#d8cdbb' });
    paint(E(120, 94, 40, 10), '#fbf8f0', { liner: false, gran: false });
    ink(arc(120, 140, 46, 8, 0, Math.PI, 16), { color: '#4d77a6', a: 0.6, w: 2.4 });
  },
  parmesan: () => wedge('#c9a24a', '#ecd68a', { crystals: true }),
  mozzarella() {
    roundFruit(100, 146, 54, '#f3efe6', { paint: { shade: 0.35 } });
    roundFruit(168, 168, 40, '#f5f1e8', { paint: { shade: 0.35 } });
    paint(leaf(110, 96, 60, 20, -0.6), '#3f8c4a', { gloss: true });
  },
  pecorino: () => wedge('#7a5a3a', '#efe2b6', { crystals: true }),
  mascarpone: () => bowl((cx, y, rx) => {
    paint(densify([[cx - rx * 0.8, y + 4], [cx - 40, y - 26], [cx, y - 36], [cx + 30, y - 22], [cx + rx * 0.8, y + 4]], 5), '#fbf6ea', { shade: 0.3 });
    ink(curve([cx - 30, y - 16], [cx, y - 34], [cx + 24, y - 12]), { color: '#d8cdbb', a: 0.8, w: 2 });
  }, { color: '#e3ecf2', stripe: '#c25a4a' }),
  'gruyère': () => wedge('#a8783a', '#ecc75e', { holes: true }),
  feta() {
    cube(54, 124, 92, '#fbf8f0', '#f1ede2', '#ddd6c6');
    for (let i = 0; i < 10; i++) paint(E(170 + rand() * 50, 200 + rand() * 16, 6, 5, rand(), 0.2), '#f4f1e6', { small: true });
  },
  cheddar() {
    cube(56, 120, 92, '#f2b65a', '#e89a3a', '#c97f2a');
  },
  'queso fresco'() {
    shadow(128, 200, 96, 12);
    paint(arc(128, 140, 92, 30, 0, Math.PI, 24).concat([[36, 140], [36, 176]]).concat(arc(128, 176, 92, 30, Math.PI, 0, 24)).concat([[220, 176], [220, 140]]), '#f1ede2', { shade: 0.35 });
    paint(E(128, 140, 92, 30, 0, 0.01), '#fbf9f2', { liner: false, gran: false });
    for (let i = 0; i < 20; i++) dot(60 + rand() * 140, 130 + rand() * 20, 1.2, '#d8cdbb', 0.8);
  },
  yogurt: () => bowl((cx, y, rx) => {
    paint(E(cx, y + 2, rx * 0.9, 18), '#fbf8f0', { shade: 0.25, gran: false, liner: false });
    ink(arc(cx, y, 30, 6, 0, TAU * 0.8, 20), { color: '#d8cdbb', a: 0.8, w: 2 });
  }, { color: '#d8e4dc', stripe: '#5a8f6a' }),
  paneer() {
    cube(40, 140, 56, '#fbf8f0', '#f1ede2', '#dad3c2');
    cube(116, 152, 52, '#fbf8f0', '#f1ede2', '#dad3c2');
    cube(84, 92, 48, '#fbf8f0', '#f1ede2', '#dad3c2');
  },
  ghee: () => jar('#e8b84a', '#a8783a'),

  // ---- grains
  flour() {
    shadow(128, 214, 84, 10);
    paint(sym(128, [[60, 86], [72, 120], [80, 180], [74, 210], [60, 216]]), '#d9c79f', { liner: true });
    paint(E(128, 88, 60, 16), '#f8f4ea', { liner: false, gran: false });
    paint(densify([[76, 90], [100, 66], [128, 58], [158, 66], [182, 90]], 5), '#fbf8f0', { gran: false, liner: false, shade: 0.2 });
    ink(arc(128, 150, 50, 30, 0.3, Math.PI - 0.3, 16), { color: '#8a6a4a', a: 0.4 });
    for (let i = 0; i < 4; i++) paint(leaf(128 + (i - 1.5) * 10, 168, 30, 5, -Math.PI / 2 + (i - 1.5) * 0.3), '#c9a46a', { small: true });
  },
  rice: () => grainBowl('#f1ece0', (x, y) => paint(leaf(x - 4, y, 9, 2.4, rand() * TAU), '#fbf8f0', { small: true }), 90),
  pasta() {
    shadow(128, 192, 90, 10);
    for (let i = 0; i < 26; i++) {
      const off = (i - 13) * 2.6;
      ink([[40 + off, 196 - off * 0.3], [128 + off, 130 + R(3)], [216 + off, 66 + off * 0.3]], { color: i % 3 ? '#e9c46a' : '#d4a84a', a: 0.95, w: 2.6 });
    }
    paint(rotate(rrect(112, 116, 32, 30, 4), 128, 131, -0.62), '#b5543c', { liner: false });
  },
  noodles: () => bowl((cx, y, rx) => {
    paint(E(cx, y + 4, rx * 0.9, 18), '#d9a050', { liner: false, gran: false });
    for (let i = 0; i < 12; i++) {
      const pts = [];
      for (let k = 0; k <= 20; k++) pts.push([cx - rx * 0.7 + k * rx * 0.07, y - 6 + Math.sin(k * 0.9 + i) * 5 + (i - 6) * 1.6]);
      ink(pts, { color: '#f0d48a', a: 0.9, w: 2.4 });
    }
    paint(rrect(cx - 40, y - 70, 120, 6, 3, -0.5), '#7a4a2a', { small: true });
    paint(rrect(cx - 30, y - 60, 120, 6, 3, -0.4), '#7a4a2a', { small: true });
  }, { color: '#f1ece2', stripe: '#b5433a' }),
  bread() {
    shadow(128, 186, 104, 12);
    paint(band([24, 182], [128, 128], [232, 82], 22, 22, 30, (t) => 0.75 + Math.sin(Math.PI * t) * 0.35), '#c98a45', { gloss: true });
    for (let i = 0; i < 5; i++) {
      const t = 0.18 + i * 0.16;
      const x = 24 + t * 208, y = 182 - t * 100 + Math.sin(Math.PI * t) * -10;
      paint(leaf(x - 14, y + 6, 30, 5, -0.75), '#f0d49a', { small: true });
    }
  },
  corn() {
    for (let i = 0; i < 3; i++) paint(leaf(70, 210, 170, 22, -0.95 + (i - 1) * 0.28, { skew: 0.4 }), i === 1 ? '#8ab05a' : '#a6c67a', { liner: false });
    const cob = band([82, 196], [128, 134], [182, 56], 28, 20);
    paint(cob, '#ebc23b', { gloss: true });
    ctx.save();
    ctx.clip(pathOf(cob));
    for (let i = 0; i < 70; i++) {
      const t = (i % 14) / 14, row = Math.floor(i / 14);
      const x = 82 + t * 100 + (row - 2) * 9, y = 196 - t * 140 + (row - 2) * 5;
      paint(E(x, y, 5.5, 4.5, -0.9), '#f2d55a', { small: true, gloss: true });
    }
    ctx.restore();
    paint(leaf(76, 214, 120, 18, -1.25, { skew: 0.4 }), '#8ab05a', { liner: false });
  },
  flatbread() {
    shadow(128, 186, 98, 14);
    paint(E(128, 150, 98, 46, 0, 0.04), '#e1b46e', { gloss: false, light: 0.5 });
    for (let i = 0; i < 22; i++) paint(E(50 + rand() * 156, 126 + rand() * 48, 3 + rand() * 6, 2 + rand() * 3, rand()), '#7a4a2a', { small: true, wash: 0.4 });
  },
  bulgur: () => grainBowl('#c9a05a', (x, y) => paint(E(x, y, 3, 2.4, rand()), '#b8883a', { small: true }), 80),
  couscous: () => grainBowl('#e5c97a', (x, y) => dot(x, y, 1.6, '#c9a24a', 0.7), 160),
  tapioca() {
    shadow(128, 190, 90, 12);
    pile(48, 128, 186, 84, 70, (x, y) => paint(E(x, y, 9, 9), '#eef0ea', { small: true, gloss: true }));
  },
  yeast() {
    cube(70, 124, 80, '#e6d6ae', '#d8c49a', '#bfa97a');
    for (let i = 0; i < 8; i++) paint(E(184 + rand() * 30, 196 + rand() * 12, 5, 4, rand(), 0.2), '#d8c49a', { small: true });
  },

  // ---- legumes
  chickpeas() {
    shadow(128, 190, 92, 12);
    pile(34, 128, 186, 86, 72, (x, y) => {
      paint(E(x, y, 13, 12, 0, 0.08), '#d9b57a', { small: false, liner: false, gran: false, blot: false, gloss: true });
      dot(x + 6, y - 7, 2, '#a8803a', 0.7);
    });
  },
  lentils() {
    shadow(128, 190, 92, 12);
    pile(110, 128, 186, 86, 70, (x, y) => paint(E(x, y, 5.5, 4, R(0.4)), '#d9783a', { small: true, gloss: true }));
  },
  beans() {
    shadow(128, 190, 92, 12);
    pile(36, 128, 186, 86, 70, (x, y) => paint(rotate(band([x - 11, y], [x, y - 7], [x + 11, y], 6, 6), x, y, rand() * TAU), '#2e2a33', { small: false, liner: false, gran: false, blot: false, gloss: true }));
  },
  tofu() {
    cube(52, 116, 100, '#fbf9f2', '#f1ede2', '#dcd6c8');
  },
  miso: () => bowl((cx, y, rx) => {
    mound('#b0773a', cx, y, rx, 30);
    paint(rrect(cx + 10, y - 66, 90, 12, 6, -0.6), '#c9a46a', { small: true });
  }, { color: '#3e4a5a', stripe: '#b5543c', inside: '#2e3644' }),
  'soy sauce': () => bottle('sauce', '#3a2418', { glass: '#c8bcb0', cap: '#c0392b', level: 96 }),

  // ---- nuts & seeds
  peanut() {
    shadow(128, 190, 90, 12);
    for (const [x, y, r] of [[100, 132, -0.4], [160, 160, 0.3]]) {
      const pts = [];
      for (let i = 0; i < 60; i++) {
        const t = (i / 60) * TAU;
        const pinch = 1 - 0.22 * Math.pow(Math.cos(t), 2) * 0 - 0.2 * Math.pow(Math.sin(t), 2) * (Math.abs(Math.cos(t)) < 0.3 ? 1 : 0);
        pts.push([Math.cos(t) * 52, Math.sin(t) * 22 * (0.8 + 0.4 * Math.abs(Math.cos(t))) * pinch]);
      }
      const p = rotate(pts.map(([a, b]) => [a + x, b + y]), x, y, r);
      paint(p, '#d9b98a', { gloss: true });
      for (let i = 0; i < 12; i++) dot(x + R(40), y + R(14), 1.2, '#8a6a42', 0.5);
    }
    paint(E(70, 190, 12, 9, 0.4), '#c9884a', { small: true, gloss: true });
    paint(E(96, 198, 12, 9, -0.3), '#c9884a', { small: true, gloss: true });
  },
  almond() {
    shadow(128, 190, 90, 12);
    for (const [x, y, a] of [[84, 150, -0.3], [138, 136, 0.2], [176, 172, -0.8]]) {
      paint(leaf(x - 30, y, 62, 22, a, { skew: 0.6 }), '#b7774a', { gloss: true });
      for (let i = 0; i < 4; i++) ink([[x - 20 + i * 10, y - 10], [x - 14 + i * 10, y + 10]].map(([px, py]) => rotate([[px, py]], x, y, a)[0]), { a: 0.25, w: 1 });
    }
  },
  walnut() {
    roundFruit(110, 136, 64, '#a87a4a', { paint: { gloss: false } });
    for (let i = 0; i < 14; i++) ink(curve([60 + rand() * 100, 90 + rand() * 90], [60 + rand() * 100, 90 + rand() * 90], [60 + rand() * 100, 90 + rand() * 90]), { a: 0.35, w: 1.1 });
    ink(curve([110, 74], [100, 136], [112, 198]), { a: 0.6, w: 1.6 });
    paint(E(184, 182, 34, 24, 0.2, 0.12), '#c9a06a', { gloss: false });
    for (let i = 0; i < 6; i++) ink(curve([162 + i * 7, 168], [166 + i * 7, 182], [160 + i * 8, 196]), { a: 0.35, w: 1 });
  },
  pistachio() {
    shadow(128, 190, 90, 12);
    for (const [x, y, a] of [[90, 140, -0.4], [150, 128, 0.3], [130, 180, -1.2], [190, 176, 0.8]]) {
      paint(E(x, y, 26, 18, a), '#e3cfa4', { liner: true });
      paint(E(x + Math.cos(a) * 6, y + Math.sin(a) * 6, 15, 8, a), '#8fae4a', { liner: false, gloss: true });
    }
  },
  'pine nuts'() {
    shadow(128, 190, 90, 12);
    pile(46, 128, 186, 86, 66, (x, y) => paint(leaf(x - 8, y, 18, 6, rand() * TAU, { skew: 0.6 }), '#ecd9a8', { small: true, gloss: true }));
  },
  sesame() {
    bowl((cx, y, rx) => pile(180, cx, y + 2, rx * 0.8, 30, (x, yy) => paint(leaf(x - 2.5, yy, 5, 1.8, rand() * TAU), '#efe1b8', { small: true })), { rx: 80, rimY: 140, depth: 58, color: '#2f2a2a', inside: '#3a3434', stripe: '#c9a24a' });
  },
  tahini: () => jar('#c9a46e', '#5a4a3a'),

  // ---- pantry
  'olive oil'() {
    bottle('oil', '#a9a83a', { glass: '#cfd6b8', cap: '#5a6a2a', level: 100 });
    paint(leaf(150, 200, 70, 9, -0.6), '#8a9a72', { liner: false });
    paint(E(196, 186, 9, 12, 0.3), '#6a7a2a', { small: true, gloss: true });
  },
  'vegetable oil': () => bottle('oil', '#e8c84a', { glass: '#e2e6d6', cap: '#c0392b', level: 96 }),
  'sesame oil': () => bottle('sauce', '#b0702a', { glass: '#d6cbb8', cap: '#3a2a22', level: 104 }),
  'palm oil': () => jar('#d9542a', '#3a6a3a'),
  salt() {
    shadow(128, 196, 90, 12);
    pile(70, 128, 192, 84, 70, (x, y) => paint(rotate(rrect(x - 4, y - 4, 8, 8, 1.5), x, y, rand()), '#f4f4f0', { small: true, gloss: true, edge: 0.7 }));
  },
  sugar() {
    cube(40, 138, 50, '#fdfcf7', '#f3f1ea', '#dddbd2');
    cube(104, 150, 50, '#fdfcf7', '#f3f1ea', '#dddbd2');
    cube(70, 92, 48, '#fdfcf7', '#f3f1ea', '#dddbd2');
    pile(40, 180, 206, 30, 16, (x, y) => dot(x, y, 1.5, '#d8d6cc', 0.9));
  },
  honey() {
    jar('#e3a32a', '#a87a4a', { extra: (cx, top) => {
      ink([[cx + 30, top - 30], [cx + 52, top - 74]], { color: '#8a5a32', a: 0.9, w: 4 });
      paint(E(cx + 56, top - 84, 14, 10, -1.1), '#c9884a', { gloss: true });
      ink([[cx + 30, top], [cx + 32, top + 30]], { color: '#e3a32a', a: 0.9, w: 5 });
    } });
  },
  vinegar: () => bottle('cruet', '#c9905a', { glass: '#e2dcd0', cap: '#5a3a24', level: 120, label: false }),
  'white wine'() {
    bottle('wine', '#d9d28a', { glass: '#b8c79a', cap: '#c9a24a', level: 104 });
  },
  'red wine'() {
    bottle('wine', '#5a1a2a', { glass: '#4a5a3a', cap: '#7a1a2a', level: 104 });
  },
  stock: () => liquidBowl('#d9a85a', (cx, y) => {
    paint(leaf(cx - 30, y, 30, 9, -0.2), '#4f8a3e', { small: true });
    for (let i = 0; i < 8; i++) dot(cx + R(60), y + R(8), 2.4, '#f6e2a0', 0.8);
    for (let i = 0; i < 3; i++) ink(curve([cx - 20 + i * 20, y - 24], [cx - 30 + i * 20, y - 44], [cx - 16 + i * 20, y - 64]), { color: '#a89a8a', a: 0.35, w: 1.4 });
  }),
  coffee() {
    shadow(128, 190, 92, 12);
    pile(26, 128, 186, 86, 72, (x, y) => {
      const a = rand() * TAU;
      paint(E(x, y, 14, 10, a), '#5a3a28', { gloss: true, liner: false, gran: false, blot: false });
      ink(rotate([[x - 10, y], [x, y + 2], [x + 10, y]], x, y, a), { color: '#2a1a12', a: 0.8, w: 1.4 });
    });
  },
  cocoa: () => powderBowl('#6a3e2a'),
  chocolate() {
    shadow(128, 196, 96, 12);
    const bar = rotate(rrect(46, 76, 164, 120, 6), 128, 136, -0.18);
    paint(bar, '#5a3426', { gloss: true });
    for (let i = 1; i < 4; i++) ink(rotate([[46 + i * 41, 80], [46 + i * 41, 192]], 128, 136, -0.18), { color: '#2a160e', a: 0.5, w: 1.4 });
    for (let i = 1; i < 3; i++) ink(rotate([[50, 76 + i * 40], [206, 76 + i * 40]], 128, 136, -0.18), { color: '#2a160e', a: 0.5, w: 1.4 });
  },
  'fish sauce': () => bottle('slim', '#a8642a', { glass: '#d6cbb8', cap: '#2e5a3a', level: 96 }),
  hoisin: () => jar('#5a2a24', '#c0392b'),
  mirin: () => bottle('slim', '#e0c070', { glass: '#e6e2cc', cap: '#c9a24a', level: 92, labelColor: '#f6e8e0' }),
  gochujang() {
    shadow(128, 206, 92, 10);
    paint(rrect(42, 104, 172, 100, 18), '#b8302a', { gloss: true });
    paint(rrect(36, 88, 184, 26, 10), '#8a2420', { gran: false });
    paint(rrect(80, 134, 96, 40, 6), '#f3ead6', { gran: false, liner: false, wash: 0.85, shade: 0.2 });
    line(100, 152, 156, 152, { a: 0.4, w: 1 });
  },
  'chili bean paste': () => jar('#8a2a20', '#d9a83a'),
  mayonnaise: () => jar('#f4e9c8', '#4d77a6'),
  'coconut milk': () => liquidBowl('#fbf8f0', (cx, y) => {
    paint(arc(cx + 70, y + 40, 34, 26, 0, Math.PI, 16).concat(arc(cx + 70, y + 40, 34, 10, Math.PI, 0, 16)), '#6a4a30', { small: false });
    paint(E(cx + 70, y + 40, 30, 8), '#f6f1e6', { small: true });
  }),

  // ---- added ingredients
  beet() {
    for (let i = 0; i < 3; i++) {
      const a = -Math.PI / 2 + (i - 1) * 0.45;
      ink([[128, 92], [128 + Math.cos(a) * 40, 92 + Math.sin(a) * 40]], { color: '#a8324a', a: 0.9, w: 3 });
      paint(leaf(128 + Math.cos(a) * 34, 92 + Math.sin(a) * 34, 58, 18, a), '#4f7a3a', { liner: false });
    }
    roundFruit(128, 144, 58, '#8a1f45', { sy: 0.92 });
    paint(band([128, 196], [132, 214], [124, 236], 8, 1), '#9a3a55', { liner: false, gran: false });
    ink(arc(128, 144, 30, 30, 0.3, 2.6, 14), { color: '#c96a8a', a: 0.4, w: 1.2 });
  },
  cassava() {
    shadow(128, 188, 100, 12);
    paint(band([28, 172], [120, 120], [214, 112], 8, 26, 30, (t) => 0.6 + Math.sin(Math.PI * Math.min(1, t * 1.15)) * 0.5), '#7a5236');
    for (let i = 0; i < 12; i++) line(50 + i * 13, 150 - i * 3 + R(6), 56 + i * 13, 140 - i * 3 + R(6), { color: '#4a2a1a', a: 0.35, w: 1 });
    paint(E(212, 112, 18, 26, 0.2), '#f3ead6', { gran: false, liner: true });
    ink(arc(212, 112, 16, 24, 0, TAU, 24), { color: '#a8603a', a: 0.6, w: 2.5 });
  },
  okra() {
    for (let i = 0; i < 3; i++) {
      const ox = i * 30 - 30;
      const p0 = [96 + ox, 66 + Math.abs(ox) * 0.3], p2 = [142 + ox * 1.4, 214];
      paint(band(p0, [110 + ox, 150], p2, 15, 2), i === 1 ? '#5e9a3a' : '#6faa48', { gloss: true });
      ink(curve(p0, [114 + ox, 150], p2), { color: '#3e6a26', a: 0.35, w: 1 });
      paint(rrect(p0[0] - 9, p0[1] - 14, 18, 16, 5), '#8a9a4a', { small: true });
    }
  },
  shallot() {
    for (const [x, y, s] of [[96, 140, 1], [166, 156, 0.85]]) {
      shadow(x, y + 66 * s, 40 * s, 7);
      const pts = sym(x, [[2, y - 74 * s], [10 * s, y - 52 * s], [34 * s, y - 20 * s], [44 * s, y + 20 * s], [32 * s, y + 52 * s], [4, y + 62 * s]]);
      paint(pts, '#b8705a', { gloss: true });
      for (const k of [-0.6, 0, 0.6]) ink(curve([x, y - 64 * s], [x + k * 60 * s, y], [x + k * 22 * s, y + 60 * s]), { a: 0.3, w: 1 });
      ink([[x, y - 72 * s], [x - 3, y - 88 * s]], { color: '#8a5a3a', a: 0.8, w: 2 });
    }
  },
  plantain() {
    shadow(128, 184, 100, 12);
    const pts = band([30, 150], [128, 200], [226, 120], 10, 8, 30, (t) => 1 + 1.6 * Math.sin(Math.PI * t));
    paint(pts, '#e0b83a', { gloss: true });
    ctx.save();
    ctx.clip(pathOf(pts));
    for (let i = 0; i < 9; i++) paint(E(50 + rand() * 160, 150 + rand() * 40, 8 + rand() * 10, 4 + rand() * 5, rand()), '#3a2a1a', { small: true, wash: 0.5 });
    ctx.restore();
    paint(E(30, 150, 7, 8), '#3a2a1a', { small: true });
    paint(rrect(218, 106, 18, 12, 4, -0.7), '#5a4a2a', { small: true });
  },
  ackee() {
    shadow(128, 200, 80, 12);
    for (let i = 0; i < 3; i++) {
      const a = -Math.PI / 2 + (i - 1) * 2.1;
      paint(leaf(128, 150, 74, 34, a, { skew: 0.6 }), '#d8442e', { gloss: true });
    }
    for (const [x, y, a] of [[110, 160, -0.5], [146, 150, 0.6], [126, 188, 1.6]]) {
      paint(E(x, y, 15, 19, a), '#f2d76a', { gloss: false, liner: false });
      paint(E(x + Math.cos(a - 1.57) * 14, y + Math.sin(a - 1.57) * 14, 6, 7, a), '#1f1a1a', { gloss: true, small: true });
    }
  },
  cherry() {
    ink(curve([100, 160], [110, 90], [150, 46]), { color: '#5a6e2e', a: 0.9, w: 2.6 });
    ink(curve([168, 170], [160, 100], [150, 46]), { color: '#5a6e2e', a: 0.9, w: 2.6 });
    paint(leaf(150, 46, 64, 18, -0.3), greenLeaf, { gloss: true });
    roundFruit(96, 176, 36, '#a8182a');
    roundFruit(168, 184, 34, '#b8202e');
  },
  strawberry() {
    shadow(128, 212, 64, 9);
    const pts = sym(128, [[10, 70], [56, 78], [72, 110], [62, 150], [36, 192], [6, 214]]);
    paint(pts, '#d8303a', { gloss: true });
    for (let i = 0; i < 34; i++) {
      const y = 90 + rand() * 110, w = 60 * (1 - (y - 80) / 150);
      paint(leaf(128 + R(w) - 2, y, 6, 2.4, -Math.PI / 2), '#f2d76a', { small: true });
    }
    for (let i = 0; i < 6; i++) paint(leaf(128, 72, 36, 10, Math.PI + (i / 5) * Math.PI), '#4f8a3e', { liner: false });
    ink([[128, 70], [130, 50]], { color: '#4f7a33', a: 0.9, w: 3.5 });
  },
  caraway() {
    shadow(128, 196, 96, 12);
    pile(200, 128, 196, 96, 104, (x, y) => {
      const a = rand() * TAU;
      ink([[x - Math.cos(a) * 7, y - Math.sin(a) * 7], [x + R(2), y + R(2)], [x + Math.cos(a) * 7, y + Math.sin(a) * 7]], { color: '#5a3e26', a: 0.9, w: 2.6 });
    });
  },
  sumac: () => powderBowl('#8a2a3a'),
  allspice() {
    bowl((cx, y, rx) => pile(60, cx, y + 2, rx * 0.78, 36, (x, yy) => paint(E(x, yy, 7, 7, 0, 0.12), '#6a4430', { small: true, gloss: true })), { rx: 80, rimY: 140, depth: 60, stripe: '#8a5a3a' });
  },
  goat() {
    shadow(128, 196, 88, 12);
    paint(rrect(150, 50, 18, 90, 8, 0.5), '#efe3cc', { liner: true });
    paint(E(118, 148, 78, 52, 0.15, 0.1), '#f1e2cf');
    paint(E(112, 152, 64, 40, 0.15, 0.09), '#a8524a', { gloss: true });
    for (let i = 0; i < 6; i++) ink([[70 + rand() * 80, 130 + rand() * 30], [80 + rand() * 80, 140 + rand() * 30]], { color: '#f6e6d6', a: 0.5, w: 1.2 });
  },
  'sour cream': () => bowl((cx, y, rx) => {
    paint(E(cx, y + 2, rx * 0.9, 18), '#fbf8f0', { shade: 0.2, gran: false, liner: false });
    paint(densify([[cx - 50, y + 6], [cx - 30, y - 24], [cx, y - 40], [cx + 22, y - 22], [cx + 46, y + 6]], 5), '#fffcf4', { shade: 0.3 });
    for (let i = 0; i < 10; i++) paint(rrect(cx - 40 + rand() * 80, y - 30 + rand() * 30, 8, 3, 1.5, rand() * 3), '#5a9a3a', { small: true });
  }, { color: '#e8eef4', stripe: '#4d77a6' }),
  'black-eyed peas'() {
    shadow(128, 190, 92, 12);
    pile(40, 128, 186, 86, 72, (x, y) => {
      const a = rand() * TAU;
      paint(E(x, y, 12, 9, a), '#ede2c6', { small: false, liner: false, gran: false, blot: false, shade: 0.35 });
      paint(E(x + Math.cos(a + 1.57) * 3, y + Math.sin(a + 1.57) * 3, 4, 2.6, a), '#1f1a1a', { small: true });
    });
  },
  'shrimp paste'() {
    cube(58, 120, 88, '#9a6a62', '#8a5a52', '#6a3e38');
    paint(rotate(rrect(40, 196, 176, 16, 4), 128, 204, 0.02), '#d9c79f', { liner: false, gran: false });
  },
  'dulce de leche': () => jar('#b8743a', '#e8d9b8', { extra: (cx, top) => {
    ink(curve([cx + 20, top - 8], [cx + 34, top + 20], [cx + 30, top + 40]), { color: '#b8743a', a: 0.9, w: 6 });
  } }),
  mustard: () => jar('#d9b02a', '#4a6a8a', { w: 92 }),
  beer() {
    shadow(118, 214, 66, 9);
    ink(arc(178, 150, 30, 40, -1.4, 1.4, 16), { color: '#d8cdbb', a: 0.9, w: 9 });
    paint(rrect(62, 82, 114, 132, 12), '#d99a2a', { gloss: true, light: 0.5 });
    for (let i = 0; i < 14; i++) dot(80 + rand() * 80, 110 + rand() * 90, 1.6, '#fff4d0', 0.8);
    paint(densify([[56, 92], [66, 64], [92, 58], [118, 52], [146, 58], [172, 62], [182, 92], [120, 100]], 5), '#fbf6ea', { shade: 0.2, gran: false });
  },
  'maple syrup'() {
    bottle('cruet', '#b8661a', { glass: '#e6dccc', cap: '#7a3a1a', level: 110 });
    for (let i = 0; i < 5; i++) paint(leaf(128, 186, 14, 6, -Math.PI / 2 + (i - 2) * 0.7), '#c0392b', { small: true });
  },

  salmon() {
    shadow(128, 190, 96, 12);
    const fillet = densify([[30, 150], [70, 110], [150, 96], [220, 112], [228, 140], [190, 170], [100, 180], [44, 172]], 6);
    paint(fillet, '#ee8a5e', { gloss: true });
    for (let i = 0; i < 8; i++) ink(curve([50 + i * 22, 110 + i], [62 + i * 22, 140], [52 + i * 22, 174 - i]), { color: '#fbe0cc', a: 0.8, w: 2 });
    paint(densify([[44, 172], [100, 180], [190, 170], [228, 140], [226, 150], [190, 182], [100, 192], [46, 182]], 5), '#8a9aa8', { liner: false, gran: false });
  },
  lingonberry() {
    paint(leaf(60, 120, 40, 12, -0.4), greenLeaf, { gloss: true });
    paint(leaf(180, 200, 36, 11, 2.6), greenLeaf, { gloss: true });
    shadow(128, 196, 80, 12);
    pile(30, 128, 192, 74, 80, (x, y) => paint(E(x, y, 11, 11), rand() > 0.3 ? '#c0182a' : '#d8303a', { small: false, liner: false, gran: false, blot: false, gloss: true }));
  },
  ham() {
    shadow(128, 200, 92, 12);
    paint(E(128, 140, 92, 64, -0.1, 0.05), '#f1d6c4');
    paint(E(124, 144, 80, 52, -0.1, 0.05), '#e88a8a', { gloss: true });
    for (let i = 0; i < 4; i++) ink(arc(124, 144, 70 - i * 16, 44 - i * 10, 0.4, 2.8, 14), { color: '#f6d6d0', a: 0.6, w: 1.4 });
    paint(rrect(196, 118, 40, 16, 7, 0.3), '#efe3cc', { small: true });
  },
  pandan() {
    for (let i = 0; i < 6; i++) paint(leaf(128 + (i - 2.5) * 4, 226, 190 - Math.abs(i - 2.5) * 20, 12, -Math.PI / 2 + (i - 2.5) * 0.18, { skew: 0.3 }), i % 2 ? '#3f8a3e' : '#5aa04a', { liner: i === 2 });
    paint(rrect(108, 196, 40, 14, 5), '#d9c79f', { small: true });
  },
  kale() {
    for (let i = 0; i < 3; i++) {
      const a = -Math.PI / 2 + (i - 1) * 0.5;
      ink([[128, 228], [128 + Math.cos(a) * 60, 228 + Math.sin(a) * 60]], { color: '#a8c08a', a: 0.9, w: 4 });
      const L = leaf(128 + Math.cos(a) * 40, 228 + Math.sin(a) * 40, 150, 44, a, { serr: 14, skew: 0.5 });
      paint(L, i === 1 ? '#2f6a4a' : '#3f7a52', { gloss: true });
      veins(null, [128 + Math.cos(a) * 40, 228 + Math.sin(a) * 40], a, 140, { color: '#b8d0a8' });
    }
  },
  rye() {
    shadow(128, 206, 90, 10);
    paint(E(128, 162, 92, 50, 0, 0.04), '#6a4a32', { gloss: true });
    for (let i = 0; i < 30; i++) dot(60 + rand() * 136, 130 + rand() * 56, 1.6, '#c9a46a', 0.7);
    for (let s2 = 0; s2 < 3; s2++) {
      const x = 96 + s2 * 32;
      ink(curve([x, 130], [x + 4, 90], [x + 14, 40]), { color: '#c9a46a', a: 0.9, w: 1.8 });
      for (let k = 0; k < 7; k++) paint(leaf(x + 10 + k * 0.8, 50 + k * 8, 12, 3.5, -Math.PI / 2 + (k % 2 ? 0.5 : -0.5)), '#d9b56a', { small: true });
    }
  },

  grape() {
    ink(curve([128, 40], [132, 56], [128, 72]), { color: '#6a4a2a', a: 0.9, w: 3.5 });
    paint(leaf(132, 52, 60, 26, -0.2, { serr: 5 }), '#6a9a3a', { gloss: false });
    shadow(128, 214, 50, 8);
    const rows = [[5, 84], [5, 108], [4, 132], [4, 156], [3, 178], [2, 198]];
    rows.forEach(([n, y], r) => {
      for (let i = 0; i < n; i++) paint(E(128 + (i - (n - 1) / 2) * 24 + R(2), y + R(2), 13, 14), r % 2 ? '#6a3a7a' : '#7a4a8a', { small: false, liner: false, gran: false, blot: false, gloss: true });
    });
  },
  'fava beans'() {
    shadow(128, 192, 96, 12);
    paint(band([30, 120], [128, 80], [226, 116], 8, 6, 30, (t) => 0.6 + Math.sin(Math.PI * t) * 2.4), '#7aa84a');
    for (let i = 0; i < 4; i++) paint(E(74 + i * 36, 104 - Math.sin((i / 3) * Math.PI) * 8, 15, 11), '#c8dc8a', { gloss: true, liner: false });
    pile(16, 128, 196, 86, 40, (x, y) => paint(E(x, y, 13, 10, R(0.6)), '#b8cf7a', { small: false, liner: false, gran: false, blot: false, gloss: true }));
  },
  pumpkin() {
    shadow(128, 208, 96, 12);
    for (const [dx, rx, c] of [[-46, 44, '#d9772a'], [46, 44, '#d9772a'], [-20, 46, '#e8862e'], [20, 46, '#e8862e'], [0, 40, '#ef9436']]) paint(E(128 + dx, 146, rx, 62), c, { liner: dx === 0, gloss: dx === 0 });
    paint(band([126, 88], [124, 70], [136, 56], 7, 5), '#6a7a3a', { liner: false });
  },
  banana() {
    shadow(128, 188, 100, 12);
    for (let i = 0; i < 2; i++) {
      const oy = i * 26;
      paint(band([34, 104 + oy], [100, 200 + oy], [222, 120 + oy], 3, 4, 30, (t) => 1 + 4.2 * Math.sin(Math.PI * t)), i ? '#e9c43a' : '#f0d050', { gloss: true });
      paint(rrect(216, 106 + oy, 16, 10, 4, -0.8), '#6a5a2a', { small: true });
    }
  },
  macadamia() {
    shadow(128, 196, 92, 12);
    paint(arc(170, 160, 44, 40, Math.PI, TAU, 18).concat(arc(170, 160, 44, 14, 0, Math.PI, 18)), '#7a5236', { gloss: true });
    paint(E(170, 160, 34, 12), '#f1e2c0', { small: true });
    for (const [x, y] of [[76, 154], [112, 176], [96, 128], [132, 140]]) paint(E(x, y, 18, 17), '#ecd9a8', { gloss: true, liner: false, gran: false, blot: false });
  },
  cloves() {
    shadow(128, 192, 92, 12);
    pile(34, 128, 188, 86, 76, (x, y) => {
      const a = rand() * TAU;
      ink([[x, y], [x + Math.cos(a) * 18, y + Math.sin(a) * 18]], { color: '#5a2e1e', a: 0.95, w: 3.4 });
      paint(E(x, y, 5.5, 5.5), '#7a3e26', { small: true, gloss: true });
    });
  },
  jackfruit() {
    shadow(118, 204, 84, 12);
    const pts = E(110, 136, 76, 64, -0.2, 0.05);
    paint(pts, '#8aa83a', { gloss: false });
    ctx.save();
    ctx.clip(pathOf(pts));
    for (let i = 0; i < 160; i++) dot(40 + rand() * 150, 70 + rand() * 140, 1.8, '#4a6a1a', 0.55);
    ctx.restore();
    paint(E(184, 188, 30, 22, 0.4), '#f2c94a', { gloss: true });
    paint(E(184, 188, 8, 6, 0.4), '#8a6a3a', { small: true });
  },

  'cheese curds'() {
    shadow(128, 192, 92, 12);
    pile(26, 128, 190, 84, 74, (x, y) => paint(E(x, y, 14 + rand() * 5, 11 + rand() * 4, rand() * 3, 0.2), rand() > 0.5 ? '#f3e2a6' : '#f6ecc6', { small: false, liner: false, gran: false, blot: false, gloss: true }));
  },
  raisins() {
    shadow(128, 192, 92, 12);
    pile(46, 128, 190, 84, 74, (x, y) => {
      paint(E(x, y, 9, 7, rand() * 3, 0.25), rand() > 0.5 ? '#4a2a3a' : '#5a3226', { small: true, gloss: true });
      ink([[x - 4, y - 1], [x + 1, y + 2], [x + 4, y - 1]], { color: '#2a1418', a: 0.5, w: 0.8 });
    });
  },
  tea() {
    shadow(118, 210, 74, 9);
    ink(arc(186, 158, 22, 26, -1.3, 1.3, 14), { color: '#d8cdbb', a: 0.95, w: 8 });
    const cup = arc(118, 120, 74, 86, 0, Math.PI, 30).concat(arc(118, 120, 74, 16, Math.PI, 0, 30));
    paint(E(118, 120, 74, 16), '#e6dccb', { gran: false, liner: false, blot: false });
    paint(E(118, 124, 66, 12), '#b0702a', { liner: false, gloss: true });
    paint(cup, '#f1ece2', { shade: 0.4, gran: false, blot: false });
    ink(arc(118, 150, 70, 20, Math.PI * 0.95, Math.PI * 0.05, 24), { color: '#4d77a6', a: 0.6, w: 2.4 });
    for (let i = 0; i < 6; i++) paint(leaf(170 + rand() * 50, 214 + rand() * 10, 16, 5, rand() * 6), '#4a5a2a', { small: true });
    for (let i = 0; i < 3; i++) ink(curve([96 + i * 20, 100], [86 + i * 20, 76], [100 + i * 20, 52]), { color: '#a89a8a', a: 0.35, w: 1.4 });
  },
  quinoa: () => grainBowl('#ecdcb2', (x, y) => {
    dot(x, y, 2.2, '#e8d29a', 0.9);
    ink(arc(x, y, 2.2, 2.2, 0, 5, 6), { color: '#b8984a', a: 0.6, w: 0.6 });
  }, 150),
  pecan() {
    shadow(128, 192, 92, 12);
    for (const [x, y, a] of [[90, 140, -0.4], [150, 128, 0.2], [124, 178, -1.1]]) {
      const pts = rotate(band([x - 34, y], [x, y - 6], [x + 34, y], 14, 14, 24, (t) => 0.6 + 0.5 * Math.sin(Math.PI * t)), x, y, a);
      paint(pts, '#8a4a26', { gloss: true });
      ink(rotate([[x - 30, y], [x, y - 4], [x + 30, y]], x, y, a), { color: '#4a2412', a: 0.7, w: 1.4 });
      for (let k = 0; k < 6; k++) ink(rotate([[x - 24 + k * 10, y - 9], [x - 22 + k * 10, y - 2]], x, y, a), { color: '#4a2412', a: 0.4, w: 1 });
    }
    paint(E(186, 186, 26, 14, 0.3), '#b88a5a', { gloss: true });
  },
  blueberry() {
    paint(leaf(56, 110, 44, 14, -0.5), greenLeaf, { gloss: true });
    shadow(128, 194, 84, 12);
    pile(28, 128, 190, 78, 80, (x, y) => {
      paint(E(x, y, 12, 12), rand() > 0.4 ? '#3a4a8a' : '#4a5a9a', { small: false, liner: false, gran: false, blot: false, gloss: true });
      for (let k = 0; k < 5; k++) line(x + 4, y - 4, x + 4 + Math.cos(k * 1.26) * 3, y - 4 + Math.sin(k * 1.26) * 3, { color: '#1f2440', a: 0.7, w: 0.8 });
    });
  },
  lobster() {
    shadow(128, 200, 84, 12);
    for (let i = 0; i < 2; i++) {
      const sx = i ? 1 : -1;
      ink([[128 + sx * 20, 96], [128 + sx * 44, 70], [128 + sx * 54, 50]], { color: '#a8301e', a: 0.9, w: 4 });
      paint(E(128 + sx * 62, 42, 18, 26, sx * 0.5), '#c8402a', { gloss: true });
      ink(curve([128 + sx * 8, 92], [128 + sx * 70, 70], [128 + sx * 110, 30]), { color: '#a8301e', a: 0.7, w: 1.2 });
    }
    paint(E(128, 116, 26, 34), '#c8402a', { gloss: true });
    for (let k = 0; k < 5; k++) paint(E(128, 152 + k * 13, 22 - k * 2, 9), k % 2 ? '#b8381e' : '#c8402a', { small: false, liner: false, gran: false, blot: false });
    for (let k = 0; k < 3; k++) paint(leaf(128, 214, 22, 8, Math.PI / 2 + (k - 1) * 0.5), '#b8381e', { small: true });
    dot(118, 96, 2.4, '#1f1a1a', 0.9);
    dot(138, 96, 2.4, '#1f1a1a', 0.9);
  },

  // ---- batch 1 ingredients
  tuna() {
    shadow(128, 200, 96, 12);
    const loin = rotate(rrect(46, 84, 164, 70, 12), 128, 119, -0.1);
    paint(loin, '#a82a3a', { gloss: true, shade: 0.55 });
    for (let k = 0; k < 5; k++) ink(rotate([[60 + k * 30, 96], [74 + k * 30, 120], [62 + k * 30, 146]], 128, 119, -0.1), { color: '#e8a0a8', a: 0.5, w: 1.4 });
    for (let k = 0; k < 3; k++) paint(rotate(rrect(64 + k * 44, 164, 38, 30, 7), 128, 180, 0.08 * (k - 1)), k % 2 ? '#b83040' : '#c03a48', { gloss: true, liner: true });
    paint(E(214, 114, 8, 26, 0.1), '#2e3a52', { small: true });
  },
  cod() {
    shadow(128, 190, 96, 12);
    const fillet = densify([[30, 150], [70, 108], [150, 94], [220, 112], [230, 142], [190, 172], [100, 182], [44, 174]], 6);
    paint(fillet, '#f2e8d6', { gloss: true, shade: 0.35 });
    for (let k = 0; k < 8; k++) ink(curve([54 + k * 22, 108 + k], [66 + k * 22, 140], [56 + k * 22, 176 - k]), { color: '#fffaf0', a: 0.9, w: 2 });
    paint(densify([[44, 174], [100, 182], [190, 172], [230, 142], [228, 152], [190, 184], [100, 194], [46, 184]], 5), '#8a9a92', { liner: false, gran: false });
  },
  squid() {
    shadow(128, 206, 84, 10);
    const body = sym(128, [[2, 30], [20, 52], [36, 96], [34, 140], [20, 160], [2, 164]]);
    paint(body, '#d8b4c4', { gloss: true, shade: 0.45 });
    paint(poly([[128, 30], [76, 62], [112, 78], [128, 56], [144, 78], [180, 62]]), '#c898ac', { liner: true, gran: false });
    for (let k = 0; k < 8; k++) {
      const x = 96 + k * 9;
      ink(curve([x, 160], [x + (k - 3.5) * 8, 190], [x + (k - 3.5) * 14, 222 + R(4)]), { color: '#d0a0b4', a: 1, w: 4 });
      ink(curve([x, 160], [x + (k - 3.5) * 8, 190], [x + (k - 3.5) * 14, 222]), { color: '#8a5870', a: 0.35, w: 1 });
    }
    dot(108, 124, 4, '#1f1a1a', 0.9);
    dot(148, 124, 4, '#1f1a1a', 0.9);
    for (let k = 0; k < 14; k++) dot(100 + rand() * 56, 70 + rand() * 80, 1.3, '#8a5870', 0.5);
  },
  octopus() {
    shadow(128, 210, 90, 10);
    for (let k = 0; k < 8; k++) {
      const a = Math.PI * (0.12 + k * 0.108);
      const sx = 128 + Math.cos(a) * 30, sy = 130 + Math.sin(a) * 20;
      const p2 = [128 + Math.cos(a) * 80 + (k % 2 ? 22 : -22), 136 + Math.sin(a) * 66], p3 = [128 + Math.cos(a) * 106 + (k % 2 ? -10 : 12), 190 + Math.sin(a) * 28];
      const path = curve([sx, sy], p2, p3, 24);
      ink(path, { color: '#c0587a', a: 1, w: 9 });
      ink(path, { color: '#8a3050', a: 0.35, w: 1.2 });
      for (let m = 4; m < 24; m += 3) dot(path[m][0], path[m][1] + 2, 1.8, '#f0c8d4', 0.8);
    }
    paint(E(128, 98, 52, 54, 0, 0.05), '#b04870', { gloss: true });
    ctx.save();
    ctx.filter = 'blur(6px)';
    ctx.beginPath();
    ctx.ellipse(112, 78, 20, 14, -0.4, 0, TAU);
    ctx.fillStyle = 'rgba(255,230,236,0.5)';
    ctx.fill();
    ctx.restore();
    dot(108, 112, 6, '#f6ead8', 1);
    dot(148, 112, 6, '#f6ead8', 1);
    dot(109, 113, 3, '#1f1a1a', 1);
    dot(149, 113, 3, '#1f1a1a', 1);
  },
  crab() {
    shadow(128, 204, 96, 10);
    for (let sd = -1; sd <= 1; sd += 2) {
      for (let k = 0; k < 3; k++) {
        const y = 142 + k * 15;
        ink([[128 + sd * 56, y], [128 + sd * (86 + k * 4), y + 8 + k * 6], [128 + sd * (104 + k * 3), y + 34 + k * 5]], { color: '#c0452a', a: 1, w: 4.5 });
        ink([[128 + sd * 56, y], [128 + sd * (86 + k * 4), y + 8 + k * 6], [128 + sd * (104 + k * 3), y + 34 + k * 5]], { color: '#6a2012', a: 0.35, w: 1 });
      }
      ink([[128 + sd * 52, 112], [128 + sd * 86, 82], [128 + sd * 92, 62]], { color: '#c0452a', a: 1, w: 7 });
      paint(E(128 + sd * 96, 48, 20, 26, sd * -0.4), '#d6502e', { gloss: true });
      paint(poly([[128 + sd * 90, 30], [128 + sd * 106, 14], [128 + sd * 106, 36]]), '#b83e24', { small: true, liner: false });
    }
    paint(E(128, 138, 66, 44, 0, 0.04), '#d6502e', { gloss: true, shade: 0.55 });
    for (let k = 0; k < 7; k++) paint(E(78 + k * 16, 106 + Math.abs(k - 3) * -1, 4, 5), '#f6e0c8', { small: true, liner: false });
    ink(arc(128, 150, 40, 22, 0.3, 2.84, 14), { color: '#8a2a14', a: 0.5, w: 1.4 });
    for (const x of [112, 144]) {
      ink([[x, 104], [x, 92]], { color: '#8a2a14', a: 0.9, w: 2 });
      dot(x, 90, 4.5, '#1f1a1a', 0.95);
    }
  },
  mussels() {
    shadow(128, 200, 92, 10);
    const shell = (x, y, ang, sc, open) => {
      paint(leaf(x, y, 100 * sc, 40 * sc, ang, { skew: 0.55 }), '#2c3450', { gloss: true, shade: 0.6, light: 0.55 });
      for (let k = 1; k < 5; k++) ink(rotate(arc(x + 24 * sc, y, 14 * sc * k, 12 * sc * k, -1.0, 1.0, 10), x, y, ang), { color: '#8a96b8', a: 0.4, w: 1 });
      if (open) paint(leaf(x + 14 * sc, y, 74 * sc, 22 * sc, ang, { skew: 0.6 }), '#f0a050', { gloss: true, liner: false });
    };
    shell(56, 148, -0.35, 1, false);
    shell(86, 170, 0.1, 0.95, false);
    shell(100, 112, 0.5, 1, true);
  },
  sardine() {
    shadow(128, 196, 96, 10);
    const fish = (cx, cy, rot) => {
      const body = rotate(densify([[cx - 70, cy], [cx - 36, cy - 17], [cx + 20, cy - 16], [cx + 54, cy - 4], [cx + 60, cy], [cx + 54, cy + 4], [cx + 20, cy + 15], [cx - 36, cy + 14]], 5), cx, cy, rot);
      paint(body, '#8fa6ba', { gloss: true, shade: 0.5 });
      paint(rotate(densify([[cx - 66, cy + 2], [cx - 30, cy + 9], [cx + 20, cy + 9], [cx + 56, cy + 2], [cx + 20, cy + 15], [cx - 36, cy + 14]], 5), cx, cy, rot), '#e4ebf0', { liner: false, gran: false, wash: 0.6 });
      paint(rotate(poly([[cx - 70, cy], [cx - 92, cy - 18], [cx - 86, cy], [cx - 92, cy + 18]]), cx, cy, rot), '#6a8298', { liner: false });
      const eye = rotate([[cx + 46, cy - 4]], cx, cy, rot)[0];
      dot(eye[0], eye[1], 3.4, '#f4f1e6', 1);
      dot(eye[0] + 0.6, eye[1], 1.8, '#1f2a30', 1);
      for (let k = 0; k < 6; k++) ink(rotate([[cx - 30 + k * 12, cy - 13], [cx - 26 + k * 12, cy - 4]], cx, cy, rot), { color: '#3a5a78', a: 0.4, w: 1.2 });
    };
    fish(138, 118, -0.12);
    fish(122, 164, 0.08);
  },
  anchovy() {
    shadow(128, 200, 92, 10);
    paint(E(128, 150, 96, 44, 0, 0.02), '#f1ece2', { gran: false, liner: true, shade: 0.35 });
    for (let k = 0; k < 4; k++) {
      const y = 126 + k * 14;
      const f = band([54, y + 4], [128, y - 8 + (k % 2) * 6], [204, y + 2], 3, 3, 28, (t) => 1 + 2.4 * Math.sin(Math.PI * t));
      paint(f, k % 2 ? '#a65a42' : '#b46a4a', { gloss: true, liner: false });
      ink(curve([54, y + 4], [128, y - 8 + (k % 2) * 6], [204, y + 2]), { color: '#e8c0a0', a: 0.5, w: 1 });
    }
    paint(E(196, 190, 14, 9, 0.4), '#7d8a3a', { small: true, gloss: true });
    paint(leaf(60, 196, 30, 8, -0.2), '#6a9a3a', { small: true });
  },
  turkey() {
    shadow(128, 204, 90, 12);
    paint(rrect(150, 54, 16, 92, 7, 0.52), '#efe4cf', { liner: true });
    paint(E(166, 52, 12, 10), '#efe4cf', { small: true });
    paint(E(184, 66, 12, 10), '#efe4cf', { small: true });
    const meat = sym(0, [[2, 0], [30, 30], [58, 84], [60, 122], [38, 150], [4, 154]]).map(([x, y]) => [x + 108, y + 58]);
    paint(rotate(meat, 120, 136, -0.62), '#b8652a', { gloss: true, shade: 0.55 });
    for (let k = 0; k < 18; k++) dot(60 + rand() * 80, 96 + rand() * 84, 1.6, '#6a3414', 0.35);
    ink(curve([72, 156], [96, 120], [124, 100]), { color: '#e8b078', a: 0.5, w: 2 });
  },
  rabbit() {
    shadow(128, 208, 92, 12);
    for (const [x, a] of [[88, -0.18], [168, 0.18]]) {
      const c = [x, 130];
      paint(rotate(rrect(x - 5, 150, 10, 70, 5), c[0], c[1], a), '#efe4cf', { liner: true });
      const [kx, ky] = rotate([[x, 222]], c[0], c[1], a)[0];
      paint(E(kx - 5, ky, 8, 7), '#efe4cf', { small: true });
      paint(E(kx + 5, ky, 8, 7), '#efe4cf', { small: true });
      const meat = sym(x, [[2, 46], [22, 54], [36, 84], [32, 120], [18, 150], [7, 168]]);
      paint(rotate(meat, c[0], c[1], a), '#e2a095', { gloss: true, shade: 0.5 });
      paint(rotate(sym(x - 6, [[2, 58], [14, 64], [22, 88], [18, 120], [8, 146]]), c[0], c[1], a), '#d4857e', { gloss: true, liner: false });
      for (let k = 0; k < 3; k++) ink(rotate([[x - 12 + k * 12, 70], [x - 8 + k * 11, 120]], c[0], c[1], a), { color: '#f4d0c8', a: 0.5, w: 1.2 });
    }
  },
  liver() {
    shadow(128, 200, 92, 12);
    const lobe = [];
    for (let i = 0; i < 64; i++) {
      const t = (i / 64) * TAU;
      lobe.push([128 + Math.cos(t) * (90 + 8 * Math.sin(3 * t)), 140 + Math.sin(t) * (52 + 6 * Math.cos(2 * t))]);
    }
    paint(lobe, '#6a2a2e', { gloss: true, shade: 0.6, light: 0.5 });
    ink(curve([60, 118], [108, 150], [196, 130]), { color: '#a85a5a', a: 0.55, w: 3 });
    ink(curve([84, 160], [128, 146], [176, 160]), { color: '#a85a5a', a: 0.4, w: 2 });
    paint(E(184, 120, 20, 12, 0.3), '#4a1a1e', { small: true });
  },
  prosciutto() {
    shadow(128, 200, 92, 10);
    for (let k = 0; k < 3; k++) {
      const base = 100 + k * 36;
      const rib = [], rib2 = [];
      for (let m = 0; m <= 36; m++) {
        const t = m / 36, x = 36 + t * 184;
        const y = base + Math.sin(t * TAU * 1.4 + k) * 14;
        rib.push([x, y - 20]);
        rib2.push([x, y + 20]);
      }
      const shape = rib.concat(rib2.reverse());
      paint(shape, '#e88a86', { gloss: true, shade: 0.45, liner: true });
      const edge = [];
      for (let m = 0; m <= 36; m++) {
        const t = m / 36;
        edge.push([36 + t * 184, base + Math.sin(t * TAU * 1.4 + k) * 14 - 19]);
      }
      ink(edge, { color: '#fbeee0', a: 0.9, w: 5 });
      for (let q = 0; q < 5; q++) ink([[56 + q * 34, base - 8 + k], [76 + q * 34, base + 6 + k]], { color: '#f6c8c0', a: 0.5, w: 1.2 });
    }
  },
  chorizo() {
    shadow(128, 206, 96, 12);
    const link = band([34, 168], [120, 76], [214, 150], 20, 20, 32, (t) => 0.8 + 0.2 * Math.sin(t * Math.PI));
    paint(link, '#b83a22', { gloss: true, shade: 0.55 });
    ctx.save();
    ctx.clip(pathOf(link));
    for (let k = 0; k < 90; k++) dot(34 + rand() * 180, 70 + rand() * 100, 1.5 + rand() * 1.4, rand() > 0.5 ? '#f0d8b8' : '#7a1c12', 0.55);
    ctx.restore();
    ink(curve([34, 168], [120, 76], [214, 150]), { color: '#f0a070', a: 0.4, w: 1.4 });
    for (let k = 0; k < 3; k++) {
      const cx = 78 + k * 44, cy = 190;
      paint(E(cx, cy, 20, 11), '#c04426', { gloss: true });
      for (let m = 0; m < 6; m++) dot(cx - 10 + rand() * 20, cy - 4 + rand() * 8, 1.4, '#f3dcbc', 0.85);
    }
    ink([[34, 168], [26, 182], [24, 196]], { color: '#c8a46a', a: 0.9, w: 1.4 });
  },
  'kidney beans'() {
    shadow(128, 190, 92, 12);
    pile(34, 128, 188, 84, 74, (x, y) => {
      const a = rand() * TAU;
      paint(rotate(band([x - 13, y + 1], [x, y - 8], [x + 13, y + 1], 6.5, 6.5, 14, (t) => 0.7 + 0.5 * Math.sin(Math.PI * t)), x, y, a), rand() > 0.3 ? '#7a1f2a' : '#8e2a32', { small: false, liner: false, gran: false, blot: false, gloss: true });
    });
  },
  'white beans'() {
    shadow(128, 190, 92, 12);
    pile(36, 128, 188, 84, 74, (x, y) => {
      const a = rand() * TAU;
      paint(E(x, y, 14, 9.5, a, 0.06), '#f4efe0', { small: false, liner: false, gran: false, blot: false, shade: 0.4, edge: 0.3 });
      paint(E(x + Math.cos(a + 1.57) * 4, y + Math.sin(a + 1.57) * 4, 3.4, 1.8, a), '#cdbf9a', { small: true });
    });
  },
  rosemary() {
    const stem = curve([92, 230], [118, 130], [158, 30], 36);
    ink(stem, { color: '#6a5a3a', a: 0.95, w: 3 });
    for (let k = 3; k < 36; k++) {
      const [x, y] = stem[k];
      const [nx, ny] = stem[Math.min(35, k + 1)];
      const dir = Math.atan2(ny - y, nx - x);
      for (const sd of [-1, 1]) {
        const a = dir + sd * (1.0 + R(0.15)), L = 24 * (1 - (k / 36) * 0.4);
        ink([[x, y], [x + Math.cos(a) * L, y + Math.sin(a) * L]], { color: k % 2 ? '#3e6a4a' : '#4a7a54', a: 0.95, w: 2.4 });
      }
    }
    for (const [x, y] of [[154, 44], [140, 66], [150, 84]]) paint(E(x, y, 5, 4), '#8a9ad0', { small: true });
  },
  sage() {
    sprig('#8ba68e', (x, y, a, k) => {
      paint(leaf(x, y, 70 * k, 28 * k, a, { skew: 0.5 }), '#8aa68c', { gloss: false });
      veins(null, [x, y], a, 66 * k, { color: '#dfe8d4' });
    }, { n: 5, opposite: true, spread: 0.85, stem: '#7a8a5a', p0: [104, 232], p1: [122, 140], p2: [136, 40] });
  },
  chives() {
    for (let k = 0; k < 16; k++) {
      const x = 88 + k * 5.5, lean = (k - 8) * 3.2;
      ink(curve([x, 232], [x + lean * 0.5, 140], [x + lean * 1.6 + R(6), 40 + rand() * 34]), { color: k % 3 ? '#4f8a3e' : '#68a050', a: 0.95, w: 2.8 });
    }
    ink([[84, 214], [172, 214]], { color: '#b8a888', a: 0.8, w: 4 });
    for (const [x, y] of [[96, 50], [150, 38]]) {
      for (let m = 0; m < 16; m++) {
        const a = rand() * TAU, r = rand() * 13;
        dot(x + Math.cos(a) * r, y + Math.sin(a) * r, 3, rand() > 0.5 ? '#b070b8' : '#c88ad0', 0.85);
      }
    }
    for (let k = 0; k < 6; k++) paint(rrect(70 + k * 20, 232 - (k % 2) * 4, 12, 4, 2, rand() * 0.6), '#68a050', { small: true });
  },
  leek() {
    shadow(128, 222, 40, 7);
    for (let k = 0; k < 5; k++) {
      const a = -Math.PI / 2 + (k - 2) * 0.32;
      paint(leaf(128, 120, 112, 24, a, { skew: 0.4 }), k % 2 ? '#3f7a3a' : '#4f8a44', { liner: k === 2 });
    }
    paint(sym(128, [[16, 60], [18, 100], [22, 150], [22, 196], [14, 214], [2, 214]]), '#ecefd4', { gloss: true, shade: 0.35 });
    ink(curve([128, 70], [128, 140], [128, 210]), { color: '#c8d4a4', a: 0.6, w: 1.2 });
    paint(sym(128, [[18, 100], [22, 130], [20, 160]]), '#9cc070', { liner: false, wash: 0.3, small: true });
    for (let k = 0; k < 12; k++) line(124 + k * 1.2, 214, 112 + k * 4.5, 232 + R(3), { color: '#d8cfb0', a: 0.8, w: 1 });
  },

  // ---- batch 2 ingredients
  sauerkraut: () => bowl((cx, y, rx) => {
    mound('#e8e4a8', cx, y, rx, 40, { gran: false });
    for (let k = 0; k < 40; k++) ink(curve([cx - rx * 0.7 + rand() * rx * 1.4, y - rand() * 30], [cx + R(30), y - 20 - rand() * 18], [cx - rx * 0.6 + rand() * rx * 1.2, y - rand() * 36]), { color: k % 2 ? '#f4f0c0' : '#c8c880', a: 0.8, w: 1.6 });
  }, { color: '#ece6d6', stripe: '#8a9a4a' }),
  turnip() {
    for (let k = 0; k < 4; k++) paint(leaf(128, 84, 70, 15, -Math.PI / 2 + (k - 1.5) * 0.4, { serr: 5 }), '#5c9444', { liner: false });
    roundFruit(128, 138, 56, '#f3ecf0', { sy: 0.9 });
    ctx.save();
    ctx.clip(pathOf(E(128, 138, 56, 50)));
    ctx.filter = 'blur(10px)';
    ctx.beginPath();
    ctx.ellipse(128, 100, 52, 22, 0, 0, TAU);
    ctx.fillStyle = 'rgba(150,70,150,0.5)';
    ctx.fill();
    ctx.restore();
    paint(band([128, 186], [130, 208], [126, 232], 9, 1), '#e8e0e0', { liner: false, gran: false });
  },
  asparagus() {
    shadow(128, 214, 80, 9);
    for (let k = 0; k < 6; k++) {
      const x = 76 + k * 20, c = k % 2 ? '#8ab05a' : '#a4c06a';
      paint(band([x, 228], [x + (k - 2.5) * 3, 130], [x + (k - 2.5) * 6, 52], 7, 5), c, { gloss: true, liner: false });
      paint(E(x + (k - 2.5) * 6, 48, 7, 14, (k - 2.5) * 0.08), '#6a8a46', { small: true });
      for (let m = 0; m < 4; m++) ink([[x + (k - 2.5) * 5, 58 + m * 9], [x + (k - 2.5) * 5 + 6, 54 + m * 9]], { color: '#5a7a3a', a: 0.6, w: 1 });
    }
    ink([[70, 190], [186, 190]], { color: '#c9a46a', a: 0.9, w: 5 });
  },
  tarragon() {
    sprig('#5a9a52', (x, y, a, k) => paint(leaf(x, y, 44 * k, 7 * k, a, { skew: 0.5 }), '#5a9a52', { liner: false }), { n: 12, opposite: true, spread: 0.7, taper: 0.3, stemW: 2, p0: [100, 232], p1: [122, 140], p2: [150, 36] });
  },
  plum() {
    shadow(128, 208, 80, 10);
    roundFruit(104, 140, 56, '#5a2e6a');
    ink(curve([104, 90], [112, 140], [102, 194]), { color: '#2a1030', a: 0.5, w: 1.4 });
    ctx.save();
    ctx.filter = 'blur(2px)';
    ctx.beginPath();
    ctx.ellipse(94, 120, 24, 36, 0.3, 0, TAU);
    ctx.fillStyle = 'rgba(220,200,240,0.35)';
    ctx.fill();
    ctx.restore();
    paint(leaf(110, 84, 40, 12, -0.8), greenLeaf, { gloss: true });
    paint(E(180, 174, 36, 34), '#e8a050', { gloss: true });
    paint(E(180, 174, 12, 16, 0.3), '#7a4a2a', { gloss: true, small: true });
    ink(arc(180, 174, 36, 34, 0, TAU, 28), { color: '#5a2e6a', a: 0.8, w: 3 });
  },
  cranberry() {
    shadow(128, 194, 84, 12);
    pile(32, 128, 190, 80, 80, (x, y) => paint(E(x, y, 13, 13), rand() > 0.4 ? '#b0182e' : '#c82a3a', { small: false, liner: false, gran: false, blot: false, gloss: true }));
    paint(leaf(180, 200, 36, 11, 2.7), greenLeaf, { gloss: true });
  },
  juniper() {
    const stem = curve([70, 220], [110, 150], [180, 56], 30);
    ink(stem, { color: '#6a5a3a', a: 0.95, w: 3 });
    for (let k = 2; k < 30; k++) {
      const [x, y] = stem[k];
      for (const sd of [-1, 1]) ink([[x, y], [x + sd * 22 - 6, y - 16 + rand() * 6]], { color: k % 2 ? '#4a7a68' : '#3e6a5a', a: 0.95, w: 2.2 });
    }
    for (const [x, y] of [[110, 156], [132, 126], [152, 98], [100, 124]]) paint(E(x, y, 11, 11), '#3a4a7a', { gloss: true, liner: false, small: false });
  },
  horseradish() {
    shadow(128, 200, 92, 10);
    paint(band([30, 150], [100, 120], [214, 110], 12, 22, 30, (t) => 1 + 0.12 * Math.sin(t * 14)), '#cdb48a', { gloss: false });
    for (let k = 0; k < 12; k++) ink([[40 + k * 14, 140 - k * 3 + R(6)], [46 + k * 14, 148 - k * 3 + R(6)]], { color: '#8a6a40', a: 0.5, w: 1.2 });
    paint(E(214, 110, 16, 24, 0.1), '#f6f2e4', { gran: false });
    for (let k = 0; k < 3; k++) paint(leaf(212, 90, 44, 12, -1.2 + k * 0.5), '#5c9444', { small: true });
  },
  venison() {
    shadow(128, 198, 92, 12);
    paint(E(130, 140, 94, 60, -0.12, 0.08), '#e6d4c0', { liner: true, gran: false });
    paint(E(126, 144, 82, 48, -0.12, 0.07), '#7a2430', { gloss: true, shade: 0.6 });
    for (let k = 0; k < 7; k++) ink([[66 + rand() * 100, 118 + rand() * 40], [78 + rand() * 100, 128 + rand() * 40]], { color: '#c0707a', a: 0.4, w: 1.2 });
    paint(E(166, 124, 16, 14), '#efe3cc', { small: true });
  },
  herring() {
    shadow(128, 196, 96, 10);
    const fish = (cx, cy, rot) => {
      const body = rotate(densify([[cx - 74, cy], [cx - 40, cy - 20], [cx + 20, cy - 20], [cx + 58, cy - 6], [cx + 64, cy], [cx + 58, cy + 6], [cx + 20, cy + 18], [cx - 40, cy + 17]], 5), cx, cy, rot);
      paint(body, '#6f90a0', { gloss: true, shade: 0.55 });
      paint(rotate(densify([[cx - 70, cy + 2], [cx - 30, cy + 10], [cx + 22, cy + 10], [cx + 60, cy + 3], [cx + 20, cy + 18], [cx - 40, cy + 17]], 5), cx, cy, rot), '#e0e8ea', { liner: false, gran: false, wash: 0.65 });
      paint(rotate(poly([[cx - 74, cy], [cx - 98, cy - 20], [cx - 90, cy], [cx - 98, cy + 20]]), cx, cy, rot), '#5a7888', { liner: false });
      const eye = rotate([[cx + 50, cy - 5]], cx, cy, rot)[0];
      dot(eye[0], eye[1], 3.6, '#f4f1e6', 1);
      dot(eye[0] + 0.6, eye[1], 1.9, '#1f2a30', 1);
      ink(rotate([[cx - 40, cy - 14], [cx + 30, cy - 15]], cx, cy, rot), { color: '#2a4a60', a: 0.5, w: 2 });
    };
    fish(130, 114, -0.1);
    fish(126, 164, 0.1);
  },
  'smoked salmon'() {
    shadow(128, 200, 92, 10);
    for (let k = 0; k < 3; k++) {
      const rib = [], rib2 = [];
      for (let m = 0; m <= 30; m++) {
        const t = m / 30;
        rib.push([40 + t * 160, 96 + k * 34 + Math.sin(t * TAU * 1.2 + k) * 10 - 18]);
        rib2.push([40 + t * 160, 96 + k * 34 + Math.sin(t * TAU * 1.2 + k) * 10 + 18]);
      }
      paint(rib.concat(rib2.reverse()), '#ee8a5a', { gloss: true, shade: 0.45 });
      for (let q = 0; q < 4; q++) ink([[56 + q * 38, 90 + k * 34], [72 + q * 38, 104 + k * 34]], { color: '#fbd0b0', a: 0.5, w: 1.3 });
    }
    paint(wedgeShape(), '#f0d84a', { gloss: true });
    paint(leaf(52, 214, 40, 9, -0.2), '#5c9444', { small: true });
    function wedgeShape() { return poly([[170, 196], [214, 196], [192, 168]]); }
  },
  gouda() {
    shadow(128, 204, 96, 12);
    paint(rrect(34, 130, 188, 62, 18), '#c0392b', { gloss: true, shade: 0.5 });
    paint(E(128, 130, 94, 34), '#c0392b', { liner: true });
    paint(E(128, 128, 82, 26), '#f2c254', { gloss: false, light: 0.5 });
    paint(poly([[128, 128], [214, 118], [210, 168], [128, 188]]), '#eab24a', { liner: true, shade: 0.35 });
    for (let k = 0; k < 4; k++) paint(E(150 + rand() * 50, 140 + rand() * 30, 3, 2.4), '#c68c2a', { small: true });
  },
  emmental() {
    wedge('#b89048', '#f2d97c', { holes: false });
    for (const [x, y, r] of [[96, 190, 10], [140, 170, 8], [182, 160, 12], [120, 205, 6], [196, 190, 7], [84, 176, 6]]) paint(E(x, y, r, r * 0.85), '#d4b050', { small: false, liner: false, gran: false, blot: false, shade: 0.7 });
  },
  buttermilk() {
    shadow(128, 216, 56, 9);
    const glass = sym(128, [[46, 70], [50, 120], [42, 190], [36, 214], [2, 214]]);
    paint(glass, '#dfe8ec', { wash: 0.3, shade: 0.3, liner: false, gran: false, blot: false });
    ctx.save();
    ctx.clip(pathOf(glass));
    paint(densify([[70, 100], [186, 100], [176, 216], [80, 216]], 6), '#fbf8ef', { shade: 0.3, liner: false, gloss: true });
    ctx.restore();
    ink(arc(128, 70, 46, 8, 0, TAU, 20), { a: 0.5, w: 1.2 });
    ink([[96, 84], [92, 190]], { color: '#fffefa', a: 0.8, w: 4 });
    for (let k = 0; k < 4; k++) dot(110 + rand() * 40, 120 + rand() * 70, 1.3, '#ffffff', 0.9);
    paint(E(190, 196, 12, 8, 0.2), '#fbf6ea', { small: true });
  },
  'goat cheese'() {
    shadow(128, 200, 92, 12);
    paint(rotate(rrect(40, 104, 150, 58, 26), 115, 133, -0.1), '#f8f4ea', { gloss: false, shade: 0.4 });
    for (let k = 0; k < 20; k++) dot(60 + rand() * 120, 114 + rand() * 40, 1.6, k % 3 ? '#5a8a3e' : '#c8a45a', 0.7);
    for (let k = 0; k < 2; k++) {
      paint(E(190 + k * 10, 178 + k * 12, 24, 14), '#f8f4ea', { shade: 0.4 });
      ink(arc(190 + k * 10, 178 + k * 12, 18, 9, 0, TAU, 14), { color: '#e0d8c4', a: 0.7, w: 1 });
    }
    paint(leaf(60, 176, 30, 9, -0.5), '#5c9444', { small: true });
  },
  'blue cheese'() {
    wedge('#e6dcc2', '#f6eed8', { holes: false });
    for (let k = 0; k < 14; k++) {
      const x = 80 + rand() * 130, y = 150 + rand() * 50;
      ink([[x, y], [x + 8 + rand() * 8, y + R(6)], [x + 14 + rand() * 10, y + R(8)]], { color: '#4a7a8a', a: 0.8, w: 2.4 });
    }
  },
  ricotta: () => bowl((cx, y, rx) => {
    mound('#fcf9f1', cx, y, rx, 44, { gran: false });
    for (let k = 0; k < 50; k++) dot(cx - rx * 0.6 + rand() * rx * 1.2, y - 4 - rand() * 36, 1.6, '#e6dec8', 0.7);
    ink(curve([cx - 30, y - 22], [cx, y - 40], [cx + 30, y - 20]), { color: '#e6dec8', a: 0.8, w: 1.6 });
  }, { color: '#e8ecf0', stripe: '#c25a4a' }),
  buckwheat() {
    shadow(128, 192, 92, 12);
    pile(120, 128, 190, 84, 76, (x, y) => paint(poly([[x - 4, y + 4], [x, y - 5], [x + 4, y + 4]]), rand() > 0.5 ? '#8a6a46' : '#6a4e34', { small: true, gloss: true }));
    for (const [x, y] of [[196, 190], [210, 178]]) paint(E(x, y, 6, 5), '#e8b0c0', { small: true });
  },
  barley() {
    shadow(128, 196, 92, 12);
    pile(70, 128, 192, 82, 62, (x, y) => {
      const a = rand() * TAU;
      paint(E(x, y, 9, 6, a), '#e6d4a0', { small: true, gloss: true });
      ink(rotate([[x - 5, y], [x + 5, y]], x, y, a), { color: '#b89c5a', a: 0.6, w: 0.8 });
    });
    for (const x of [86, 122, 160]) {
      ink(curve([x, 120], [x + 4, 80], [x + 8, 34]), { color: '#c9a45a', a: 0.9, w: 2 });
      for (let k = 0; k < 9; k++) paint(leaf(x + 6, 40 + k * 7, 18, 4, -Math.PI / 2 + (k % 2 ? 0.45 : -0.45)), '#d9b86a', { small: true });
    }
  },
  oats: () => grainBowl('#e8d9b4', (x, y) => paint(E(x, y, 5.5, 3.6, rand() * 3), '#efe2c0', { small: true }), 80),
  hazelnut() {
    shadow(128, 196, 92, 12);
    for (const [x, y, r] of [[94, 150, 36], [152, 140, 34], [130, 186, 32]]) {
      roundFruit(x, y, r, '#a8703a', { sy: 1, paint: { gloss: true } });
      paint(E(x, y - r * 0.55, r * 0.7, r * 0.34), '#d4b078', { small: true, liner: false });
    }
    paint(leaf(176, 196, 40, 12, 2.6), greenLeaf, { small: true });
  },
  'poppy seeds'() {
    bowl((cx, y, rx) => pile(260, cx, y + 2, rx * 0.8, 30, (x, yy) => dot(x, yy, 1.3, rand() > 0.3 ? '#1f2a3e' : '#3a4a68', 0.95)), { rx: 76, rimY: 150, depth: 56, color: '#f1ece0', inside: '#d8d0bc', stripe: '#7a5aa0' });
    roundFruit(190, 74, 22, '#9aaa7a', { sy: 1.1 });
    paint(E(190, 54, 16, 6), '#7a8a5a', { small: true });
    ink([[190, 96], [188, 130]], { color: '#6a8a4a', a: 0.9, w: 2.4 });
  },
  capers() {
    shadow(128, 198, 80, 10);
    pile(46, 128, 194, 70, 66, (x, y) => paint(E(x, y, 9, 8.5), rand() > 0.5 ? '#6f8a3a' : '#7d9a46', { small: true, gloss: true }));
    for (const [x, y] of [[196, 120], [212, 148]]) paint(E(x, y, 9, 8.5), '#7d9a46', { small: true, gloss: true });
    paint(leaf(190, 100, 50, 18, -0.4), '#5c8a3a', { liner: false });
    ink([[190, 100], [150, 120]], { color: '#5a7a3a', a: 0.8, w: 1.6 });
  },
};

// ---------------------------------------------------------------- public API
const cache = new Map();
export function hasIllustration(name) {
  return name in D;
}
export function paintIngredient(name, fallbackColor = '#c9a46a') {
  if (cache.has(name)) return cache.get(name);
  const c = document.createElement('canvas');
  c.width = c.height = SIZE;
  ctx = c.getContext('2d');
  rand = mulberry32(hash(name));
  ctx.lineCap = 'round';
  try {
    (D[name] || (() => powderBowl(fallbackColor)))();
  } catch (err) {
    console.warn('illustration failed for', name, err);
    ctx.clearRect(0, 0, SIZE, SIZE);
    powderBowl(fallbackColor);
  }
  // Lay a soft, opaque paper-coloured underlay beneath the painting so the
  // translucent washes stay luminous and network threads don't show through.
  const out = document.createElement('canvas');
  out.width = out.height = SIZE;
  const o = out.getContext('2d');
  o.filter = 'blur(3px)';
  for (let i = 0; i < 3; i++) o.drawImage(c, 0, 0);
  o.filter = 'none';
  o.globalCompositeOperation = 'source-in';
  o.fillStyle = '#f7f1e4';
  o.fillRect(0, 0, SIZE, SIZE);
  o.globalCompositeOperation = 'source-over';
  o.drawImage(c, 0, 0);
  cache.set(name, out);
  return out;
}
const icons = new Map();
export function iconURL(name, fallbackColor) {
  if (icons.has(name)) return icons.get(name);
  const src = paintIngredient(name, fallbackColor);
  const c = document.createElement('canvas');
  c.width = c.height = 72;
  const g = c.getContext('2d');
  g.imageSmoothingQuality = 'high';
  g.drawImage(src, 0, 0, 72, 72);
  const url = c.toDataURL('image/png');
  icons.set(name, url);
  return url;
}
