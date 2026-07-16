import { defineConfig } from "astro/config";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  site: "https://aerthos.site",
  output: "static",

  // Cloudflare Pages builds from the `dist` directory by default
  build: {
    format: "directory",
  },

  markdown: {
    shikiConfig: {
      theme: "github-dark",
    },
  },

  adapter: cloudflare()
});