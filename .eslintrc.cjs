module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/jsx-runtime',
    'prettier',
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'linebreak-style': ['error', 'unix'],
    semi: ['error', 'never'],
    'react/display-name': ['off'],
    '@typescript-eslint/no-explicit-any': ['off'],
    quotes: ['off'],
    '@typescript-eslint/no-non-null-assertion': ['off'],
    'no-undef': ['off'],
    'react/prop-types': ['off'],
  },
}
