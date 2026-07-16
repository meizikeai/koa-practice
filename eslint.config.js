import globals from 'globals'
import eslint from '@eslint/js'
import react from 'eslint-plugin-react'
import eslintConfigPrettier from 'eslint-config-prettier'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'

export default [
  eslint.configs.recommended,
  eslintPluginPrettierRecommended,
  {
    files: ['client/**/*.js'],
    ...react.configs.flat.recommended,
    languageOptions: {
      globals: {
        ...globals.browser,
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    plugins: {
      react,
    },
  },
  {
    files: ['server/**/*.js', 'test/**/*.js'],
    languageOptions: {
      globals: {
        ...globals.node,
        fetch: 'readonly',
      },
    },
  },
  {
    ignores: ['node_modules/', 'public/', 'public/**/*.js', 'ecosystem.config.cjs'],
    languageOptions: {
      sourceType: 'module',
      ecmaVersion: 'latest',
    },
  },

  eslintConfigPrettier,
]
