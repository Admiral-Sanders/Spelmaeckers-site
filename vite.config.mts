// vite.config.ts
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  resolve: {
    tsconfigPaths: true,
  },
  define: {
    __DEV__: JSON.stringify(mode !== 'production'),
  },
}));
