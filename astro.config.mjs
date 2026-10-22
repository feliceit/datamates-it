import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Sito statico servito da GitHub Pages sul dominio custom datamates.it
// (il file public/CNAME dice a Pages quale dominio usare).
export default defineConfig({
  site: 'https://datamates.it',
  trailingSlash: 'never',
  build: {
    format: 'file',
  },
  integrations: [
    sitemap({
      // Pagine di servizio fuori dalla sitemap.
      filter: (page) => !/\/(grazie|404)$/.test(new URL(page).pathname),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
