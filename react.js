/** @type {import('@typescript-eslint/experimental-utils').TSESLint.Linter.Config} */
module.exports = {
	settings: {
		react: {
			version: "detect",
		},
	},
	overrides: [
		{
			files: ["*.tsx"],
			extends: [
				"plugin:import/react",
				"plugin:react/recommended",
				"plugin:react/jsx-runtime",
				"plugin:react-perf/recommended",
				"prettier",
			],
			parserOptions: {
				ecmaFeatures: {
					jsx: true,
				},
			},
			rules: {
				"react/button-has-type": "error",
				"react/iframe-missing-sandbox": "error",
				"react/jsx-boolean-value": "error",
				"react/jsx-no-useless-fragment": [
					"error",
					{
						allowExpressions: true,
					},
				],
				"react/jsx-sort-props": [
					"error",
					{
						callbacksLast: true,
						noSortAlphabetically: true,
						reservedFirst: ["key", "ref"],
					},
				],
				"react/prop-types": "off",
				"react/self-closing-comp": "error",
			},
		},
		{
			files: ["*.ts?(x)"],
			plugins: ["react-hooks"],
			rules: {
				"react-hooks/rules-of-hooks": "error",
				"react-hooks/exhaustive-deps": "error",
			},
		},
	],
};
