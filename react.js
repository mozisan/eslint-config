/** @type {import('@typescript-eslint/experimental-utils').TSESLint.Linter.Config} */
module.exports = {
  plugins: ['react', 'react-hooks'],
  extends: ['plugin:react/recommended', 'prettier'],
  rules: {
    'react/display-name': 'off',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
