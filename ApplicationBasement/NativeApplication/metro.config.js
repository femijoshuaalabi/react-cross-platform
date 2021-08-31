const path = require('path');
const { getDefaultConfig } = require('@expo/metro-config');

const defaultConfig = getDefaultConfig(__dirname);

//transformer
defaultConfig.transformer.babelTransformerPath = require.resolve('react-native-svg-transformer');
defaultConfig.transformer.getTransformOptions = async (entryPoints, options, getDependenciesOf) => ({
    transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
    },
});

//resolver
defaultConfig.resolver.assetExts = defaultConfig.resolver.assetExts.filter((ext) => ext !== 'svg');
defaultConfig.resolver.sourceExts = [...defaultConfig.resolver.sourceExts, 'svg'];

//Watch Paths
defaultConfig.watchFolders = [path.join(__dirname, '..', '..', 'node_modules')];
module.exports = defaultConfig;
