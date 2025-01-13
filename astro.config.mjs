import vercel from '@astrojs/vercel';
import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'server', // Required for Vercel deployment
  adapter: vercel(),
});