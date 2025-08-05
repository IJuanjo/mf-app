import { createModuleFederationConfig } from '@module-federation/rsbuild-plugin';

export default createModuleFederationConfig({
    name: 'host',
    remotes: {
        remote: 'remote@https://lemon-water-01ff23b10.2.azurestaticapps.net/remoteEntry.js',
    },
    shareStrategy: 'loaded-first',
    shared: {
        react: {
            singleton: true,
        },
        'react-dom': {
            singleton: true,
        },
    },
});