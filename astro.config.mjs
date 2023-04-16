import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";
import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), vue()],
  server: {
    port: 8082
  },
  site: 'https://schoolerc.github.io'
});
