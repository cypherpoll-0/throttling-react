import { useRef } from "react";

const useThrottle = (fn, time) => {
	let lastRun = useRef(Date.now());
	return function (...args) {
		let context = this;
		if (Date.now() - lastRun.current >= time) {
			fn.apply(context, args);
			lastRun.current = Date.now();
		}
	};
};

export default useThrottle;
