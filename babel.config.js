module.exports = {
  plugins: ['@babel/syntax-dynamic-import'],
  presets: [
    '@babel/preset-env',
    ['@babel/preset-typescript', { isTSX: true, allExtensions: true }],
    ['@babel/preset-react', { runtime: 'automatic' }],
  ],
};
