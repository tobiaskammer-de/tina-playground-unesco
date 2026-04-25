import { defineConfig } from "astro/config";

// Netlify (Decap-CMS-Auth) deployt am Root; GitHub Pages braucht den Repo-Pfad.
// Über env DEPLOY_TARGET=netlify wird der Base-Path leer.
const isNetlify = process.env.DEPLOY_TARGET === "netlify" || !!process.env.NETLIFY;

export default defineConfig({
  site: isNetlify
    ? undefined
    : "https://tobiaskammer-de.github.io",
  base: isNetlify ? "/" : "/tina-playground-unesco",
  trailingSlash: "ignore",
  build: {
    format: "directory",
  },
});
