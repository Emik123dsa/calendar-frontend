const path = require('path');

module.exports = {
  ident: 'postcss',
  syntax: 'postcss-scss',
  map: false,
  plugins: {
    // 'postcss-nested': {},
    // 'postcss-import': {},
    // 'postcss-flexbugs-fixes': {},
    // precss: {},
    // cssnano: {},
    // '@tailwindcss/jit': {},
    tailwindcss: {
      config: path.join(__dirname, './tailwind.config.js'),
    },
    autoprefixer: {
      flexbox: 'no-2009',
      grid: true,
    },
  },
};
