import { defineConfig } from 'vite';
import { resolve } from 'node:path';

// Relative base so the build works under a GitHub Pages project subpath.
export default defineConfig({
  base: './',
  build: {
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, 'index.html'),
        gallery: resolve(import.meta.dirname, 'gallery.html'),
      },
    },
  },
});
