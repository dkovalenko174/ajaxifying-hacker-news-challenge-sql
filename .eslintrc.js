module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
  },
  plugins: [
    'react',
  ],
  rules: {
    'no-console': 0,
    'react/prop-types': 0,
    'react/jsx-one-expression-per-line': 0,
    'react/no-array-index-key': 0,
    'jsx-a11y/control-has-associated-label': 0,
    'jsx-a11y/anchor-has-content': 0,
    'jsx-a11y/anchor-is-valid': 0,
  },
};
