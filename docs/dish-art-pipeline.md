# Dish art pipeline: from painted-in-code to pre-rendered image files

Prompt / work order for the next stage of Tangled Taste. Read it top to bottom; every number below is a target to hit or a limit not to exceed.

## 1. Goal

Today every dish painting is drawn in the browser by code (`src/dishes-art.js` templates + `src/data/dish-art.js` parameters). That is fine for 50 dishes but will not scale to all 538 (and growing): painting costs CPU at startup, and one texture per dish costs a lot of video memory.

Build a **build-time rendering pipeline** that turns the code painters into compact image files, and make the app load those files instead of painting. **The code painters stay the source of truth**; the image files are generated, reproducible output.

## 2. Non-goals

- Do not redraw or restyle any painting. The pipeline must reproduce today's art pixel-for-pixel (same seeds, same grid).
- Do not change ingredient art in this stage (see section 9 for the follow-up).
- Do not change the IDs, names, or data format of dishes.

## 3. Inputs

- Dish list: `src/data.js` (each dish has a permanent `uid` such as TT-0001; see `src/data/dish-ids.js`).
- Recipes: `src/data/dish-art.js` (template name + parameters per dish name).
- Painters: `src/dishes-art.js` (`paintDish(name, px)`), built on `src/illustrations.js` (`paintOnCanvas`).
- A dish is illustrated if it has an entry in `DISH_ART`. Dishes without one keep the cuisine-coloured blob and show no preview.

**Required change to the painters:** seed the random generator with the dish **uid**, not the name (`dish:${uid}`), so renaming a dish never changes its painting. Re-render once after this change and treat the result as the baseline.

## 4. Outputs

All generated files go in `public/dish-art/` and are committed (reviewable, no rendering needed in CI).

| Output | Spec |
|---|---|
| **Thumbnail sheets** `thumbs-<n>.<hash>.webp` | 2048 x 2048 px, WebP lossy quality 85, **with alpha** (transparent background, keep the soft paper underlay). Cells are **192 x 192 px** painted at 192, with a **2 px extruded gutter** on every side (stride 196 px) so texture filtering never bleeds neighbours. 10 columns x 10 rows = **100 dishes per sheet**. Dishes are ordered by popularity (ties by uid), so sheet 0 holds the 100 most popular. Target size: **at most 1.2 MB per sheet**. |
| **Previews** `previews/<uid>.<hash>.webp` | **1024 x 1024 px**, WebP lossy quality 88, with alpha. Target: **150 to 300 KB each, hard limit 400 KB**. Painted directly at 1024 (never upscaled from a thumbnail). |
| **Manifest** `manifest.json` | Small JSON (under 30 KB for 538 dishes), schema in section 5. |

Why these sizes: the panel shows the preview at about 300 to 350 CSS px, so 1024 px stays sharp up to roughly 3x display density. Map thumbnails are normally 20 to 60 CSS px on screen; 192 px keeps them sharp when zoomed in on a 2x screen without costing much memory.

`<hash>` is the first 8 hex characters of a content hash, so files can be cached forever and old ones are never served stale.

## 5. Manifest schema

```json
{
  "version": 1,
  "painterVersion": "<hash of src/dishes-art.js + src/illustrations.js + src/data/dish-art.js>",
  "thumbs": {
    "cell": 192, "gutter": 2, "sheetSize": 2048, "columns": 10,
    "sheets": [{ "file": "thumbs-0.ab12cd34.webp", "items": { "TT-0001": [0, 0], "TT-0002": [1, 0] } }]
  },
  "previews": { "TT-0001": "previews/TT-0001.9f8e7d6c.webp" }
}
```

`items` values are [column, row]. A dish missing from the manifest has no art.

## 6. Build step

1. **`pnpm art:build`**: renders everything that changed. Use headless Chromium (Playwright), because the painters use Canvas 2D features (`ctx.filter` blur, Path2D) that node-canvas lacks. Load a tiny page that imports `paintDish`, renders each dish at 192 and 1024 px, returns PNG data; encode and pack with `sharp`.
2. **Incremental:** hash each dish's (template, parameters, painterVersion, size). Re-render only dishes whose hash changed; reuse existing files otherwise. Re-packing sheets is cheap.
3. **Deterministic:** two runs on the same inputs must produce byte-identical files (fixed seeds, fixed encoder settings, stable ordering).
4. **`pnpm art:check`**: fails if the manifest is out of date with the painters or `DISH_ART`. Run it in CI next to `pnpm validate`. Do not render in CI.
5. Add a size report: per sheet and per preview, flag anything over budget.

## 7. App changes

- Load `manifest.json` after first paint (not before). Then fetch **sheet 0** first, other sheets only when needed.
- **Map thumbnails:** one texture per sheet, shared. Give each dish sprite its own `Texture` clone that shares the sheet image and sets `offset`/`repeat` to its cell (inset by the gutter). Never create one GPU texture per dish.
- Load a later sheet only when a dish from it becomes visible (Density level, selection, highlight) and show the blob until it arrives, as today.
- **Preview slot:** replace painting at runtime with `<img>` of the preview file (`loading="lazy"` off, `decoding="async"`, explicit width/height so the panel doesn't jump). Keep the fade-in. Preload the previews of the selected dish's top neighbours when idle.
- **List icons:** draw from the sheet (CSS background or canvas), not from separate files.
- **Fallback:** if the manifest or a file fails to load, fall back to the existing code painter for that dish. The code path must keep working.
- Ingredient art keeps painting in code for now.

## 8. Acceptance criteria

Measure before and after on the same machine (Chrome, throttled 4x CPU, Fast 4G) and report both:

| Metric | Target |
|---|---|
| First view usable (existing perf marks) | no slower than today (about 0.6 s) |
| Total bytes to first interaction | at most +1.5 MB |
| Dishes mode, all 538 dishes at Density High | no long task over 50 ms while art loads |
| Opening a dish with art | preview visible within 300 ms on a warm cache, within 1 s cold |
| Video memory with art for 538 dishes | at most 60 MB for thumbnails (load sheets on demand; do not hold all six at once on small screens) |
| Visual diff vs today's code paintings | none visible at 1x and 2x zoom |
| Idle (nothing moving) | still zero frames drawn |

Also: dishes without art behave exactly as today; `pnpm validate`, `pnpm build` and `pnpm art:check` pass; the site works from the GitHub Pages sub-path (relative URLs only).

## 9. Later stages (do not start now)

1. Same pipeline for the 226 ingredients: 192 px sheets (3 sheets, about 3 to 4 MB total) and no previews.
2. Optional: GPU-compressed textures (KTX2/Basis) for thumbnails, which cut video memory 4 to 8x; only if memory is still tight on phones.
3. Optional: a 1536 px tier for a full-screen view of a dish.
4. Paint the next 50 dishes by adding lines to `DISH_ART`; the pipeline picks them up automatically.

## 10. The first 50 dishes

All 50 use the sizes above: **thumbnail 192 x 192 px** in the cell shown, **preview 1024 x 1024 px**. Order is by popularity (ties by list order), which is also the order of the cells.

| # | ID | Dish | Cuisine | Template | Thumbnail cell | Preview file |
|---|---|---|---|---|---|---|
| 1 | TT-0001 | Margherita Pizza | Italian | pizza | sheet 0, col 0, row 0 | previews/TT-0001.[hash].webp |
| 2 | TT-0002 | Sushi | Japanese | rolls | sheet 0, col 1, row 0 | previews/TT-0002.[hash].webp |
| 3 | TT-0003 | Hamburger | American | burger | sheet 0, col 2, row 0 | previews/TT-0003.[hash].webp |
| 4 | TT-0004 | Spaghetti Carbonara | Italian | pastaPlate | sheet 0, col 3, row 0 | previews/TT-0004.[hash].webp |
| 5 | TT-0005 | Ramen | Japanese | soupBowl | sheet 0, col 4, row 0 | previews/TT-0005.[hash].webp |
| 6 | TT-0006 | Pad Thai | Thai | pastaPlate | sheet 0, col 5, row 0 | previews/TT-0006.[hash].webp |
| 7 | TT-0007 | Lasagna | Italian | layerSlice | sheet 0, col 6, row 0 | previews/TT-0007.[hash].webp |
| 8 | TT-0008 | Croissant | French | croissant | sheet 0, col 7, row 0 | previews/TT-0008.[hash].webp |
| 9 | TT-0009 | Butter Chicken | Indian | stewBowl | sheet 0, col 8, row 0 | previews/TT-0009.[hash].webp |
| 10 | TT-0010 | Tiramisu | Italian | layerSlice | sheet 0, col 9, row 0 | previews/TT-0010.[hash].webp |
| 11 | TT-0011 | Tacos al Pastor | Mexican | taco | sheet 0, col 0, row 1 | previews/TT-0011.[hash].webp |
| 12 | TT-0012 | Jiaozi Dumplings | Chinese | dumplings | sheet 0, col 1, row 1 | previews/TT-0012.[hash].webp |
| 13 | TT-0013 | Pho | Vietnamese | soupBowl | sheet 0, col 2, row 1 | previews/TT-0013.[hash].webp |
| 14 | TT-0014 | Biryani | Indian | riceBowl | sheet 0, col 3, row 1 | previews/TT-0014.[hash].webp |
| 15 | TT-0015 | Hummus | Levantine | dipBowl | sheet 0, col 4, row 1 | previews/TT-0015.[hash].webp |
| 16 | TT-0016 | Fried Chicken | American | drumsticks | sheet 0, col 5, row 1 | previews/TT-0016.[hash].webp |
| 17 | TT-0017 | Paella | Spanish | paella | sheet 0, col 6, row 1 | previews/TT-0017.[hash].webp |
| 18 | TT-0018 | Guacamole | Mexican | dipBowl | sheet 0, col 7, row 1 | previews/TT-0018.[hash].webp |
| 19 | TT-0019 | Fried Rice | Chinese | riceBowl | sheet 0, col 8, row 1 | previews/TT-0019.[hash].webp |
| 20 | TT-0020 | Shawarma | Levantine | wrap | sheet 0, col 9, row 1 | previews/TT-0020.[hash].webp |
| 21 | TT-0021 | Pastel de Nata | Portuguese | tartlets | sheet 0, col 0, row 2 | previews/TT-0021.[hash].webp |
| 22 | TT-0022 | Pancakes | American | pancakes | sheet 0, col 1, row 2 | previews/TT-0022.[hash].webp |
| 23 | TT-0023 | Crêpes | French | crepes | sheet 0, col 2, row 2 | previews/TT-0023.[hash].webp |
| 24 | TT-0024 | Fish and Chips | British | fishChips | sheet 0, col 3, row 2 | previews/TT-0024.[hash].webp |
| 25 | TT-0025 | Samosa | Indian | dumplings | sheet 0, col 4, row 2 | previews/TT-0025.[hash].webp |
| 26 | TT-0026 | Falafel | Levantine | falafel | sheet 0, col 5, row 2 | previews/TT-0026.[hash].webp |
| 27 | TT-0027 | Crème Brûlée | French | ramekin | sheet 0, col 6, row 2 | previews/TT-0027.[hash].webp |
| 28 | TT-0028 | Belgian Waffles | Belgian | waffle | sheet 0, col 7, row 2 | previews/TT-0028.[hash].webp |
| 29 | TT-0029 | Mac and Cheese | American | mixBowl | sheet 0, col 8, row 2 | previews/TT-0029.[hash].webp |
| 30 | TT-0030 | Jerk Chicken | Jamaican | drumsticks | sheet 0, col 9, row 2 | previews/TT-0030.[hash].webp |
| 31 | TT-0031 | Kung Pao Chicken | Chinese | stewBowl | sheet 0, col 0, row 3 | previews/TT-0031.[hash].webp |
| 32 | TT-0032 | Green Curry | Thai | stewBowl | sheet 0, col 1, row 3 | previews/TT-0032.[hash].webp |
| 33 | TT-0033 | Bánh Mì | Vietnamese | baguette | sheet 0, col 2, row 3 | previews/TT-0033.[hash].webp |
| 34 | TT-0034 | Masala Chai | Indian | cup | sheet 0, col 3, row 3 | previews/TT-0034.[hash].webp |
| 35 | TT-0035 | Nasi Goreng | Indonesian | riceBowl | sheet 0, col 4, row 3 | previews/TT-0035.[hash].webp |
| 36 | TT-0036 | Pesto Genovese | Italian | pastaPlate | sheet 0, col 5, row 3 | previews/TT-0036.[hash].webp |
| 37 | TT-0037 | Ceviche | Peruvian | mixBowl | sheet 0, col 6, row 3 | previews/TT-0037.[hash].webp |
| 38 | TT-0038 | Empanadas | Argentine | dumplings | sheet 0, col 7, row 3 | previews/TT-0038.[hash].webp |
| 39 | TT-0039 | Bibimbap | Korean | bibimbap | sheet 0, col 8, row 3 | previews/TT-0039.[hash].webp |
| 40 | TT-0040 | Rendang | Indonesian | stewBowl | sheet 0, col 9, row 3 | previews/TT-0040.[hash].webp |
| 41 | TT-0041 | Laksa | Malaysian | soupBowl | sheet 0, col 0, row 4 | previews/TT-0041.[hash].webp |
| 42 | TT-0042 | Shakshuka | Levantine | skillet | sheet 0, col 1, row 4 | previews/TT-0042.[hash].webp |
| 43 | TT-0043 | Jollof Rice | West African | riceBowl | sheet 0, col 2, row 4 | previews/TT-0043.[hash].webp |
| 44 | TT-0044 | Wiener Schnitzel | German | cutlet | sheet 0, col 3, row 4 | previews/TT-0044.[hash].webp |
| 45 | TT-0045 | Apple Pie | American | pie | sheet 0, col 4, row 4 | previews/TT-0045.[hash].webp |
| 46 | TT-0046 | Poutine | Canadian | poutine | sheet 0, col 5, row 4 | previews/TT-0046.[hash].webp |
| 47 | TT-0047 | Kimchi | Korean | mixBowl | sheet 0, col 6, row 4 | previews/TT-0047.[hash].webp |
| 48 | TT-0048 | Massaman Curry | Thai | stewBowl | sheet 0, col 7, row 4 | previews/TT-0048.[hash].webp |
| 49 | TT-0049 | Satay | Indonesian | skewers | sheet 0, col 8, row 4 | previews/TT-0049.[hash].webp |
| 50 | TT-0050 | Nasi Lemak | Malaysian | platedRice | sheet 0, col 9, row 4 | previews/TT-0050.[hash].webp |

Expected output for this set: **1 thumbnail sheet** (50 of 100 cells used, about 0.6 MB), **50 previews** (about 7 to 15 MB in total, loaded one at a time), **1 manifest**.
