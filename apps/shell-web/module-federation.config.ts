import { createModuleFederationConfig } from '@module-federation/rsbuild-plugin';

export default createModuleFederationConfig({
    name: 'host',
    remotes: {
        remote: 'remote@http://localhost:3002/remoteEntry.js',
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