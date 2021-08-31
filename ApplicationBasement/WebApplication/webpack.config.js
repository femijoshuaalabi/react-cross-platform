const createExpoWebpackConfigAsync = require('@expo/webpack-config');

module.exports = async function (env, argv) {
    let config = await createExpoWebpackConfigAsync(
        {
            ...env,
            // babel: {
            //     dangerouslyAddModulePathsToTranspile: ['@reactCrossPlatform'],
            // },
        },
        argv,
    );

    if (config.mode === 'development') {
        config.devServer.proxy = {
            '/v1/**': {
                target: {
                    host: 'localhost',
                    protocol: 'http:',
                    port: '5000',
                },
                secure: false,
                changeOrigin: true,
                logLevel: 'info',
            },
            '/maps/**': {
                target: {
                    host: 'maps.googleapis.com',
                    protocol: 'https:',
                    // port: '5000',
                },
                secure: false,
                changeOrigin: true,
                logLevel: 'info',
            },
        };
    }

    return config;
};
