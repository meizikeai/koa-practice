const { input } = require('@inquirer/prompts')

module.exports = async () => {
  const result = await input({
    message: 'Please enter the project name',
    default: '',
    required: false
  })

  return result
}