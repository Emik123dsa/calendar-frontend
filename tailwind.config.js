module.exports = {
  mode: 'jit',
  future: {
    defaultLineHeights: true,
    standardFontWeights: true,
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
  },
  purge: [
    './src/**/*.{vue,html,js}',
    './src/**/*.spec.js',
    './tests/**/*.{vue,html,js}',
    './tests/**/*.spec.js}',
  ],
  darkMode: false,
  theme: {
    extend: {},
    container: {
      center: true,
      padding: '1rem',
    },
    colors: {},
    borderColors: {},
    fontSize: {},
    fontFamily: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
