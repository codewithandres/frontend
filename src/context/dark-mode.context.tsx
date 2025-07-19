import { useEffect, useState } from 'react';
import { DarkModeContex } from './contexts';

export const DarkModeProvaider = ({ children }: PropsChildren) => {
	const isMode = localStorage.getItem('darkMode') || false;

	const [darkMode, setDarkMode] = useState<boolean>(!!isMode);

	const toggle = (): void => setDarkMode(prev => !prev);

	useEffect(() => {
		localStorage.setItem('darkMode', String(darkMode));
	}, [darkMode]);

	const values = {
		darkMode,
		toggle,
	} as const;

	return <DarkModeContex value={values}> {children} </DarkModeContex>;
};
