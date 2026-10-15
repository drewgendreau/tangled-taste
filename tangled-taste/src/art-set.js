// A set of generated pictures (dishes or ingredients) built by scripts/build-dish-art.mjs into public/<dir>/.
// The manifest says which ids have a picture and where it is; thumbnails live in shared sheets so that many
// pictures cost one image download and one GPU upload.
import * as THREE from 'three';

const BASE = import.meta.env.BASE_URL || './';

// One shared tally of picture downloads, drawn as a thin bar at the top of the page (#load-bar). It never blocks
// the page: the map is usable at once and the bar only shows that pictures are still arriving.
const tally = { pending: 0, loaded: 0, total: 0, shown: false };
function drawBar() {
  const bar = document.getElementById('load-bar');
  if (!bar) return;
  const done = tally.pending === 0;
  const frac = tally.total > 0 ? tally.loaded / tally.total : 0.05;
  bar.style.transform = `scaleX(${done ? 1 : Math.max(0.05, Math.min(0.97, frac))})`;
  if (!done && !tally.shown) { tally.shown = true; bar.classList.add('on'); }
  if (done && tally.shown) { tally.shown = false; setTimeout(() => bar.classList.remove('on'), 250); }
}
// download one image with byte progress (falls back to a plain Image when the size is unknown)
async function fetchImage(url) {
  const res = await fetch(url);
  if (!res.ok || !res.body) throw new Error(`${url}: ${res.status}`);
  const len = Number(res.headers.get('content-length')) || 0;
  tally.total += len;
  const reader = res.body.getReader();
  const chunks = [];
  let got = 0;
  for (;;) {
    const { done, value } = await reader.read();
    if (done) break;
    chunks.push(value);
    got += value.length;
    tally.loaded += value.length;
    drawBar();
  }
  if (!len) { tally.total += got; tally.loaded = Math.min(tally.loaded, tally.total); }
  const objectUrl = URL.createObjectURL(new Blob(chunks, { type: res.headers.get('content-type') || 'image/webp' }));
  try {
    return await new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.onerror = reject;
      img.src = objectUrl;
    });
  } finally {
    setTimeout(() => URL.revokeObjectURL(objectUrl), 0);
  }
}

export function makeArtSet(dir) {
  let manifest = null;
  const sheets = []; // { image, base: THREE.Texture, def }
  const textures = new Map();
  const canvases = new Map();
  const listeners = [];
  const root = `${BASE}${dir}/`;

  function locate(id) {
    if (!manifest) return null;
    for (let i = 0; i < manifest.thumbs.sheets.length; i++) {
      const cell = manifest.thumbs.sheets[i].items[id];
      if (cell) return { sheet: i, col: cell[0], row: cell[1] };
    }
    return null;
  }

  const set = {
    onUpdate: (fn) => listeners.push(fn),
    ready: () => !!manifest,
    has: (id) => !!manifest?.previews[id],
    previewUrl: (id) => (typeof manifest?.previews[id] === 'string' ? `${root}${manifest.previews[id]}` : null),
    // a texture showing one cell of a shared sheet (all pictures of a sheet share one image and one GPU upload)
    thumbTexture(id) {
      if (textures.has(id)) return textures.get(id);
      const at = locate(id);
      const sheet = at && sheets[at.sheet];
      if (!sheet) return null;
      const { cell, gutter, stride } = manifest.thumbs;
      const { width: W, height: H } = sheet.def;
      const t = sheet.base.clone();
      t.repeat.set(cell / W, cell / H);
      t.offset.set((at.col * stride + gutter) / W, 1 - (at.row * stride + gutter + cell) / H);
      t.needsUpdate = true;
      textures.set(id, t);
      return t;
    },
    // the thumbnail drawn on its own small canvas (for icons that are drawn with drawImage)
    thumbCanvas(id) {
      if (canvases.has(id)) return canvases.get(id);
      const at = locate(id);
      const sheet = at && sheets[at.sheet];
      if (!sheet) return null;
      const { cell, gutter, stride } = manifest.thumbs;
      const c = document.createElement('canvas');
      c.width = c.height = cell;
      c.getContext('2d').drawImage(sheet.image, at.col * stride + gutter, at.row * stride + gutter, cell, cell, 0, 0, cell, cell);
      canvases.set(id, c);
      return c;
    },
    // a small <i> showing the cell as a CSS background (for lists)
    thumbHTML(id, px = 28) {
      const at = locate(id);
      if (!at) return '';
      const def = manifest.thumbs.sheets[at.sheet];
      const { cell, gutter, stride } = manifest.thumbs;
      const k = px / cell;
      return `<i class="dish-thumb" style="width:${px}px;height:${px}px;background-image:url(${root}${def.file});background-size:${(def.width * k).toFixed(2)}px ${(def.height * k).toFixed(2)}px;background-position:${(-(at.col * stride + gutter) * k).toFixed(2)}px ${(-(at.row * stride + gutter) * k).toFixed(2)}px"></i>`;
    },
  };

  // Fetch the manifest, then the thumbnail sheets (most popular first). Safe to call more than once.
  let started = null;
  set.load = () => {
    if (started) return started;
    tally.pending++;
    drawBar();
    started = (async () => {
      try {
        const res = await fetch(`${root}manifest.json`, { cache: 'no-cache' });
        if (!res.ok) return;
        manifest = await res.json();
        listeners.forEach((fn) => fn());
        for (let i = 0; i < manifest.thumbs.sheets.length; i++) {
          const def = manifest.thumbs.sheets[i];
          const image = await fetchImage(`${root}${def.file}`);
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
        console.warn(`${dir} unavailable`, err);
      } finally {
        tally.pending--;
        drawBar();
      }
    })();
    return started;
  };
  return set;
}
