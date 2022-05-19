import FS from 'node:fs/promises';
import HTTP2 from 'node:http2';

import * as EP from '@typescript-eslint/eslint-plugin';

import { bar, foo } from '~/foo';

import type { Hoge } from './hoge';
import { useHoge } from './hoge';

export type Fuga = Hoge;

useHoge();
HTTP2;
bar;
foo;
FS;
EP;

export { hoge as fuga } from './hoge';
export { foo as bar } from '~/foo';
