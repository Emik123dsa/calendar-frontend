module.exports = {
  ident: 'postcss',
  syntax: 'postcss-scss',
  map: false,
  plugins: {
    'postcss-nested': {},
    'postcss-import': {},
    // 'postcss-csso': {},
    precss: {},
    cssnano: {},
    tailwindcss: {},
    autoprefixer: {
      flexbox: 'no-2009',
      grid: true,
    },
  },
};
