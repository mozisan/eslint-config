import FS from "node:fs/promises";
import HTTP2 from "node:http2";

import * as EP from "@typescript-eslint/eslint-plugin";

import { bar, foo } from "~/foo";
import {} from "~/foo/_foo"; // eslint-disable-line no-restricted-imports

import type { Hoge } from "./hoge";
import { useHoge } from "./hoge";

export type Fuga = Hoge;

useHoge();
HTTP2;
bar;
foo;
FS;
EP;

export { foo as bar } from "~/foo";
export { hoge as fuga } from "./hoge";

export const f = (aaaaaaaaaaaaaaaaaaaaaaaaaaa: number) => {
	const bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb = 10_000;
	if (aaaaaaaaaaaaaaaaaaaaaaaaaaa > bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb) return;
};
