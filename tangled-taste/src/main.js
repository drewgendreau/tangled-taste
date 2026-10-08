import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { LineSegments2 } from 'three/examples/jsm/lines/LineSegments2.js';
import { LineSegmentsGeometry } from 'three/examples/jsm/lines/LineSegmentsGeometry.js';
import { LineMaterial } from 'three/examples/jsm/lines/LineMaterial.js';
import { CATEGORIES, CUISINES, DISHES, DISH_TYPES } from './data.js';
import { buildGraph, latLngToVec, GLOBE_RADIUS } from './graph.js';
import { paintBlob, paintBlobCanvas, paintHalo, paintPaperTile } from './watercolor.js';
import { paintIngredient, paintCuisine, isPainted } from './illustrations.js';
import { buildProfiles, buildMatrix, compareSets, describe } from './similarity.js';

performance.mark('app:module-start');
const PAPER = new THREE.Color('#f5eee0');
const INK = new THREE.Color('#5a4030');
// Positions are computed once at build time (scripts/bake-layout.mjs); without them we simulate on load.
const baked = Object.values(import.meta.glob('./data/layout.generated.json', { eager: true, import: 'default' }))[0];
const { nodes, edges, adjacency } = buildGraph(baked);
performance.mark('app:graph');
const totalDishes = DISHES.length;
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`);
const norm = (s) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();

// ---------------------------------------------------------------- idle work
// Painting and icon work is cut into short slices (about 8 ms) so the page stays responsive;
// anything the person is waiting for goes in the urgent queue and is done first.
const urgentQueue = [], idleQueue = [];
const sliceChannel = new MessageChannel();
let sliceRunning = false;
sliceChannel.port1.onmessage = () => {
  const t0 = performance.now();
  while ((urgentQueue.length || idleQueue.length) && performance.now() - t0 < 8) (urgentQueue.shift() || idleQueue.shift())();
  if (urgentQueue.length || idleQueue.length) sliceChannel.port2.postMessage(0);
  else sliceRunning = false;
};
function whenIdle(fn, low = false) {
  (low ? idleQueue : urgentQueue).push(fn);
  if (!sliceRunning) {
    sliceRunning = true;
    sliceChannel.port2.postMessage(0);
  }
}

// ---------------------------------------------------------------- page dressing
{
  // paper: a small speckled tile repeated across a full-screen canvas
  const paper = document.createElement('canvas');
  paper.id = 'paper';
  document.body.prepend(paper);
  const tile = paintPaperTile(256);
  const drawPaper = () => {
    paper.width = innerWidth;
    paper.height = innerHeight;
    const g = paper.getContext('2d');
    g.fillStyle = g.createPattern(tile, 'repeat');
    g.fillRect(0, 0, paper.width, paper.height);
  };
  drawPaper();
  window.addEventListener('resize', drawPaper);
  // soft colour washes (blurred by CSS, so a small canvas is plenty)
  const washes = document.getElementById('washes');
  const spots = [
    ['#c0504d', 11, '-8vw', '-10vh', '38vw'],
    ['#7fa36b', 23, '72vw', '62vh', '40vw'],
    ['#e0bb57', 37, '-6vw', '68vh', '30vw'],
    ['#5a8fb8', 41, '80vw', '-12vh', '26vw'],
  ];
  for (const [c, seed, x, y, w] of spots) {
    const cv = paintBlobCanvas(c, seed, 96);
    Object.assign(cv.style, { left: x, top: y, width: w, height: w });
    washes.appendChild(cv);
  }
}

// ---------------------------------------------------------------- renderer
const stage = document.getElementById('stage');
const renderer = new THREE.WebGLRenderer({ antialias: (window.devicePixelRatio || 1) < 2, alpha: true, powerPreference: 'high-performance' });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setSize(innerWidth, innerHeight);
renderer.setClearColor(0x000000, 0);
stage.appendChild(renderer.domElement);

const scene = new THREE.Scene();
scene.fog = new THREE.Fog(PAPER, 260, 560);
const camera = new THREE.PerspectiveCamera(45, innerWidth / innerHeight, 1, 2000);
const HOME_POS = new THREE.Vector3(40, 60, 360);
camera.position.copy(HOME_POS);
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.07;
controls.minDistance = 40;
controls.maxDistance = 700;
controls.autoRotate = true;
controls.autoRotateSpeed = 0.35;
let ownControlsUpdate = false; // changes caused by our own frame loop must not wake it up again
controls.addEventListener('change', () => { if (!ownControlsUpdate) invalidate(); });
controls.rotateSpeed = 0.6;

// ---------------------------------------------------------------- globe graticule
{
  const pts = [];
  const R = GLOBE_RADIUS * 1.18;
  for (let lat = -60; lat <= 60; lat += 30) {
    for (let lng = -180; lng < 180; lng += 4) pts.push(...latLngToVec(lat, lng, R), ...latLngToVec(lat, lng + 2.2, R));
  }
  for (let lng = -180; lng < 180; lng += 30) {
    for (let lat = -84; lat < 84; lat += 4) pts.push(...latLngToVec(lat, lng, R), ...latLngToVec(lat + 2.2, lng, R));
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pts, 3));
  scene.add(new THREE.LineSegments(g, new THREE.LineBasicMaterial({ color: INK, transparent: true, opacity: 0.09, fog: true })));
}

// ---------------------------------------------------------------- ingredient sprites
// Each ingredient starts as a faint wash and is replaced by its watercolor
// illustration; the most common ingredients are painted first.
// Plain watercolor blobs, three variants per family: the loading wash, and what the map
// shows when the illustrations are switched off.
const blobs = {};
Object.entries(CATEGORIES).forEach(([key, { color }], ci) => (blobs[key] = [0, 1, 2].map((v) => paintBlob(color, ci * 101 + v * 17 + 1, 96))));
let showIllustrations = true;
try { showIllustrations = localStorage.getItem('tt-illustrations') !== '0'; } catch { /* storage unavailable */ }
const REP = { vegetable: 'tomato', herb: 'basil', fruit: 'lemon', spice: 'cinnamon', meat: 'beef', seafood: 'fish', dairy: 'egg', grain: 'bread', legume: 'chickpeas', nut: 'walnut', pantry: 'olive oil' };
// Small icons are drawn straight into <canvas> elements from the artwork that is already painted
// (no PNG encoding): the markup goes in first and fillIcons() puts the pixels in as time allows.
const ico = (kind, key, px = 26, cls = '') => `<canvas class="ico ${cls}" data-ico="${kind}:${esc(key)}" width="${px * 2}" height="${px * 2}" aria-hidden="true"></canvas>`;
const ingIco = (n, px) => ico('ing', n.id, px);
const cuiIco = (name, px = 24) => ico('cui', name, px, 'cico');
const famIco = (k, px) => ico('fam', k, px);
const iconSource = (kind, key) => {
  if (kind === 'ing') { const n = nodes[+key]; return paintIngredient(n.name, CATEGORIES[n.category].color); }
  if (kind === 'cui') return paintCuisine(key, CUISINES[key].color);
  return paintIngredient(REP[key], CATEGORIES[key].color);
};
const iconReady = (kind, key) => (kind === 'ing' ? isPainted(nodes[+key].name) : kind === 'cui' ? isPainted(`cuisine:${key}`) : isPainted(REP[key]));
function fillIcons(root) {
  for (const c of root.querySelectorAll('canvas[data-ico]:not([data-done])')) {
    const [kind, key] = c.dataset.ico.split(/:(.*)/s);
    const draw = () => {
      const g = c.getContext('2d');
      g.imageSmoothingQuality = 'high';
      g.drawImage(iconSource(kind, key), 0, 0, c.width, c.height);
      c.dataset.done = '1';
    };
    if (iconReady(kind, key)) draw();
    else whenIdle(draw); // paints the artwork first, in a slice of its own
  }
}
const nodeGroup = new THREE.Group();
scene.add(nodeGroup);
for (const n of nodes) {
  n.blobTex = blobs[n.category][n.id % 3];
  const mat = new THREE.SpriteMaterial({ map: n.blobTex, transparent: true, depthWrite: false, opacity: 0, rotation: (((n.id * 7919) % 100) / 100 - 0.5) * 0.3 });
  const s = new THREE.Sprite(mat);
  s.position.fromArray(n.pos);
  n.baseScale = 6 + 34 * Math.pow(n.commonness, 1.4);
  s.scale.setScalar(n.baseScale);
  s.userData.node = n;
  n.sprite = s;
  n.vis = { scale: 1, base: n.baseScale, opacity: 0, tScale: 1, tOpacity: 1 };
  nodeGroup.add(s);
}
performance.mark('app:sprites');
// Each ingredient shows a soft wash until its painting is ready; the most common ones are painted first.
function paintIngredientNode(n) {
  if (n.illusTex) return;
  invalidate();
  const tex = new THREE.CanvasTexture(paintIngredient(n.name, CATEGORIES[n.category].color));
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 1; // sprites always face the camera, so anisotropic filtering buys nothing
  n.illusTex = tex;
  if (showIllustrations) {
    n.sprite.material.map = tex;
    n.sprite.material.needsUpdate = true;
  }
  n.vis.opacity = 0; // fade the finished painting in
}
for (const n of [...nodes].sort((a, b) => b.count - a.count)) whenIdle(() => paintIngredientNode(n), true);
function setIllustrations(on, { persist = true } = {}) {
  showIllustrations = on;
  invalidate();
  for (const n of nodes) {
    n.sprite.material.map = on && n.illusTex ? n.illusTex : n.blobTex;
    n.sprite.material.needsUpdate = true;
  }
  for (const m of cuisineMarks) {
    if (m.ready) {
      m.dot.material.map = on ? m.illusTex : m.blobTex;
      m.dot.material.needsUpdate = true;
    }
    m.dot.scale.setScalar(on ? CUISINE_PIN_SIZE : 6);
  }
  const btn = document.getElementById('illus-toggle');
  btn.setAttribute('aria-checked', String(on));
  if (persist) try { localStorage.setItem('tt-illustrations', on ? '1' : '0'); } catch { /* storage unavailable */ }
}
const halo = new THREE.Sprite(new THREE.SpriteMaterial({ map: paintHalo(), transparent: true, depthWrite: false, opacity: 0 }));
scene.add(halo);

// ---------------------------------------------------------------- base edges (soft ink threads)
const SEG = 10;
function curvePoints(a, b, bend = 0.82, SEG = 10) {
  const m = new THREE.Vector3().addVectors(a, b).multiplyScalar(0.5).multiplyScalar(bend);
  const out = [];
  for (let i = 0; i <= SEG; i++) {
    const t = i / SEG, u = 1 - t;
    out.push(new THREE.Vector3(u * u * a.x + 2 * u * t * m.x + t * t * b.x, u * u * a.y + 2 * u * t * m.y + t * t * b.y, u * u * a.z + 2 * u * t * m.z + t * t * b.z));
  }
  return out;
}
const maxW = Math.max(...edges.map((e) => e.weight));
const baseEdgeMat = new THREE.LineBasicMaterial({ vertexColors: true, transparent: true, opacity: 0.75, depthWrite: false, fog: true });
let baseEdges = null;
// The ambient web of connections. `keep` limits it to a set of ingredients; minWeight drops weak links.
function buildBaseEdges(minWeight = 1, keep = null) {
  if (baseEdges) {
    scene.remove(baseEdges);
    baseEdges.geometry.dispose();
  }
  const pos = [], col = [];
  const tmp = new THREE.Color();
  for (const e of edges) {
    if (e.weight < minWeight || (keep && !(keep.has(e.source) && keep.has(e.target)))) continue;
    const a = nodes[e.source].sprite.position, b = nodes[e.target].sprite.position;
    const pts = curvePoints(a, b);
    const strength = 0.10 + 0.5 * Math.pow(e.weight / maxW, 0.6);
    tmp.copy(PAPER).lerp(INK, strength);
    for (let i = 0; i < SEG; i++) {
      pos.push(pts[i].x, pts[i].y, pts[i].z, pts[i + 1].x, pts[i + 1].y, pts[i + 1].z);
      col.push(tmp.r, tmp.g, tmp.b, tmp.r, tmp.g, tmp.b);
    }
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('color', new THREE.Float32BufferAttribute(col, 3));
  baseEdges = new THREE.LineSegments(g, baseEdgeMat);
  scene.add(baseEdges);
}

// highlighted edges: fat lines rebuilt per view
const hiMat = new LineMaterial({ vertexColors: true, linewidth: 2, transparent: true, opacity: 0.85, depthWrite: false, worldUnits: false });
const hiMatShared = new LineMaterial({ vertexColors: true, linewidth: 4.4, transparent: true, opacity: 0.97, depthWrite: false, worldUnits: false });
hiMat.resolution.set(innerWidth, innerHeight);
hiMatShared.resolution.set(innerWidth, innerHeight);
let hiLines = null;
let hiLinesShared = null;
let hiLinesCasing = null;
const hiMatCasing = new LineMaterial({ color: 0xf7f1e4, linewidth: 9, transparent: true, opacity: 0.85, depthWrite: false, worldUnits: false });
hiMatCasing.resolution.set(innerWidth, innerHeight);
const colorCache = new Map();
const colorOf = (hex) => colorCache.get(hex) || (colorCache.set(hex, new THREE.Color(hex)), colorCache.get(hex));
// items: { a, b, color | colors[], strength, shared }. Edges with several colors are
// drawn as barber-pole stripes in thicker lines, so shared connections read at a glance.
function setHighlightEdges(list) {
  for (const l of [hiLines, hiLinesShared, hiLinesCasing]) if (l) { scene.remove(l); l.geometry.dispose(); }
  hiLines = hiLinesShared = hiLinesCasing = null;
  if (!list.length) return;
  const build = (items, material, order, casing = false) => {
    if (!items.length) return null;
    const pos = [], col = [];
    const tmp = new THREE.Color();
    for (const { a, b, color, colors, strength } of items) {
      const cols = colors || [color];
      const n = cols.length > 1 ? 12 : SEG;
      const pts = curvePoints(nodes[a].sprite.position, nodes[b].sprite.position, 0.82, n);
      for (let i = 0; i < n; i++) {
        tmp.copy(PAPER).lerp(colorOf(cols[i % cols.length]), 0.35 + 0.65 * strength);
        pos.push(pts[i].x, pts[i].y, pts[i].z, pts[i + 1].x, pts[i + 1].y, pts[i + 1].z);
        col.push(tmp.r, tmp.g, tmp.b, tmp.r, tmp.g, tmp.b);
      }
    }
    const g = new LineSegmentsGeometry();
    g.setPositions(pos);
    g.setColors(col);
    const lines = new LineSegments2(g, material);
    lines.renderOrder = order;
    scene.add(lines);
    if (casing) {
      // a pale outline under thick lines keeps them readable over clutter
      const cg = new LineSegmentsGeometry();
      cg.setPositions(pos);
      hiLinesCasing = new LineSegments2(cg, hiMatCasing);
      hiLinesCasing.renderOrder = order - 0.05;
      scene.add(hiLinesCasing);
    }
    return lines;
  };
  hiLines = build(list.filter((e) => !e.shared), hiMat, -1);
  hiLinesShared = build(list.filter((e) => e.shared), hiMatShared, -0.9, list.some((e) => e.casing));
}

// ---------------------------------------------------------------- render only when something changes
// The scene is redrawn while something is moving (camera, fades, hover) and otherwise left alone,
// so an idle page costs next to nothing. invalidate() asks for one more frame.
let needsRender = true;
const invalidate = () => { needsRender = true; };

// ---------------------------------------------------------------- performance readout
// Rolling averages of what each frame spends its time on. Add ?perf to the address for a live readout.
const perf = {
  n: 0, update: 0, render: 0, labels: 0, longTasks: 0, longTaskMs: 0, frames: 0,
  add(u, r, l) { const k = 0.1; this.update += (u - this.update) * k; this.render += (r - this.render) * k; this.labels += (l - this.labels) * k; this.frames++; },
};
try {
  new PerformanceObserver((list) => { for (const e of list.getEntries()) { perf.longTasks++; perf.longTaskMs += e.duration; } }).observe({ type: 'longtask', buffered: true });
} catch { /* long-task timing not supported */ }
if (new URLSearchParams(location.search).has('perf')) {
  const hud = document.createElement('div');
  hud.style.cssText = 'position:fixed;left:12px;top:92px;z-index:50;padding:6px 10px;border-radius:8px;background:rgba(40,28,20,.82);color:#fdf3e2;font:12px/1.4 ui-monospace,monospace;pointer-events:none;white-space:pre';
  document.body.appendChild(hud);
  let last = performance.now(), fr = 0;
  setInterval(() => {
    const now = performance.now();
    const fps = ((perf.frames - fr) * 1000) / (now - last);
    fr = perf.frames; last = now;
    hud.textContent = `${fps.toFixed(0)} fps · pixel ratio ${renderer.getPixelRatio().toFixed(2)}\nupdate ${perf.update.toFixed(2)} ms\nrender ${perf.render.toFixed(2)} ms\nlabels ${perf.labels.toFixed(2)} ms\nlong tasks ${perf.longTasks} (${perf.longTaskMs.toFixed(0)} ms)`;
  }, 500);
}

// ---------------------------------------------------------------- HTML labels
const labelLayer = document.getElementById('labels');
const ranked = [...nodes].sort((a, b) => b.count - a.count);
let labelsDirty = true; // the set of ingredients that may carry a label must be recomputed
let showSetCache = null;
let HOME_LABELS = new Set(ranked.slice(0, 55).map((n) => n.id));
for (const n of nodes) {
  const el = document.createElement('div');
  el.className = 'label';
  el.textContent = n.name;
  el.style.display = 'none';
  labelLayer.appendChild(el);
  n.label = el;
}
// Size by popularity: common ingredients are drawn (and labelled) larger. Off: one medium-small size.
const UNIFORM_SCALE = 13;
let sizeByPopularity = true;
try { sizeByPopularity = localStorage.getItem('tt-size-popularity') !== '0'; } catch { /* storage unavailable */ }
function setSizeByPopularity(on, { persist = true } = {}) {
  sizeByPopularity = on;
  invalidate();
  for (const n of nodes) {
    n.fontPx = on ? 12 + 16 * n.commonness * n.commonness + 4 * n.commonness : 15;
    n.label.style.fontSize = `${n.fontPx}px`;
    n.label.classList.toggle('major', on && n.commonness > 0.55);
  }
  document.getElementById('size-toggle').setAttribute('aria-checked', String(on));
  if (persist) try { localStorage.setItem('tt-size-popularity', on ? '1' : '0'); } catch { /* storage unavailable */ }
}
const CUISINE_PIN_SIZE = 17;
const cuisineMarks = Object.entries(CUISINES).map(([name, c]) => {
  const p = new THREE.Vector3(...latLngToVec(c.lat, c.lng, GLOBE_RADIUS * 1.18));
  const el = document.createElement('div');
  el.className = 'cuisine-label';
  el.textContent = name;
  el.style.color = c.color;
  el.addEventListener('click', () => (compare.open ? togglePick(name) : go({ type: 'cuisine', name })));
  labelLayer.appendChild(el);
  const dot = new THREE.Sprite(new THREE.SpriteMaterial({ transparent: true, depthWrite: false, opacity: 0 }));
  dot.visible = false; // pins only appear while their cuisine is highlighted
  dot.position.copy(p);
  dot.scale.setScalar(CUISINE_PIN_SIZE); // every cuisine pin is the same size
  scene.add(dot);
  return { name, pos: p, el, dot, blobTex: null, illusTex: null, ready: false, vis: 1, fade: 0 };
});// A cuisine's textures (country painting and plain dot) are made the first time they are needed.
function ensureCuisineTex(m) {
  if (m.ready) return;
  invalidate();
  m.ready = true;
  const c = CUISINES[m.name];
  m.blobTex = paintBlob(c.color, m.name.length * 17 + 3, 96);
  m.illusTex = new THREE.CanvasTexture(paintCuisine(m.name, c.color));
  m.illusTex.colorSpace = THREE.SRGBColorSpace;
  m.illusTex.anisotropy = 1;
  m.dot.material.map = showIllustrations ? m.illusTex : m.blobTex;
  m.dot.material.needsUpdate = true;
}
for (const m of cuisineMarks) whenIdle(() => ensureCuisineTex(m), true); // ready before anyone asks


// ---------------------------------------------------------------- compare cuisines (state + drawing helpers)
// Okabe–Ito colors: distinguishable for most kinds of color vision.
const COMPARE_COLORS = ['#D55E00', '#0072B2', '#009E73'];
const compare = { open: false, picks: [], query: '' };
// Comparing starts with the food illustrations off (easier to read); closing it puts things back
// unless the person changed the switch themselves in the meantime.
const compareIllus = { auto: false, previous: true };
// ...and with sizes following popularity (so the shared everyday ingredients stand out).
const compareSize = { auto: false, previous: true };
let compareInfo = null; // analysis of the cuisines currently being compared
let simCache = null;
function getSim() {
  if (!simCache) {
    const { profiles, df } = buildProfiles(DISHES, Object.keys(CUISINES));
    // "everyday" ingredients: used by at least 65% of all cuisines
    const staples = new Set([...df].filter(([, v]) => v / profiles.size >= 0.65).map(([k]) => k));
    simCache = { profiles, matrix: buildMatrix(profiles), staples };
  }
  return simCache;
}
// view options that survive adding or removing a cuisine
const compareOpts = (prev) => ({ shared: !!prev?.shared, spot: null, detail: prev?.detail ?? 1, staples: prev?.staples ?? true });
const DETAIL = [
  { label: 'Few', shared: 80, unique: 60 },
  { label: 'Some', shared: 200, unique: 200 },
  { label: 'Many', shared: 450, unique: 450 },
];
const bitCount = (m) => (m & 1) + ((m >> 1) & 1) + ((m >> 2) & 1);
const maskColors = (m) => COMPARE_COLORS.filter((_, i) => m & (1 << i));

// Each member ingredient gets a ring in its cuisine's color; shared ingredients get a
// ring split into one arc per cuisine.
const ringTextures = new Map();
function ringTexture(colors) {
  const key = colors.join();
  if (ringTextures.has(key)) return ringTextures.get(key);
  const c = document.createElement('canvas');
  c.width = c.height = 128;
  const g = c.getContext('2d');
  g.lineCap = 'round';
  const n = colors.length, gap = n > 1 ? 0.2 : 0;
  colors.forEach((col, i) => {
    const a0 = -Math.PI / 2 + (i / n) * Math.PI * 2 + gap / 2;
    const a1 = -Math.PI / 2 + ((i + 1) / n) * Math.PI * 2 - gap / 2;
    g.strokeStyle = col;
    g.globalAlpha = 0.22;
    g.lineWidth = 15;
    g.beginPath(); g.arc(64, 64, 47, a0, a1); g.stroke();
    g.globalAlpha = 0.95;
    g.lineWidth = 7;
    g.beginPath(); g.arc(64, 64, 47, a0, a1); g.stroke();
  });
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  ringTextures.set(key, tex);
  return tex;
}
function ensureRing(n) {
  if (!n.ring) {
    n.ring = new THREE.Sprite(new THREE.SpriteMaterial({ transparent: true, depthWrite: false, depthTest: false, opacity: 0 }));
    n.ring.position.copy(n.sprite.position);
    n.ring.renderOrder = -0.8;
    n.ring.visible = false;
    scene.add(n.ring);
  }
  return n.ring;
}

// Which ingredients and pairings do the selected cuisines use, and where do they overlap?
function analyzeCompare(names) {
  const { profiles } = getSim();
  const { ingMask, pairMask, pairWeight } = compareSets(profiles, names);
  const masks = new Map();
  for (const [nm, m] of ingMask) masks.set(nodeByName.get(nm).id, m);
  const counts = new Map();
  for (const m of ingMask.values()) counts.set(m, (counts.get(m) || 0) + 1);
  const pairs = [...pairMask].map(([k, mask]) => {
    const [x, y] = k.split('|');
    return { x, y, mask, w: pairWeight.get(k) };
  });
  return { names, masks, counts, pairs };
}

// ---------------------------------------------------------------- view state
let view = { type: 'home' };
const history = [];
let highlight = null; // Set of node ids or null (=all)
let focusIds = new Set();
let activeCuisines = new Set();
// Filters belong to the 'filter' view: dish types and (optionally several) cuisines.
const filter = { types: new Set(), cuisines: new Set() };
const camTween = { t: 1, fromPos: new THREE.Vector3(), toPos: new THREE.Vector3(), fromTarget: new THREE.Vector3(), toTarget: new THREE.Vector3() };

let freezeCamera = false;
function flyTo(target, distance) {
  if (freezeCamera) return;
  camTween.fromPos.copy(camera.position);
  camTween.fromTarget.copy(controls.target);
  camTween.toTarget.copy(target);
  const dir = new THREE.Vector3().subVectors(camera.position, controls.target).normalize();
  if (target.lengthSq() > 1) {
    // look at the cluster from "outside the globe" so it sits in front of the hub
    const out = target.clone().normalize();
    dir.lerp(out, 0.6).normalize();
  }
  camTween.toPos.copy(target).addScaledVector(dir, distance);
  camTween.t = 0;
}

function centroid(ids) {
  const c = new THREE.Vector3();
  let r = 0;
  for (const id of ids) c.add(nodes[id].sprite.position);
  c.divideScalar(Math.max(1, ids.length));
  for (const id of ids) r = Math.max(r, nodes[id].sprite.position.distanceTo(c));
  return { c, r };
}

function cliqueEdges(dishIds, color) {
  const seen = new Map();
  for (const did of dishIds) {
    const ids = dishIngredientIds(did);
    for (let i = 0; i < ids.length; i++) {
      for (let j = i + 1; j < ids.length; j++) {
        const key = Math.min(ids[i], ids[j]) * 10000 + Math.max(ids[i], ids[j]);
        const e = seen.get(key) || { a: ids[i], b: ids[j], color: typeof color === 'function' ? color(did) : color, w: 0 };
        e.w++;
        seen.set(key, e);
      }
    }
  }
  const list = [...seen.values()];
  const mw = Math.max(1, ...list.map((e) => e.w));
  list.forEach((e) => (e.strength = Math.pow(e.w / mw, 0.5)));
  return list;
}

const nodeByName = new Map(nodes.map((n) => [n.name, n]));
const dishIngredientIds = (did) => DISHES[did].ingredients.map((nm) => nodeByName.get(nm).id);

function go(next, { push = true, quiet = false } = {}) {
  invalidate();
  labelsDirty = true;
  if (push && !(next.type === view.type && JSON.stringify(next) === JSON.stringify(view))) history.push(view);
  view = next;
  controls.autoRotate = next.type === 'home';
  activeCuisines = new Set();
  filter.types = new Set(next.type === 'filter' ? next.types : []);
  filter.cuisines = new Set(next.type === 'filter' ? next.cuisines : []);
  let hi = null, edgesHi = [], focus = new Set();
  hiMat.linewidth = 2;
  hiMat.opacity = 0.85;
  switch (next.type) {
    case 'home':
      flyTo(new THREE.Vector3(), HOME_POS.length() * (camera.aspect < 1 ? 1.25 : 1));
      break;
    case 'ingredient': {
      const n = nodes[next.id];
      hi = new Set([n.id, ...adjacency[n.id].keys()]);
      focus = new Set([n.id]);
      n.cuisines.forEach((_, c) => activeCuisines.add(c)); // light up the cuisines that use it, fade the rest
      const mw = Math.max(...[...adjacency[n.id].values()].map((e) => e.weight));
      for (const [other, e] of adjacency[n.id]) edgesHi.push({ a: n.id, b: other, color: CATEGORIES[n.category].color, strength: Math.pow(e.weight / mw, 0.6) });
      flyTo(n.sprite.position.clone(), 170);
      break;
    }
    case 'dish': {
      const d = DISHES[next.id];
      const ids = dishIngredientIds(d.id);
      hi = new Set(ids);
      focus = new Set(ids);
      activeCuisines.add(d.cuisine);
      edgesHi = cliqueEdges([d.id], CUISINES[d.cuisine].color);
      edgesHi.forEach((e) => (e.strength = 1));
      hiMat.linewidth = 2.6;
      const { c, r } = centroid(ids);
      flyTo(c, Math.max(150, r * 2.8));
      break;
    }
    case 'cuisine':
    case 'region': {
      const cuisineNames = next.type === 'cuisine' ? [next.name] : Object.keys(CUISINES).filter((k) => CUISINES[k].region === next.name);
      cuisineNames.forEach((c) => activeCuisines.add(c));
      const dishIds = DISHES.filter((d) => activeCuisines.has(d.cuisine)).map((d) => d.id);
      hi = new Set(dishIds.flatMap(dishIngredientIds));
      edgesHi = cliqueEdges(dishIds, (did) => CUISINES[DISHES[did].cuisine].color);
      const { c, r } = centroid([...hi]);
      flyTo(c, Math.max(190, r * 2.7));
      break;
    }
    case 'compare': {
      compare.picks = next.names.slice();
      next.names.forEach((c) => activeCuisines.add(c));
      compareInfo = analyzeCompare(next.names);
      const { staples } = getSim();
      const sharedOnly = !!next.shared && next.names.length > 1;
      const spotBit = next.spot == null ? 0 : 1 << next.spot; // spotlight one cuisine
      const detail = DETAIL[next.detail ?? 1];
      const keepMask = (m) => (!spotBit || m & spotBit) && (!sharedOnly || bitCount(m) > 1);
      hi = new Set([...compareInfo.masks].filter(([, m]) => keepMask(m)).map(([id]) => id));
      focus = new Set([...compareInfo.masks].filter(([, m]) => keepMask(m) && bitCount(m) > 1).map(([id]) => id));
      // lines: skip pairings that involve everyday ingredients (they link to everything) and cap by strength
      const usable = compareInfo.pairs.filter((p) => keepMask(p.mask) && (!spotBit || p.mask & spotBit) && (next.staples === false || !(staples.has(p.x) || staples.has(p.y))));
      compareInfo.hiddenStaplePairs = compareInfo.pairs.filter((p) => keepMask(p.mask) && (staples.has(p.x) || staples.has(p.y))).length;
      const wmax = Math.max(1, ...usable.map((p) => p.w));
      const shape = (p) => ({ a: nodeByName.get(p.x).id, b: nodeByName.get(p.y).id, colors: maskColors(p.mask), shared: bitCount(p.mask) > 1, casing: true, strength: bitCount(p.mask) > 1 ? 1 : Math.pow(p.w / wmax, 0.5) });
      const order = (x, y) => y.w - x.w;
      edgesHi = [
        ...usable.filter((p) => bitCount(p.mask) > 1).sort(order).slice(0, detail.shared).map(shape),
        ...(sharedOnly ? [] : usable.filter((p) => bitCount(p.mask) === 1).sort(order).slice(0, detail.unique).map(shape)),
      ];
      hiMat.linewidth = 1.6;
      hiMat.opacity = 0.6;
      if (hi.size) {
        const { c, r } = centroid([...hi]);
        flyTo(c, Math.max(230, r * 2.6));
      }
      break;
    }
    case 'filter': {
      filter.cuisines.forEach((c) => activeCuisines.add(c));
      const dishIds = filteredDishes().map((d) => d.id);
      hi = new Set(dishIds.flatMap(dishIngredientIds));
      edgesHi = cliqueEdges(dishIds, (did) => CUISINES[DISHES[did].cuisine].color);
      if (edgesHi.length > 700) edgesHi = edgesHi.sort((a, b) => b.w - a.w).slice(0, 700);
      if (hi.size) {
        const { c, r } = centroid([...hi]);
        flyTo(c, Math.max(230, r * 2.6));
      }
      break;
    }
    case 'category': {
      const ids = nodes.filter((n) => n.category === next.key).map((n) => n.id);
      hi = new Set(ids);
      const { c, r } = centroid(ids);
      flyTo(c.multiplyScalar(0.5), Math.max(200, r * 2.2));
      break;
    }
  }
  // ingredients hidden in Settings stay off the map (except one you picked on purpose)
  const exempt = next.type === 'ingredient' ? next.id : -1;
  const gone = (id) => nodes[id].hidden && id !== exempt;
  if (hi) hi = new Set([...hi].filter((id) => !gone(id)));
  focus = new Set([...focus].filter((id) => !gone(id)));
  edgesHi = edgesHi.filter((e) => !gone(e.a) && !gone(e.b));
  if (hi && hi.size < 150) for (const id of hi) paintIngredientNode(nodes[id]); // never show a wash when a painting is due
  highlight = hi;
  focusIds = focus;
  setHighlightEdges(edgesHi);
  baseEdgeMat.opacity = next.type === 'compare' ? 0 : hi ? 0.18 : 0.75; // compare: no background lines at all
  for (const n of nodes) {
    const on = hi ? hi.has(n.id) : n.densityKeep;
    n.vis.tOpacity = gone(n.id) ? 0 : on ? 1 : next.type === 'compare' ? 0.04 : n.densityKeep ? 0.09 : 0; // thinned-out ingredients vanish unless highlighted
    n.vis.tScale = focus.has(n.id) ? (next.type === 'ingredient' ? 1.35 : 1.18) : on ? 1 : 0.8;
    // focused ingredients are painted over the big hubs so they are never buried
    n.sprite.renderOrder = focus.has(n.id) ? 10 : 0;
    n.sprite.material.depthTest = !focus.has(n.id);
    // compare: shared ingredients grow with the number of cuisines that use them, and get a ring
    if (next.type === 'compare') {
      const m = compareInfo.masks.get(n.id) || 0;
      if (m && hi.has(n.id)) {
        n.vis.tScale = [0, 1, 1.22, 1.4][bitCount(m)];
        const ring = ensureRing(n);
        ring.material.map = ringTexture(maskColors(m));
        ring.material.needsUpdate = true;
      }
      n.label.style.color = m && bitCount(m) === 1 ? maskColors(m)[0] : '';
    } else n.label.style.color = '';
  }
  halo.renderOrder = 11;
  halo.material.depthTest = false;
  if (next.type === 'home') compare.picks = [];
  if (quiet) return; // a settings change redraws the map only
  renderPanel();
  renderAtlas();
  renderFilters();
  renderComparePane();
}

function filteredDishes() {
  return DISHES.filter((d) => (!filter.types.size || filter.types.has(d.type)) && (!filter.cuisines.size || filter.cuisines.has(d.cuisine)));
}
// Change the filters and show the result (or the plain atlas when nothing is selected)
function applyFilter(types, cuisines) {
  const next = types.size || cuisines.size ? { type: 'filter', types: [...types], cuisines: [...cuisines] } : { type: 'home' };
  go(next, { push: view.type !== 'filter' && next.type !== 'home' });
}
function toggleIn(set, value) {
  const copy = new Set(set);
  copy.has(value) ? copy.delete(value) : copy.add(value);
  return copy;
}

function back() {
  if (history.length) go(history.pop(), { push: false });
  else if (view.type !== 'home') go({ type: 'home' }, { push: false });
}

// ---------------------------------------------------------------- panel
const panel = document.getElementById('panel-inner');
const bar = (pct, color) => `<div class="bar"><i style="width:${Math.max(3, pct)}%;background:${color}"></i></div>`;
const ingChip = (n, extra = '') => `<button class="chip" data-go="ingredient:${n.id}">${ingIco(n)}${esc(n.name)}${extra}</button>`;
const cuisineChip = (name, extra = '') => `<button class="chip${activeCuisines.has(name) ? ' active' : ''}" data-go="cuisine:${esc(name)}">${cuiIco(name)}${esc(name)}${extra}</button>`;
const dishRows = (ids, max = 99) => `<ul class="rows">${ids.slice(0, max).map((id) => {
  const d = DISHES[id];
  return `<li data-go="dish:${id}"><span class="nm">${esc(d.name)} <em>${esc(d.cuisine)}</em></span><span class="val">${d.popularity}</span>${bar(d.popularity, CUISINES[d.cuisine].color)}</li>`;
}).join('')}</ul>`;
const ingRows = (list, valFn, max = 99, maxVal) => {
  const mv = maxVal || Math.max(...list.map(valFn));
  return `<ul class="rows">${list.slice(0, max).map((n) => `<li data-go="ingredient:${n.id}"><span class="nm">${ingIco(n, 28)}${esc(n.name)}</span><span class="val">${valFn(n)}</span>${bar((valFn(n) / mv) * 100, CATEGORIES[n.category].color)}</li>`).join('')}</ul>`;
};

function crumbs() {
  const trail = [...history.slice(-3), view].filter((v, i, arr) => i === arr.length - 1 || v.type !== 'home');
  const name = (v) => (v.type === 'home' ? 'Atlas' : v.type === 'ingredient' ? nodes[v.id].name : v.type === 'dish' ? DISHES[v.id].name : v.type === 'category' ? CATEGORIES[v.key].label : v.type === 'filter' ? 'Filtered' : v.type === 'compare' ? 'Compare' : v.name);
  const parts = [`<button data-go="home">Atlas</button>`];
  trail.forEach((v, i) => {
    if (v.type === 'home') return;
    parts.push('<span class="sep">›</span>', i === trail.length - 1 ? `<span>${esc(name(v))}</span>` : `<button data-back="${trail.length - 1 - i}">${esc(name(v))}</button>`);
  });
  return `<div class="crumbs">${parts.join('')}</div>`;
}

function renderPanel() {
  let h = '';
  const v = view;
  if (v.type === 'home') {
    const topDishes = [...DISHES].sort((a, b) => b.popularity - a.popularity).map((d) => d.id);
    h = `<div class="kicker">a tasting map of</div>
      <h2>${nodes.length} ingredients</h2>
      <p class="lede">Ingredients are linked whenever they meet in the same dish, and the map currently includes ${totalDishes} dishes from ${Object.keys(CUISINES).length} cuisines. Universal staples tend to be toward the center, with regional ingredients on the outskirts.</p>
      <h3>Most common ingredients</h3>${ingRows(ranked, (n) => n.count, 10)}
      <h3>Most popular dishes</h3>${dishRows(topDishes, 8)}
      <h3>Ingredient families</h3><div class="chips">${Object.entries(CATEGORIES).map(([k, c], i) => `<button class="chip" data-go="category:${k}">${famIco(k)}${c.label}</button>`).join('')}</div>
      <p class="fine">Blob size shows how common an ingredient is. Popularity scores are illustrative estimates of worldwide recognition.</p>`;
  } else if (v.type === 'ingredient') {
    const n = nodes[v.id];
    const companions = [...adjacency[n.id].entries()].sort((a, b) => b[1].weight - a[1].weight).map(([id, e]) => ({ n: nodes[id], w: e.weight }));
    const cuisines = [...n.cuisines.entries()].sort((a, b) => b[1] - a[1]);
    h = `${crumbs()}<div class="title-row">${ingIco(n, 76)}<div><div class="kicker">${esc(CATEGORIES[n.category].label.toLowerCase())}</div><h2>${esc(n.name)}</h2></div></div>
      <div class="stats"><div class="stat"><b>${n.count}</b><span>dishes</span></div><div class="stat"><b>${n.cuisines.size}</b><span>cuisines</span></div><div class="stat"><b>${n.popularity}</b><span>popularity</span></div></div>
      <h3>Found in</h3><div class="chips">${cuisines.map(([c, k]) => cuisineChip(c, ` <small>${k}</small>`)).join('')}</div>
      <h3>Best companions</h3>${ingRows(companions.map((c) => Object.assign(Object.create(c.n), { _w: c.w })), (x) => x._w, 8)}
      <h3>Dishes</h3>${dishRows(n.dishes)}`;
  } else if (v.type === 'dish') {
    const d = DISHES[v.id];
    const c = CUISINES[d.cuisine];
    const ings = dishIngredientIds(d.id).map((id) => nodes[id]);
    const set = new Set(d.ingredients);
    const similar = DISHES.filter((o) => o.id !== d.id)
      .map((o) => ({ o, s: o.ingredients.filter((x) => set.has(x)).length / new Set([...o.ingredients, ...d.ingredients]).size }))
      .sort((a, b) => b.s - a.s).slice(0, 5);
    h = `${crumbs()}<div class="kicker">${esc(d.cuisine)} dish</div><h2>${esc(d.name)}</h2>
      <div class="chips" style="margin-top:6px">${cuisineChip(d.cuisine)}<button class="chip" data-go="region:${esc(c.region)}">${esc(c.country)} · ${esc(c.region)}</button></div>
      <p class="note">${esc(d.note)}</p>
      <div class="meter"><span>popularity</span><div class="track"><i style="width:${d.popularity}%;background:${c.color}"></i></div><b>${d.popularity}</b></div>
      <h3>Ingredients · ${ings.length}</h3><div class="chips">${ings.sort((a, b) => b.count - a.count).map((n) => ingChip(n, ` <small>${n.count}</small>`)).join('')}</div>
      <h3>Kindred dishes</h3><ul class="rows">${similar.map(({ o, s }) => `<li data-go="dish:${o.id}"><span class="nm">${esc(o.name)} <em>${esc(o.cuisine)}</em></span><span class="val">${Math.round(s * 100)}% shared</span>${bar(s * 100, CUISINES[o.cuisine].color)}</li>`).join('')}</ul>`;
  } else if (v.type === 'cuisine') {
    const c = CUISINES[v.name];
    const dishes = DISHES.filter((d) => d.cuisine === v.name).sort((a, b) => b.popularity - a.popularity);
    const freq = new Map();
    dishes.forEach((d) => d.ingredients.forEach((i) => freq.set(i, (freq.get(i) || 0) + 1)));
    const signature = [...freq.entries()].map(([nm, k]) => ({ n: nodeByName.get(nm), score: k * Math.log((totalDishes + 1) / nodeByName.get(nm).count) }))
      .sort((a, b) => b.score - a.score).slice(0, 10);
    const sig = new Set(freq.keys());
    const kin = Object.keys(CUISINES).filter((k) => k !== v.name).map((k) => {
      const s2 = new Set(DISHES.filter((d) => d.cuisine === k).flatMap((d) => d.ingredients));
      const inter = [...sig].filter((x) => s2.has(x)).length;
      return { k, s: inter / new Set([...sig, ...s2]).size };
    }).sort((a, b) => b.s - a.s).slice(0, 4);
    const avg = Math.round(dishes.reduce((s, d) => s + d.popularity, 0) / dishes.length);
    h = `${crumbs()}<div class="title-row">${cuiIco(v.name, 76)}<div><div class="kicker" style="color:${c.color}">cuisine</div><h2>${esc(v.name)}</h2></div></div>
      <div class="chips" style="margin-top:6px"><button class="chip" data-go="region:${esc(c.region)}"><span class="dot" style="background:${c.color}"></span>${esc(c.country)} · ${esc(c.region)}</button></div>
      <div class="stats"><div class="stat"><b>${dishes.length}</b><span>dishes</span></div><div class="stat"><b>${freq.size}</b><span>ingredients</span></div><div class="stat"><b>${avg}</b><span>avg popularity</span></div></div>
      <h3>Signature ingredients</h3><div class="chips">${signature.map(({ n }) => ingChip(n)).join('')}</div>
      <h3>Dishes</h3>${dishRows(dishes.map((d) => d.id))}
      <h3>Kindred cuisines</h3><div class="chips">${kin.map(({ k, s }) => cuisineChip(k, ` <small>${Math.round(s * 100)}%</small>`)).join('')}</div>`;
  } else if (v.type === 'region') {
    const cs = Object.keys(CUISINES).filter((k) => CUISINES[k].region === v.name);
    const dishes = DISHES.filter((d) => cs.includes(d.cuisine)).sort((a, b) => b.popularity - a.popularity);
    const freq = new Map();
    dishes.forEach((d) => d.ingredients.forEach((i) => freq.set(i, (freq.get(i) || 0) + 1)));
    const top = [...freq.entries()].sort((a, b) => b[1] - a[1]).slice(0, 10).map(([nm, k]) => Object.assign(Object.create(nodeByName.get(nm)), { _k: k }));
    h = `${crumbs()}<div class="kicker">region</div><h2>${esc(v.name)}</h2>
      <h3>Cuisines</h3><div class="chips">${cs.map((k) => cuisineChip(k, ` <small>${esc(CUISINES[k].country)}</small>`)).join('')}</div>
      <h3>Most used ingredients</h3>${ingRows(top, (x) => x._k, 10)}
      <h3>Dishes</h3>${dishRows(dishes.map((d) => d.id))}`;
  } else if (v.type === 'compare') {
    h = renderCompareView(v);
  } else if (v.type === 'filter') {
    const ds = filteredDishes().sort((a, b) => b.popularity - a.popularity);
    const typeChips = [...filter.types].map((t) => `<button class="chip active" data-filter="type:${esc(t)}">${esc(DISH_TYPES[t].label)} <small>×</small></button>`);
    const cuisineChips = [...filter.cuisines].map((c) => `<button class="chip active" data-filter="cuisine:${esc(c)}"><span class="dot" style="background:${CUISINES[c].color}"></span>${esc(c)} <small>×</small></button>`);
    const freq = new Map(), byCuisine = new Map();
    for (const d of ds) for (const nm of d.ingredients) {
      freq.set(nm, (freq.get(nm) || 0) + 1);
      if (!byCuisine.has(nm)) byCuisine.set(nm, new Set());
      byCuisine.get(nm).add(d.cuisine);
    }
    const topIng = [...freq.entries()].sort((a, b) => b[1] - a[1]).slice(0, 10).map(([nm, k]) => Object.assign(Object.create(nodeByName.get(nm)), { _k: k }));
    const nC = new Set(ds.map((d) => d.cuisine)).size;
    h = `${crumbs()}<div class="kicker">filtered atlas</div><h2>${ds.length} dish${ds.length === 1 ? '' : 'es'}</h2>
      <div class="chips" style="margin-top:8px">${typeChips.concat(cuisineChips).join('')}<button class="chip" data-filter="clear">Clear filters</button></div>`;
    if (!ds.length) h += `<p class="lede">No dishes match that combination — try removing a filter.</p>`;
    else {
      h += `<div class="stats"><div class="stat"><b>${ds.length}</b><span>dishes</span></div><div class="stat"><b>${freq.size}</b><span>ingredients</span></div><div class="stat"><b>${nC}</b><span>cuisines</span></div></div>`;
      if (filter.cuisines.size >= 2) {
        const shared = [...byCuisine.entries()].map(([nm, set]) => ({ nm, k: set.size })).filter((x) => x.k >= 2).sort((a, b) => b.k - a.k || freq.get(b.nm) - freq.get(a.nm)).slice(0, 12);
        h += `<h3>Common ground</h3>` + (shared.length ? `<div class="chips">${shared.map(({ nm, k }) => ingChip(nodeByName.get(nm), ` <small>${k}/${filter.cuisines.size}</small>`)).join('')}</div>` : `<p class="note">These cuisines share no ingredients in the dataset.</p>`);
      }
      h += `<h3>Most used ingredients</h3>${ingRows(topIng, (x) => x._k, 10)}<h3>Dishes</h3>${dishRows(ds.map((d) => d.id), 60)}${ds.length > 60 ? `<p class="fine">Showing the 60 most popular of ${ds.length}.</p>` : ''}`;
    }
  } else if (v.type === 'category') {
    const list = nodes.filter((n) => n.category === v.key).sort((a, b) => b.count - a.count);
    h = `${crumbs()}<div class="title-row">${famIco(v.key, 76)}<div><div class="kicker">ingredient family</div><h2>${esc(CATEGORIES[v.key].label)}</h2></div></div>
      <h3>By number of dishes</h3>${ingRows(list, (n) => n.count)}`;
  }
  panel.innerHTML = `<div class="panel">${h}</div>`;
  fillIcons(panel);
  panel.scrollTop = 0;
  panel.style.animation = 'none';
  void panel.offsetWidth;
  panel.style.animation = '';
}

const pct = (x) => Math.round(x * 100);
const ordinal = (n) => {
  const suffix = ['th', 'st', 'nd', 'rd'], v = n % 100;
  return n + (suffix[(v - 20) % 10] || suffix[v] || suffix[0]);
};
const cdot = (i) => `<i class="cdot" style="background:${COMPARE_COLORS[i]}"></i>`;

// Venn diagram of how many ingredients are unique to / shared between the cuisines
function vennSVG(names, counts) {
  const three = names.length === 3;
  const circles = three ? [[82, 70, 54], [138, 70, 54], [110, 118, 54]] : [[84, 70, 58], [136, 70, 58]];
  const spots = three
    ? { 1: [56, 56], 2: [164, 56], 4: [110, 152], 3: [110, 44], 5: [80, 104], 6: [140, 104], 7: [110, 84] }
    : { 1: [58, 74], 2: [162, 74], 3: [110, 74] };
  return `<svg class="venn" viewBox="0 0 220 ${three ? 176 : 140}" role="img" aria-label="Ingredient overlap between the selected cuisines">` +
    circles.map(([cx, cy, r], i) => `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${COMPARE_COLORS[i]}" fill-opacity="0.22" stroke="${COMPARE_COLORS[i]}" stroke-width="1.6"/>`).join('') +
    Object.entries(spots).map(([m, [x, y]]) => `<text x="${x}" y="${y}" text-anchor="middle" dominant-baseline="middle">${counts.get(+m) || 0}</text>`).join('') +
    '</svg>';
}

function renderCompareView(v) {
  const { matrix, profiles } = getSim();
  const names = v.names;
  const info = compareInfo;
  const full = names.length >= 3;
  let h = `${crumbs()}<div class="kicker">compare cuisines</div>
    <h2 class="cmp-title">${names.map((n, i) => `${cdot(i)}${esc(n)}`).join('<span class="vs">vs</span>')}</h2>
    <div class="chips cmp-chips">${names.map((n, i) => `<span class="cchip${v.spot === i ? ' spot' : ''}" style="--c:${COMPARE_COLORS[i]}"><button class="cname" data-compare-spot="${i}" aria-pressed="${v.spot === i}" title="Spotlight ${esc(n)}">${esc(n)}</button><button data-compare-remove="${esc(n)}" aria-label="Remove ${esc(n)}">×</button></span>`).join('')}</div>
    ${names.length > 1 ? '<p class="note tip">Click a cuisine to spotlight it on the map.</p>' : ''}`;

  if (names.length > 1) h += `<div class="seg" role="group" aria-label="What to show"><button class="${v.shared ? '' : 'on'}" data-compare-mode="all">All ingredients</button><button class="${v.shared ? 'on' : ''}" data-compare-mode="shared">Only what they share</button></div>`;
  const detailLevel = v.detail ?? 1, hideStaples = v.staples !== false;
  const stapleList = [...getSim().staples];
  h += `<div class="ctl"><span>Connections</span><div class="seg mini" role="group" aria-label="How many connections to draw">${DETAIL.map((d, i) => `<button class="${i === detailLevel ? 'on' : ''}" data-compare-detail="${i}">${d.label}</button>`).join('')}</div></div>
    <label class="chk"><input type="checkbox" data-compare-staples ${hideStaples ? 'checked' : ''}><span>Hide lines to everyday ingredients<small>${esc(stapleList.join(', '))} — they connect to everything${hideStaples && info.hiddenStaplePairs ? `, so ${info.hiddenStaplePairs} pairings are hidden` : ''}.</small></span></label>`;
  const pairs = [];
  for (let i = 0; i < names.length; i++) for (let j = i + 1; j < names.length; j++) pairs.push({ i, j, s: matrix.pair(names[i], names[j]) });
  if (pairs.length) {
    const overall = pairs.reduce((t, p) => t + p.s.overall, 0) / pairs.length;
    const sharedAll = info.counts.get(names.length === 3 ? 7 : 3) || 0;
    const sharedSome = names.length === 3 ? (info.counts.get(3) || 0) + (info.counts.get(5) || 0) + (info.counts.get(6) || 0) : 0;
    const total = info.masks.size;
    h += `<p class="takeaway">${names.length === 2 ? `${esc(names[0])} and ${esc(names[1])} have <b>${sharedAll}</b> ingredients in common, out of ${total} between them.` : `<b>${sharedAll}</b> ingredients appear in all three cuisines and <b>${sharedSome}</b> more in two of them, out of ${total} in total.`}</p>
    <div class="score"><b>${pct(overall)}</b><div><span>${names.length === 2 ? 'similarity score' : 'overall similarity'}</span><em>${describe(matrix.percentile(overall))}</em></div></div>
      <p class="note">${names.length === 2 ? 'Out of 100.' : 'The average of the three pairs below, out of 100.'} The score blends flavor profile, shared ingredients and shared pairings.</p>
      <h3>${names.length === 2 ? 'How they score' : 'Between each pair'}</h3><ul class="pairs">${pairs.map(({ i, j, s: sc }) => {
        const a = names[i], b = names[j];
        return `<li><div class="ptop">${cdot(i)}${esc(a)}<span class="vs">↔</span>${cdot(j)}${esc(b)}<b>${pct(sc.overall)}</b></div>${bar(Math.max(2, pct(sc.overall)), '#b5543c')}
          <div class="sub"><span>flavor profile <b>${pct(sc.profile)}</b></span><span>shared ingredients <b>${pct(sc.overlap)}</b></span><span>shared pairings <b>${pct(sc.pairings)}</b></span></div>
          <div class="rank">${esc(b)} is ${esc(a)}’s ${ordinal(matrix.rank(a, b))} closest cuisine · ${esc(a)} is ${esc(b)}’s ${ordinal(matrix.rank(b, a))}</div></li>`;
      }).join('')}</ul>`;
    h += `<h3>Ingredients</h3>${vennSVG(names, info.counts)}
      <p class="note">Counts of ingredients used ${names.map((n, i) => `only by ${cdot(i)}${esc(n)}`).join(', ')}, and by ${names.length === 3 ? 'two or all three (the overlaps)' : 'both (the middle)'}.</p>`;
    const sharedPairs = info.pairs.filter((p) => bitCount(p.mask) > 1).sort((x, y) => bitCount(y.mask) - bitCount(x.mask) || y.w - x.w);
    h += `<h3>Shared connections</h3><p class="note">${sharedPairs.length} of ${info.pairs.length} ingredient pairings (${pct(sharedPairs.length / (info.pairs.length || 1))}%) turn up in more than one of these cuisines. On the map they are the thick striped lines, one stripe color per cuisine.</p>
      <div class="chips">${sharedPairs.slice(0, 12).map((p) => `<span class="pairchip">${maskColors(p.mask).map((c) => `<i class="cdot" style="background:${c}"></i>`).join('')}${esc(p.x)} + ${esc(p.y)}</span>`).join('') || '<span class="note">None.</span>'}</div>`;
  } else {
    const p = profiles.get(names[0]);
    h += `<p class="lede">Pick one or two more cuisines to see what they share. ${esc(names[0])} uses ${p.ingredients.size} ingredients across ${p.dishes.length} dishes.</p>`;
  }

  // what makes each cuisine itself
  h += `<h3>Distinctive to each</h3>` + names.map((n, i) => {
    const p = profiles.get(n);
    const only = [...p.ingredients.keys()].filter((nm) => info.masks.get(nodeByName.get(nm).id) === 1 << i || names.length === 1).sort((x, y) => p.vector.get(y) - p.vector.get(x)).slice(0, 6);
    return `<div class="cmp-block"><div class="cmp-h">${cdot(i)}${esc(n)}</div><div class="chips">${only.map((nm) => `<button class="chip" data-go="ingredient:${nodeByName.get(nm).id}">${ingIco(nodeByName.get(nm))}${esc(nm)}</button>`).join('')}</div></div>`;
  }).join('');

  // nearest neighbours, as a way to explore
  h += `<h3>Closest cuisines</h3>` + names.map((n, i) => {
    const near = matrix.neighbours(n).filter((x) => !names.includes(x.name)).slice(0, 5);
    return `<div class="cmp-block"><div class="cmp-h">${cdot(i)}${esc(n)}</div><div class="chips">${near.map((x) => `<button class="chip" data-compare-add="${esc(x.name)}" ${full ? 'disabled title="Remove one cuisine first"' : ''}>${cuiIco(x.name)}${esc(x.name)} <small>${pct(x.overall)}</small></button>`).join('')}</div></div>`;
  }).join('');
  h += `<p class="fine">Scores: 50% flavor profile (cosine similarity of ingredient frequencies, weighting rare ingredients up), 25% shared ingredients and 25% shared pairings (both Jaccard overlap), compared against all ${matrix.names.length} cuisines.</p>`;
  return h;
}

function parseGo(s) {
  if (s === 'home') return { type: 'home' };
  const i = s.indexOf(':');
  const type = s.slice(0, i), arg = s.slice(i + 1);
  if (type === 'ingredient' || type === 'dish') return { type, id: +arg };
  if (type === 'category') return { type, key: arg };
  return { type, name: arg };
}
document.addEventListener('click', (e) => {
  const cm = e.target.closest('[data-compare-mode]');
  if (cm) return go({ ...view, shared: cm.dataset.compareMode === 'shared' }, { push: false });
  const cs = e.target.closest('[data-compare-spot]');
  if (cs) { const i = +cs.dataset.compareSpot; return go({ ...view, spot: view.spot === i ? null : i }, { push: false }); }
  const cd = e.target.closest('[data-compare-detail]');
  if (cd) return go({ ...view, detail: +cd.dataset.compareDetail }, { push: false });
  if (e.target.closest('[data-compare-staples]')) return go({ ...view, staples: !(view.staples ?? true) }, { push: false });
  const cp = e.target.closest('[data-compare-pick],[data-compare-add],[data-compare-remove]');
  if (cp && !cp.disabled) {
    if (cp.dataset.comparePick) return togglePick(cp.dataset.comparePick);
    if (cp.dataset.compareAdd) return togglePick(cp.dataset.compareAdd, true);
    if (cp.dataset.compareRemove) return applyPicks(compare.picks.filter((n) => n !== cp.dataset.compareRemove));
  }
  const f = e.target.closest('[data-filter]');
  if (f) {
    const [kind, arg] = f.dataset.filter.split(/:(.*)/s);
    if (kind === 'clear') return applyFilter(new Set(), new Set());
    if (kind === 'type') return applyFilter(toggleIn(filter.types, arg), filter.cuisines);
    if (kind === 'cuisine') return applyFilter(filter.types, toggleIn(filter.cuisines, arg));
  }
  const t = e.target.closest('[data-go],[data-back]');
  if (!t) return;
  if (t.dataset.back) {
    let k = +t.dataset.back;
    let v = view;
    while (k-- > 0 && history.length) v = history.pop();
    go(v, { push: false });
  } else go(parseGo(t.dataset.go));
});

// ---------------------------------------------------------------- atlas legend
const atlasBody = document.getElementById('atlas-body');
const regions = [...new Set(Object.values(CUISINES).map((c) => c.region))];
const atlasToggle = document.getElementById('atlas-toggle');
let atlasStale = true;
function renderAtlas() {
  // the legend is 65 chips with icons: only build it while it is open
  if (atlasToggle.getAttribute('aria-expanded') !== 'true') {
    atlasStale = true;
    return;
  }
  atlasStale = false;
  atlasBody.innerHTML = regions.map((r) => `<div class="region"><button class="region-name" data-go="region:${esc(r)}">${esc(r)}</button><div class="chips">${Object.keys(CUISINES).filter((k) => CUISINES[k].region === r).map((k) => cuisineChip(k)).join('')}</div></div>`).join('');
  fillIcons(atlasBody);
}
// with many cuisines the legend is tall; start it folded on shorter screens
if (innerHeight < 1000) atlasToggle.setAttribute('aria-expanded', 'false');
atlasToggle.addEventListener('click', () => {
  atlasToggle.setAttribute('aria-expanded', atlasToggle.getAttribute('aria-expanded') === 'true' ? 'false' : 'true');
  if (atlasStale) renderAtlas();
});
// ---------------------------------------------------------------- dish-type filter strip
const filtersEl = document.getElementById('filters');
const typeCounts = {};
for (const d of DISHES) typeCounts[d.type] = (typeCounts[d.type] || 0) + 1;
function renderFilters() {
  const anyActive = filter.types.size || filter.cuisines.size;
  filtersEl.innerHTML = Object.entries(DISH_TYPES).filter(([k]) => typeCounts[k]).map(([k, t]) => `<button class="ftype${filter.types.has(k) ? ' on' : ''}" data-filter="type:${esc(k)}" aria-pressed="${filter.types.has(k)}">${esc(t.label)}<small>${typeCounts[k]}</small></button>`).join('') + (anyActive ? '<button class="ftype clear" data-filter="clear">Clear</button>' : '');
}
// ---------------------------------------------------------------- settings pane
const DENSITY = [
  { label: 'High', nodes: 1, minWeight: 1 }, // everything, as drawn originally
  { label: 'Medium', nodes: 0.7, minWeight: 2 },
  { label: 'Low', nodes: 0.45, minWeight: 3 },
  { label: 'Minimal', nodes: 0.25, minWeight: 4 },
];
let densityLevel = 0;
try { densityLevel = Math.min(3, Math.max(0, parseInt(localStorage.getItem('tt-density') || '0', 10) || 0)); } catch { /* storage unavailable */ }
const densitySlider = document.getElementById('density');
// "Hide top common ingredients": which ingredients count as common is worked out from the
// data itself (how many dishes use each), so it follows the dataset as it grows.
const COMMON_SHARES = [0, 0.05, 0.2]; // share of all ingredients, most-used first
const COMMON_LABELS = ['Show all', 'Hide some', 'Hide most'];
const byCount = [...nodes].sort((a, b) => b.count - a.count);
function commonAt(level) {
  if (!level) return { ids: new Set(), cut: 0, list: [] };
  const k = Math.max(1, Math.round(nodes.length * COMMON_SHARES[level]));
  const cut = byCount[k - 1].count;
  const list = byCount.filter((n) => n.count >= cut);
  return { ids: new Set(list.map((n) => n.id)), cut, list };
}
let hideLevel = 0;
try { hideLevel = Math.min(2, Math.max(0, parseInt(localStorage.getItem('tt-hide-common') || '0', 10) || 0)); } catch { /* storage unavailable */ }
const hideSlider = document.getElementById('hide-common');
function applyHideCommon(level, { refresh = true } = {}) {
  hideLevel = level;
  const { ids, cut, list } = commonAt(level);
  for (const n of nodes) n.hidden = ids.has(n.id);
  hideSlider.value = String(level);
  document.getElementById('hide-label').textContent = COMMON_LABELS[level];
  document.querySelectorAll('#hide-ticks span').forEach((t, i) => t.classList.toggle('on', i === level));
  document.getElementById('hide-help').textContent = level
    ? `Removes the ${list.length} most common ingredients, the ones used in at least ${Math.round((cut / totalDishes) * 100)}% of all ${totalDishes} dishes (${list.slice(0, 6).map((n) => n.name).join(', ')}…), from the map.`
    : `Every ingredient is drawn. “Hide some” would remove the ${commonAt(1).list.length} most common, “Hide most” the ${commonAt(2).list.length}.`;
  try { localStorage.setItem('tt-hide-common', String(level)); } catch { /* storage unavailable */ }
  if (refresh) {
    applyDensity(densityLevel);
    freezeCamera = true; // redraw the current view without moving the camera
    go(view, { push: false, quiet: true });
    freezeCamera = false;
  }
}
hideSlider.addEventListener('input', () => applyHideCommon(+hideSlider.value));

function applyDensity(level) {
  densityLevel = level;
  invalidate();
  labelsDirty = true;
  const d = DENSITY[level];
  const keepTop = new Set(ranked.slice(0, Math.ceil(nodes.length * d.nodes)).map((n) => n.id));
  for (const n of nodes) n.densityKeep = keepTop.has(n.id) && !n.hidden;
  const keep = new Set(nodes.filter((n) => n.densityKeep).map((n) => n.id));
  HOME_LABELS = new Set(ranked.filter((n) => n.densityKeep).slice(0, 55).map((n) => n.id));
  buildBaseEdges(d.minWeight, keep);
  // refresh what is shown right now, without moving the camera
  for (const n of nodes) {
    const on = highlight ? highlight.has(n.id) : n.densityKeep;
    n.vis.tOpacity = on ? 1 : n.densityKeep ? 0.09 : 0;
  }
  densitySlider.value = String(level);
  document.getElementById('density-label').textContent = d.label;
  document.querySelectorAll('#density-ticks span').forEach((t, i) => t.classList.toggle('on', i === level));
  try { localStorage.setItem('tt-density', String(level)); } catch { /* storage unavailable */ }
}
densitySlider.addEventListener('input', () => applyDensity(+densitySlider.value));
applyHideCommon(hideLevel, { refresh: false });
applyDensity(densityLevel);

const settingsBtn = document.getElementById('settings-btn');
const settingsPane = document.getElementById('settings');
function setSettingsOpen(open) {
  settingsPane.hidden = !open;
  settingsBtn.setAttribute('aria-expanded', String(open));
  if (open) settingsPane.querySelector('.sw').focus({ preventScroll: true });
  else settingsBtn.focus({ preventScroll: true });
}
settingsBtn.addEventListener('click', () => setSettingsOpen(settingsPane.hidden));
document.getElementById('settings-close').addEventListener('click', () => setSettingsOpen(false));
document.getElementById('settings-done').addEventListener('click', () => setSettingsOpen(false));

// ---------------------------------------------------------------- compare pane (bottom, off by default)
const compareToggle = document.getElementById('compare-toggle');
const compareSlots = document.getElementById('compare-slots');
const compareList = document.getElementById('compare-list');
const compareMsg = document.getElementById('compare-msg');
const compareSearch = document.getElementById('compare-search');
let msgTimer = 0;
function flashMessage(text) {
  compareMsg.textContent = text;
  clearTimeout(msgTimer);
  msgTimer = setTimeout(() => (compareMsg.textContent = ''), 2600);
}
function renderComparePane() {
  compareToggle.setAttribute('aria-expanded', String(compare.open));
  document.getElementById('compare').classList.toggle('has-picks', compare.picks.length > 0);
  document.getElementById('compare').classList.toggle('full', compare.picks.length >= 3);
  if (!compare.open) return;
  compareSlots.innerHTML = [0, 1, 2].map((i) => {
    const n = compare.picks[i];
    return n
      ? `<div class="slot on" style="--c:${COMPARE_COLORS[i]}"><i></i><span>${esc(n)}</span><button data-compare-remove="${esc(n)}" aria-label="Remove ${esc(n)}">×</button></div>`
      : `<div class="slot" style="--c:${COMPARE_COLORS[i]}"><i></i><span>${i === 0 ? 'Choose…' : 'Add…'}</span></div>`;
  }).join('');
  const q = norm(compare.query.trim());
  const full = compare.picks.length >= 3;
  compareList.innerHTML = regions.map((r) => {
    const members = Object.keys(CUISINES).filter((k) => CUISINES[k].region === r && (!q || norm(k).includes(q) || norm(CUISINES[k].country).includes(q)));
    if (!members.length) return '';
    return `<div class="region"><span class="region-name">${esc(r)}</span><div class="chips">${members.map((k) => {
      const i = compare.picks.indexOf(k);
      return `<button class="chip${i >= 0 ? ' sel' : ''}" ${i >= 0 ? `style="--c:${COMPARE_COLORS[i]}"` : ''} data-compare-pick="${esc(k)}" aria-pressed="${i >= 0}" ${full && i < 0 ? 'data-full="1"' : ''}>${cuiIco(k)}${esc(k)}</button>`;
    }).join('')}</div></div>`;
  }).join('') || '<p class="note">No cuisine by that name.</p>';
  fillIcons(compareList);
}
function applyPicks(picks) {
  compare.picks = picks;
  if (!picks.length) {
    if (view.type === 'compare') go({ type: 'home' }, { push: false });
    renderComparePane();
    return;
  }
  go({ type: 'compare', names: picks, ...compareOpts(view.type === 'compare' ? view : null) }, { push: view.type !== 'compare' });
}
function togglePick(name, add = false) {
  if (!compare.open) setCompareOpen(true);
  const has = compare.picks.includes(name);
  if (has && !add) return applyPicks(compare.picks.filter((n) => n !== name));
  if (has) return;
  if (compare.picks.length >= 3) return flashMessage('Up to three cuisines — remove one with × to pick another.');
  applyPicks([...compare.picks, name]);
}
function setCompareOpen(open) {
  if (open && !compare.open) {
    compareIllus.previous = showIllustrations;
    compareIllus.auto = true;
    if (showIllustrations) setIllustrations(false, { persist: false });
    compareSize.previous = sizeByPopularity;
    compareSize.auto = true;
    if (!sizeByPopularity) setSizeByPopularity(true, { persist: false });
  } else if (!open && compare.open) {
    if (compareIllus.auto) {
      compareIllus.auto = false;
      if (compareIllus.previous !== showIllustrations) setIllustrations(compareIllus.previous, { persist: false });
    }
    if (compareSize.auto) {
      compareSize.auto = false;
      if (compareSize.previous !== sizeByPopularity) setSizeByPopularity(compareSize.previous, { persist: false });
    }
  }
  compare.open = open;
  if (!open) {
    compare.picks = [];
    compare.query = '';
    compareSearch.value = '';
    if (view.type === 'compare') go({ type: 'home' }, { push: false });
  }
  renderComparePane();
  if (open) compareSearch.focus({ preventScroll: true });
}
compareToggle.addEventListener('click', () => setCompareOpen(!compare.open));
compareSearch.addEventListener('input', () => {
  compare.query = compareSearch.value;
  renderComparePane();
});
// Reset: clear search and history, and return to the starting atlas view
function resetAll() {
  if (compare.open) setCompareOpen(false);
  input.value = '';
  closeResults();
  history.length = 0;
  hovered = null;
  tooltip.classList.remove('show');
  go({ type: 'home' }, { push: false });
  camTween.fromPos.copy(camera.position);
  camTween.fromTarget.copy(controls.target);
  camTween.toTarget.set(0, 0, 0);
  camTween.toPos.copy(HOME_POS).multiplyScalar(camera.aspect < 1 ? 1.25 : 1);
  camTween.t = 0;
  controls.autoRotate = true;
}
document.getElementById('brand').addEventListener('click', resetAll);
document.getElementById('reset').addEventListener('click', resetAll);
document.getElementById('illus-toggle').addEventListener('click', () => {
  compareIllus.auto = false; // the person's own choice always wins
  setIllustrations(!showIllustrations);
});
document.getElementById('size-toggle').addEventListener('click', () => {
  compareSize.auto = false; // the person's own choice always wins
  setSizeByPopularity(!sizeByPopularity);
});
setSizeByPopularity(sizeByPopularity);
setIllustrations(showIllustrations);
window.addEventListener('keydown', (e) => {
  if (e.key === 'Home' && document.activeElement !== input) resetAll();
});

// ---------------------------------------------------------------- search
const input = document.getElementById('search-input');
const results = document.getElementById('search-results');
const index = [
  ...nodes.map((n) => ({ name: n.name, sub: `${CATEGORIES[n.category].label} · ${n.count} dish${n.count > 1 ? 'es' : ''}`, type: 'ingredient', weight: n.count * 6, ico: ['ing', n.id], go: { type: 'ingredient', id: n.id } })),
  ...DISHES.map((d) => ({ name: d.name, sub: `${d.cuisine} · popularity ${d.popularity}`, type: 'dish', weight: d.popularity, color: CUISINES[d.cuisine].color, go: { type: 'dish', id: d.id } })),
  ...Object.entries(CUISINES).map(([k, c]) => ({ name: k, sub: `${c.country} · ${c.region}`, type: 'cuisine', weight: 200, color: c.color, ico: ['cui', k], go: { type: 'cuisine', name: k }, alt: [c.country] })),
  ...regions.map((r) => ({ name: r, sub: Object.keys(CUISINES).filter((k) => CUISINES[k].region === r).join(', '), type: 'region', weight: 150, go: { type: 'region', name: r } })),
  ...Object.entries(CATEGORIES).map(([k, c]) => ({ name: c.label, sub: 'ingredient family', type: 'family', weight: 50, ico: ['fam', k], go: { type: 'category', key: k } })),
].map((it) => ({ ...it, keys: [it.name, ...(it.alt || [])].map(norm) }));
let hits = [], active = 0;

function highlightMatch(name, q) {
  const i = norm(name).indexOf(q);
  if (i < 0) return esc(name);
  return esc(name.slice(0, i)) + '<mark>' + esc(name.slice(i, i + q.length)) + '</mark>' + esc(name.slice(i + q.length));
}
function runSearch() {
  const q = norm(input.value.trim());
  if (!q) return closeResults();
  hits = index
    .map((it) => {
      let best = -1;
      for (const k of it.keys) {
        const i = k.indexOf(q);
        if (i === 0) best = Math.max(best, 3);
        else if (i > 0 && /\s|-/.test(k[i - 1])) best = Math.max(best, 2);
        else if (i > 0) best = Math.max(best, 1);
      }
      return { it, score: best < 0 ? -1 : best * 1000 + it.weight };
    })
    .filter((h) => h.score >= 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 9)
    .map((h) => h.it);
  active = 0;
  results.innerHTML = hits.length
    ? hits.map((h, i) => `<li role="option" data-i="${i}" class="${i === active ? 'active' : ''}">${h.ico ? ico(h.ico[0], h.ico[1], 26) : `<span class="dot" style="width:12px;height:12px;border-radius:50%;margin:0 4px;background:${h.color || 'var(--ink-faint)'}"></span>`}<span><span class="r-name">${highlightMatch(h.name, q)}</span> <span class="r-sub">${esc(h.sub)}</span></span><span class="r-type">${h.type}</span></li>`).join('')
    : `<li class="empty">Nothing on the menu for “${esc(input.value)}”</li>`;
  fillIcons(results);
  results.classList.add('open');
}
function closeResults() {
  results.classList.remove('open');
  hits = [];
}
function choose(i) {
  const h = hits[i];
  if (!h) return;
  go(h.go);
  input.value = '';
  closeResults();
  input.blur();
}
input.addEventListener('input', runSearch);
input.addEventListener('focus', () => input.value && runSearch());
input.addEventListener('blur', () => setTimeout(closeResults, 150));
input.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
    e.preventDefault();
    if (!hits.length) return;
    active = (active + (e.key === 'ArrowDown' ? 1 : -1) + hits.length) % hits.length;
    [...results.children].forEach((li, i) => li.classList.toggle('active', i === active));
    results.children[active].scrollIntoView({ block: 'nearest' });
  } else if (e.key === 'Enter') choose(active);
  else if (e.key === 'Escape') {
    input.value = '';
    closeResults();
    input.blur();
    e.stopPropagation();
  }
});
results.addEventListener('mousedown', (e) => {
  const li = e.target.closest('li[data-i]');
  if (li) {
    e.preventDefault();
    choose(+li.dataset.i);
  }
});
window.addEventListener('keydown', (e) => {
  if (e.key === '/' && document.activeElement !== input) {
    e.preventDefault();
    input.focus();
  } else if (e.key === 'Escape' && !settingsPane.hidden) setSettingsOpen(false);
  else if (e.key === 'Escape' && document.activeElement !== input) back();
});

// ---------------------------------------------------------------- picking
const raycaster = new THREE.Raycaster();
const pointer = new THREE.Vector2();
const tooltip = document.getElementById('tooltip');
let hovered = null;
let downAt = null;
const pickVec = new THREE.Vector3();
function pick(ev) {
  pointer.set((ev.clientX / innerWidth) * 2 - 1, -(ev.clientY / innerHeight) * 2 + 1);
  raycaster.setFromCamera(pointer, camera);
  const hitsR = raycaster.intersectObjects(nodeGroup.children, false).filter((h) => h.object.userData.node.vis.opacity > 0.3);
  if (hitsR.length) return hitsR[0].object.userData.node;
  // tiny dots are hard to hit exactly, so accept the nearest visible one within a few pixels
  let best = null, bestD = 11;
  for (const n of nodes) {
    if (n.vis.opacity <= 0.3) continue;
    pickVec.copy(n.sprite.position).project(camera);
    if (pickVec.z > 1) continue;
    const d = Math.hypot((pickVec.x * 0.5 + 0.5) * innerWidth - ev.clientX, (-pickVec.y * 0.5 + 0.5) * innerHeight - ev.clientY);
    if (d < bestD) { bestD = d; best = n; }
  }
  return best;
}
function handlePointerMove(ev) {
  const n = pick(ev);
  if (n !== hovered) {
    invalidate();
    hovered = n;
    stage.classList.toggle('pointing', !!n);
  }
  if (n) {
    const cuisines = [...n.cuisines.keys()];
    tooltip.innerHTML = `<b>${esc(n.name)}</b><span>${n.count} dish${n.count > 1 ? 'es' : ''} · ${cuisines.length} cuisine${cuisines.length > 1 ? 's' : ''}${cuisines.length <= 3 ? ` — ${cuisines.join(', ')}` : ''}</span>`;
    tooltip.style.left = `${Math.min(ev.clientX + 16, innerWidth - 270)}px`;
    tooltip.style.top = `${ev.clientY + 14}px`;
    tooltip.classList.add('show');
  } else tooltip.classList.remove('show');
}
// picking runs at most once per frame, and not while the globe is being dragged
let lastMove = null, moveQueued = false;
renderer.domElement.addEventListener('pointermove', (ev) => {
  lastMove = ev;
  if (moveQueued) return;
  moveQueued = true;
  requestAnimationFrame(() => {
    moveQueued = false;
    if (lastMove.buttons === 0) handlePointerMove(lastMove);
  });
});
renderer.domElement.addEventListener('pointerleave', () => {
  invalidate();
  hovered = null;
  tooltip.classList.remove('show');
});
renderer.domElement.addEventListener('pointerdown', (ev) => {
  downAt = [ev.clientX, ev.clientY];
  camTween.t = 1; // user takes over
});
renderer.domElement.addEventListener('pointerup', (ev) => {
  if (!downAt || Math.hypot(ev.clientX - downAt[0], ev.clientY - downAt[1]) > 5) return;
  const n = pick(ev);
  if (n) go({ type: 'ingredient', id: n.id });
});
controls.addEventListener('start', () => (controls.autoRotate = false));

// ---------------------------------------------------------------- frame loop
const v3 = new THREE.Vector3();
const ease = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
const clock = new THREE.Clock();
function updateLabels() {
  let fading = false;
  const W = innerWidth, H = innerHeight;
  const camDist = camera.position.distanceTo(controls.target);
  const tanHalf = Math.tan((camera.fov * Math.PI) / 360);
  // decide which ingredient labels to show
  if (labelsDirty || !showSetCache) {
    labelsDirty = false;
    if (!highlight) showSetCache = HOME_LABELS;
    else {
      const cand = [...highlight].sort((a, b) => nodes[b].count - nodes[a].count);
      showSetCache = new Set([...focusIds, ...cand.slice(0, view.type === 'ingredient' ? 26 : 40)]);
    }
  }
  const showSet = showSetCache;
  // project candidates, then place greedily by priority so labels never collide
  const cands = [];
  for (const n of nodes) {
    const show = n.vis.opacity > 0.05 && (showSet.has(n.id) || n === hovered || (camDist < 140 && (!highlight || highlight.has(n.id))));
    v3.copy(n.sprite.position).project(camera);
    if (!show || v3.z > 1 || Math.abs(v3.x) > 1.1 || Math.abs(v3.y) > 1.1) {
      n.labelOn = false;
      continue;
    }
    const d = camera.position.distanceTo(n.sprite.position);
    const rPx = (n.sprite.scale.x * 0.4) / (d * tanHalf) * (H / 2);
    const isFocus = focusIds.has(n.id) && view.type === 'ingredient';
    const scale = THREE.MathUtils.clamp(260 / d, 0.75, 1.5) * (isFocus ? 1.6 : view.type === 'dish' && focusIds.has(n.id) ? 1.25 : 1);
    const fs = n.fontPx * scale;
    const w = n.name.length * fs * 0.5, h = fs;
    const x = (v3.x * 0.5 + 0.5) * W, y = (-v3.y * 0.5 + 0.5) * H + rPx + 2;
    const pri = (n === hovered ? 1e6 : 0) + (focusIds.has(n.id) ? 1e5 : 0) + n.count * 10 - d * 0.01;
    cands.push({ n, x, y, w, h, d, scale, pri });
  }
  cands.sort((a, b) => b.pri - a.pri);
  const placed = [];
  for (const c of cands) {
    const box = [c.x - c.w / 2 - 2, c.y - 1, c.x + c.w / 2 + 2, c.y + c.h + 1];
    c.n.labelOn = !placed.some((p) => box[0] < p[2] && box[2] > p[0] && box[1] < p[3] && box[3] > p[1]);
    if (!c.n.labelOn) continue;
    placed.push(box);
    const el = c.n.label;
    const depthFade = THREE.MathUtils.clamp(1.35 - (c.d - 120) / 380, 0.25, 1);
    // only touch the DOM for values that changed
    const tf = `translate(${c.x.toFixed(1)}px, ${c.y.toFixed(1)}px) translate(-50%, 0) scale(${c.scale.toFixed(2)})`;
    if (el._tf !== tf) { el.style.transform = tf; el._tf = tf; }
    const op = (c.n.vis.opacity * depthFade).toFixed(2);
    if (el._op !== op) { el.style.opacity = op; el._op = op; }
    const z = focusIds.has(c.n.id) ? 2000 : 1000 - Math.round(c.d / 4);
    if (el._z !== z) { el.style.zIndex = z; el._z = z; }
    const fo = focusIds.has(c.n.id) && view.type === 'ingredient';
    if (el._fo !== fo) { el.classList.toggle('focus', fo); el._fo = fo; }
  }
  for (const n of nodes) {
    const want = n.labelOn ? '' : 'none';
    if (n.label._disp !== want) { n.label.style.display = want; n.label._disp = want; }
  }
  // cuisine names: front-facing and active ones claim space first
  const marks = cuisineMarks.map((m) => {
    v3.copy(m.pos).project(camera);
    const behind = camera.position.distanceTo(m.pos) > camera.position.length() + 10;
    const on = !activeCuisines.size || activeCuisines.has(m.name);
    const visible = !(v3.z > 1 || Math.abs(v3.x) > 1.05 || Math.abs(v3.y) > 1.05);
    // the country painting is only shown while its cuisine is highlighted (it fades in and out)
    if (!m.ready && activeCuisines.has(m.name)) ensureCuisineTex(m);
    const fadeTarget = activeCuisines.has(m.name) ? 1 : 0;
    if (Math.abs(fadeTarget - m.fade) > 0.004) { m.fade += (fadeTarget - m.fade) * 0.18; fading = true; } else m.fade = fadeTarget;
    const rPx = 3 + (m.dot.scale.x * 0.45) / (camera.position.distanceTo(m.pos) * tanHalf) * (H / 2) * m.fade;
    return { m, behind, on, visible, rPx, x: (v3.x * 0.5 + 0.5) * W, y: (-v3.y * 0.5 + 0.5) * H };
  }).sort((p, q) => (q.on - p.on) * 2 + (p.behind - q.behind));
  const cuisineBoxes = [];
  for (const c of marks) {
    const { m } = c;
    m.dot.material.opacity = m.fade * 0.95 * (c.behind ? 0.5 : 1);
    m.dot.visible = m.fade > 0.01;
    const w = m.name.length * 9 + 8, h = 24;
    const top = c.y - c.rPx - 2;
    const box = [c.x - w / 2, top - h, c.x + w / 2, top];
    const hits = (list) => list.some((p) => box[0] < p[2] && box[2] > p[0] && box[1] < p[3] && box[3] > p[1]);
    const clash = hits(cuisineBoxes) || (!activeCuisines.has(m.name) && hits(placed));
    const el = m.el;
    if (!c.visible || clash) {
      if (el._disp !== 'none') { el.style.display = 'none'; el._disp = 'none'; }
      continue;
    }
    cuisineBoxes.push(box);
    if (el._disp !== '') { el.style.display = ''; el._disp = ''; }
    const tf = `translate(${c.x.toFixed(1)}px, ${top.toFixed(1)}px) translate(-50%, -100%)`;
    if (el._tf !== tf) { el.style.transform = tf; el._tf = tf; }
    const op = String(((c.behind ? 0.25 : 0.95) * (c.on ? 1 : 0.12)).toFixed(2));
    if (el._op !== op) { el.style.opacity = op; el._op = op; }
    const pe = c.behind ? 'none' : 'auto';
    if (el._pe !== pe) { el.style.pointerEvents = pe; el._pe = pe; }
  }
  return fading;
}

const IDLE = 0, AUTO = 1, MOVING = 2; // what the last frame left behind
function frame(rawDt) {
  const t0 = performance.now();
  const dt = Math.min(rawDt, 0.05);
  const time = clock.elapsedTime;
  let moving = false;
  if (camTween.t < 1) {
    camTween.t = Math.min(1, camTween.t + Math.min(rawDt, 0.25) / 1.1);
    const k = ease(camTween.t);
    controls.target.lerpVectors(camTween.fromTarget, camTween.toTarget, k);
    camera.position.lerpVectors(camTween.fromPos, camTween.toPos, k);
    moving = true;
  }
  // with auto-rotate on, the camera only ever moves because of it; otherwise it moves with the person's hand
  ownControlsUpdate = true;
  const cameraMoved = controls.update();
  ownControlsUpdate = false;
  if (cameraMoved && !controls.autoRotate) moving = true;
  const camDist = camera.position.distanceTo(controls.target);
  scene.fog.near = camDist - 60;
  scene.fog.far = camDist + 260;
  const lerp = 1 - Math.pow(0.001, dt);
  for (const n of nodes) {
    const v = n.vis;
    const targetScale = v.tScale * (n === hovered ? 1.22 : 1);
    const targetBase = sizeByPopularity ? n.baseScale : UNIFORM_SCALE;
    if (Math.abs(targetScale - v.scale) > 0.002 || Math.abs(v.tOpacity - v.opacity) > 0.002 || Math.abs(targetBase - v.base) > 0.01) {
      v.scale += (targetScale - v.scale) * lerp;
      v.opacity += (v.tOpacity - v.opacity) * lerp;
      v.base += (targetBase - v.base) * lerp;
      moving = true;
    } else {
      v.scale = targetScale;
      v.opacity = v.tOpacity;
      v.base = targetBase;
    }
    // a gentle "breathing" only while the globe is turning by itself, so a still page can truly rest
    const breathe = controls.autoRotate ? 1 + Math.sin(time * 0.8 + n.id) * 0.015 : 1;
    // plain dots are drawn much smaller than the paintings (a sixth of the size, with a floor)
    const size = v.base * v.scale * breathe;
    n.sprite.scale.setScalar(showIllustrations ? size : Math.max(size / 6, 2));
    n.sprite.material.opacity = v.opacity;
  }
  const comparing = view.type === 'compare' && compareInfo;
  for (const n of nodes) {
    if (!n.ring) continue;
    const m = comparing ? compareInfo.masks.get(n.id) : 0;
    n.ring.visible = !!m;
    if (m) {
      n.ring.scale.setScalar(n.sprite.scale.x * 1.5);
      n.ring.material.opacity = n.vis.opacity;
    }
  }
  const haloNode = hovered || (view.type === 'ingredient' ? nodes[view.id] : null);
  const haloTarget = haloNode ? 0.9 : 0;
  if (haloNode) {
    halo.position.copy(haloNode.sprite.position);
    halo.scale.setScalar(haloNode.sprite.scale.x * 1.35);
  }
  if (Math.abs(haloTarget - halo.material.opacity) > 0.004) {
    halo.material.opacity += (haloTarget - halo.material.opacity) * lerp;
    moving = true;
  } else halo.material.opacity = haloTarget;
  const t1 = performance.now();
  renderer.render(scene, camera);
  const t2 = performance.now();
  if (updateLabels()) moving = true;
  const t3 = performance.now();
  perf.add(t1 - t0, t2 - t1, t3 - t2);
  return moving ? MOVING : controls.autoRotate ? AUTO : IDLE;
}

// If frames come too slowly, draw at a lower resolution; if there is plenty of headroom, win it back.
const MAX_RATIO = Math.min(window.devicePixelRatio || 1, 2);
let frameGapEma = 16, lastAdjust = 0;
function adaptResolution(gap, now) {
  frameGapEma += (gap - frameGapEma) * 0.1;
  const ratio = renderer.getPixelRatio();
  let next = ratio;
  if (now - lastAdjust > 1500 && frameGapEma > 24 && ratio > 1) next = Math.max(1, ratio - 0.25);
  else if (now - lastAdjust > 8000 && frameGapEma < 11 && ratio < MAX_RATIO) next = Math.min(MAX_RATIO, ratio + 0.25);
  if (next !== ratio) {
    lastAdjust = now;
    renderer.setPixelRatio(next);
    renderer.setSize(innerWidth, innerHeight);
    frameGapEma = 16;
    invalidate();
  }
}

let loopState = MOVING, lastRender = 0;
function animate() {
  requestAnimationFrame(animate);
  tick(performance.now());
}
function tick(now, dtOverride) {
  if (!needsRender && loopState === IDLE) { clock.getDelta(); return; } // nothing is changing: leave the screen alone
  if (!needsRender && loopState === AUTO && now - lastRender < 32) { clock.getDelta(); return; } // the slow idle turn needs only ~30 fps
  needsRender = false;
  const gap = now - lastRender;
  lastRender = now;
  loopState = frame(dtOverride ?? clock.getDelta());
  if (loopState === MOVING && gap < 100) adaptResolution(gap, now); // only judge frames that arrived back to back
}

// keep the globe centred in the open space between the atlas and the panel
function fitViewport() {
  invalidate();
  camera.aspect = innerWidth / innerHeight;
  const wide = innerWidth > 900;
  camera.setViewOffset(innerWidth, innerHeight, wide ? 70 : 0, wide ? 0 : innerHeight * 0.14, innerWidth, innerHeight);
  camera.updateProjectionMatrix();
  renderer.setSize(innerWidth, innerHeight);
  hiMat.resolution.set(innerWidth, innerHeight);
  hiMatShared.resolution.set(innerWidth, innerHeight);
  hiMatCasing.resolution.set(innerWidth, innerHeight);
}
window.addEventListener('resize', fitViewport);
fitViewport();

performance.mark('app:before-first-view');
go({ type: 'home' }, { push: false });
performance.mark('app:first-view');
camTween.t = 1;
if (camera.aspect < 1) camera.position.multiplyScalar(1.25);
animate();
// expose for debugging
window.__atlas = { nodes, edges, go, camera, controls, cuisineMarks, perf, renderer, tick, loop: () => ({ state: ['idle', 'auto-rotate', 'moving'][loopState], needsRender }), step: (k = 30) => { for (let i = 0; i < k; i++) frame(0.05); } };
