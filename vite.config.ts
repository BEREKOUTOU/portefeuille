import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/portefeuille/',
  plugins: [react()],
  optimizeDeps: {
    // Removed 'lucide-react' from exclude to fix module loading issues
  },
  server: {
    port: 5173,
    host: true
  }
});
