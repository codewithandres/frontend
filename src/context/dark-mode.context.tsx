import { DarkModeContex } from './contexts';
import { usePrersistedState } from '../hooks/use-prersistedState';

export const DarkModeProvaider = ({ children }: PropsChildren) => {
	const [darkMode, setDarkMode] = usePrersistedState<boolean>('darkMode', false);

	const toggle = (): void => setDarkMode(prev => !prev);

	const values = { darkMode, toggle } as const;

	return <DarkModeContex value={values}> {children} </DarkModeContex>;
};
