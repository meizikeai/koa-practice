// eslint-disable-next-line
const path = require('path')

module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 8,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.json'],
      },
      alias: {
        map: [
          ['@components', path.resolve(__dirname, './components')],
          ['@utils', path.resolve(__dirname, './utils')],
        ],
      },
    },
  },
  parser: 'babel-eslint',
  plugins: ['react'],
  rules: {},
}
