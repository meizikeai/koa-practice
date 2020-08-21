const inquirer = require('inquirer')

const questions = [
  {
    name: 'project',
    message: 'Please enter the project name:',
    validate: str => Boolean(str.length),
  },
]

module.exports = () => new Promise(resolve => {
  const args = []

  inquirer.prompt(questions).then(answers => {
    args.push(`--env.p=${answers.project}`)

    console.warn('↓ Please wait for webpack execution to complete →')

    resolve({
      args: args.join(' '),
    })
  })
})
