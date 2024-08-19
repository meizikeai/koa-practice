const shell = require('shelljs')
const prompt = require('./prompt')

prompt().then(args => {
  const child = shell.exec(`webpack --mode=production --config ./client/webpack/webpack.config.js --env p=${args}`, {
    async: true,
  })

  child.stdout.on('data', () => {
    console.warn('↓ Execution succeed!')
    shell.exit(1)
  })
})
