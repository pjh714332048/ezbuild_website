import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig, loadEnv } from 'vite';

import eslintPlugin from './scripts/vite-eslint-plugin.ts';

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react(), eslintPlugin()],
  server: {
    proxy: {
      '/api': {
        target: loadEnv(mode, process.cwd(), '').API_PROXY_TARGET || 'http://127.0.0.1:8000',
        changeOrigin: true,
      },
    },
  },
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
}));
