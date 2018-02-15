module.exports = {
  extends: ['react-app', 'airbnb', 'prettier'],
  plugins: ['prettier'],
  rules: {
    'arrow-parens': 0,
    'function-paren-newline': 0,
    'arrow-body-style': 0,
    'no-console': 0,
    'no-unused-vars': 1,
    'no-constant-condition': 0,
    'no-extraneous-dependencies': 0,
    'react/jsx-filename-extension': 0,
    'linebreak-style': 0,
    'jsx-a11y/href-no-hash': 0,
    'prettier/prettier': 2,
    strict: 0,
    'global-require': 0,
    'react/prop-types': 0,
  },
  overrides: [
    {
      files: ['config/*.js', 'scripts/*.js'],
      rules: {
        'no-param-reassign': 0,
        'no-shadow': 0,
        'func-names': 0,
        'consistent-return': 0,
        'no-use-before-define': 0,
        'prefer-destructuring': 0,
        'import/no-dynamic-require': 0,
      },
    },
  ],
  settings: {
    'import/resolver': {
      node: {
        moduleDirectory: ['node_modules', 'src'],
      },
    },
  },
};
