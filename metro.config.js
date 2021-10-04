/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

module.exports = {
  resolver: {
    extraNodeModules: {
      src: `${__dirname}/src`,
      components: `${__dirname}/src/components`,
      screens: `${__dirname}/src/screens`,
      hooks: `${__dirname}/src/hooks`,
      utils: `${__dirname}/src/utils`,
      assets: `${__dirname}/assets`,
    },
  },
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
};
