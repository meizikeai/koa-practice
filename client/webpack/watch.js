const shelljs = require('shelljs')
const prompt = require('./prompt')

prompt().then(({ args }) => {
  const child = shelljs.exec(`
    webpack --mode development --config ./client/webpack/webpack.config.js ${args}
  `, { async: true })

  child.stderr.on('data', () => { })
})
