// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.marlenepetit.fr',
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp',
    },
  },
});
