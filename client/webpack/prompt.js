import { input } from '@inquirer/prompts'

export default async () => {
  const result = await input({
    message: 'Enter project name:',
    default: '',
    required: false,
  })

  return result
}
