module.exports = {
  presets: [
    ['@babel/env', {
      targets: '> 0.25%, not dead',
    }],
    '@babel/preset-react',
  ],
  plugins: [
    '@babel/plugin-proposal-class-properties',
  ],
};
