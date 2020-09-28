// eslint-disable-next-line
require('css-modules-require-hook')({
  extensions: ['.css', '.scss'],
  generateScopedName: '[name]__[local]___[hash:base64:5]',
})

// eslint-disable-next-line
require('@babel/register')
