# Tangled Taste

A three.js network of cooking ingredients, painted in a loose watercolor style.
Two ingredients are linked when they appear in the same dish.

```bash
pnpm install
pnpm dev        # http://localhost:5173 (bakes the layout first)
pnpm build      # static site in dist/
pnpm validate   # sanity-check the dataset (run in CI before every deploy)
```

## Navigating

- **Search bar** (press `/`): find ingredients, dishes, cuisines, countries, regions or ingredient families.
- **Click an ingredient**: see its companions, the cuisines that use it and its dishes.
- **Click a dish**: its ingredients light up as a linked constellation; the panel shows popularity and kindred dishes.
- **Cuisine names on the globe** and the *Cuisines of the world* legend open a cuisine or region view.
- **Dish-type chips** under the search bar (soups, desserts, drinks…) filter the whole atlas. Tick *Select several to compare* in the legend to pick multiple cuisines, and the panel shows the ingredients they share.
- **Drag / scroll** to orbit and zoom; **Esc** or the breadcrumbs step back.
- **Reset view** (top right, or the Home key) clears the search and filters and returns to the full atlas.

## How it's built

- `src/data/` holds the curated dataset, one small file per concern:
  - `dishes/*.js` — dishes by world region, each `[name, cuisine, popularity, ingredients, note, type]`
  - `cuisines.js`, `ingredients.js`, `categories.js`, `dish-types.js`
  - Popularity scores are illustrative estimates, not measured data.
- `src/data.js` aggregates the dataset for the app.
- `scripts/validate.mjs` fails on unknown or near-duplicate ingredients, missing illustrations, duplicate dishes, any cuisine with fewer than 6 dishes and any ingredient used by fewer than 2 dishes. Ingredients used by only two dishes are reported as soft goals (`--strict` makes them fail too).
- `scripts/format-data.mjs` regroups the dish files by cuisine after you append new dishes (`pnpm format:data`).
- `scripts/bake-layout.mjs` runs the force-directed layout once at build time so the page doesn't have to simulate it on load.
- `src/graph.js` builds the co-occurrence graph and the 3D layout. Each ingredient is pulled toward the globe position of its cuisines, so staples sit at the center and regional ingredients drift outward.
- `src/illustrations.js` paints every ingredient illustration in code, in a watercolor style: layered washes, soft form shading, pigment pooling at the edges, granulation, crisp highlights and loose ink liners. To see them all on one page, open `/gallery.html` (add `?cat=herb`, `?names=beet,okra` and so on to filter).
- `src/watercolor.js` paints the paper texture, the background washes and the cuisine map pins.
- `src/main.js` handles the scene, labels with collision avoidance, the views, the filters, the search and the panel.
