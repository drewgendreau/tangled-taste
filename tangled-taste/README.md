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
- **Ingredients / Dishes switch** (top right): *Dishes* redraws the map with one blob per dish, coloured by cuisine and linked when two dishes share at least 2 ingredients, not counting the 11 most common ones (onion, garlic, eggs and so on, which nearly every dish has); a dish that would otherwise float alone is linked to the dishes it shares its rarest ingredient with. Thicker, darker lines mean more shared ingredients. Everything else works on dishes too: click a dish to see its closest relatives, click an ingredient in the panel to light up every dish that uses it. *Reset view* switches back to Ingredients.
- **Click an ingredient**: read a short description, see its companions, the cuisines that use it and its dishes. Cuisines that use it light up on the globe and all the others fade.
- **Click a dish**: its ingredients light up as a linked constellation; the panel shows popularity and kindred dishes. The panel links to a Google search for the dish's recipe.
- **Ctrl/⌘-click several ingredients** (or turn on *Add ingredients* in the panel on touch screens) to see what drives their overlap: shared dishes, shared cuisines, pair-by-pair lift and the ingredients that bridge them.
- **Cuisines** are named on the globe; a small watercolor map of the country (all one size) appears above the name only while the cuisine is highlighted: when you open it, compare it, pick one of its dishes or select an ingredient it uses. They also mark the cuisine in the *Cuisines of the world* legend, in search and in the compare picker. Click one to open the cuisine or region view. The Show Illustrations setting turns them back into plain dots along with the food paintings.
- **Dish-type chips** under the search bar (soups, desserts, drinks…) filter the whole atlas.
- **Compare cuisines** (bottom pane, closed until you open it): pick up to three cuisines and their ingredients light up in three colors, with all other ingredients and background lines hidden. Shared ingredients get a ring split into one arc per cuisine, and pairings shared by two or more cuisines are drawn as thick striped lines (one stripe color per cuisine) on a pale outline. The side panel scores every pair out of 100, shows a Venn diagram, shared pairings and each cuisine's closest relatives. Opening the pane switches the food illustrations off (plain dots are easier to read) and *Size by commonality* on (so everyday ingredients stand out); change either in Settings if you like, and closing the pane restores your previous settings. To keep the map readable you can *spotlight* one cuisine (click its name), show *only what they share*, choose *Few / Some / Many* connections, and hide lines to everyday ingredients (onion, garlic, sugar…), which connect to everything.
- **Settings** (top right, left of *Reset view*) opens a small pane, closed with *Done*, the × or Esc:
  - *Show Cuisines on Graph* (on by default); off, cuisine names and country paintings are never drawn on the map.
  - *Show Relationship Strength* (off by default) works in both Ingredient Mode and Dish Mode. Off: every link is a thin line. On: links fall into five classes from weak to strong (more dishes shared by two ingredients, or more ingredients shared by two dishes), each class thicker, darker and more opaque than the last, with the strongest drawn on top; a small key at the bottom of the map shows the scale. When something is selected, the scale is relative to the links shown, so the strongest of them is always the thickest.
  - *Globe Line Intensity* (Full Earth / High / Medium / Low / Off, Low by default) sets the lines around the map. High and Medium make the latitude and longitude lines darker and more defined; *Full Earth* adds see-through grey continents and country borders (Natural Earth, public domain; `scripts/build-world-map.mjs`) behind the dishes and ingredients; Off draws nothing.
  - *Show Illustrations* swaps the food paintings for much smaller plain watercolor dots.
  - *Size by commonality*, when off, draws every ingredient and label at one medium-small size.
  - *Density* (High → Medium → Low → Minimal) thins out the background map: lower settings keep only the most common ingredients and the strongest connections. Anything you select or focus on stays visible at every density.
  - *Hide Common Ingredients* (Show all / Hide some / Hide most) removes the most-used ingredients from the map entirely. What counts as common is worked out from the data: *Hide some* drops the top 5% of ingredients by number of dishes and *Hide most* the top 20% (currently 11 and 45), so it adapts as dishes are added. An ingredient you pick on purpose, by search or from a panel, still appears.
  Settings apply immediately and are remembered between visits.
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
- `src/similarity.js` scores how alike two cuisines are: 50% flavor profile (IDF-weighted cosine of ingredient frequencies), 25% shared ingredients and 25% shared pairings (Jaccard overlaps).
- `src/graph.js` builds the co-occurrence graph and the 3D layout. Each ingredient is pulled toward the globe position of its cuisines, so staples sit at the center and regional ingredients drift outward.
- `src/illustrations.js` paints every ingredient illustration in code, in a watercolor style: layered washes, soft form shading, pigment pooling at the edges, granulation, crisp highlights and loose ink liners. To see them all on one page, open `/gallery.html` (add `?cat=herb`, `?names=beet,okra` and so on to filter).
- `scripts/build-country-shapes.mjs` turns Natural Earth country outlines into the small shapes in `src/data/countryShapes.js` (mainland France, the contiguous US, and the Hawaiian islands for Hawaiian, for example). Run it with the path to `ne_50m_admin_0_countries.geojson` when you add a cuisine; `pnpm validate` fails if a cuisine has no outline. Country outlines: [Natural Earth](https://www.naturalearthdata.com), public domain.
- `src/watercolor.js` paints the paper texture, the background washes and the cuisine map pins.
- `src/main.js` handles the scene, labels with collision avoidance, the views, the filters, the search and the panel.

## Performance

- **Draws only when something changes.** The scene is redrawn while the camera, a fade or the hover highlight is moving, and otherwise left alone, so a still page uses almost no CPU or GPU. The slow idle rotation on the home view renders at about 30 fps.
- **Adapts to the device.** If frames arrive too slowly the canvas drops to a lower resolution (down to 1×) and recovers when there is headroom. Anti-aliasing is skipped on high-density screens, where it isn't needed.
- **Fast first screen.** The 226 food paintings and 65 country paintings are made in ~8 ms slices after the first frame (most common first; anything on screen is painted immediately). Small icons are drawn straight into canvases and the cuisine legend is only built when opened. The paper texture and colour washes are drawn without reading pixels back, which is slow on many GPUs.
- **Less work per frame.** Label layout is cached, DOM styles are only written when a value changes, hover picking runs at most once per frame, and the panels use solid translucent backgrounds rather than a live backdrop blur over the moving map.
- **Delivery.** three.js is a separate cached chunk; fonts load without blocking the first paint.
- **Measure it.** Add `?perf` to the address for a live readout of fps, pixel ratio and where each frame's time goes.

## About window

The text in the *About* window is the file `content/about.md`. Edit it on GitHub (the pencil icon on the file page) and commit; the site rebuilds and updates in a minute or two, with no code changes. The first line is the title (`# About Tangled Taste`); after that, paragraphs are separated by a blank line, and `[link text](https://example.com)` makes a link.

## Dish pictures

The most popular dishes have pictures (50 so far). They show on the map in *Dishes* mode, as small icons in dish lists, and as a large preview at the top of a dish's panel. Dishes without a picture show a plain colored blob and no preview.

- **Source files:** `art/dishes/TT-0001.webp` and so on. The file name is the dish's permanent ID (see `src/data/dish-ids.js`); the picture should be square (1024 x 1024 is ideal), with the dish centered on a plain white background and a margin around it.
- **To change a picture:** replace its file (same name). **To add one:** drop in `TT-xxxx.webp` (webp, png or jpg). That is all: no code changes.
- **What happens next:** `scripts/build-dish-art.mjs` runs automatically before `pnpm dev` and `pnpm build` (or run `pnpm art:build`). It removes the white background (keeping a soft shadow), centers the dish on a square with even margins so every dish has the same visual weight, and writes the 1024 px previews and the 192 px thumbnail sheets to `public/dish-art/` (generated, not committed). Unchanged pictures are skipped, so repeat runs are fast.
- The build prints notes for pictures that need attention (not square, too small, dish touching the edge) and fails for a file whose ID matches no dish.
