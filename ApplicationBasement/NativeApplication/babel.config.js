module.exports = function (api) {
    api.cache(true);
    return {
        presets: ['module:metro-react-native-babel-preset'],
        plugins: [
            [
                require.resolve('babel-plugin-module-resolver'),
                {
                    alias: {
                        // define aliases to shorten the import paths
                        'native/pages': './src/pages',
                        'native/modules': './src/modules',
                    },
                    extensions: [
                        '.ios.ts',
                        '.android.ts',
                        '.ts',
                        '.ios.tsx',
                        '.android.tsx',
                        '.tsx',
                        '.jsx',
                        '.js',
                        '.json',
                        '.native.js',
                        '.native.tsx',
                        '.native.ts',
                        '.module.css',
                    ],
                },
            ],
            require.resolve('react-native-reanimated/plugin'),
        ],
    };
};
