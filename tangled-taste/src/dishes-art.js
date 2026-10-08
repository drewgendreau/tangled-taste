// Watercolor paintings of dishes, built from a small set of reusable templates.
// A template is a recipe for one kind of plate (a bowl of soup, a layered slice, a pile of rice…); each dish is
// just a template name plus a few parameters (colours, toppings) in src/data/dish-art.js. Adding a dish costs one
// line of data, not a new drawing, and every template can be rendered at any size.

import { TOOLS as T, paintOnCanvas } from './illustrations.js';
import { DISH_ART } from './data/dish-art.js';

const { paint, ink, line, dot, shadow, mound, bowl, E, arc, rotate, densify, rrect, band, curve, leaf, sym, R, rnd, TAU } = T;
const rr = (a, b) => a + rnd() * (b - a);
const pick = (list) => list[Math.floor(rnd() * list.length)];

// ---------------------------------------------------------------- shared pieces
function plate(o = {}) {
  shadow(128, 202, 98, 12);
  paint(E(128, 150, 108, 66, 0, 0.012), o.rim || '#f6f1e7', { gran: false, blot: false, shade: 0.32, light: 0.5, edge: 0.4 });
  paint(E(128, 150, 86, 50, 0, 0.01), o.well || '#ece5d6', { gran: false, blot: false, shade: 0.35, light: 0.1, liner: false, edge: 0.18 });
}
const herb = (x, y, s = 1, color = '#5f9444') => paint(leaf(x, y, 11 * s, 3.8 * s, rnd() * TAU), color, { small: true, liner: false });
function citrus(x, y, rot = 0, color = '#f3d23c', rind = '#e1ad1e') {
  const outer = arc(x, y, 17, 17, 0, Math.PI, 14).concat(arc(x, y, 17, 17, Math.PI, Math.PI, 1));
  paint(rotate(densify(outer, 4), x, y, rot), rind, { liner: false, gran: false, small: true });
  paint(rotate(densify(arc(x, y, 13, 13, 0, Math.PI, 14), 4), x, y, rot), color, { liner: false, gran: false, gloss: true, small: false });
  for (let i = 1; i < 4; i++) {
    const a = (i / 4) * Math.PI;
    ink(rotate([[x, y], [x + Math.cos(a) * 12, y + Math.sin(a) * 12]], x, y, rot), { color: '#fff8d6', a: 0.7, w: 1 });
  }
}
const scatter = (n, cx, cy, rx, ry, fn) => {
  for (let i = 0; i < n; i++) {
    const a = rnd() * TAU, r = Math.sqrt(rnd());
    fn(cx + Math.cos(a) * r * rx, cy + Math.sin(a) * r * ry, i);
  }
};
const crumbs = (n, cx, cy, rx, ry, color) => scatter(n, cx, cy, rx, ry, (x, y) => dot(x, y, rr(0.7, 1.7), color, 0.6));
function shrimp(x, y, rot = 0, color = '#f08a5d') {
  const pts = band([x - 15, y + 4], [x, y - 14], [x + 15, y + 5], 7, 3, 16, (t) => 0.7 + Math.sin(Math.PI * t) * 0.5);
  paint(rotate(pts, x, y, rot), color, { gloss: true, small: true });
  for (let i = 1; i < 4; i++) {
    const t = i / 4;
    ink(rotate([[x - 12 + t * 24, y - 10 + Math.abs(t - 0.5) * 18], [x - 12 + t * 24, y - 2 + Math.abs(t - 0.5) * 18]], x, y, rot), { color: '#c0502f', a: 0.5, w: 1 });
  }
}
function eggHalf(x, y, s = 1) {
  paint(E(x, y, 15 * s, 11 * s), '#fbf8ee', { liner: true, gran: false, small: true });
  paint(E(x, y, 7.5 * s, 6 * s), '#f0b73a', { gloss: true, small: true, liner: false });
}
function friedEgg(x, y, s = 1) {
  paint(E(x, y, 28 * s, 18 * s, 0, 0.12), '#fcf9ef', { liner: true, gran: false, shade: 0.2 });
  paint(E(x + 3 * s, y - 1, 10 * s, 8 * s), '#eeaa2a', { gloss: true, liner: false });
}
function cucumberSlices(x, y, n = 4, dx = 14) {
  for (let i = 0; i < n; i++) {
    paint(E(x + i * dx, y - i * 2, 11, 8), '#a9cf8a', { small: true, liner: false });
    paint(E(x + i * dx, y - i * 2, 8, 5.5), '#e4f1cc', { small: true, liner: false });
  }
}
function chips(x, y, n = 4, color = '#e6b85a') {
  for (let i = 0; i < n; i++) {
    const a = -0.9 + i * 0.35;
    paint(rotate(densify([[x, y], [x + 36, y], [x + 18, y - 32]], 4), x + 18, y - 12, a), color, { small: true, liner: false });
  }
}

// ---------------------------------------------------------------- templates
const T_ = {
  // a whole round pie: crust, sauce, melted cheese, basil
  pizza(p) {
    shadow(128, 198, 100, 12);
    paint(E(128, 142, 108, 64, 0, 0.02), p.crust || '#d9a45d', { light: 0.45 });
    paint(E(128, 140, 93, 54, 0, 0.02), p.sauce || '#c9452e', { liner: false, light: 0.3, shade: 0.3 });
    scatter(p.blobs || 9, 128, 140, 70, 38, (x, y) => paint(E(x, y, rr(13, 20), rr(8, 12), rnd(), 0.1), p.cheese || '#f7edcc', { gloss: true, liner: false, light: 0.5, shade: 0.25 }));
    if (p.top === 'pepperoni') scatter(7, 128, 140, 72, 38, (x, y) => paint(E(x, y, 10, 7), '#a83225', { small: true, gloss: true }));
    else for (let i = 0; i < 5; i++) {
      const a = -0.5 + i * 1.3;
      paint(leaf(128 + Math.cos(a * 2.2) * 50, 138 + Math.sin(a * 2.2) * 26, 26, 9, a), '#4f8a3e', { liner: true });
    }
    for (let i = 0; i < 3; i++) {
      const a = i * 1.05 + 0.3;
      ink([[128, 140], [128 + Math.cos(a) * 100, 140 + Math.sin(a) * 60]], { color: '#8a5a2a', a: 0.4, w: 1.2 });
    }
  },

  // maki rolls and nigiri on a wooden board
  rolls(p) {
    shadow(128, 206, 108, 11);
    paint(rrect(18, 128, 220, 78, 10), '#d7b88a', { gran: true, shade: 0.35, liner: true });
    [[70, 156], [128, 150], [186, 156]].forEach(([cx, cy]) => {
      paint(rrect(cx - 26, cy, 52, 24, 7), '#25362c', { liner: false, shade: 0.5 });
      paint(E(cx, cy, 26, 17), '#25362c', { liner: false });
      paint(E(cx, cy, 20.5, 13), '#f8f5ee', { gran: true, liner: false, light: 0.3 });
      paint(E(cx, cy, 9, 6), pick(p.fills || ['#ee7b4a', '#8fbf6a', '#d9473d']), { small: true, gloss: true, liner: false });
    });
    [[88, 192], [160, 192]].forEach(([cx, cy], i) => {
      paint(rrect(cx - 24, cy, 48, 17, 8), '#f8f5ee', { gran: true, liner: true });
      paint(rrect(cx - 28, cy - 11, 56, 16, 8), i ? (p.fish2 || '#f4efe3') : (p.fish || '#f08a4b'), { gloss: true, liner: true });
      for (let k = 0; k < 3; k++) ink([[cx - 18 + k * 14, cy - 8], [cx - 12 + k * 14, cy - 1]], { color: '#fff3e2', a: 0.6, w: 1 });
    });
    paint(E(214, 186, 11, 8), '#8fb55a', { small: true, gloss: true });
    for (let i = 0; i < 4; i++) paint(E(36 + i * 4, 188 - i * 3, 9, 4.5, 0.4), '#f1a7b3', { small: true, liner: false });
  },

  // a stack of layers, side view
  burger(p) {
    shadow(128, 208, 96, 12);
    paint(rrect(46, 178, 164, 26, 13), '#d9a05b', { shade: 0.5 });
    paint(rrect(40, 150, 176, 30, 15), p.patty || '#6a3a24', { gloss: true, shade: 0.55 });
    paint(densify([[44, 150], [212, 150], [218, 164], [184, 160], [150, 176], [128, 158], [92, 172], [60, 160]], 5), p.cheese || '#f2b73a', { liner: false, gran: false });
    paint(E(128, 144, 90, 10), '#d63f2f', { liner: false, gloss: true });
    const wave = [];
    for (let i = 0; i <= 28; i++) wave.push([36 + i * 6.5, 132 + Math.sin(i * 1.2) * 5]);
    paint(densify(wave.concat([[220, 144], [36, 144]]), 5), '#6fae45', { liner: true, gran: false });
    for (let i = 0; i < 3; i++) paint(E(78 + i * 50, 134, 14, 4, 0, 0.1), '#8fb55a', { small: true, liner: false });
    paint(sym(128, [[0, 70], [40, 74], [78, 88], [92, 112], [92, 130], [0, 130]]), '#dca35a', { gloss: true, shade: 0.5, light: 0.55 });
    for (let i = 0; i < 14; i++) paint(E(78 + rnd() * 100, 86 + rnd() * 30, 3.6, 2.2, rnd()), '#f6ead0', { small: true, liner: false });
  },

  // a plate of noodles or pasta with sauce and bits
  pastaPlate(p) {
    plate();
    paint(E(128, 138, 66, 34, 0, 0.05), p.noodle || '#e8c866', { liner: false, gran: false, shade: 0.4 });
    for (let i = 0; i < 34; i++) {
      const a = rnd() * TAU, r = rr(0.1, 0.9);
      const x = 128 + Math.cos(a) * r * 58, y = 138 + Math.sin(a) * r * 28 - 4;
      ink([[x - 16, y + R(5)], [x + R(4), y - rr(4, 11)], [x + 16, y + R(5)]], { color: i % 3 ? p.noodle || '#e8c866' : T.rgba(T.tone(T.rgb(p.noodle || '#e8c866'), -0.18), 1), a: 0.95, w: 2.6 });
    }
    if (p.sauce) for (let i = 0; i < 9; i++) {
      const x = 90 + rnd() * 80, y = 124 + rnd() * 24;
      ink([[x, y], [x + rr(10, 22), y + R(6)]], { color: p.sauce, a: 0.55, w: rr(3, 5) });
    }
    (p.bits || []).forEach(({ color, n = 12, r = 2.4 }) => scatter(n, 128, 134, 56, 24, (x, y) => paint(E(x, y, r * rr(0.8, 1.6), r, rnd() * 3), color, { small: true, liner: false, wash: 0.85 })));
    (p.extras || []).forEach((name, i) => {
      if (name === 'lime') citrus(196, 176, -0.3, '#a9d05a', '#5f8f2a');
      if (name === 'lemon') citrus(196, 176, -0.3);
      if (name === 'shrimp') { shrimp(112, 124, 0.2); shrimp(146, 128, -0.3); }
      if (name === 'egg') friedEgg(150, 124, 0.7);
      if (name === 'yolk') paint(E(128, 122, 9, 7), '#f0aa2c', { gloss: true, liner: false, small: true });
      if (name === 'basil') for (let k = 0; k < 3; k++) paint(leaf(122 + k * 12, 118, 22, 8, -0.4 + k * 0.7), '#3f8a3e', { liner: true });
      if (name === 'parsley') for (let k = 0; k < 5; k++) herb(100 + k * 14, 126 + R(4), 0.9);
    });
  },

  // soup in a bowl: broth surface with toppings
  soupBowl(p) {
    bowl((cx, y, rx) => {
      paint(E(cx, y + 3, rx * 0.92, 17, 0, 0.005), p.broth || '#c9863e', { liner: false, blot: false, light: 0.55, gloss: true });
      if (p.noodles) for (let i = 0; i < 9; i++) ink(Array.from({ length: 12 }, (_, k) => [cx - 56 + k * 10, y + 2 + Math.sin(k * 0.8 + i) * 3 + (i - 4) * 1.6]), { color: p.noodles, a: 0.9, w: 2.2 });
      (p.toppings || []).forEach((name, i) => {
        const ox = -50 + i * (100 / Math.max(1, (p.toppings.length - 1)));
        const x = cx + ox, yy = y + 1 + (i % 2) * 4;
        if (name === 'egg') eggHalf(x, yy, 1);
        if (name === 'scallion') scatter(9, x, yy, 16, 6, (a, b) => paint(E(a, b, 2.6, 2), '#6fae45', { small: true, liner: false }));
        if (name === 'nori') paint(rotate(rrect(x - 8, yy - 30, 16, 36, 2), x, yy - 12, 0.15), '#222f27', { liner: false, small: true });
        if (name === 'pork') { paint(E(x, yy, 15, 8, 0.1), '#e9b9a0', { small: true, liner: true }); paint(E(x + 4, yy + 3, 14, 8, -0.2), '#d9967d', { small: true, liner: false }); }
        if (name === 'beef') { paint(E(x, yy, 15, 6, 0.1), '#b0584a', { small: true }); paint(E(x + 4, yy + 3, 14, 6, -0.2), '#c46e5c', { small: true, liner: false }); }
        if (name === 'tofu') for (let k = 0; k < 3; k++) paint(rrect(x - 10 + k * 9, yy - 3 + (k % 2) * 3, 9, 9, 2), '#f6f0dd', { small: true, liner: true });
        if (name === 'herbs') for (let k = 0; k < 4; k++) paint(leaf(x - 8 + k * 6, yy, 17, 6, rr(-2.2, -0.9)), '#4f9a44', { small: true, liner: false });
        if (name === 'lime') citrus(x, yy + 2, 0.2, '#a9d05a', '#5f8f2a');
        if (name === 'shrimp') shrimp(x, yy - 2, 0.1);
        if (name === 'chili') scatter(6, x, yy, 12, 5, (a, b) => dot(a, b, 1.8, '#d63a2a', 0.9));
        if (name === 'sprouts') for (let k = 0; k < 7; k++) ink([[x - 12 + k * 4, yy + 3], [x - 12 + k * 4 + R(4), yy - 8]], { color: '#f4efd6', a: 0.95, w: 1.8 });
        if (name === 'seaweed') paint(E(x, yy, 12, 6, 0.3, 0.2), '#2d4a35', { small: true, liner: false });
      });
    }, { color: p.bowl || '#f1ece2', stripe: p.stripe || '#b5433a', rx: 94 });
  },

  // curry, stew or stir-fry in a bowl
  stewBowl(p) {
    bowl((cx, y, rx) => {
      paint(E(cx, y + 3, rx * 0.92, 18, 0, 0.005), p.sauce || '#c8632e', { liner: false, blot: false, light: 0.5, gloss: true, shade: 0.4 });
      scatter(p.n || 9, cx, y + 2, rx * 0.68, 8, (x, yy) => {
        if (p.shape === 'cube') paint(rotate(rrect(x - 6, yy - 5, 12, 10, 2), x, yy, rnd()), p.chunk || '#b5683f', { small: true, gloss: true });
        else paint(E(x, yy, rr(9, 14), rr(5, 8), rnd() * 2, 0.15), p.chunk || '#d99a4a', { small: true, gloss: true });
      });
      if (p.swirl) ink(Array.from({ length: 14 }, (_, k) => [cx - 40 + k * 6, y + 2 + Math.sin(k * 0.9) * 5]), { color: p.swirl, a: 0.9, w: 3.5 });
      (p.extra || []).forEach((name) => {
        if (name === 'peanuts') scatter(9, cx, y + 2, 48, 8, (x, yy) => paint(E(x, yy, 3.4, 2.5, rnd()), '#c98a52', { small: true, liner: false }));
        if (name === 'chilies') scatter(5, cx, y + 2, 46, 7, (x, yy) => paint(rotate(band([x - 8, yy], [x, yy - 3], [x + 8, yy + 1], 2.2, 1.2), x, yy, rnd() * 3), '#c12a1c', { small: true, liner: false }));
        if (name === 'basil') scatter(5, cx, y + 2, 40, 6, (x, yy) => paint(leaf(x, yy, 14, 5, rr(-2.5, -0.5)), '#3f8a3e', { small: true, liner: false }));
        if (name === 'cilantro') scatter(6, cx, y + 2, 44, 7, (x, yy) => herb(x, yy, 0.85, '#6ba84a'));
        if (name === 'coconut') scatter(10, cx, y + 2, 50, 8, (x, yy) => dot(x, yy, 1.6, '#f6efe0', 0.9));
        if (name === 'potato') scatter(3, cx, y + 2, 40, 6, (x, yy) => paint(rrect(x - 8, yy - 6, 16, 12, 4), '#e9c882', { small: true, liner: true }));
        if (name === 'eggplant') scatter(4, cx, y + 2, 42, 6, (x, yy) => paint(E(x, yy, 7, 5, rnd()), '#9db66a', { small: true, liner: false }));
      });
    }, { color: p.bowl || '#f2ece0', stripe: p.stripe || '#3f6b8f', rx: 92 });
  },

  // a cut slice showing its layers: [[colour, height], …] from top to bottom
  layerSlice(p) {
    plate();
    const x0 = 68, w = 108, y0 = 112, depth = 46;
    const layers = p.layers;
    let y = y0;
    const total = layers.reduce((s, [, h]) => s + h, 0);
    // right side face
    paint(densify([[x0 + w, y0], [x0 + w + 38, y0 - 24], [x0 + w + 38, y0 - 24 + total], [x0 + w, y0 + total]], 5), p.side || '#c8aa72', { liner: true, shade: 0.55, gran: false });
    // top face
    paint(densify([[x0, y0], [x0 + w, y0], [x0 + w + 38, y0 - 24], [x0 + 38, y0 - 24]], 5), p.top || '#e8d8b0', { gloss: false, liner: true, shade: 0.2, light: 0.5 });
    if (p.dust) scatter(160, x0 + w / 2 + 19, y0 - 12, w / 2 + 12, 10, (x, yy) => dot(x, yy, rr(0.6, 1.6), p.dust, 0.55));
    // front face, layer by layer
    for (const [color, h, opt] of layers) {
      const pts = [];
      for (let i = 0; i <= 12; i++) pts.push([x0 + (i * w) / 12, y + R(1.2)]);
      for (let i = 12; i >= 0; i--) pts.push([x0 + (i * w) / 12, y + h + R(1.2)]);
      paint(densify(pts, 5), color, { liner: false, gran: true, shade: 0.28, light: 0.3, ...opt });
      y += h;
    }
    ink([[x0, y0], [x0, y0 + total], [x0 + w, y0 + total], [x0 + w, y0]], { color: '#6f4f2b', a: 0.45, w: 1.2 });
    if (p.garnish === 'basil') { paint(leaf(x0 + 60, y0 - 12, 26, 10, -0.5), '#3f8a3e'); paint(leaf(x0 + 70, y0 - 10, 22, 8, 0.3), '#4f9a44'); }
    if (p.garnish === 'berry') scatter(2, x0 + 70, y0 - 14, 12, 4, (x, yy) => paint(E(x, yy, 6, 6), '#c4264a', { small: true, gloss: true }));
  },

  // a flaky crescent pastry
  croissant(p) {
    shadow(128, 200, 100, 11);
    const p0 = [30, 178], p1 = [128, 60], p2 = [226, 178];
    const prof = (t) => 0.2 + Math.pow(Math.sin(Math.PI * t), 0.75) * 0.95;
    paint(band(p0, p1, p2, 36, 36, 40, prof), p.color || '#d99c4a', { shade: 0.55, light: 0.55, gran: true });
    paint(band([58, 170], [128, 96], [198, 170], 15, 15, 30, prof), p.mid || '#ebbd6c', { liner: false, wash: 0.55 });
    for (let i = 1; i < 9; i++) {
      const t = i / 9, u = 1 - t;
      const x = u * u * p0[0] + 2 * u * t * p1[0] + t * t * p2[0], y = u * u * p0[1] + 2 * u * t * p1[1] + t * t * p2[1];
      const dx = 2 * u * (p1[0] - p0[0]) + 2 * t * (p2[0] - p1[0]), dy = 2 * u * (p1[1] - p0[1]) + 2 * t * (p2[1] - p1[1]);
      const len = Math.hypot(dx, dy) || 1, w = 36 * prof(t) * 0.95;
      const nx = -dy / len, ny = dx / len;
      ink([[x - nx * w, y - ny * w], [x + dx / len * 6, y + dy / len * 6 + 3], [x + nx * w, y + ny * w]], { color: '#9a5a22', a: 0.55, w: 1.7 });
    }
    crumbs(50, 128, 130, 92, 34, '#f6dfa8');
  },

  // folded tortillas with filling
  taco(p) {
    plate({ rim: '#f0e6d2' });
    [[92, 138, -0.12], [164, 150, 0.12]].forEach(([cx, cy, rot]) => {
      paint(rotate(densify(arc(cx, cy + 6, 54, 54, Math.PI, 0, 22), 4), cx, cy, rot), p.tortilla || '#ecd08e', { shade: 0.45, light: 0.5, gran: true });
      scatter(14, cx, cy - 6, 38, 12, (x, y) => paint(E(x, y, rr(6, 10), rr(4, 7), rnd() * 3), p.meat || '#b8683a', { small: true, gloss: true }));
      scatter(6, cx, cy - 8, 32, 8, (x, y) => paint(rrect(x - 3, y - 3, 6, 6, 1), p.fruit || '#f4cd4a', { small: true, liner: false }));
      scatter(8, cx, cy - 8, 36, 8, (x, y) => herb(x, y, 0.8, '#58a044'));
      scatter(5, cx, cy - 6, 30, 7, (x, y) => dot(x, y, 2.3, '#f3eee4', 0.9));
    });
    citrus(206, 190, 0.4, '#a9d05a', '#5f8f2a');
  },

  // pleated dumplings, samosas or empanadas
  dumplings(p) {
    plate();
    const items = p.shape === 'triangle'
      ? [[96, 140, -0.2], [150, 130, 0.2], [128, 168, 0.05]]
      : [[88, 136, -0.25], [146, 128, 0.1], [112, 166, 0.2], [170, 160, -0.15]];
    items.forEach(([cx, cy, rot]) => {
      const shape = p.shape === 'triangle'
        ? densify([[cx - 30, cy + 22], [cx + 30, cy + 22], [cx, cy - 30]], 4)
        : densify(arc(cx, cy + 10, 34, 24, Math.PI, 0, 18).concat(arc(cx, cy + 10, 34, 8, 0, Math.PI, 12)), 4);
      paint(rotate(shape, cx, cy, rot), p.dough || '#f3e8cc', { gloss: false, shade: 0.45, light: 0.5, wash: 0.75 });
      if (p.shape === 'triangle') for (let k = 0; k < 6; k++) dot(cx - 14 + rnd() * 28, cy - 6 + rnd() * 26, rr(1, 2), '#b86a2a', 0.5);
      else for (let k = 0; k < 7; k++) ink(rotate([[cx - 28 + k * 9.5, cy - 6 + Math.abs(k - 3) * 2.2], [cx - 28 + k * 9.5 + 2, cy + 3 + Math.abs(k - 3) * 2.2]], cx, cy, rot), { color: p.pleat || '#a98b58', a: 0.55, w: 1.3 });
    });
    paint(E(206, 186, 16, 9), p.dip || '#5a3320', { gloss: true, small: false });
    paint(E(206, 186, 16, 9), '#f7f1e4', { small: true, wash: 0, liner: true, edge: 0.5, shade: 0, light: 0 });
  },

  // a bowl of rice with speckles and a topping
  riceBowl(p) {
    bowl((cx, y, rx) => {
      mound(p.rice || '#f6f0e0', cx, y, rx, 44, { gran: false });
      T.pile(110, cx, y - 2, rx * 0.72, 42, (x, yy) => paint(E(x, yy, 3.4, 1.6, rr(0, 3)), p.grain || p.rice || '#fbf6e8', { small: true, liner: false, wash: 0.9 }));
      (p.specks || []).forEach((c) => T.pile(14, cx, y - 6, rx * 0.6, 34, (x, yy) => paint(E(x, yy, rr(2, 3.6), rr(1.6, 2.6), rnd() * 3), c, { small: true, liner: false })));
      if (p.top === 'egg') friedEgg(cx, y - 24, 0.75);
      if (p.top === 'chicken') scatter(4, cx, y - 20, 36, 8, (x, yy) => paint(E(x, yy, 12, 7, rnd()), '#c68a52', { small: true, gloss: true }));
      if (p.top === 'herbs') scatter(7, cx, y - 26, 40, 10, (x, yy) => herb(x, yy, 0.9, '#5fa046'));
      if (p.top === 'onion') scatter(14, cx, y - 28, 44, 10, (x, yy) => ink([[x, yy], [x + rr(4, 9), yy + R(3)]], { color: '#8a5a22', a: 0.9, w: 1.6 }));
    }, { color: p.bowl || '#f1ece2', stripe: p.stripe || '#b5433a', rx: 90 });
  },

  // a pan of paella with seafood
  paella(p) {
    shadow(128, 204, 104, 12);
    ink([[216, 156], [250, 142]], { color: '#2b2622', a: 0.9, w: 6 });
    ink([[40, 156], [8, 142]], { color: '#2b2622', a: 0.9, w: 6 });
    paint(E(128, 152, 110, 62, 0, 0.01), '#2c2825', { gran: false, shade: 0.4, light: 0.3 });
    paint(E(128, 146, 98, 53, 0, 0.012), p.rice || '#e6bd45', { gran: true, shade: 0.25, light: 0.3, liner: false });
    scatter(160, 128, 146, 92, 48, (x, y) => paint(E(x, y, 3, 1.5, rnd() * 3), pick(['#f1d070', '#d9a838', '#f6e098']), { small: true, liner: false, wash: 0.9 }));
    scatter(5, 128, 146, 64, 28, (x, y) => shrimp(x, y, R(0.6), '#ef7f55'));
    scatter(5, 128, 146, 70, 30, (x, y) => paint(E(x, y, 11, 7, rnd() * 3), '#c68548', { small: true, gloss: true }));
    scatter(10, 128, 146, 72, 34, (x, y) => dot(x, y, 2.6, '#6fae45', 0.95));
    scatter(5, 128, 146, 70, 30, (x, y) => paint(rotate(band([x - 9, y], [x, y - 3], [x + 9, y], 2.6, 2.2), x, y, rnd() * 3), '#cf3a2a', { small: true, liner: false }));
    citrus(200, 196, 0.2);
    herb(60, 176, 1.2, '#58a044');
  },

  // dips: hummus, guacamole
  dipBowl(p) {
    bowl((cx, y, rx) => {
      mound(p.base || '#e6cf9c', cx, y, rx, 30, { gran: true, light: 0.4 });
      if (p.oil) paint(E(cx, y - 8, rx * 0.5, 9), p.oil, { small: true, liner: false, gloss: true, wash: 0.6 });
      if (p.bits) p.bits.forEach(({ color, n = 8, r = 3 }) => scatter(n, cx, y - 12, rx * 0.6, 14, (x, yy) => paint(E(x, yy, r * rr(0.8, 1.4), r, rnd() * 3), color, { small: true, liner: false, gloss: true })));
      if (p.dust) scatter(40, cx, y - 14, rx * 0.65, 14, (x, yy) => dot(x, yy, rr(0.6, 1.3), p.dust, 0.7));
      if (p.herb) scatter(4, cx, y - 16, 20, 7, (x, yy) => herb(x, yy, 0.9, '#58a044'));
    }, { color: p.bowl || '#efe7d7', stripe: p.stripe || '#4d77a6', rx: 80, rimY: 144, depth: 56 });
    chips(180, 206, 4, p.chips || '#e4b768');
    if (p.lime) citrus(48, 196, 0.5, '#a9d05a', '#5f8f2a');
  },

  // a pile of drumsticks
  drumsticks(p) {
    plate();
    [[88, 140, -0.5], [150, 128, 0.25], [124, 160, 0.9]].forEach(([cx, cy, rot]) => {
      const meat = band([cx - 40, cy + 20], [cx, cy - 18], [cx + 36, cy + 8], 15, 9, 24, (t) => 0.55 + Math.sin(Math.PI * Math.pow(t, 0.8)) * 0.75);
      paint(rotate(meat, cx, cy, rot), p.coat || '#d7983f', { gloss: !!p.glaze, shade: 0.5, light: 0.45 });
      const bone = rotate(densify([[cx + 34, cy + 3], [cx + 52, cy - 4], [cx + 52, cy + 6], [cx + 34, cy + 12]], 3), cx, cy, rot);
      paint(bone, '#f2e9d5', { small: true });
      scatter(26, cx, cy, 32, 10, (x, y) => dot(rotate([[x, y]], cx, cy, rot)[0][0], rotate([[x, y]], cx, cy, rot)[0][1], rr(1, 2.4), p.crumb || '#f0c46d', 0.55));
    });
    if (p.glaze) scatter(10, 128, 146, 60, 18, (x, y) => dot(x, y, 2, p.glaze, 0.6));
    (p.extras || []).forEach((n) => {
      if (n === 'lime') citrus(206, 186, 0.3, '#a9d05a', '#5f8f2a');
      if (n === 'scallion') for (let k = 0; k < 5; k++) paint(E(72 + k * 14, 186 + R(2), 4, 2.4), '#6fae45', { small: true, liner: false });
    });
  },

  // a wrap with its filling showing
  wrap(p) {
    shadow(128, 204, 96, 10);
    paint(rotate(rrect(54, 118, 150, 52, 24), 128, 144, -0.35), p.tortilla || '#eed9a8', { gran: true, shade: 0.45, light: 0.5 });
    paint(rotate(densify(arc(188, 106, 24, 20, Math.PI * 1.1, Math.PI * 2.2, 14), 4), 188, 106, -0.35), p.tortilla || '#eed9a8', { small: true });
    scatter(8, 196, 96, 15, 8, (x, y) => paint(E(x, y, rr(6, 10), rr(3, 5), rnd() * 3), p.meat || '#b5683f', { small: true, gloss: true }));
    scatter(4, 190, 96, 14, 6, (x, y) => paint(leaf(x, y, 13, 5, rr(-2.5, -0.6)), '#6fae45', { small: true, liner: false }));
    paint(rotate(rrect(56, 140, 100, 44, 10), 128, 160, -0.35), '#f4efe2', { liner: true, gran: false, shade: 0.3, light: 0.3 });
    for (let i = 0; i < 3; i++) ink(rotate([[70 + i * 28, 150 + i * 2], [100 + i * 28, 164 + i * 2]], 128, 160, -0.35), { color: '#c9b891', a: 0.5, w: 1 });
    scatter(4, 70, 200, 10, 4, (x, y) => paint(E(x, y, 8, 5), '#d63f2f', { small: true, gloss: true }));
  },

  // custard tarts
  tartlets(p) {
    plate();
    [[84, 142], [150, 132], [122, 170]].forEach(([cx, cy]) => {
      paint(densify([[cx - 32, cy - 6], [cx + 32, cy - 6], [cx + 24, cy + 20], [cx - 24, cy + 20]], 4), p.pastry || '#dba653', { shade: 0.5, gran: true });
      for (let k = 0; k < 7; k++) ink([[cx - 26 + k * 8.6, cy - 4], [cx - 20 + k * 7.4, cy + 18]], { color: '#a86f2a', a: 0.4, w: 1 });
      paint(E(cx, cy - 6, 30, 12), p.filling || '#f2cd5a', { gloss: true, liner: true, light: 0.55 });
      scatter(5, cx, cy - 6, 18, 6, (x, y) => paint(E(x, y, rr(4, 7), rr(2, 4)), p.char || '#8a4a22', { small: true, liner: false, wash: 0.8 }));
    });
    scatter(20, 128, 150, 80, 30, (x, y) => dot(x, y, 0.9, '#f5ead2', 0.6));
  },

  // stack of pancakes with butter and syrup
  pancakes(p) {
    plate();
    for (let i = 0; i < 4; i++) {
      const y = 168 - i * 15;
      paint(rrect(54 + R(2), y, 148, 18, 9), p.color || '#dba95f', { gran: true, shade: 0.45, light: 0.5 });
      paint(E(128, y + 2, 74 + R(2), 15), p.top || '#e8bf78', { liner: false, gran: true, light: 0.4 });
    }
    paint(E(128, 112, 66, 14), p.top || '#e8bf78', { liner: true, gloss: false });
    paint(rrect(112, 94, 28, 16, 3, -0.1), '#fbe48a', { gloss: true });
    paint(densify([[70, 112], [186, 112], [180, 126], [170, 150], [166, 128], [154, 130], [146, 168], [140, 132], [96, 130], [90, 156], [84, 128], [74, 126]], 5), p.syrup || '#a8531f', { liner: false, gloss: true, gran: false, wash: 0.55, light: 0.7 });
    scatter(3, 168, 100, 22, 8, (x, y) => paint(E(x, y, 6, 6), '#c4264a', { small: true, gloss: true }));
  },

  // folded crêpes
  crepes(p) {
    plate();
    [[104, 140, -0.3], [158, 138, 0.35]].forEach(([cx, cy, rot]) => {
      paint(rotate(densify([[cx, cy - 36], [cx + 44, cy + 22], [cx - 44, cy + 22]], 4), cx, cy, rot), p.color || '#ecc884', { gran: true, shade: 0.45, light: 0.5 });
      scatter(8, cx, cy + 4, 18, 12, (x, y) => paint(E(x, y, rr(5, 9), rr(3, 6), rnd() * 3), '#c88a3e', { small: true, liner: false, wash: 0.45 }));
      scatter(40, cx, cy + 4, 28, 18, (x, y) => dot(x, y, 0.9, '#fffaf0', 0.8));
    });
    citrus(196, 184, 0.5);
    scatter(3, 70, 186, 10, 4, (x, y) => paint(E(x, y, 6, 6), '#c4264a', { small: true, gloss: true }));
  },

  // fried fish with chips
  fishChips(p) {
    shadow(128, 204, 104, 11);
    paint(rotate(rrect(36, 150, 190, 48, 6), 128, 175, -0.12), '#efe4c8', { gran: true, shade: 0.35, liner: true });
    for (let i = 0; i < 12; i++) {
      const x = 130 + i * 8, y = 150 + R(10);
      paint(rotate(rrect(x - 28, y - 4, 56, 10, 3), x, y, rr(-0.9, -0.2)), '#e8bf5c', { small: true, liner: false, shade: 0.4 });
    }
    const fish = band([40, 172], [92, 122], [160, 150], 20, 17, 26, (t) => 0.6 + Math.sin(Math.PI * t) * 0.6);
    paint(fish, p.batter || '#d99a42', { gran: true, shade: 0.5, light: 0.5 });
    scatter(40, 98, 150, 56, 14, (x, y) => dot(x, y, rr(1, 2.4), '#f2c36a', 0.7));
    citrus(190, 208, 0.2);
    paint(E(222, 188, 14, 7), '#9cc07a', { small: true });
  },

  // falafel balls with herbs and dip
  falafel(p) {
    plate();
    [[84, 138], [128, 126], [172, 140], [106, 166], [150, 168]].forEach(([cx, cy], i) => {
      paint(E(cx, cy, 20, 17, 0, 0.1), '#9a5d2b', { gran: true, shade: 0.55, light: 0.45 });
      scatter(14, cx, cy, 16, 13, (x, y) => dot(x, y, rr(0.8, 1.8), '#c88a4d', 0.7));
      if (i === 1) { paint(E(cx + 3, cy + 2, 11, 9, 0.3), '#b7c46a', { small: true, liner: false }); }
    });
    scatter(5, 128, 150, 80, 30, (x, y) => herb(x, y, 1.1, '#58a044'));
    paint(E(206, 186, 16, 8), '#f1ead6', { gloss: true });
    for (let i = 0; i < 3; i++) ink(curve([196, 186], [206, 182 + i], [216, 186]), { color: '#d8cba5', a: 0.7, w: 1 });
  },

  // crème brûlée in a ramekin
  ramekin(p) {
    bowl((cx, y, rx) => {
      paint(E(cx, y + 2, rx * 0.93, 18, 0, 0.004), p.top || '#c98421', { gloss: true, liner: false, light: 0.7, shade: 0.4, blot: true });
      for (let i = 0; i < 5; i++) ink([[cx - 50 + rnd() * 100, y + R(8)], [cx - 40 + rnd() * 80, y + R(9)]], { color: '#fbe3a0', a: 0.75, w: 1.1 });
      scatter(3, cx, y - 2, 34, 6, (x, yy) => paint(E(x, yy, 7, 7), '#c4264a', { small: true, gloss: true }));
      herb(cx + 20, y - 8, 1.1, '#58a044');
    }, { color: '#f4efe4', stripe: '#c9b59a', rx: 84, depth: 54, rimY: 138 });
    paint(rotate(rrect(190, 190, 54, 7, 3), 216, 193, -0.4), '#c9ccd2', { liner: true, small: true });
  },

  // belgian waffle
  waffle(p) {
    plate();
    const sq = rotate(rrect(64, 108, 128, 76, 10), 128, 146, -0.12);
    paint(sq, p.color || '#dba95f', { gran: true, shade: 0.5, light: 0.5 });
    for (let i = 1; i < 6; i++) {
      ink(rotate([[64 + i * 21, 112], [64 + i * 21, 180]], 128, 146, -0.12), { color: '#9a6a2c', a: 0.6, w: 1.6 });
      if (i < 4) ink(rotate([[68, 108 + i * 19], [188, 108 + i * 19]], 128, 146, -0.12), { color: '#9a6a2c', a: 0.6, w: 1.6 });
    }
    paint(rrect(114, 120, 26, 16, 3, -0.15), '#fbe48a', { gloss: true });
    scatter(70, 128, 146, 56, 32, (x, y) => dot(x, y, rr(0.8, 1.6), '#fffaf0', 0.85));
    scatter(3, 170, 150, 14, 8, (x, y) => paint(E(x, y, 8, 8), '#c4264a', { small: true, gloss: true }));
    paint(densify([[66, 168], [100, 176], [96, 192], [70, 188]], 4), p.syrup || '#a8531f', { small: true, gloss: true, liner: false, wash: 0.5 });
  },

  // salad-style bowls: [{ color, n, r, shape }]
  mixBowl(p) {
    bowl((cx, y, rx) => {
      mound(p.base || '#efe3c5', cx, y, rx, 34, { gran: false, wash: 0.6 });
      (p.items || []).forEach(({ color, n = 14, r = 4, shape }) => scatter(n, cx, y - 8, rx * 0.68, 22, (x, yy) => {
        if (shape === 'elbow') paint(rotate(band([x - 8, yy + 3], [x, yy - 6], [x + 8, yy + 3], 3.2, 3.2, 12), x, yy, rnd() * 3), color, { small: true, gloss: true, liner: false });
        else if (shape === 'leaf') paint(leaf(x, yy, r * 3, r, rnd() * TAU), color, { small: true, liner: false });
        else paint(rotate(rrect(x - r, yy - r * 0.8, r * 2, r * 1.6, 1.4), x, yy, rnd() * 3), color, { small: true, gloss: shape === 'gloss', liner: false });
      }));
      if (p.lime) citrus(cx + 54, y - 12, 0.3, '#a9d05a', '#5f8f2a');
    }, { color: p.bowl || '#f1ece2', stripe: p.stripe || '#4d77a6', rx: 88 });
  },

  // baguette sandwich
  baguette(p) {
    shadow(128, 200, 106, 10);
    const loaf = band([20, 176], [128, 120], [236, 100], 21, 19, 30, (t) => 0.8 + Math.sin(Math.PI * t) * 0.3);
    paint(loaf, '#d49a50', { gloss: true, shade: 0.5, light: 0.55 });
    const fill = band([34, 164], [128, 110], [224, 96], 12, 11, 30);
    paint(fill, '#f5ead0', { liner: false, gran: false, small: false });
    scatter(9, 128, 128, 74, 14, (x, y) => paint(E(x, y, rr(10, 15), rr(3, 5), -0.3), p.meat || '#e0a58e', { small: true, gloss: true }));
    scatter(8, 128, 120, 74, 10, (x, y) => paint(rotate(rrect(x - 8, y - 1.5, 16, 3, 1), x, y, -0.3), '#ee9a3b', { small: true, liner: false }));
    scatter(7, 128, 116, 76, 10, (x, y) => herb(x, y, 1, '#58a044'));
    scatter(4, 128, 122, 70, 8, (x, y) => dot(x, y, 2, '#d63a2a', 0.9));
    for (let i = 0; i < 5; i++) {
      const t = 0.15 + i * 0.17;
      paint(leaf(20 + t * 216 - 12, 168 - t * 80 - Math.sin(Math.PI * t) * 12, 26, 4.5, -0.45), '#f1d29a', { small: true, liner: false });
    }
  },

  // a cup or glass of tea
  cup(p) {
    shadow(128, 206, 82, 9);
    const tall = p.vessel === 'tall';
    const x0 = tall ? 86 : 72, w = tall ? 84 : 112, top = tall ? 46 : 96, h = tall ? 140 : 88;
    paint(E(128, 196, w / 2 + 28, 12), '#efe8d8', { gran: false, liner: true, small: false, shade: 0.3, wash: 0.7 });
    const body = densify([[x0, top], [x0 + w, top], [x0 + w - (tall ? 6 : 12), top + h], [x0 + (tall ? 6 : 12), top + h]], 5);
    paint(body, p.glass || '#dfe9ea', { liner: true, gran: false, shade: 0.25, light: 0.6, wash: 0.5 });
    const level = top + (tall ? 18 : 12);
    paint(densify([[x0 + 3, level], [x0 + w - 3, level], [x0 + w - (tall ? 8 : 14), top + h - 2], [x0 + (tall ? 8 : 14), top + h - 2]], 5), p.liquid || '#c68c4f', { liner: false, gran: true, shade: 0.45, light: 0.4, wash: 0.8 });
    paint(E(128, level, w / 2 - 3, 8), p.surface || p.liquid || '#d5a066', { liner: true, gran: false, gloss: true, small: false });
    if (p.pearls) scatter(46, 128, top + h - 16, w / 2 - 14, 12, (x, y) => dot(x, y, 4.2, '#241a14', 0.95));
    if (p.straw) { ink([[150, top - 28], [138, top + h - 20]], { color: '#d46a8a', a: 0.95, w: 8 }); ink([[150, top - 28], [138, top + h - 20]], { color: '#f2a8bb', a: 0.6, w: 3 }); }
    if (p.handle) { ink(curve([x0 + w, top + 14], [x0 + w + 36, top + 30], [x0 + w - 8, top + 62]), { color: '#d9d2c2', a: 0.95, w: 7 }); ink(curve([x0 + w, top + 14], [x0 + w + 36, top + 30], [x0 + w - 8, top + 62]), { color: '#8a826e', a: 0.4, w: 1 }); }
    if (p.stick) { paint(rotate(rrect(104, 58, 8, 76, 3), 108, 96, 0.35), '#a8603a', { small: true, liner: false }); paint(rotate(E(146, 46, 8, 8), 146, 46, 0), '#f1d27a', { small: true, liner: false }); }
    if (p.steam) for (let i = 0; i < 3; i++) ink(curve([108 + i * 22, top - 8], [100 + i * 22 + R(6), top - 26], [112 + i * 22, top - 44]), { color: '#a9a090', a: 0.35, w: 3 });
  },

  // bibimbap in a stone bowl: sectors of toppings around an egg
  bibimbap(p) {
    bowl((cx, y, rx) => {
      paint(E(cx, y + 2, rx * 0.93, 19, 0, 0.004), '#f5eedc', { liner: false, gran: false, blot: false });
      const colors = p.sectors || ['#5f9a44', '#ec9033', '#efe2b0', '#6b4630', '#a64a3a', '#f1d86a'];
      colors.forEach((c, i) => {
        const a0 = (i / colors.length) * TAU, a1 = ((i + 1) / colors.length) * TAU;
        const pts = [[cx, y + 2]].concat(arc(cx, y + 2, rx * 0.83, 15, a0, a1, 8));
        paint(densify(pts, 4), c, { small: false, liner: false, gran: true, shade: 0.3, light: 0.4 });
      });
      friedEgg(cx, y - 2, 0.55);
      dot(cx + 32, y + 6, 4, '#c0301f', 0.9);
    }, { color: '#2f2a27', stripe: '#8a6a42', inside: '#d8cdb8', rx: 92 });
  },

  // skillet of eggs poached in sauce
  skillet(p) {
    shadow(128, 204, 104, 11);
    ink([[214, 158], [252, 140]], { color: '#2b2622', a: 0.95, w: 8 });
    paint(E(128, 154, 110, 60, 0, 0.01), '#34302d', { gran: false, shade: 0.4 });
    paint(E(128, 148, 98, 51, 0, 0.012), p.sauce || '#c8412b', { gran: true, shade: 0.3, light: 0.3, liner: false });
    scatter(18, 128, 148, 84, 40, (x, y) => paint(E(x, y, rr(6, 11), rr(3, 6), rnd() * 3), '#e0553a', { small: true, liner: false, wash: 0.6 }));
    [[88, 140], [138, 130], [170, 160], [104, 168]].slice(0, p.eggs || 3).forEach(([cx, cy]) => { paint(E(cx, cy, 20, 12, 0, 0.14), '#fcf9ef', { liner: true, gran: false }); paint(E(cx + 1, cy - 1, 7, 5.5), '#eeaa2a', { gloss: true, liner: false }); });
    scatter(4, 128, 148, 76, 30, (x, y) => herb(x, y, 1.1, '#58a044'));
    scatter(12, 128, 148, 80, 38, (x, y) => dot(x, y, 0.9, '#7a2418', 0.6));
  },

  // breaded cutlet
  cutlet(p) {
    plate();
    paint(E(124, 146, 88, 46, -0.15, 0.1), p.color || '#dba54e', { gran: true, shade: 0.5, light: 0.5 });
    scatter(140, 124, 146, 80, 38, (x, y) => dot(x, y, rr(1, 2.8), '#f0c970', 0.55));
    scatter(24, 124, 146, 74, 34, (x, y) => dot(x, y, rr(1.4, 2.4), '#b56d27', 0.45));
    citrus(200, 172, 0.2);
    scatter(4, 70, 176, 14, 5, (x, y) => herb(x, y, 1.2, '#58a044'));
    scatter(4, 70, 150, 12, 6, (x, y) => paint(E(x, y, 7, 5, rnd()), '#efe0b0', { small: true, liner: false }));
  },

  // a whole pie with a lattice, one slice cut
  pie(p) {
    shadow(128, 202, 104, 12);
    paint(E(128, 146, 110, 64, 0, 0.02), p.crust || '#d79d4d', { shade: 0.5, light: 0.45 });
    paint(E(128, 140, 98, 56, 0, 0.02), p.top || '#e0aa5a', { gran: true, liner: false, light: 0.4 });
    const c = T.ctx;
    c.save();
    const clip = new Path2D();
    clip.ellipse(128, 140, 97, 55, 0, 0, TAU);
    c.clip(clip);
    for (let i = -4; i <= 4; i++) {
      ink([[128 + i * 20 - 40, 98], [128 + i * 20 + 40, 182]], { color: '#b9792f', a: 0.7, w: 5.5 });
      ink([[128 + i * 20 + 40, 98], [128 + i * 20 - 40, 182]], { color: '#c78b3d', a: 0.7, w: 5.5 });
    }
    c.restore();
    paint(densify([[128, 140], [220, 112], [214, 160]], 4), '#f6efe0', { small: true, liner: true, wash: 0.95 });
    paint(densify([[128, 140], [214, 160], [196, 176]], 4), p.filling || '#c88a3c', { small: true, liner: false, shade: 0.5 });
    scatter(30, 128, 140, 90, 50, (x, y) => dot(x, y, 0.9, '#f6ead0', 0.5));
  },

  // fries with gravy and curds
  poutine(p) {
    bowl((cx, y, rx) => {
      paint(E(cx, y + 3, rx * 0.9, 17), '#6f4224', { liner: false, blot: false });
      for (let i = 0; i < 18; i++) {
        const x = cx - 56 + i * 6.5, h = rr(26, 44);
        paint(rotate(rrect(x - 4, y - h, 8, h, 2), x, y, R(0.35)), '#e6b84f', { small: true, liner: false, shade: 0.4 });
      }
      paint(densify([[cx - 62, y - 14], [cx + 62, y - 16], [cx + 50, y + 4], [cx - 50, y + 6]], 5), '#6a3d1e', { liner: false, gloss: true, wash: 0.6, small: true });
      scatter(10, cx, y - 20, 50, 12, (x, yy) => paint(E(x, yy, rr(5, 8), rr(4, 6), rnd() * 3), '#fbf3da', { small: true, liner: true }));
    }, { color: '#f1ece2', stripe: '#c0392b', rx: 80, depth: 58, rimY: 146 });
  },

  // skewers with peanut sauce
  skewers(p) {
    plate();
    [[100, 126], [128, 144], [156, 162]].forEach(([cx, cy], i) => {
      ink([[cx - 74, cy + 34], [cx + 74, cy - 34]], { color: '#c9a56a', a: 0.95, w: 3 });
      for (let k = 0; k < 4; k++) {
        const t = -0.15 + k * 0.22;
        paint(rotate(rrect(cx + t * 150 - 14, cy - t * 68 - 9, 28, 18, 7), cx + t * 150, cy - t * 68, -0.42), p.meat || '#b56a34', { gloss: true, shade: 0.55 });
      }
    });
    paint(E(206, 190, 22, 11), '#c8873f', { gloss: true });
    paint(E(206, 190, 22, 11), '#f7f1e4', { small: true, wash: 0, liner: true, edge: 0.5, shade: 0, light: 0 });
    cucumberSlices(54, 196, 3, 13);
    scatter(3, 70, 160, 8, 4, (x, y) => paint(E(x, y, 6, 6), '#efe3c0', { small: true, liner: true }));
  },

  // rice mound with sides on a plate (nasi lemak, chicken rice)
  platedRice(p) {
    plate();
    paint(densify(arc(110, 150, 44, 40, Math.PI, 0, 18).concat([[154, 156], [66, 156]]), 5), p.rice || '#f7f1e2', { gran: true, shade: 0.35, light: 0.5 });
    T.pile(60, 110, 140, 32, 24, (x, y) => paint(E(x, y, 3, 1.5, rr(0, 3)), '#fffaf0', { small: true, liner: false, wash: 0.8 }));
    (p.sides || []).forEach((s) => {
      if (s === 'egg') eggHalf(170, 128, 0.9);
      if (s === 'cucumber') cucumberSlices(150, 172, 4, 12);
      if (s === 'peanuts') scatter(12, 186, 150, 14, 8, (x, y) => paint(E(x, y, 3.4, 2.6, rnd()), '#d19a5a', { small: true, liner: false }));
      if (s === 'sambal') paint(E(172, 150, 16, 8), '#c0301f', { gloss: true, small: true });
      if (s === 'anchovy') scatter(10, 190, 130, 12, 6, (x, y) => ink([[x, y], [x + 6, y + 1]], { color: '#5a3a22', a: 0.9, w: 1.6 }));
      if (s === 'chicken') for (let i = 0; i < 5; i++) paint(rotate(rrect(130 + i * 9, 120 + i * 3, 30, 11, 5), 150, 130, -0.35 + i * 0.08), '#f2e2c0', { small: true, liner: true });
      if (s === 'chili') paint(E(196, 164, 11, 6), '#cf3a2a', { small: true, gloss: true });
    });
    scatter(2, 100, 120, 20, 5, (x, y) => herb(x, y, 1.2, '#58a044'));
  },
};

// ---------------------------------------------------------------- public API
export const hasDishArt = (name) => name in DISH_ART;
export const dishArtNames = () => Object.keys(DISH_ART);
const cache = new Map();
// px: how many pixels across. Thumbnails on the map use 256; the preview in the panel asks for much more.
export function paintDish(name, px = 256) {
  const key = `${name}@${px}`;
  if (cache.has(key)) return cache.get(key);
  const [template, params = {}] = DISH_ART[name];
  const c = paintOnCanvas(px, `dish:${name}`, () => T_[template](params));
  cache.set(key, c);
  return c;
}
export const isDishPainted = (name, px = 256) => cache.has(`${name}@${px}`);
