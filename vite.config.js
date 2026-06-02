import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vite emits to dist/ by default — matches the OUTDIR the paas
// auto-detect script looks for when it sees "vite" in package.json.
export default defineConfig({
  plugins: [react()],
  // Inject the build time at compile time so the page can prove which
  // commit it was built from without needing a backend.
  define: {
    __BUILD_TIME__: JSON.stringify(new Date().toISOString()),
  },
});
