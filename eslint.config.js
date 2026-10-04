import js from '@eslint/js'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import globals from 'globals'

export default [
  js.configs.recommended,
  {
    files: ['**/*.{js,jsx}'],
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: { jsx: true }, // ✅ ye zaroor hona chahiye
      },
      globals: globals.browser,
    },
    rules: {
      ...react.configs.recommended.rules,       // ✅ isme jsx-uses-vars included hai
      ...reactHooks.configs.recommended.rules,
      'react/jsx-uses-vars': 'error',           // ✅ explicitly bhi add kar sakte ho
      'react/react-in-jsx-scope': 'off',        // Vite/new JSX transform ke liye
    },
  },
]