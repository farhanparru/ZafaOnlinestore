import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 3000,
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      output: {
        format: 'es', // Default to ES module format for frontend builds
      },
    },
  },
});


