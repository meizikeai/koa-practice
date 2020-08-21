const shelljs = require('shelljs')

const child = shelljs.exec(`
  webpack --mode production --config ./client/webpack/webpack.config.js --env.all=true
`, { async: true })

child.stdout.on('data', () => {
  console.warn('↓ Execution succeed!')
})