// 单一打包
const shell = require('shelljs')
const prompt = require('./prompt')

prompt().then(args => {
  if (args === '') {
    console.warn('→ No input captured, please try again!')
    return
  }

  console.warn('↓ Please wait for webpack execution to complete →')

  const child = shell.exec(`webpack --mode=development --config ./client/webpack/webpack.config.js --env p=${args}`, {
    async: true,
  })

  child.stdout.on('data', () => {
    console.warn('↓ Execution succeed!')
    // shell.exit(1)
  })
})

// // 全部打包
// const shell = require('shelljs')

// const child = shell.exec(`webpack --mode=development --config ./client/webpack/webpack.config.js --env all=true`, {
//   async: true,
// })

// child.stdout.on('data', () => {
//   console.warn('↓ Execution succeed!')
//   shell.exit(1)
// })
