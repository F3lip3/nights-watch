module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: ['airbnb-base', 'prettier'],
  plugins: ['prettier'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    use: true
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
    'class-methods-use-this': 'off',
    'comma-dangle': ['error', 'never'],
    'global-require': 'off',
    'no-console': [
      'error',
      { allow: ['info', 'error', 'warn', 'time', 'timeEnd'] }
    ],
    'no-param-reassign': 'off',
    'prettier/prettier': 'error'
  },
};
