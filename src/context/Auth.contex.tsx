import { createContext } from 'react';
import { usePrersistedState } from '../hooks/use-prersistedState';

import photo_user from '../assets/photo-user.webp';

interface AuthContexType {
	currentUser: userType | null;
	Login: () => void;
}
interface userType {
	id: number;
	username: string;
	profilePicture: string;
}

export const AuthContex = createContext({} as AuthContexType);

export const AuthContextProvaider = ({ children }: PropsChildren) => {
	const [currentUser, setCurrentUser] = usePrersistedState<userType | null>('user', null);

	const user: userType = {
		id: 123,
		username: 'codewithAndres',
		profilePicture: photo_user,
	};

	const Login = () => {
		setCurrentUser(user);
	};

	const value = { currentUser, Login } as const;

	return <AuthContex.Provider value={value}> {children} </AuthContex.Provider>;
};
