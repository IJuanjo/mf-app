import { createModuleFederationConfig } from '@module-federation/rsbuild-plugin';

export default createModuleFederationConfig({
  name: 'remote',
  exposes: {
    './Button': './src/Button',
  },
  filename: 'remoteEntry.js',
  shared: {
    react: {
      singleton: true,
    },
    'react-dom': {
      singleton: true,
    },
  },
  getPublicPath: `function() {return "https://lemon-water-01ff23b10.2.azurestaticapps.net/";}`,
});