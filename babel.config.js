module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@navigations': './src/navigations',
          '@screens': './src/screens',
          '@components': './src/components',
          '@routes': './src/routes',
          '@icons': './src/icons',
          '@data': './src/data',
          '@ctx': './src/context',
          '@interfaces': './src/interfaces',
          '@src': './src',
          '@hooks': './src/hooks',
          '@themes': './src/themes',
        },
      },
    ],
  ],
};
