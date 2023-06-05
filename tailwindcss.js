/** @type {import('@typescript-eslint/experimental-utils').TSESLint.Linter.Config} */
module.exports = {
	settings: {
		tailwindcss: {
			callees: ["classnames", "clsx", "cn", "ctl", "cva", "twJoin", "twMerge", "tv"],
		},
	},
	overrides: [
		{
			files: ["*.tsx"],
			plugins: ["tailwindcss"],
			rules: {
				"tailwindcss/enforces-negative-arbitrary-values": "error",
				"tailwindcss/enforces-shorthand": "error",
				"tailwindcss/migration-from-tailwind-2": "error",
				"tailwindcss/no-custom-classname": "error",
				"tailwindcss/no-contradicting-classname": "error",
			},
		},
		{
			files: ["tailwind.config.?(c)js"],
			env: {
				node: true,
			},
			rules: {
				"unicorn/prefer-module": "off",
			},
		},
	],
};
