import type { FC } from "react";
import { useCallback } from "react";

import type { Hoge } from "./hoge";

export type Fuga = Hoge;

export { hoge as fuga } from "./hoge";

export const Piyo: FC = () => {
	const callback = useCallback(() => null, []);

	return (
		<div
			onClick={callback}
			onDoubleClick={() => null} // eslint-disable-line react-perf/jsx-no-new-function-as-prop
		/>
	);
};
