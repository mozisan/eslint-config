/** @type {import("eslint").Linter.Config} */
module.exports = {
	overrides: [
		{
			files: ["*.ts?(x)"],
			extends: ["next/core-web-vitals", "prettier"],
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
	],
};
