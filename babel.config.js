module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          assets: './assets',
          components: './src/components',
          hooks: './src/hooks',
          screens: './src/screens',
          src: './src',
          utils: './src/utils',
        },
      },
    ],
  ],
};
