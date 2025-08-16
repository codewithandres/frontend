import { createContext, useContext, type PropsWithChildren } from 'react';
import { usePrersistedState } from '../hooks/use-prersistedState';
import axios from 'axios';
import type { ResponseSingin } from '../interface/responseTypeSingin';

const AuthStatus = {
	authenticated: 'authenticated',
	unauthenticated: 'unauthenticated',
} as const;

declare type AuthStatus = (typeof AuthStatus)[keyof typeof AuthStatus];

interface AuthState {
	status: AuthStatus;
	token?: string;
	user?: User;
	isAuthenticated: boolean;
	// Metods
	loginWithEmailandPassword: (username: string, password: string) => void;
}

declare interface User {
	id: number;
	username: string;
	name: string;
	profilePicture: string;
}

export const AuthContex = createContext({} as AuthState);

export const useAuthContext = () => useContext(AuthContex);

export const AuthProvider = ({ children }: PropsWithChildren) => {
	const [user, setUser] = usePrersistedState<User | undefined>('user', undefined);

	const loginWithEmailandPassword = async (username: string, password: string) => {
		try {
			console.log({ username, password });
			const formData = { username, password };

			const { data } = await axios.post<ResponseSingin>(
				`http://localhost:8080/api/auth/singin`,
				formData,
				{ withCredentials: true }
			);

			return setUser({
				id: data.other.id,
				name: data.other.name,
				username: data.other.username,
				profilePicture: data.other.profilePicture!,
			});
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<AuthContex.Provider
			value={{
				// Propertis
				status: AuthStatus.unauthenticated,
				user: user,

				// Getter
				isAuthenticated: AuthStatus.authenticated === AuthStatus.authenticated,

				// Metods
				loginWithEmailandPassword,
			}}
		>
			{children}
		</AuthContex.Provider>
	);
};
