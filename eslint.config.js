import js from '@eslint/js'
import eslint from 'eslint/config'
import eslintConfigPrettier from 'eslint-config-prettier'
import reactPlugin from 'eslint-plugin-react'
import reactHooksPlugin from 'eslint-plugin-react-hooks'
import reactRefreshPlugin from 'eslint-plugin-react-refresh'
import globals from 'globals'

export default eslint.defineConfig(
  { ignores: ['node_modules/', 'public/', 'ecosystem.config.cjs'] },
  { languageOptions: { sourceType: 'module', ecmaVersion: 'latest' } },
  js.configs.recommended,
  {
    files: ['client/**/*.{js,jsx}'],
    ...reactPlugin.configs.flat.recommended,
    languageOptions: {
      globals: { ...globals.browser },
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
    plugins: {
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
      'react-refresh': reactRefreshPlugin,
    },
    rules: {
      ...reactHooksPlugin.configs.recommended.rules,
      'react/react-in-jsx-scope': 'off',
    },
    settings: { react: { version: 'detect' } },
  },
  {
    files: ['server/**/*.js', 'test/**/*.js'],
    languageOptions: {
      globals: { ...globals.node },
    },
    rules: {
      'no-console': 'off',
    },
  },

  eslintConfigPrettier,
)
