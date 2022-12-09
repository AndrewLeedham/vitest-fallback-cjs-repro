/// <reference types="vitest" />

// Configure Vitest (https://vitest.dev/config/)

import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import { defineConfig } from 'vite';

export default defineConfig({
  test: {
    deps: {
      fallbackCJS: true,
    },
  },
  plugins: [vanillaExtractPlugin()],
});
