import { defineConfig } from "astro/config";

// Kein base-Pfad hier — damit Tinas Admin unter /admin-tina/ funktioniert.
// GitHub Pages User-Page (username.github.io/repo) braucht zwar einen base,
// aber für den Tina-Test reicht lokaler Dev-Server an localhost:4321/.
export default defineConfig({
  trailingSlash: "ignore",
  build: {
    format: "directory",
  },
});
