// The dish pictures (art/dishes/*.webp -> public/dish-art, made by scripts/build-dish-art.mjs).
// The manifest says which dishes have a picture and where it is; everything is keyed by the permanent dish ID.
import * as THREE from 'three';

const BASE = import.meta.env.BASE_URL || './';
let manifest = null;
const sheets = []; // { image, base: THREE.Texture, def }
const textures = new Map();
const listeners = [];

export const onDishArt = (fn) => listeners.push(fn);
export const dishArtReady = () => !!manifest;
export const hasDishImage = (uid) => !!manifest?.previews[uid];
export const dishPreviewUrl = (uid) => (manifest?.previews[uid] ? `${BASE}dish-art/${manifest.previews[uid]}` : null);

function locate(uid) {
  if (!manifest) return null;
  for (let i = 0; i < manifest.thumbs.sheets.length; i++) {
    const cell = manifest.thumbs.sheets[i].items[uid];
    if (cell) return { sheet: i, col: cell[0], row: cell[1] };
  }
  return null;
}

// A texture showing one dish's cell of a shared sheet (all dishes of a sheet share one image and one GPU upload).
export function dishThumbTexture(uid) {
  if (textures.has(uid)) return textures.get(uid);
  const at = locate(uid);
  const sheet = at && sheets[at.sheet];
  if (!sheet) return null;
  const { cell, gutter, stride } = manifest.thumbs;
  const { width: W, height: H } = sheet.def;
  const t = sheet.base.clone();
  t.repeat.set(cell / W, cell / H);
  t.offset.set((at.col * stride + gutter) / W, 1 - (at.row * stride + gutter + cell) / H);
  t.needsUpdate = true;
  textures.set(uid, t);
  return t;
}

// A small <i> that shows the dish's cell as a CSS background (for lists).
export function dishThumbHTML(uid, px = 28) {
  const at = locate(uid);
  if (!at) return '';
  const def = manifest.thumbs.sheets[at.sheet];
  const { cell, gutter, stride } = manifest.thumbs;
  const k = px / cell;
  const url = `${BASE}dish-art/${def.file}`;
  return `<i class="dish-thumb" style="width:${px}px;height:${px}px;background-image:url(${url});background-size:${(def.width * k).toFixed(2)}px ${(def.height * k).toFixed(2)}px;background-position:${(-(at.col * stride + gutter) * k).toFixed(2)}px ${(-(at.row * stride + gutter) * k).toFixed(2)}px"></i>`;
}

// Fetch the manifest, then the thumbnail sheets (most popular dishes first). Safe to call more than once.
let started = null;
export function loadDishArt() {
  if (started) return started;
  started = (async () => {
    try {
      const res = await fetch(`${BASE}dish-art/manifest.json`);
      if (!res.ok) return;
      manifest = await res.json();
      listeners.forEach((fn) => fn());
      for (let i = 0; i < manifest.thumbs.sheets.length; i++) {
        const def = manifest.thumbs.sheets[i];
        const image = await new Promise((resolve, reject) => {
          const img = new Image();
          img.onload = () => resolve(img);
          img.onerror = reject;
          img.src = `${BASE}dish-art/${def.file}`;
        });
        const base = new THREE.Texture(image);
        base.colorSpace = THREE.SRGBColorSpace;
        base.anisotropy = 1;
        base.generateMipmaps = true;
        base.minFilter = THREE.LinearMipmapLinearFilter;
        base.needsUpdate = true;
        sheets[i] = { image, base, def };
        listeners.forEach((fn) => fn());
      }
    } catch (err) {
      console.warn('dish pictures unavailable', err);
    }
  })();
  return started;
}
