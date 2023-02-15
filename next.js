/** @type {import("eslint").Linter.Config} */
module.exports = {
	overrides: [
		{
			files: ["*.ts", "*.tsx"],
			extends: ["plugin:@next/next/core-web-vitals", "prettier"],
			rules: {
				"import/no-anonymous-default-export": [
					"error",
					{
						allowArray: true,
						allowLiteral: true,
						allowObject: true,
					},
				],
			},
		},
		{
			files: [
				"app/**/*.ts?(x)",
				"pages/**/*.tsx",
				"pages/api/**/*.ts",
				"src/app/**/*.ts?(x)",
				"src/pages/**/*.tsx",
				"src/pages/api/**/*.ts",
			],
			rules: {
				"check-file/filename-naming-convention": "off",
				"check-file/folder-naming-convention": "off",
				"import/no-default-export": "off",
			},
		},
		{
			files: ["next.config.?(c)js"],
			env: {
				node: true,
			},
			rules: {
				"unicorn/prefer-module": "off",
			},
		},
		{
			files: ["next.config.mjs"],
			env: {
				node: true,
			},
			rules: {
				"import/no-default-export": "off",
			},
		},
	],
};
