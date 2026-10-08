# Tangled Taste

A three.js network of cooking ingredients, painted in a loose watercolor style.
Two ingredients are linked when they appear in the same dish.

```bash
pnpm install
pnpm dev      # http://localhost:5173
pnpm build    # static site in dist/
```

## Navigating

- **Search bar** (press `/`): find ingredients, dishes, cuisines, countries, regions or ingredient families.
- **Click an ingredient**: see its companions, the cuisines that use it and its dishes.
- **Click a dish**: its ingredients light up as a linked constellation; the panel shows popularity and kindred dishes.
- **Cuisine names on the globe** and the *Cuisines of the world* legend open a cuisine or region view.
- **Drag / scroll** to orbit and zoom; **Esc** or the breadcrumbs step back.

## How it's built

- `src/data.js` holds the curated dataset: 155 dishes, 28 cuisines and 160 ingredients. Popularity scores are illustrative estimates, not measured data.
- `src/graph.js` builds the co-occurrence graph and a 3D force layout. Each ingredient is pulled toward the globe position of its cuisines, so staples sit at the center and regional ingredients drift outward.
- `src/illustrations.js` paints all 160 ingredient illustrations in code, in a watercolor style: layered washes, soft form shading, pigment pooling at the edges, granulation, crisp highlights and loose ink liners. To see them all on one page, open `/gallery.html` (add `?cat=herb`, `?cat=spice` and so on to filter).
- `src/watercolor.js` paints the paper texture, the background washes and the cuisine map pins.
- `src/main.js` handles the scene, labels with collision avoidance, the views, the search and the panel.
