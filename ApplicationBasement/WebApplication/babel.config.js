module.exports = function (api) {
    api.cache(true);
    return {
        presets: ['babel-preset-expo'],
        plugins: [
            [
                'module-resolver',
                {
                    alias: {
                        '@react/cross-core': './_CrossBasement/CrossCore',
                        '@react/cross-page': './_CrossBasement/CrossPage',
                    },
                },
            ],
            require.resolve('react-native-reanimated/plugin'),
        ],
    };
};
