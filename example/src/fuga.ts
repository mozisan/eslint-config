import FS from "node:fs/promises";
import HTTP2 from "node:http2";

import * as EP from "@typescript-eslint/eslint-plugin";

import { bar, foo } from "~/foo";
import {} from "~/foo/_foo"; // eslint-disable-line no-restricted-imports

import { type Hoge, useHoge } from "./hoge";

export type Fuga = Hoge;

useHoge();
HTTP2;
bar;
foo;
FS;
EP;

export { hoge as fuga } from "./hoge";
export { foo as bar } from "~/foo";

export const f = (aaaaaaaaaaaaaaaaaaaaaaaaaaa: number) => {
	const bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb = 10_000;
	if (aaaaaaaaaaaaaaaaaaaaaaaaaaa > bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb) return;
};
