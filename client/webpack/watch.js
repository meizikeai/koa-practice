// 单一打包
const shelljs = require('shelljs')
const prompt = require('./prompt')

prompt().then(({ args }) => {
  const child = shelljs.exec(`
    webpack --mode development --config ./client/webpack/webpack.config.js ${args}
  `, { async: true })

  child.stderr.on('data', () => { })
})

// 全部打包
// const shelljs = require('shelljs')

// const child = shelljs.exec(`
//   webpack --mode development --config ./client/webpack/webpack.config.js --env.all=true
// `, { async: true })

// child.stdout.on('data', () => {
//   console.log('→ Execution succeed!')
// })