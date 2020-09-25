// eslint-disable-next-line
require('css-modules-require-hook')({
  extensions: ['.css', '.scss'],
  generateScopedName: '[name]__[local]___[hash:base64:5]',
})

// eslint-disable-next-line
// require('core-js/stable')
// eslint-disable-next-line
// require('regenerator-runtime/runtime')
// eslint-disable-next-line
require('@babel/register')