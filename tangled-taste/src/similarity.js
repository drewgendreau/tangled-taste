// How alike are two cuisines? Three views of the same question, blended into one score.
//
//   profile   cosine similarity of ingredient-frequency vectors, with rare
//             ingredients weighted up (IDF) so sharing saffron says more than sharing salt
//   overlap   Jaccard overlap of the sets of ingredients each cuisine uses
//   pairings  Jaccard overlap of the sets of ingredient pairs that appear together in a dish
//
//   overall = 50% profile + 25% overlap + 25% pairings          (all scaled 0–100)

export const WEIGHTS = { profile: 0.5, overlap: 0.25, pairings: 0.25 };

const pairKey = (a, b) => (a < b ? `${a}|${b}` : `${b}|${a}`);
const jaccard = (A, B) => {
  let inter = 0;
  const [small, large] = A.size < B.size ? [A, B] : [B, A];
  for (const x of small) if (large.has(x)) inter++;
  return inter / (A.size + B.size - inter || 1);
};

export function buildProfiles(dishes, cuisineNames) {
  const profiles = new Map();
  for (const name of cuisineNames) profiles.set(name, { name, dishes: [], ingredients: new Map(), pairs: new Map() });
  for (const d of dishes) {
    const p = profiles.get(d.cuisine);
    if (!p) continue;
    p.dishes.push(d);
    for (const i of d.ingredients) p.ingredients.set(i, (p.ingredients.get(i) || 0) + 1);
    for (let x = 0; x < d.ingredients.length; x++) for (let y = x + 1; y < d.ingredients.length; y++) {
      const k = pairKey(d.ingredients[x], d.ingredients[y]);
      p.pairs.set(k, (p.pairs.get(k) || 0) + 1);
    }
  }
  // document frequency across cuisines
  const df = new Map();
  for (const p of profiles.values()) for (const i of p.ingredients.keys()) df.set(i, (df.get(i) || 0) + 1);
  const N = profiles.size;
  const idf = (i) => Math.log((N + 1) / ((df.get(i) || 0) + 1)) + 1;
  for (const p of profiles.values()) {
    p.ingredientSet = new Set(p.ingredients.keys());
    p.pairSet = new Set(p.pairs.keys());
    p.vector = new Map();
    let norm = 0;
    for (const [i, c] of p.ingredients) {
      const w = (c / p.dishes.length) * idf(i);
      p.vector.set(i, w);
      norm += w * w;
    }
    p.norm = Math.sqrt(norm) || 1;
  }
  return { profiles, idf, df };
}

export function similarity(a, b) {
  let dot = 0;
  const [small, large] = a.vector.size < b.vector.size ? [a.vector, b.vector] : [b.vector, a.vector];
  for (const [i, w] of small) if (large.has(i)) dot += w * large.get(i);
  const profile = dot / (a.norm * b.norm);
  const overlap = jaccard(a.ingredientSet, b.ingredientSet);
  const pairings = jaccard(a.pairSet, b.pairSet);
  const overall = WEIGHTS.profile * profile + WEIGHTS.overlap * overlap + WEIGHTS.pairings * pairings;
  return { profile, overlap, pairings, overall };
}

// Every pair of cuisines, plus each cuisine's neighbours ranked from closest to furthest.
export function buildMatrix(profiles) {
  const names = [...profiles.keys()];
  const scores = new Map();
  const neighbours = new Map(names.map((n) => [n, []]));
  const all = [];
  for (let i = 0; i < names.length; i++) for (let j = i + 1; j < names.length; j++) {
    const s = similarity(profiles.get(names[i]), profiles.get(names[j]));
    scores.set(pairKey(names[i], names[j]), s);
    neighbours.get(names[i]).push({ name: names[j], ...s });
    neighbours.get(names[j]).push({ name: names[i], ...s });
    all.push(s.overall);
  }
  for (const list of neighbours.values()) list.sort((x, y) => y.overall - x.overall);
  all.sort((x, y) => x - y);
  const percentile = (v) => {
    let lo = 0, hi = all.length;
    while (lo < hi) { const m = (lo + hi) >> 1; all[m] < v ? (lo = m + 1) : (hi = m); }
    return lo / all.length;
  };
  return {
    names,
    pair: (a, b) => scores.get(pairKey(a, b)),
    neighbours: (name) => neighbours.get(name),
    rank: (from, to) => neighbours.get(from).findIndex((n) => n.name === to) + 1, // 1 = closest
    percentile,
  };
}

export function describe(percentile) {
  if (percentile >= 0.95) return 'Close kin';
  if (percentile >= 0.8) return 'Near relatives';
  if (percentile >= 0.5) return 'Some common ground';
  if (percentile >= 0.2) return 'Distant cousins';
  return 'Worlds apart';
}

// Which ingredients and pairings does each selected cuisine contribute, and where do they overlap?
export function compareSets(profiles, names) {
  const ps = names.map((n) => profiles.get(n));
  const ingMask = new Map(); // ingredient -> bitmask of cuisines using it
  const pairMask = new Map(); // pair key -> bitmask
  const pairWeight = new Map(); // pair key -> dishes across the selected cuisines
  ps.forEach((p, bit) => {
    for (const i of p.ingredients.keys()) ingMask.set(i, (ingMask.get(i) || 0) | (1 << bit));
    for (const [k, c] of p.pairs) {
      pairMask.set(k, (pairMask.get(k) || 0) | (1 << bit));
      pairWeight.set(k, (pairWeight.get(k) || 0) + c);
    }
  });
  return { ingMask, pairMask, pairWeight };
}
