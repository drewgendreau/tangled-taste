// What do a handful of ingredients have in common? Given 2–6 ingredients this works out
//   · the dishes that use all of them (and the closest runners-up)
//   · the cuisines that use all of them, and in how many shared dishes
//   · for every pair: how often they meet, and whether that is more than chance (lift)
//   · "bridge" ingredients: the ones that turn up alongside several of the chosen ones
//
// lift = P(A and B) / (P(A) × P(B)) across all dishes. Above 1 the two appear together more than
// they would by luck; around 1 their overlap is just a side-effect of both being common.

export function buildIndex(dishes) {
  const dishSets = new Map(); // ingredient -> Set of dish ids
  for (const d of dishes) {
    for (const i of d.ingredients) {
      if (!dishSets.has(i)) dishSets.set(i, new Set());
      dishSets.get(i).add(d.id);
    }
  }
  return { dishes, dishSets, total: dishes.length };
}

const inter = (a, b) => {
  let n = 0;
  const [small, large] = a.size < b.size ? [a, b] : [b, a];
  for (const x of small) if (large.has(x)) n++;
  return n;
};

export function analyze(index, names) {
  const { dishes, dishSets, total } = index;
  const sets = names.map((n) => dishSets.get(n) || new Set());

  // per dish: how many of the chosen ingredients does it use?
  const hits = new Map();
  sets.forEach((set) => set.forEach((id) => hits.set(id, (hits.get(id) || 0) + 1)));
  const byDish = (min) => [...hits].filter(([, c]) => c >= min).map(([id]) => dishes[id]).sort((a, b) => b.popularity - a.popularity);
  const all = byDish(names.length);
  const several = [...hits].filter(([, c]) => c >= 2 && c < names.length).map(([id, c]) => ({ dish: dishes[id], count: c }))
    .sort((a, b) => b.count - a.count || b.dish.popularity - a.dish.popularity);

  const pairs = [];
  for (let i = 0; i < names.length; i++) for (let j = i + 1; j < names.length; j++) {
    const co = inter(sets[i], sets[j]);
    const a = sets[i].size, b = sets[j].size;
    pairs.push({
      a: names[i], b: names[j], ai: i, bi: j, co, aCount: a, bCount: b,
      jaccard: co / (a + b - co || 1),
      lift: a && b ? (co * total) / (a * b) : 0,
      aGivenB: b ? co / b : 0, bGivenA: a ? co / a : 0,
    });
  }

  // cuisines
  const cuisines = new Map();
  const cuisineOf = (d) => cuisines.get(d.cuisine) || cuisines.set(d.cuisine, { name: d.cuisine, total: 0, uses: names.map(() => false), perIngredient: names.map(() => 0), dishesAll: 0, dishesAny: 0 }).get(d.cuisine);
  for (const d of dishes) cuisineOf(d).total++;
  names.forEach((n, i) => sets[i].forEach((id) => { const c = cuisineOf(dishes[id]); c.uses[i] = true; c.perIngredient[i]++; }));
  hits.forEach((count, id) => { const c = cuisineOf(dishes[id]); c.dishesAny++; if (count === names.length) c.dishesAll++; });
  const cuisineList = [...cuisines.values()].filter((c) => c.uses.some(Boolean)).map((c) => ({ ...c, useAll: c.uses.every(Boolean), usedCount: c.uses.filter(Boolean).length }))
    .sort((x, y) => y.dishesAll - x.dishesAll || y.usedCount - x.usedCount || y.perIngredient.reduce((s, v) => s + v, 0) - x.perIngredient.reduce((s, v) => s + v, 0));

  // dish types among the dishes they share (or among the dishes that use at least two)
  const typeSource = all.length ? all : several.map((s) => s.dish);
  const types = new Map();
  for (const d of typeSource) types.set(d.type, (types.get(d.type) || 0) + 1);

  // bridges: other ingredients that meet several of the chosen ones
  const chosen = new Set(names);
  const bridges = [];
  for (const [name, set] of dishSets) {
    if (chosen.has(name)) continue;
    const links = sets.map((s) => inter(s, set));
    const connected = links.filter((n) => n > 0).length;
    if (connected >= Math.min(2, names.length)) {
      const weight = links.reduce((s, v) => s + v, 0);
      // specificity: how much of this ingredient's own dishes involve the chosen ones. Onion or garlic
      // touch everything, so they score low; an ingredient found mostly alongside them scores high.
      bridges.push({ name, links, connected, weight, dishes: set.size, specificity: weight / (set.size * names.length) });
    }
  }
  bridges.sort((x, y) => y.connected - x.connected || y.specificity - x.specificity || y.weight - x.weight);

  return {
    names, total, counts: sets.map((s) => s.size), all, several, pairs,
    cuisines: cuisineList, cuisinesAll: cuisineList.filter((c) => c.useAll), types: [...types].sort((a, b) => b[1] - a[1]), bridges,
  };
}

// plain-language reading of a lift value
export function describeLift(lift, co) {
  if (!co) return 'never meet';
  if (lift >= 3) return 'a strong pairing';
  if (lift >= 1.5) return 'a natural pairing';
  if (lift >= 0.85) return 'about as often as chance';
  return 'less often than chance';
}
