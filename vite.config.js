import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// base: './' makes the built dist/ portable — it works when opened from any
// path (a static server, a GitHub Pages sub-folder, etc.). For a dedicated
// GitHub Pages deploy, set base to '/<repo>/' instead.
export default defineConfig({
  plugins: [react()],
  base: "./",
});
