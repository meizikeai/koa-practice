import { input } from '@inquirer/prompts'

export default async () => {
  const result = await input({
    message: 'Please enter the project name',
    default: '',
    required: false,
  })

  return result
}
