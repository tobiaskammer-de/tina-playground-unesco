import { defineConfig } from "astro/config";

// GitHub Pages: username.github.io/repo → base-path erforderlich
export default defineConfig({
  site: "https://tobiaskammer-de.github.io",
  base: "/tina-playground-unesco",
  trailingSlash: "ignore",
  build: {
    format: "directory",
  },
});
