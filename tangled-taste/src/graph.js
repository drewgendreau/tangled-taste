import { CUISINES, DISHES, INGREDIENT_CATEGORY } from './data.js';

export const GLOBE_RADIUS = 120;

export function latLngToVec(lat, lng, r) {
  const phi = (lat * Math.PI) / 180;
  const lam = (lng * Math.PI) / 180;
  return [r * Math.cos(phi) * Math.sin(lam), r * Math.sin(phi), r * Math.cos(phi) * Math.cos(lam)];
}

// `baked` is an optional { ingredient: [x, y, z] } map produced by scripts/bake-layout.mjs.
// When it covers every ingredient the slow force simulation is skipped.
export function buildGraph(baked) {
  const byName = new Map();
  const nodes = [];
  for (const d of DISHES) {
    for (const name of d.ingredients) {
      if (!byName.has(name)) {
        const n = { id: nodes.length, name, category: INGREDIENT_CATEGORY[name] || 'pantry', dishes: [], cuisines: new Map() };
        byName.set(name, n);
        nodes.push(n);
      }
      const n = byName.get(name);
      n.dishes.push(d.id);
      n.cuisines.set(d.cuisine, (n.cuisines.get(d.cuisine) || 0) + 1);
    }
  }

  const edgeMap = new Map();
  for (const d of DISHES) {
    const ids = [...new Set(d.ingredients)].map((n) => byName.get(n).id);
    for (let a = 0; a < ids.length; a++) {
      for (let b = a + 1; b < ids.length; b++) {
        const i = Math.min(ids[a], ids[b]), j = Math.max(ids[a], ids[b]);
        const key = i * 10000 + j;
        let e = edgeMap.get(key);
        if (!e) edgeMap.set(key, (e = { source: i, target: j, weight: 0, dishes: [] }));
        e.weight++;
        e.dishes.push(d.id);
      }
    }
  }
  const edges = [...edgeMap.values()];
  const adjacency = nodes.map(() => new Map());
  for (const e of edges) {
    adjacency[e.source].set(e.target, e);
    adjacency[e.target].set(e.source, e);
  }

  const maxCount = Math.max(...nodes.map((n) => n.dishes.length));
  const popSums = nodes.map((n) => n.dishes.reduce((s, id) => s + DISHES[id].popularity, 0));
  const maxPop = Math.max(...popSums);
  nodes.forEach((n, i) => {
    n.count = n.dishes.length;
    n.commonness = Math.sqrt(n.count / maxCount); // 0..1, perceptual
    n.popularity = Math.round((popSums[i] / maxPop) * 100);
    n.dishes.sort((a, b) => DISHES[b].popularity - DISHES[a].popularity);
  });

  if (baked && nodes.every((n) => baked[n.name])) nodes.forEach((n) => (n.pos = baked[n.name].slice()));
  else layout(nodes, edges);
  return { nodes, edges, adjacency, byName };
}

// Force-directed layout in 3D, seeded by geography: every ingredient is gently
// pulled toward the weighted average globe position of the cuisines that use it,
// so universal staples settle near the centre and regional ones drift outward.
function layout(nodes, edges) {
  let seed = 12345;
  const rand = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);
  const anchors = nodes.map((n) => {
    let x = 0, y = 0, z = 0, w = 0;
    for (const [c, k] of n.cuisines) {
      const v = latLngToVec(CUISINES[c].lat, CUISINES[c].lng, 1);
      x += v[0] * k; y += v[1] * k; z += v[2] * k; w += k;
    }
    const len = Math.hypot(x, y, z) / w; // 1 = one cuisine; ~0 = everywhere
    const s = (GLOBE_RADIUS * 0.8 * Math.pow(len, 1.3)) / (Math.hypot(x, y, z) || 1);
    return [x * s, y * s, z * s];
  });
  const pos = nodes.map((n, i) => anchors[i].map((v) => v + (rand() - 0.5) * 30));
  const vel = nodes.map(() => [0, 0, 0]);
  const N = nodes.length;
  const ITER = 500;
  for (let it = 0; it < ITER; it++) {
    const alpha = 1 - it / ITER;
    const f = nodes.map(() => [0, 0, 0]);
    for (let i = 0; i < N; i++) {
      for (let j = i + 1; j < N; j++) {
        let dx = pos[i][0] - pos[j][0], dy = pos[i][1] - pos[j][1], dz = pos[i][2] - pos[j][2];
        let d2 = dx * dx + dy * dy + dz * dz + 0.01;
        const minD = 10 + 15 * (Math.pow(nodes[i].commonness, 1.4) + Math.pow(nodes[j].commonness, 1.4));
        let rep = 900 / d2;
        if (d2 < minD * minD) rep += (minD - Math.sqrt(d2)) * 0.6;
        const d = Math.sqrt(d2);
        dx /= d; dy /= d; dz /= d;
        f[i][0] += dx * rep; f[i][1] += dy * rep; f[i][2] += dz * rep;
        f[j][0] -= dx * rep; f[j][1] -= dy * rep; f[j][2] -= dz * rep;
      }
    }
    for (const e of edges) {
      const a = pos[e.source], b = pos[e.target];
      const dx = b[0] - a[0], dy = b[1] - a[1], dz = b[2] - a[2];
      const d = Math.hypot(dx, dy, dz) + 0.01;
      const rest = 38 / Math.sqrt(e.weight);
      const k = 0.012 * Math.sqrt(e.weight) * (d - rest) / d;
      f[e.source][0] += dx * k; f[e.source][1] += dy * k; f[e.source][2] += dz * k;
      f[e.target][0] -= dx * k; f[e.target][1] -= dy * k; f[e.target][2] -= dz * k;
    }
    for (let i = 0; i < N; i++) {
      for (let a = 0; a < 3; a++) {
        f[i][a] += (anchors[i][a] - pos[i][a]) * 0.05;
        vel[i][a] = (vel[i][a] + f[i][a] * alpha) * 0.6;
        pos[i][a] += Math.max(-6, Math.min(6, vel[i][a]));
      }
    }
  }
  nodes.forEach((n, i) => (n.pos = pos[i]));
}

// ---------------------------------------------------------------- the dish graph
// Dishes are linked when they share ingredients; the link's weight is how many they share.
// Weak links (fewer than MIN_SHARED ingredients) are left out: nearly every pair of dishes shares salt or onion.
export const MIN_SHARED = 3;

// `baked` is an optional { dishId: [x, y, z] } map produced by scripts/bake-layout.mjs.
export function buildDishGraph(baked) {
  const byIngredient = new Map();
  DISHES.forEach((d) => new Set(d.ingredients).forEach((nm) => (byIngredient.get(nm) || byIngredient.set(nm, []).get(nm)).push(d.id)));
  const counts = new Map();
  for (const ids of byIngredient.values()) {
    for (let a = 0; a < ids.length; a++) {
      for (let b = a + 1; b < ids.length; b++) {
        const key = ids[a] * 10000 + ids[b];
        counts.set(key, (counts.get(key) || 0) + 1);
      }
    }
  }
  const edges = [];
  for (const [key, weight] of counts) if (weight >= MIN_SHARED) edges.push({ source: Math.floor(key / 10000), target: key % 10000, weight });
  const nodes = DISHES.map((d) => ({
    id: d.id, name: d.name, isDish: true, cuisine: d.cuisine, type: d.type, count: d.popularity, popularity: d.popularity,
    commonness: Math.sqrt(d.popularity / 100), cuisines: new Map([[d.cuisine, 1]]), dishes: [d.id],
  }));
  const adjacency = nodes.map(() => new Map());
  for (const e of edges) {
    adjacency[e.source].set(e.target, e);
    adjacency[e.target].set(e.source, e);
  }
  if (baked && nodes.every((n) => baked[n.id])) nodes.forEach((n) => (n.pos = baked[n.id].slice()));
  else layoutDishes(nodes, edges);
  return { nodes, edges, adjacency };
}

// Each dish settles near its cuisine on the globe; dishes that share many ingredients drift together.
function layoutDishes(nodes, edges) {
  let seed = 9871;
  const rand = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);
  const anchors = nodes.map((n) => latLngToVec(CUISINES[n.cuisine].lat, CUISINES[n.cuisine].lng, GLOBE_RADIUS * 0.85));
  const pos = nodes.map((n, i) => anchors[i].map((v) => v + (rand() - 0.5) * 40));
  const vel = nodes.map(() => [0, 0, 0]);
  const N = nodes.length;
  const ITER = 300;
  for (let it = 0; it < ITER; it++) {
    const alpha = 1 - it / ITER;
    const f = nodes.map(() => [0, 0, 0]);
    for (let i = 0; i < N; i++) {
      for (let j = i + 1; j < N; j++) {
        let dx = pos[i][0] - pos[j][0], dy = pos[i][1] - pos[j][1], dz = pos[i][2] - pos[j][2];
        const d2 = dx * dx + dy * dy + dz * dz + 0.01;
        const minD = 9 + 6 * (nodes[i].commonness + nodes[j].commonness);
        let rep = 500 / d2;
        const d = Math.sqrt(d2);
        if (d < minD) rep += (minD - d) * 0.5;
        dx /= d; dy /= d; dz /= d;
        f[i][0] += dx * rep; f[i][1] += dy * rep; f[i][2] += dz * rep;
        f[j][0] -= dx * rep; f[j][1] -= dy * rep; f[j][2] -= dz * rep;
      }
    }
    for (const e of edges) {
      const a = pos[e.source], b = pos[e.target];
      const dx = b[0] - a[0], dy = b[1] - a[1], dz = b[2] - a[2];
      const d = Math.hypot(dx, dy, dz) + 0.01;
      const k = 0.004 * (e.weight - MIN_SHARED + 1) * (d - 30) / d;
      f[e.source][0] += dx * k; f[e.source][1] += dy * k; f[e.source][2] += dz * k;
      f[e.target][0] -= dx * k; f[e.target][1] -= dy * k; f[e.target][2] -= dz * k;
    }
    for (let i = 0; i < N; i++) {
      for (let a = 0; a < 3; a++) {
        f[i][a] += (anchors[i][a] - pos[i][a]) * 0.04;
        vel[i][a] = (vel[i][a] + f[i][a] * alpha) * 0.6;
        pos[i][a] += Math.max(-6, Math.min(6, vel[i][a]));
      }
    }
  }
  nodes.forEach((n, i) => (n.pos = pos[i]));
}
