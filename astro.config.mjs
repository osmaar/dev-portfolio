import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://osmar-lopez.dev",
  base: "/cv",
  integrations: [tailwind()],
});
