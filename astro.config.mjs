// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // GitHub Pages project site: https://bclavijo110430.github.io/palenquilombo/
  site: 'https://bclavijo110430.github.io',
  base: '/palenquilombo',
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'pt'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
