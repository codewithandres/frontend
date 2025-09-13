// ?  Hook personalizado para persistir estado en localStorage
import { useEffect, useRef, useState } from 'react';

import { getItem, setItem } from '../utils/localStorege';

//   Recibe una key para identificar el valor en localStorage y un valor inicial
// amazonq-ignore-next-line
export const usePrersistedState = <T>(key: string, initialValues: T) => {
	//  Inicializa el estado con el valor de localStorage o el valor inicial
	const [value, setValue] = useState(() => {
		try {
			const item = getItem(key);
			return (item as T) ?? initialValues;
		} catch (error) {
			console.error(error);
			return initialValues;
		}
	});

	const prevValueRef = useRef(value);

	//   Guarda en localStorage cada vez que el valor o la key cambian
	useEffect(() => {
		if (prevValueRef.current !== value) {
			setItem(key, value);
			prevValueRef.current = value;
		}
	}, [key, value]);

	//  Retorna el valor y la función para actualizarlo
	return [value, setValue] as const;
};
