import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  markdown: {
    smartypants: true,
    syntaxHighlight: "shiki",
    shikiConfig: {
      theme: "github-dark-default",
      // themes: {
      //   dark: "catppuccin-macchiato",
      //   light: "catppuccin-macchiato",
      // },
    },
    prefetch: true,
  },
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
    mdx({
      gfm: false,
    }),
  ],
});
