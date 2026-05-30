import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// Propuesta validable Roberto/Diego: Astro SSG + Tailwind para nuevas landings.
// Las demos HTML actuales siguen disponibles como carril raw en sus carpetas raíz.
export default defineConfig({
  integrations: [tailwind()],
  output: 'static',
  site: 'https://example.com',
  build: {
    assets: 'assets',
  },
});
