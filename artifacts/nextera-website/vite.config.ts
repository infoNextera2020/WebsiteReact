import path from 'path';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  base: '/',
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, 'src'),
      '@assets': path.resolve(
        import.meta.dirname,
        '..',
        '..',
        'attached_assets',
      ),
    },
    dedupe: ['react', 'react-dom'],
  },
  root: path.resolve(import.meta.dirname),
  build: {
    outDir: path.resolve(import.meta.dirname, 'dist'),
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: path.resolve(import.meta.dirname, 'index.html'),
        academyLanding: path.resolve(import.meta.dirname, 'academy-01/index.html'),
        vip: path.resolve(import.meta.dirname, 'vip/index.html'),
      },
    },
  },
  server: {
    port: 5173,
    host: 'localhost',
    allowedHosts: true,
    fs: {
      strict: true,
    },
  },
  preview: {
    allowedHosts: true,
  },
});
