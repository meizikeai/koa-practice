import process from 'node:process'
import shell from 'shelljs'
import prompt from './prompt.js'

prompt().then((args) => {
  if (args === '') {
    console.error('✖ Input cannot be empty. Please try again.')
    return
  }
  console.log('⠋ Bundling assets with Webpack, please wait...')

  const cmd = `webpack --mode=production --config ./client/webpack/webpack.config.js --env p=${args}`
  const child = shell.exec(cmd, {
    async: true,
    env: { ...process.env },
  })

  child.stdout.on('data', (data) => {
    console.log(data)
  })

  child.on('close', (code) => {
    if (code === 0) {
      console.log('✔ Build successful!')
      shell.exit(0)
    } else {
      console.error('✖ Build failed.')
      shell.exit(1)
    }
  })
})
