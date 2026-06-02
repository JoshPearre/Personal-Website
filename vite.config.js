import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Deployed to GitHub Pages at https://joshpearre.github.io/Personal-Website/,
// so assets must resolve under the '/Personal-Website/' sub-path. The deploy
// workflow lives in .github/workflows/deploy.yml.
export default defineConfig({
  plugins: [react()],
  base: "/Personal-Website/",
});
