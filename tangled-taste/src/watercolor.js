// Procedural watercolor painting on 2D canvases: loose washes with pooled
// pigment at the edges, granulation, a soft back-run highlight and a quick
// liner stroke, in the spirit of digital watercolor food illustration.
import * as THREE from 'three';

function mulberry32(seed) {
  return function () {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function hexToRgb(hex) {
  const n = parseInt(hex.slice(1), 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}
const rgba = ([r, g, b], a) => `rgba(${r | 0},${g | 0},${b | 0},${a})`;
const shade = ([r, g, b], f) => (f < 0 ? [r * (1 + f), g * (1 + f), b * (1 + f)] : [r + (255 - r) * f, g + (255 - g) * f, b + (255 - b) * f]);

function blobPath(ctx, cx, cy, R, rand, wobble = 0.12, harmonics = 6) {
  const amps = [];
  for (let k = 2; k <= harmonics; k++) amps.push([k, (rand() * wobble) / (k * 0.55), rand() * Math.PI * 2]);
  const pts = [];
  const N = 72;
  for (let i = 0; i < N; i++) {
    const t = (i / N) * Math.PI * 2;
    let r = 1;
    for (const [k, a, p] of amps) r += a * Math.sin(k * t + p);
    r *= R * (1 + (rand() - 0.5) * 0.02);
    pts.push([cx + Math.cos(t) * r, cy + Math.sin(t) * r]);
  }
  ctx.beginPath();
  for (let i = 0; i < N; i++) {
    const [x, y] = pts[i];
    const [nx, ny] = pts[(i + 1) % N];
    const mx = (x + nx) / 2, my = (y + ny) / 2;
    if (i === 0) ctx.moveTo(mx, my);
    else ctx.quadraticCurveTo(x, y, mx, my);
  }
  ctx.closePath();
  return pts;
}

export function paintBlobCanvas(hex, seed, size = 256) {
  const rand = mulberry32(seed);
  const c = document.createElement('canvas');
  c.width = c.height = size;
  const ctx = c.getContext('2d');
  const base = hexToRgb(hex);
  const cx = size / 2, cy = size / 2, R = size * 0.36;

  const shapeSeed = seed + 7;
  // first flat wash, then a few glazes that wander slightly off the shape
  blobPath(ctx, cx, cy, R, mulberry32(shapeSeed), 0.22);
  ctx.fillStyle = rgba(shade(base, 0.25), 0.55);
  ctx.fill();
  for (let j = 0; j < 4; j++) {
    const ox = (rand() - 0.5) * size * 0.06, oy = (rand() - 0.5) * size * 0.06;
    blobPath(ctx, cx + ox, cy + oy, R * (0.78 + rand() * 0.2), rand, 0.24);
    ctx.fillStyle = rgba(base, 0.16 + rand() * 0.08);
    ctx.fill();
  }

  ctx.save();
  blobPath(ctx, cx, cy, R, mulberry32(shapeSeed), 0.22);
  ctx.clip();
  // wet-in-wet blotches of deeper pigment
  ctx.filter = `blur(${size * 0.03}px)`;
  for (let j = 0; j < 4; j++) {
    const a = rand() * Math.PI * 2, d = R * (0.3 + rand() * 0.6);
    ctx.beginPath();
    ctx.arc(cx + Math.cos(a) * d, cy + Math.sin(a) * d, R * (0.2 + rand() * 0.25), 0, Math.PI * 2);
    ctx.fillStyle = rgba(shade(base, -0.25), 0.28);
    ctx.fill();
  }
  // back-run bloom: an irregular paler patch with a faint hard edge
  const hx = cx - R * (0.15 + rand() * 0.25), hy = cy - R * (0.15 + rand() * 0.25);
  ctx.filter = `blur(${size * 0.008}px)`;
  blobPath(ctx, hx, hy, R * (0.32 + rand() * 0.12), rand, 0.3);
  ctx.fillStyle = 'rgba(253,249,238,0.45)';
  ctx.fill();
  ctx.strokeStyle = rgba(shade(base, -0.2), 0.25);
  ctx.lineWidth = size * 0.006;
  ctx.stroke();
  ctx.filter = 'none';
  // granulation
  for (let i = 0; i < size * 4; i++) {
    const x = rand() * size, y = rand() * size;
    ctx.fillStyle = rgba(shade(base, -0.45), rand() * 0.2);
    ctx.fillRect(x, y, 0.8 + rand() * 1.6, 0.8 + rand() * 1.6);
  }
  ctx.restore();

  // pigment pooling at the dried edge
  ctx.save();
  ctx.filter = `blur(${size * 0.004}px)`;
  blobPath(ctx, cx, cy, R, mulberry32(shapeSeed), 0.22);
  ctx.strokeStyle = rgba(shade(base, -0.3), 0.5);
  ctx.lineWidth = size * 0.012;
  ctx.stroke();
  ctx.restore();

  // a small crisp highlight, like glaze catching window light
  ctx.beginPath();
  ctx.ellipse(hx - R * 0.08, hy - R * 0.06, R * 0.09, R * 0.045, -0.7, 0, Math.PI * 2);
  ctx.fillStyle = 'rgba(255,255,250,0.7)';
  ctx.fill();

  // loose liner stroke, open-ended and slightly offset
  ctx.save();
  const lrand = mulberry32(seed + 31);
  const start = lrand() * Math.PI * 2;
  const span = Math.PI * (1.2 + lrand() * 0.6);
  ctx.beginPath();
  for (let i = 0; i <= 60; i++) {
    const t = start + (i / 60) * span;
    const r = R * (1.02 + Math.sin(t * 3 + seed) * 0.03);
    const x = cx + size * 0.012 + Math.cos(t) * r, y = cy - size * 0.008 + Math.sin(t) * r;
    i ? ctx.lineTo(x, y) : ctx.moveTo(x, y);
  }
  ctx.strokeStyle = rgba(shade(base, -0.6), 0.55);
  ctx.lineWidth = size * 0.009;
  ctx.lineCap = 'round';
  ctx.stroke();
  ctx.restore();
  return c;
}
export function paintBlob(hex, seed, size = 256) {
  const tex = new THREE.CanvasTexture(paintBlobCanvas(hex, seed, size));
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

// soft halo used for hover / selection rings
export function paintHalo(size = 256) {
  const c = document.createElement('canvas');
  c.width = c.height = size;
  const ctx = c.getContext('2d');
  const rand = mulberry32(99);
  for (let j = 0; j < 3; j++) {
    blobPath(ctx, size / 2, size / 2, size * 0.42, rand, 0.08);
    ctx.strokeStyle = `rgba(70,45,30,${0.35 - j * 0.08})`;
    ctx.lineWidth = size * 0.012;
    ctx.stroke();
  }
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

// Cold-press paper: a small tile of speckles and fibres drawn with plain fills (reading pixels
// back from a canvas is slow), which the page repeats as a pattern.
export function paintPaperTile(size = 256) {
  const c = document.createElement('canvas');
  c.width = c.height = size;
  const ctx = c.getContext('2d');
  const rand = mulberry32(5);
  for (let i = 0; i < size * 22; i++) {
    const light = rand() > 0.5;
    ctx.fillStyle = light ? `rgba(255,252,244,${0.05 + rand() * 0.1})` : `rgba(120,95,60,${0.03 + rand() * 0.07})`;
    ctx.fillRect(rand() * size, rand() * size, 1 + (rand() > 0.85 ? 1 : 0), 1);
  }
  for (let i = 0; i < 120; i++) {
    ctx.strokeStyle = `rgba(120,95,60,${rand() * 0.05})`;
    ctx.lineWidth = 0.6;
    ctx.beginPath();
    const x = rand() * size, y = rand() * size, a = rand() * Math.PI, l = 4 + rand() * 14;
    ctx.moveTo(x, y);
    ctx.quadraticCurveTo(x + Math.cos(a) * l * 0.5 + rand() * 3, y + Math.sin(a) * l * 0.5, x + Math.cos(a) * l, y + Math.sin(a) * l);
    ctx.stroke();
  }
  return c;
}
