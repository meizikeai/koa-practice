require('css-modules-require-hook')({
  extensions: ['.css', '.scss'],
  generateScopedName: '[name]__[local]___[hash:base64:5]',
})

require('core-js/stable')
require('regenerator-runtime/runtime')
require('@babel/register')