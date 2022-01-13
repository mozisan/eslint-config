import type { Hoge } from './hoge';
import { useHoge } from './hoge';

export type Fuga = Hoge;

useHoge();

export { hoge as fuga } from './hoge';
