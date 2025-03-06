import { useRef } from 'react';

export function usePersistentFunction(props) {
	const propsRef = useRef(props);

	propsRef.current = props;

	return function(...args) {
		return propsRef.current(...args);
	};
}