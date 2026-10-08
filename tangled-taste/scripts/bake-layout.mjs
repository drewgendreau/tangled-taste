// Runs the force-directed layout once and stores the result, so browsers
// don't have to simulate it on every page load.
import fs from 'node:fs';
import { buildGraph, buildDishGraph } from '../src/graph.js';

const t = performance.now();
const { nodes } = buildGraph();
const positions = Object.fromEntries(nodes.map((n) => [n.name, n.pos.map((v) => Math.round(v * 10) / 10)]));
const file = new URL('../src/data/layout.generated.json', import.meta.url);
fs.writeFileSync(file, JSON.stringify(positions));
console.log(`baked layout for ${nodes.length} ingredients in ${Math.round(performance.now() - t)} ms`);

const t2 = performance.now();
const dishes = buildDishGraph();
fs.writeFileSync(new URL('../src/data/layout.dishes.generated.json', import.meta.url), JSON.stringify(Object.fromEntries(dishes.nodes.map((n) => [n.id, n.pos.map((v) => Math.round(v * 10) / 10)]))));
console.log(`baked layout for ${dishes.nodes.length} dishes (${dishes.edges.length} links) in ${Math.round(performance.now() - t2)} ms`);
