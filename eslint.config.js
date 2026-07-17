import globals from 'globals'
import eslint from '@eslint/js'
import react from 'eslint-plugin-react'
import eslintConfigPrettier from 'eslint-config-prettier'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'

export default [
  {
    ignores: ['node_modules/', 'public/', 'public/**/*.js', 'ecosystem.config.cjs'],
  },
  {
    languageOptions: {
      sourceType: 'module',
      ecmaVersion: 'latest',
    },
  },

  eslint.configs.recommended,
  eslintPluginPrettierRecommended,

  // client
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

  // server
  {
    files: ['server/**/*.js', 'test/**/*.js'],
    languageOptions: {
      globals: {
        ...globals.node,
        fetch: 'readonly',
      },
    },
  },

  eslintConfigPrettier,
]
