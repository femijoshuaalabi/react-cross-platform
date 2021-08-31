module.exports = function (api) {
    api.cache(true);
    return {
        presets: ['babel-preset-expo'],
        plugins: [
            [
                'module-resolver',
                {
                    alias: {
                        '@reactCrossPlatform/core': './_BaseCore/core',
                        '@reactCrossPlatform/page': './_BaseCore/page',
                        '@reactCrossPlatform/native-page': './_BaseCore/native-page',
                        '@reactCrossPlatform/web-page': './_BaseCore/web-page',
                        '@web': './src',
                    },
                },
            ],
            ['react-native-reanimated/plugin'],
        ],
    };
};
