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
			files: ["next.config.*"],
			env: {
				node: true,
			},
			rules: {
				"import/no-default-export": "off",
			},
		},
		{
			files: [
				"app/**/*.tsx",
				"pages/**/*.tsx",
				"pages/api/**/*.ts",
				"src/app/**/*.tsx",
				"src/pages/**/*.tsx",
				"src/pages/api/**/*.ts",
			],
			rules: {
				"check-file/filename-naming-convention": "off",
				"check-file/folder-naming-convention": "off",
				"import/no-default-export": "off",
			},
		},
	],
};
