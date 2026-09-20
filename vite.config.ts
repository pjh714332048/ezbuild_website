import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      api: path.resolve(import.meta.dirname, 'src/api'),
      components: path.resolve(import.meta.dirname, 'src/components'),
      models: path.resolve(import.meta.dirname, 'src/models'),
      store: path.resolve(import.meta.dirname, 'src/store'),
    },
  },
});
