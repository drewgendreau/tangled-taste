import { defineConfig } from 'vite';
import { resolve } from 'node:path';

// Relative base so the build works under a GitHub Pages project subpath.
export default defineConfig({
  base: './',
  build: {
    target: 'es2022',
    chunkSizeWarningLimit: 700,
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, 'index.html'),
        gallery: resolve(import.meta.dirname, 'gallery.html'),
      },
      output: {
        // three.js changes rarely: its own chunk stays cached across app updates
        manualChunks(id) {
          if (id.includes('node_modules/three')) return 'three';
        },
      },
    },
  },
});
