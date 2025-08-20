import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  base: "/portefeuille/",
  plugins: [react()],
  optimizeDeps: {
    // Removed 'lucide-react' from exclude to fix module loading issues
  },
  server: {
    port: 5173,
    host: true,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    chunkSizeWarningLimit: 500, // Reset to default now that we've optimized
    rollupOptions: {
      output: {
        manualChunks: {
          // Framework chunk
          "react-vendor": ["react", "react-dom", "react-router-dom"],
          // UI/Animation chunk
          "ui-vendor": ["framer-motion", "lucide-react"],
          // Data management chunk
          "data-vendor": ["@tanstack/react-query"],
          // Internationalization chunk
          "i18n-vendor": [
            "i18next",
            "react-i18next",
            "i18next-browser-languagedetector",
          ],
        },
      },
    },
  },
});
