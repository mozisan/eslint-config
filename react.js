module.exports = {
  plugins: ['react', 'react-hooks'],
  extends: ['plugin:react/recommended', 'prettier/react'],
  rules: {
    'react/display-name': 'off',
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/prop-types': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
