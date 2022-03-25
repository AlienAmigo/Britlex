module.exports = {
  // `require.resolve` is needed for e.g. `pnpm`
  plugins: [require.resolve('@prettier/plugin-pug')],

  printWidth: 120,
  singleQuote: true,

  pugSingleQuote: false,
  // ... more pug* options
};
