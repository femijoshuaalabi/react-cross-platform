const path = require('path');
const { override, addBabelPlugins, babelInclude, addBabelPresets, addWebpackExternals } = require('customize-cra');

module.exports = override(
    ...addBabelPlugins('@babel/plugin-proposal-class-properties'),
    babelInclude([path.resolve(__dirname, 'web')]),
    ...addBabelPresets('babel-preset-expo', '@babel/preset-react', '@babel/preset-env'),
    addWebpackExternals({
        '@reactCrossPlatform/core': './_BaseCore/core',
        '@reactCrossPlatform/page': './_BaseCore/page',
        '@web/pages': './src/pages',
    }),
);
