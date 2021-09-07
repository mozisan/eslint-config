/** @type {import('@typescript-eslint/experimental-utils').TSESLint.Linter.Config} */
module.exports = {
  overrides: [
    {
      files: ['*.tsx'],
      plugins: ['react', 'react-hooks'],
      extends: [
        'plugin:react/recommended',
        'plugin:react/jsx-runtime',
        'prettier',
      ],
      rules: {
        'react/jsx-no-useless-fragment': 'error',
        'react/jsx-sort-props': [
          'error',
          {
            callbacksLast: true,
            noSortAlphabetically: true,
            reservedFirst: ['key', 'ref'],
          },
        ],
        'react/prop-types': 'off',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'error',
      },
      settings: {
        react: {
          version: 'detect',
        },
      },
    },
  ],
};
