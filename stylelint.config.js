module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recommended-scss',
    'stylelint-config-prettier',
  ],
  plugins: ['stylelint-scss'],
  rules: {
    'string-quotes': 'single',
    'no-empty-source': null,
    'block-no-empty': null,
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global', 'local'],
      },
    ],
  },
};
