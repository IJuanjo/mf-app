import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';
import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import mfConfig from './module-federation.config';

export default defineConfig({
  plugins: [
    pluginReact(),
    pluginModuleFederation(mfConfig)
  ],
  server: {
    port: 3002,
  },
  output: {
    assetPrefix: 'https://lemon-water-01ff23b10.2.azurestaticapps.net/',
    cleanDistPath: true,
  }
});
