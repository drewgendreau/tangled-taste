# Plan: use the supplied dish images on the site

Source: Google Drive, `04 Food / Tangled Taste` (50 files, `TT-0001.webp` to `TT-0050.webp`).
Imported into the repo at `tangled-taste/art/dishes/` (with `manifest.json`: dish name, size, SHA-256 per file). `art/` is not part of the site build, so nothing is deployed yet.

## 1. What the images are (checked)

- 50 files, one per dish, named by the permanent dish ID. All 50 match a dish in the data. IDs run TT-0001 to TT-0050 with none missing or extra.
- All are **1024 x 1024**, WebP, **no transparency** (opaque white background), 150 to 250 KB each (8.9 MB in total).
- I opened a contact sheet of all 50 plus two at full size. The set is consistent: a polished, hand-illustrated look, one dish per image, centered, three-quarter or top-down view, soft shadow on white.
- Things to handle:
  - **Not watercolor.** The style is richer and more photographic than the site's loose watercolor ingredients. See section 5.
  - **Backgrounds are not all pure white.** TT-0015 (hummus) and TT-0036 (pesto) have a light grey vignette; a few more have a faint cast shadow.
  - **Some dishes fill the frame.** TT-0042 (shakshuka, handle), TT-0043 (jollof) and a few others come close to the edges, so cropping or padding needs care.

## 2. What changes on the site

For these 50 dishes the supplied images **replace the code-painted illustrations everywhere** (map thumbnails in Dishes mode, the large preview in the dish panel, small icons in dish lists). The other 488 dishes keep a plain colored blob and no preview, as today.

| Place | Today | After |
|---|---|---|
| Map thumbnails (Dishes mode) | 256 px canvas painted in the browser | Cutout of the supplied image, 192 px, from a sprite sheet |
| Preview in dish panel | Canvas painted at 768/1024 px | The supplied image as a 1024 px cutout `<img>` |
| Dish list icons | Small canvas painted in the browser | The same thumbnail, drawn from the sprite sheet |
| Code | `src/dishes-art.js` (32 templates), `src/data/dish-art.js` | Removed after the switch (see section 4, step 8) |

## 3. Work, in order

1. **Cutouts.** Script `scripts/build-dish-art.mjs` (sharp). For each source image:
   - Find the background by flood-filling inward from the border (tolerance adapts to the local border color, so the grey vignettes work). Interior whites such as plates and rice stay untouched.
   - Convert the soft grey shadow near the border into a semi-transparent shadow, so it sits naturally on the cream page. Smooth the cutout edge by about 1.5 px.
   - Trim to the dish, then re-center on a square canvas with an 8% margin, so every dish has the same visual weight on the map.
   - Flag any image where the dish still touches the edge after trimming (expected: 0042, 0043) for manual review.
2. **Outputs** (as in `docs/dish-art-pipeline.md`): 192 px thumbnails packed into 2048 px sprite sheets; 1024 px previews as WebP with alpha, quality 85, target 150 to 300 KB, hard limit 400 KB; a manifest keyed by dish ID with content hashes in filenames. Output goes in `public/dish-art/`, committed.
3. **App code.** New small module `src/dish-images.js`: loads the manifest after first paint, then sheet 0; gives each dish a texture (shared sheet image, per-dish UV offset) or nothing; falls back to the cuisine blob if a file is missing. Everything is keyed by dish **ID**, not name.
4. **Preview slot.** Use an `<img>` with explicit width/height, async decoding and the existing fade-in. No placeholder for dishes without an image (already the case).
5. **Map size.** Photo-like illustrations read larger than watercolor blobs: retune the uniform and popularity sizes for dish sprites; keep labels clear of the image.
6. **List icons.** Draw from the sheet (no separate files).
7. **Verify** against the acceptance table in the pipeline document (startup time, bytes, video memory, no long frames, no visible diff), plus a visual pass over all 50 on the map at three zoom levels and in the preview on a 1x and a 2x screen.
8. **Retire the code painters.** After the visual pass, delete `src/dishes-art.js`, `src/data/dish-art.js`, the dish pieces in `illustrations.js`'s toolkit export, and the `gallery.html?dishes=1` mode. Keep `illustrations.js` for ingredients and cuisines. Update the README (dish illustration section, `pnpm art:build`). If anything fails in the visual pass, the fallback is one revert.

Effort: steps 1 to 2 are the main job (about half a day of work including tuning the cutouts); steps 3 to 6 are small; step 7 is an hour of checking.

## 4. Rollout

1. Land the build script and the generated `public/dish-art/` with the app still using the code paintings. Check the outputs in a throwaway page.
2. Switch the app to the images behind one constant. Compare side by side.
3. Deploy, check the live site, then remove the code painters (step 8) in a separate commit so it can be reverted alone.

## 5. Decisions needed from you

1. **Style.** The images are not watercolor, while the ingredients and countries are. Options: (a) accept the mix, with dishes as the "hero" art; (b) add a light watercolor/paper treatment in the build step (slight desaturation, paper texture overlay, softened edges) to bring them closer to the ingredients; (c) regenerate in a watercolor style. I recommend (a) or (b), and deciding before the next 488 dishes are made. Any wording that says "watercolor" for dishes should change if we choose (a).
2. **Rights and disclosure.** If the images are AI-generated, confirm you have the right to publish them and whether you want a credit or disclosure line on the site.
3. **Source of truth.** Keep `art/dishes/` (the 1024 px originals) as the permanent source, with Drive as a backup. Future images are added there with the same name pattern (`TT-xxxx.webp`) and `pnpm art:build` does the rest.

## 6. Brief for the next images (so they match)

Use this with the generator so new dishes need no per-image fixes:

- Square, **1024 x 1024**, WebP or PNG; file name = the dish ID (`TT-0051.webp`).
- Single dish, centered, three-quarter view from above, fills about 80% of the frame with at least 8% clear margin on every side (nothing touching an edge, including handles and utensils).
- **Pure white background (#FFFFFF)**, no gradient or vignette; a soft contact shadow directly beneath is fine, no scene or table.
- No text, logos, hands, or people. At most a few small ingredient props next to the dish.
- Same illustration style, lighting (soft top-left light) and color richness as the first 50.

## 7. Risks

- **Cutout quality** on glass, steam, and fine herbs: mitigate with the manual review list and a per-image override file.
- **Video memory** if all 538 dishes get images: load sprite sheets on demand and only for visible dishes (covered in the pipeline document).
- **Download size** grows with the previews (about 8 MB for 50): they load one at a time, only when a dish is opened.
