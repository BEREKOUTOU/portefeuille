import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  base: '/portefeuille/',
  plugins: [react()],
  optimizeDeps: {
    // Removed 'lucide-react' from exclude to fix module loading issues
  },
  server: {
    port: 5173,
    host: true
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
});
