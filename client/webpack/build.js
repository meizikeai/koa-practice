const shelljs = require('shelljs')
const prompt = require('./prompt')

prompt().then(({ args }) => {
  const child = shelljs.exec(`
    webpack --mode production --config ./client/webpack/webpack.config.js ${args}
  `, { async: true })

  child.stdout.on('data', () => {
    console.warn('↓ Execution succeed!')
  })
})
