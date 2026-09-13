import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// `VITE_BASE` est injecté par le workflow GitHub Actions lors du déploiement
// sur GitHub Pages (ex: "/josue-bolowa-portfolio/"). En local, on garde "/".
export default defineConfig({
  base: "/josue-bolowa-portfolio/",
  plugins: [react()],
  build: {
    outDir: "dist",
    sourcemap: false,
  },
  server: {
    port: 5173,
  },
});
