/** @type {import("eslint").Linter.Config} */
module.exports = {
	reportUnusedDisableDirectives: true,
	extends: ["eslint:recommended", "plugin:unicorn/recommended", "plugin:import/recommended", "prettier"],
	plugins: ["simple-import-sort", "unused-imports"],
	settings: {
		"import/resolver": {
			typescript: {
				alwaysTryTypes: true,
			},
		},
	},
	rules: {
		// ESLint rules
		eqeqeq: ["error", "always", { null: "never" }],
		"max-params": ["error", 2],
		"no-console": ["warn", { allow: ["warn", "error"] }],
		"no-lonely-if": "error",
		"no-lone-blocks": "error",
		"no-loop-func": "error",
		"no-param-reassign": "error",
		"no-restricted-imports": [
			"error",
			{
				patterns: [
					{
						group: ["**/_*", "!./_*"],
						message: "Do not import directory-private module.",
					},
				],
			},
		],
		"no-unused-vars": "off",
		"no-useless-rename": "error",
		"object-shorthand": "error",
		"prefer-destructuring": "error",
		// Plugin rules
		"import/first": "error",
		"import/export": "off",
		"import/namespace": "off",
		"import/newline-after-import": "error",
		"import/no-anonymous-default-export": [
			"error",
			{
				allowArray: true,
				allowLiteral: true,
				allowObject: true,
			},
		],
		"import/no-default-export": "error",
		"import/no-duplicates": "error",
		"import/no-useless-path-segments": [
			"error",
			{
				noUselessIndex: true,
			},
		],
		"simple-import-sort/imports": [
			"error",
			{
				groups: [
					["^\\u0000"], // Side effect imports
					["^node:"], // Built-in packages
					["^[^~#]@?\\w"], // Packages
					["^[~#]"], // Internal imports
					["^\\.\\.(?!/?$)", "^\\.\\./?$"], // Relative imports
				],
			},
		],
		"simple-import-sort/exports": "error",
		"unicorn/consistent-function-scoping": [
			"error",
			{
				checkArrowFunctions: false,
			},
		],
		"unicorn/filename-case": "off",
		"unicorn/no-array-callback-reference": "off",
		"unicorn/no-array-for-each": "off",
		"unicorn/no-array-reduce": "off",
		"unicorn/no-null": "off",
		"unicorn/prefer-object-from-entries": "off",
		"unicorn/prevent-abbreviations": "off",
		"unicorn/template-indent": "error",
		"unused-imports/no-unused-imports": "error",
		"unused-imports/no-unused-vars": [
			"error",
			{
				vars: "all",
				varsIgnorePattern: "^_",
				args: "after-used",
				argsIgnorePattern: "^_",
			},
		],
	},
	overrides: [
		{
			files: ["*.mjs"],
			parserOptions: {
				ecmaVersion: "latest",
				sourceType: "module",
			},
			rules: {
				"import/no-unresolved": "off",
			},
		},
		{
			files: ["*.ts", "*.tsx", "*.mts"],
			extends: [
				"plugin:@typescript-eslint/eslint-recommended",
				"plugin:@typescript-eslint/recommended",
				"plugin:@typescript-eslint/recommended-requiring-type-checking",
				"plugin:import/typescript",
				"prettier",
			],
			plugins: ["check-file", "functional", "import-access", "no-relative-import-paths"],
			parser: "@typescript-eslint/parser",
			parserOptions: {
				sourceType: "module",
				project: "tsconfig.json",
				warnOnUnsupportedTypeScriptVersion: true,
			},
			rules: {
				// Plugin rules
				"@typescript-eslint/consistent-indexed-object-style": "error",
				"@typescript-eslint/consistent-type-definitions": ["error", "type"],
				"@typescript-eslint/consistent-type-exports": "error",
				"@typescript-eslint/consistent-type-imports": "error",
				"@typescript-eslint/explicit-function-return-type": "off",
				"@typescript-eslint/explicit-member-accessibility": [
					"error",
					{
						accessibility: "no-public",
					},
				],
				"@typescript-eslint/explicit-module-boundary-types": "off",
				"@typescript-eslint/interface-name-prefix": "off",
				"@typescript-eslint/naming-convention": [
					"error",
					{
						selector: "default",
						format: ["camelCase", "PascalCase", "UPPER_CASE"],
						leadingUnderscore: "allow",
						trailingUnderscore: "forbid",
					},
					{
						selector: "parameter",
						format: ["camelCase", "PascalCase", "UPPER_CASE"],
						leadingUnderscore: "allow",
						trailingUnderscore: "forbid",
					},
					{
						selector: ["objectLiteralProperty", "typeProperty"],
						format: ["camelCase", "PascalCase", "UPPER_CASE"],
						leadingUnderscore: "allowDouble",
						trailingUnderscore: "forbid",
					},
					{
						selector: "typeLike",
						format: ["PascalCase", "UPPER_CASE"],
						leadingUnderscore: "forbid",
						trailingUnderscore: "forbid",
					},
					{
						selector: [
							"classProperty",
							"objectLiteralProperty",
							"typeProperty",
							"classMethod",
							"objectLiteralMethod",
							"typeMethod",
							"accessor",
							"enumMember",
						],
						modifiers: ["requiresQuotes"],
						format: null,
					},
				],
				"@typescript-eslint/no-duplicate-type-constituents": "error",
				"@typescript-eslint/no-dynamic-delete": "error",
				"@typescript-eslint/no-floating-promises": "error",
				"@typescript-eslint/no-implied-eval": "error",
				"@typescript-eslint/no-import-type-side-effects": "error",
				"@typescript-eslint/no-non-null-asserted-optional-chain": "error",
				"@typescript-eslint/no-parameter-properties": [
					"error",
					{
						allows: ["private", "readonly"],
					},
				],
				"@typescript-eslint/no-shadow": "error",
				"@typescript-eslint/no-unnecessary-condition": [
					"error",
					{
						allowConstantLoopConditions: true,
					},
				],
				"@typescript-eslint/no-unnecessary-qualifier": "error",
				"@typescript-eslint/no-unnecessary-type-arguments": "error",
				"@typescript-eslint/no-unused-vars": "off",
				"@typescript-eslint/no-useless-empty-export": "error",
				"@typescript-eslint/prefer-includes": "error",
				"@typescript-eslint/prefer-nullish-coalescing": "error",
				"@typescript-eslint/prefer-optional-chain": "error",
				"@typescript-eslint/prefer-readonly": "error",
				"@typescript-eslint/prefer-string-starts-ends-with": "error",
				"@typescript-eslint/prefer-ts-expect-error": "error",
				"@typescript-eslint/restrict-plus-operands": "error",
				"@typescript-eslint/restrict-template-expressions": [
					"error",
					{
						allowNumber: true,
					},
				],
				"@typescript-eslint/return-await": ["error", "always"],
				"@typescript-eslint/strict-boolean-expressions": [
					"error",
					{
						allowString: false,
						allowNumber: false,
						allowNullableObject: false,
						allowNullableBoolean: false,
						allowNullableString: false,
						allowNullableNumber: false,
						allowNullableEnum: false,
						allowAny: false,
						allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing: false,
					},
				],
				"@typescript-eslint/switch-exhaustiveness-check": "error",
				"check-file/filename-naming-convention": [
					"error",
					{
						"**/*.{ts,tsx,mts}": "+([_$0-9a-z])?(.+([0-9a-z]))",
					},
				],
				"check-file/folder-naming-convention": [
					"error",
					{
						"**": "SNAKE_CASE",
					},
				],
				"functional/immutable-data": [
					"error",
					{
						ignorePattern: "Ref\\.[^\\.]+$",
					},
				],
				"functional/prefer-property-signatures": "error",
				"functional/prefer-readonly-type": "error",
				"import/no-unresolved": "off",
				"import-access/jsdoc": ["error"],
				"no-relative-import-paths/no-relative-import-paths": ["error", { allowSameFolder: true }],
			},
		},
		{
			files: ["*.config.cjs"],
			env: {
				node: true,
			},
			rules: {
				"unicorn/prefer-module": "off",
			},
		},
		{
			files: ["*.config.mjs"],
			rules: {
				"import/no-default-export": "off",
			},
		},
		{
			files: ["*.config.ts", "*.config.mts"],
			rules: {
				"check-file/filename-naming-convention": "off",
				"import/no-default-export": "off",
			},
		},
	],
	ignorePatterns: ["**/*.d.ts", "**/*.d.mts"],
};
