/** @type {import('@typescript-eslint/experimental-utils').TSESLint.Linter.Config} */
module.exports = {
  extends: ['eslint:recommended', 'prettier'],
  plugins: ['simple-import-sort', 'unused-imports'],
  ignorePatterns: ['**/*.d.ts'],
  rules: {
    // ESLint rules
    curly: 'error',
    eqeqeq: ['error', 'always', { null: 'never' }],
    'max-params': ['error', 2],
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'no-lonely-if': 'error',
    'no-lone-blocks': 'error',
    'no-loop-func': 'error',
    'no-param-reassign': 'error',
    'no-unused-vars': 'off',
    'no-useless-rename': 'error',
    'object-shorthand': 'error',
    'prefer-destructuring': 'error',
    // Plugin rules
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'error',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
  },
  overrides: [
    {
      files: ['*.mjs'],
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
      },
    },
    {
      files: ['*.ts', '*.tsx'],
      plugins: [
        '@typescript-eslint',
        'filenames',
        'functional',
        'import',
        'import-path',
      ],
      extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:import/typescript',
        'prettier',
      ],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        sourceType: 'module',
      },
      rules: {
        // Plugin rules
        '@typescript-eslint/consistent-indexed-object-style': 'error',
        '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
        '@typescript-eslint/consistent-type-imports': 'error',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-member-accessibility': [
          'error',
          { accessibility: 'no-public' },
        ],
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/interface-name-prefix': 'off',
        '@typescript-eslint/naming-convention': [
          'error',
          {
            selector: 'default',
            format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
            leadingUnderscore: 'forbid',
            trailingUnderscore: 'forbid',
          },
          {
            selector: 'parameter',
            format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
            leadingUnderscore: 'allowSingleOrDouble',
            trailingUnderscore: 'forbid',
          },
          {
            selector: ['objectLiteralProperty', 'typeProperty'],
            format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
            leadingUnderscore: 'allowDouble',
            trailingUnderscore: 'forbid',
          },
          {
            selector: 'typeLike',
            format: ['PascalCase', 'UPPER_CASE'],
            leadingUnderscore: 'forbid',
            trailingUnderscore: 'forbid',
          },
        ],
        '@typescript-eslint/no-dynamic-delete': 'error',
        '@typescript-eslint/no-floating-promises': 'error',
        '@typescript-eslint/no-implied-eval': 'error',
        '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
        '@typescript-eslint/no-parameter-properties': [
          'error',
          { allows: ['private readonly'] },
        ],
        '@typescript-eslint/no-shadow': 'error',
        '@typescript-eslint/no-unnecessary-condition': 'error',
        '@typescript-eslint/no-unnecessary-qualifier': 'error',
        '@typescript-eslint/no-unnecessary-type-arguments': 'error',
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/prefer-includes': 'error',
        '@typescript-eslint/prefer-nullish-coalescing': 'error',
        '@typescript-eslint/prefer-optional-chain': 'error',
        '@typescript-eslint/prefer-readonly': 'error',
        '@typescript-eslint/prefer-string-starts-ends-with': 'error',
        '@typescript-eslint/prefer-ts-expect-error': 'error',
        '@typescript-eslint/restrict-plus-operands': 'error',
        '@typescript-eslint/restrict-template-expressions': [
          'error',
          {
            allowNumber: true,
          },
        ],
        '@typescript-eslint/return-await': 'error',
        '@typescript-eslint/strict-boolean-expressions': 'error',
        '@typescript-eslint/switch-exhaustiveness-check': 'error',
        'filenames/match-regex': [
          'error',
          '^(index(\\.d)?|_?[a-z][a-z0-9]+(_[a-z][a-z0-9]+)*(\\.d|\\.[a-z][a-z0-9]+)?)$',
          true,
        ],
        'functional/immutable-data': [
          'error',
          {
            ignorePattern: 'Ref\\.[^\\.]+$',
          },
        ],
        'functional/no-method-signature': 'error',
        'functional/prefer-readonly-type': 'error',
        'import/first': 'error',
        'import/no-default-export': 'error',
        'import/no-duplicates': 'error',
        'import/no-relative-parent-imports': 'error',
        'import/no-useless-path-segments': [
          'error',
          {
            noUselessIndex: true,
          },
        ],
        'import-path/forbidden': [
          'error',
          [
            {
              match: '[^\\.]/_.*$',
              message: 'Internal module can not be imported.',
            },
            {
              match: '^~/.*[-A-Z]',
              message: 'Camel-case or Pascal-case is forbidden.',
            },
          ],
        ],
      },
    },
  ],
};
