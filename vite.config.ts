import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

import eslintPlugin from './scripts/vite-eslint-plugin.ts';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), eslintPlugin()],
  resolve: {
    alias: {
      api: path.resolve(import.meta.dirname, 'src/api'),
      components: path.resolve(import.meta.dirname, 'src/components'),
      containers: path.resolve(import.meta.dirname, 'src/containers'),
      models: path.resolve(import.meta.dirname, 'src/models'),
      providers: path.resolve(import.meta.dirname, 'src/providers'),
      store: path.resolve(import.meta.dirname, 'src/store'),
    },
  },
});
