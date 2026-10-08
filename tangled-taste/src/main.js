import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { LineSegments2 } from 'three/examples/jsm/lines/LineSegments2.js';
import { LineSegmentsGeometry } from 'three/examples/jsm/lines/LineSegmentsGeometry.js';
import { LineMaterial } from 'three/examples/jsm/lines/LineMaterial.js';
import { CATEGORIES, CUISINES, DISHES } from './data.js';
import { buildGraph, latLngToVec, GLOBE_RADIUS } from './graph.js';
import { paintBlob, paintHalo, paintPaper, swatchDataURL } from './watercolor.js';
import { paintIngredient, iconURL } from './illustrations.js';

const PAPER = new THREE.Color('#f5eee0');
const INK = new THREE.Color('#5a4030');
const { nodes, edges, adjacency } = buildGraph();
const totalDishes = DISHES.length;
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`);
const norm = (s) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();

// ---------------------------------------------------------------- page dressing
document.body.style.backgroundImage = `url(${paintPaper()})`;
{
  const washes = document.getElementById('washes');
  const spots = [
    ['#c0504d', 11, '-8vw', '-10vh', '38vw'],
    ['#7fa36b', 23, '72vw', '62vh', '40vw'],
    ['#e0bb57', 37, '-6vw', '68vh', '30vw'],
    ['#5a8fb8', 41, '80vw', '-12vh', '26vw'],
  ];
  for (const [c, seed, x, y, s] of spots) {
    const img = new Image();
    img.src = swatchDataURL(c, seed, 160);
    Object.assign(img.style, { left: x, top: y, width: s, height: s });
    washes.appendChild(img);
  }
}

// ---------------------------------------------------------------- renderer
const stage = document.getElementById('stage');
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
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
const placeholders = {};
Object.entries(CATEGORIES).forEach(([key, { color }], ci) => (placeholders[key] = paintBlob(color, ci * 101 + 1, 64)));
const REP = { vegetable: 'tomato', herb: 'basil', fruit: 'lemon', spice: 'cinnamon', meat: 'beef', seafood: 'fish', dairy: 'egg', grain: 'bread', legume: 'chickpeas', nut: 'walnut', pantry: 'olive oil' };
const icon = (n) => iconURL(n.name, CATEGORIES[n.category].color);
const familyIcon = (k) => iconURL(REP[k], CATEGORIES[k].color);
const nodeGroup = new THREE.Group();
scene.add(nodeGroup);
for (const n of nodes) {
  const mat = new THREE.SpriteMaterial({ map: placeholders[n.category], transparent: true, depthWrite: false, opacity: 0, rotation: (((n.id * 7919) % 100) / 100 - 0.5) * 0.3 });
  const s = new THREE.Sprite(mat);
  s.position.fromArray(n.pos);
  n.baseScale = 6 + 34 * Math.pow(n.commonness, 1.4);
  s.scale.setScalar(n.baseScale);
  s.userData.node = n;
  n.sprite = s;
  n.vis = { scale: 1, opacity: 0, tScale: 1, tOpacity: 1 };
  nodeGroup.add(s);
}
const paintQueue = [...nodes].sort((a, b) => b.count - a.count);
function paintSome(budgetMs) {
  const t0 = performance.now();
  while (paintQueue.length && performance.now() - t0 < budgetMs) {
    const n = paintQueue.shift();
    const tex = new THREE.CanvasTexture(paintIngredient(n.name, CATEGORIES[n.category].color));
    tex.colorSpace = THREE.SRGBColorSpace;
    tex.anisotropy = 4;
    n.sprite.material.map = tex;
    n.sprite.material.needsUpdate = true;
    n.vis.opacity = 0; // fade the finished painting in
  }
  if (paintQueue.length) setTimeout(() => paintSome(14), 0);
}
setTimeout(() => paintSome(2000), 30);
const halo = new THREE.Sprite(new THREE.SpriteMaterial({ map: paintHalo(), transparent: true, depthWrite: false, opacity: 0 }));
scene.add(halo);

// ---------------------------------------------------------------- base edges (soft ink threads)
const SEG = 10;
function curvePoints(a, b, bend = 0.82) {
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
{
  const pos = [], col = [];
  const tmp = new THREE.Color();
  for (const e of edges) {
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
  scene.add(new THREE.LineSegments(g, baseEdgeMat));
}

// highlighted edges: fat lines rebuilt per view
const hiMat = new LineMaterial({ vertexColors: true, linewidth: 2, transparent: true, opacity: 0.85, depthWrite: false, worldUnits: false });
hiMat.resolution.set(innerWidth, innerHeight);
let hiLines = null;
function setHighlightEdges(list) {
  if (hiLines) {
    scene.remove(hiLines);
    hiLines.geometry.dispose();
    hiLines = null;
  }
  if (!list.length) return;
  const pos = [], col = [];
  const tmp = new THREE.Color();
  for (const { a, b, color, strength } of list) {
    const pts = curvePoints(nodes[a].sprite.position, nodes[b].sprite.position);
    tmp.copy(PAPER).lerp(new THREE.Color(color), 0.35 + 0.65 * strength);
    for (let i = 0; i < SEG; i++) {
      pos.push(pts[i].x, pts[i].y, pts[i].z, pts[i + 1].x, pts[i + 1].y, pts[i + 1].z);
      col.push(tmp.r, tmp.g, tmp.b, tmp.r, tmp.g, tmp.b);
    }
  }
  const g = new LineSegmentsGeometry();
  g.setPositions(pos);
  g.setColors(col);
  hiLines = new LineSegments2(g, hiMat);
  hiLines.renderOrder = -1;
  scene.add(hiLines);
}

// ---------------------------------------------------------------- HTML labels
const labelLayer = document.getElementById('labels');
const ranked = [...nodes].sort((a, b) => b.count - a.count);
const HOME_LABELS = new Set(ranked.slice(0, 55).map((n) => n.id));
for (const n of nodes) {
  const el = document.createElement('div');
  el.className = 'label' + (n.commonness > 0.55 ? ' major' : '');
  el.textContent = n.name;
  el.style.fontSize = `${12 + 16 * n.commonness * n.commonness + 4 * n.commonness}px`;
  el.style.display = 'none';
  labelLayer.appendChild(el);
  n.label = el;
}
const cuisineMarks = Object.entries(CUISINES).map(([name, c]) => {
  const p = new THREE.Vector3(...latLngToVec(c.lat, c.lng, GLOBE_RADIUS * 1.18));
  const el = document.createElement('div');
  el.className = 'cuisine-label';
  el.textContent = name;
  el.style.color = c.color;
  el.addEventListener('click', () => go({ type: 'cuisine', name }));
  labelLayer.appendChild(el);
  const dot = new THREE.Sprite(new THREE.SpriteMaterial({ map: paintBlob(c.color, name.length * 17 + 3, 128), transparent: true, depthWrite: false }));
  dot.position.copy(p);
  dot.scale.setScalar(6);
  scene.add(dot);
  return { name, pos: p, el, dot, vis: 1 };
});

// ---------------------------------------------------------------- view state
let view = { type: 'home' };
const history = [];
let highlight = null; // Set of node ids or null (=all)
let focusIds = new Set();
let activeCuisines = new Set();
const camTween = { t: 1, fromPos: new THREE.Vector3(), toPos: new THREE.Vector3(), fromTarget: new THREE.Vector3(), toTarget: new THREE.Vector3() };

function flyTo(target, distance) {
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
    const ids = DISHES[did].ingredients.map((nm) => nodes.find((n) => n.name === nm).id);
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

function go(next, { push = true } = {}) {
  if (push && !(next.type === view.type && JSON.stringify(next) === JSON.stringify(view))) history.push(view);
  view = next;
  controls.autoRotate = next.type === 'home';
  activeCuisines = new Set();
  let hi = null, edgesHi = [], focus = new Set();
  hiMat.linewidth = 2;
  switch (next.type) {
    case 'home':
      flyTo(new THREE.Vector3(), HOME_POS.length() * (camera.aspect < 1 ? 1.25 : 1));
      break;
    case 'ingredient': {
      const n = nodes[next.id];
      hi = new Set([n.id, ...adjacency[n.id].keys()]);
      focus = new Set([n.id]);
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
    case 'category': {
      const ids = nodes.filter((n) => n.category === next.key).map((n) => n.id);
      hi = new Set(ids);
      const { c, r } = centroid(ids);
      flyTo(c.multiplyScalar(0.5), Math.max(200, r * 2.2));
      break;
    }
  }
  highlight = hi;
  focusIds = focus;
  setHighlightEdges(edgesHi);
  baseEdgeMat.opacity = hi ? 0.18 : 0.75;
  for (const n of nodes) {
    const on = !hi || hi.has(n.id);
    n.vis.tOpacity = on ? 1 : 0.09;
    n.vis.tScale = focus.has(n.id) ? (next.type === 'ingredient' ? 1.35 : 1.18) : on ? 1 : 0.8;
    // focused ingredients are painted over the big hubs so they are never buried
    n.sprite.renderOrder = focus.has(n.id) ? 10 : 0;
    n.sprite.material.depthTest = !focus.has(n.id);
  }
  halo.renderOrder = 11;
  halo.material.depthTest = false;
  renderPanel();
  renderAtlas();
}

function back() {
  if (history.length) go(history.pop(), { push: false });
  else if (view.type !== 'home') go({ type: 'home' }, { push: false });
}

// ---------------------------------------------------------------- panel
const panel = document.getElementById('panel-inner');
const bar = (pct, color) => `<div class="bar"><i style="width:${Math.max(3, pct)}%;background:${color}"></i></div>`;
const ingChip = (n, extra = '') => `<button class="chip" data-go="ingredient:${n.id}"><img src="${icon(n)}" alt="">${esc(n.name)}${extra}</button>`;
const cuisineChip = (name, extra = '') => `<button class="chip${activeCuisines.has(name) ? ' active' : ''}" data-go="cuisine:${esc(name)}"><span class="dot" style="background:${CUISINES[name].color}"></span>${esc(name)}${extra}</button>`;
const dishRows = (ids, max = 99) => `<ul class="rows">${ids.slice(0, max).map((id) => {
  const d = DISHES[id];
  return `<li data-go="dish:${id}"><span class="nm">${esc(d.name)} <em>${esc(d.cuisine)}</em></span><span class="val">${d.popularity}</span>${bar(d.popularity, CUISINES[d.cuisine].color)}</li>`;
}).join('')}</ul>`;
const ingRows = (list, valFn, max = 99, maxVal) => {
  const mv = maxVal || Math.max(...list.map(valFn));
  return `<ul class="rows">${list.slice(0, max).map((n) => `<li data-go="ingredient:${n.id}"><span class="nm"><img src="${icon(n)}" alt="">${esc(n.name)}</span><span class="val">${valFn(n)}</span>${bar((valFn(n) / mv) * 100, CATEGORIES[n.category].color)}</li>`).join('')}</ul>`;
};

function crumbs() {
  const trail = [...history.slice(-3), view].filter((v, i, arr) => i === arr.length - 1 || v.type !== 'home');
  const name = (v) => (v.type === 'home' ? 'Atlas' : v.type === 'ingredient' ? nodes[v.id].name : v.type === 'dish' ? DISHES[v.id].name : v.type === 'category' ? CATEGORIES[v.key].label : v.name);
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
      <p class="lede">linked whenever they meet in the same dish — ${totalDishes} dishes from ${Object.keys(CUISINES).length} cuisines, arranged on a globe so regional ingredients drift toward home while universal staples gather at the centre.</p>
      <h3>Most common ingredients</h3>${ingRows(ranked, (n) => n.count, 10)}
      <h3>Most popular dishes</h3>${dishRows(topDishes, 8)}
      <h3>Ingredient families</h3><div class="chips">${Object.entries(CATEGORIES).map(([k, c], i) => `<button class="chip" data-go="category:${k}"><img src="${familyIcon(k)}" alt="">${c.label}</button>`).join('')}</div>
      <p class="fine">Blob size shows how common an ingredient is. Popularity scores are illustrative estimates of worldwide recognition.</p>`;
  } else if (v.type === 'ingredient') {
    const n = nodes[v.id];
    const companions = [...adjacency[n.id].entries()].sort((a, b) => b[1].weight - a[1].weight).map(([id, e]) => ({ n: nodes[id], w: e.weight }));
    const cuisines = [...n.cuisines.entries()].sort((a, b) => b[1] - a[1]);
    h = `${crumbs()}<div class="title-row"><img src="${icon(n)}" alt=""><div><div class="kicker">${esc(CATEGORIES[n.category].label.toLowerCase())}</div><h2>${esc(n.name)}</h2></div></div>
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
    h = `${crumbs()}<div class="kicker" style="color:${c.color}">cuisine</div><h2>${esc(v.name)}</h2>
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
  } else if (v.type === 'category') {
    const list = nodes.filter((n) => n.category === v.key).sort((a, b) => b.count - a.count);
    h = `${crumbs()}<div class="title-row"><img src="${familyIcon(v.key)}" alt=""><div><div class="kicker">ingredient family</div><h2>${esc(CATEGORIES[v.key].label)}</h2></div></div>
      <h3>By number of dishes</h3>${ingRows(list, (n) => n.count)}`;
  }
  panel.innerHTML = `<div class="panel">${h}</div>`;
  panel.scrollTop = 0;
  panel.style.animation = 'none';
  void panel.offsetWidth;
  panel.style.animation = '';
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
function renderAtlas() {
  atlasBody.innerHTML = regions.map((r) => `<div class="region"><button class="region-name" data-go="region:${esc(r)}">${esc(r)}</button><div class="chips">${Object.keys(CUISINES).filter((k) => CUISINES[k].region === r).map((k) => cuisineChip(k)).join('')}</div></div>`).join('');
}
document.getElementById('atlas-toggle').addEventListener('click', (e) => {
  const b = e.currentTarget;
  b.setAttribute('aria-expanded', b.getAttribute('aria-expanded') === 'true' ? 'false' : 'true');
});
document.getElementById('brand').addEventListener('click', () => go({ type: 'home' }));

// ---------------------------------------------------------------- search
const input = document.getElementById('search-input');
const results = document.getElementById('search-results');
const index = [
  ...nodes.map((n) => ({ name: n.name, sub: `${CATEGORIES[n.category].label} · ${n.count} dish${n.count > 1 ? 'es' : ''}`, type: 'ingredient', weight: n.count * 6, img: () => icon(n), go: { type: 'ingredient', id: n.id } })),
  ...DISHES.map((d) => ({ name: d.name, sub: `${d.cuisine} · popularity ${d.popularity}`, type: 'dish', weight: d.popularity, color: CUISINES[d.cuisine].color, go: { type: 'dish', id: d.id } })),
  ...Object.entries(CUISINES).map(([k, c]) => ({ name: k, sub: `${c.country} · ${c.region}`, type: 'cuisine', weight: 200, color: c.color, go: { type: 'cuisine', name: k }, alt: [c.country] })),
  ...regions.map((r) => ({ name: r, sub: Object.keys(CUISINES).filter((k) => CUISINES[k].region === r).join(', '), type: 'region', weight: 150, go: { type: 'region', name: r } })),
  ...Object.entries(CATEGORIES).map(([k, c]) => ({ name: c.label, sub: 'ingredient family', type: 'family', weight: 50, img: () => familyIcon(k), go: { type: 'category', key: k } })),
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
    ? hits.map((h, i) => `<li role="option" data-i="${i}" class="${i === active ? 'active' : ''}">${h.img ? `<img src="${h.img()}" width="26" height="26" alt="">` : `<span class="dot" style="width:12px;height:12px;border-radius:50%;margin:0 4px;background:${h.color || 'var(--ink-faint)'}"></span>`}<span><span class="r-name">${highlightMatch(h.name, q)}</span> <span class="r-sub">${esc(h.sub)}</span></span><span class="r-type">${h.type}</span></li>`).join('')
    : `<li class="empty">Nothing on the menu for “${esc(input.value)}”</li>`;
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
  } else if (e.key === 'Escape' && document.activeElement !== input) back();
});

// ---------------------------------------------------------------- picking
const raycaster = new THREE.Raycaster();
const pointer = new THREE.Vector2();
const tooltip = document.getElementById('tooltip');
let hovered = null;
let downAt = null;
function pick(ev) {
  pointer.set((ev.clientX / innerWidth) * 2 - 1, -(ev.clientY / innerHeight) * 2 + 1);
  raycaster.setFromCamera(pointer, camera);
  const hitsR = raycaster.intersectObjects(nodeGroup.children, false).filter((h) => h.object.userData.node.vis.opacity > 0.3);
  return hitsR.length ? hitsR[0].object.userData.node : null;
}
renderer.domElement.addEventListener('pointermove', (ev) => {
  const n = pick(ev);
  if (n !== hovered) {
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
});
renderer.domElement.addEventListener('pointerleave', () => {
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
  const W = innerWidth, H = innerHeight;
  const camDist = camera.position.distanceTo(controls.target);
  const tanHalf = Math.tan((camera.fov * Math.PI) / 360);
  // decide which ingredient labels to show
  let showSet;
  if (!highlight) showSet = HOME_LABELS;
  else {
    const cand = [...highlight].sort((a, b) => nodes[b].count - nodes[a].count);
    showSet = new Set([...focusIds, ...cand.slice(0, view.type === 'ingredient' ? 26 : 40)]);
  }
  // project candidates, then place greedily by priority so labels never collide
  const cands = [];
  for (const n of nodes) {
    const show = showSet.has(n.id) || n === hovered || (camDist < 140 && (!highlight || highlight.has(n.id)));
    v3.copy(n.sprite.position).project(camera);
    if (!show || v3.z > 1 || Math.abs(v3.x) > 1.1 || Math.abs(v3.y) > 1.1) {
      n.labelOn = false;
      continue;
    }
    const d = camera.position.distanceTo(n.sprite.position);
    const rPx = (n.sprite.scale.x * 0.4) / (d * tanHalf) * (H / 2);
    const isFocus = focusIds.has(n.id) && view.type === 'ingredient';
    const scale = THREE.MathUtils.clamp(260 / d, 0.75, 1.5) * (isFocus ? 1.6 : view.type === 'dish' && focusIds.has(n.id) ? 1.25 : 1);
    const fs = parseFloat(n.label.style.fontSize) * scale;
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
    el.style.transform = `translate(${c.x}px, ${c.y}px) translate(-50%, 0) scale(${c.scale.toFixed(3)})`;
    el.style.opacity = (c.n.vis.opacity * depthFade).toFixed(3);
    el.style.zIndex = String(focusIds.has(c.n.id) ? 2000 : 1000 - Math.round(c.d));
    el.classList.toggle('focus', focusIds.has(c.n.id) && view.type === 'ingredient');
  }
  for (const n of nodes) {
    const want = n.labelOn ? '' : 'none';
    if (n.label.style.display !== want) n.label.style.display = want;
  }
  for (const m of cuisineMarks) {
    v3.copy(m.pos).project(camera);
    const behind = camera.position.distanceTo(m.pos) > camera.position.length() + 10;
    const on = !activeCuisines.size || activeCuisines.has(m.name);
    if (v3.z > 1 || Math.abs(v3.x) > 1.05 || Math.abs(v3.y) > 1.05) {
      m.el.style.display = 'none';
      continue;
    }
    m.el.style.display = '';
    const x = (v3.x * 0.5 + 0.5) * W, y = (-v3.y * 0.5 + 0.5) * H;
    m.el.style.transform = `translate(${x}px, ${y}px) translate(-50%, -130%)`;
    m.el.style.opacity = String((behind ? 0.25 : 0.95) * (on ? 1 : 0.35));
    m.el.style.pointerEvents = behind ? 'none' : 'auto';
    m.dot.material.opacity = on ? 0.9 : 0.25;
  }
}

function animate() {
  requestAnimationFrame(animate);
  frame(clock.getDelta());
}
function frame(rawDt) {
  const dt = Math.min(rawDt, 0.05);
  const time = clock.elapsedTime;
  if (camTween.t < 1) {
    camTween.t = Math.min(1, camTween.t + Math.min(rawDt, 0.25) / 1.1);
    const k = ease(camTween.t);
    controls.target.lerpVectors(camTween.fromTarget, camTween.toTarget, k);
    camera.position.lerpVectors(camTween.fromPos, camTween.toPos, k);
  }
  controls.update();
  const camDist = camera.position.distanceTo(controls.target);
  scene.fog.near = camDist - 60;
  scene.fog.far = camDist + 260;
  const lerp = 1 - Math.pow(0.001, dt);
  for (const n of nodes) {
    const v = n.vis;
    const hov = n === hovered ? 1.22 : 1;
    v.scale += (v.tScale * hov - v.scale) * lerp;
    v.opacity += (v.tOpacity - v.opacity) * lerp;
    const breathe = 1 + Math.sin(time * 0.8 + n.id) * 0.015;
    n.sprite.scale.setScalar(n.baseScale * v.scale * breathe);
    n.sprite.material.opacity = v.opacity;
  }
  const haloNode = hovered || (view.type === 'ingredient' ? nodes[view.id] : null);
  if (haloNode) {
    halo.position.copy(haloNode.sprite.position);
    halo.scale.setScalar(haloNode.sprite.scale.x * 1.35);
    halo.material.rotation = time * 0.15;
    halo.material.opacity += (0.9 - halo.material.opacity) * lerp;
  } else halo.material.opacity += (0 - halo.material.opacity) * lerp;
  renderer.render(scene, camera);
  updateLabels();
}

// keep the globe centred in the open space between the atlas and the panel
function fitViewport() {
  camera.aspect = innerWidth / innerHeight;
  const wide = innerWidth > 900;
  camera.setViewOffset(innerWidth, innerHeight, wide ? 70 : 0, wide ? 0 : innerHeight * 0.14, innerWidth, innerHeight);
  camera.updateProjectionMatrix();
  renderer.setSize(innerWidth, innerHeight);
  hiMat.resolution.set(innerWidth, innerHeight);
}
window.addEventListener('resize', fitViewport);
fitViewport();

go({ type: 'home' }, { push: false });
camTween.t = 1;
if (camera.aspect < 1) camera.position.multiplyScalar(1.25);
animate();
// expose for debugging
window.__atlas = { nodes, edges, go, camera, controls, step: (k = 30) => { for (let i = 0; i < k; i++) frame(0.05); } };
