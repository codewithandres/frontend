import React, { createContext, useContext, type PropsWithChildren } from 'react';
import { usePrersistedState } from '../hooks/use-prersistedState';
import axios from 'axios';
import type { ResponseSingin } from '../interface/responseTypeSingin';

type AuthStatus = 'authenticated' | 'unauthenticated';

interface User {
	id: number;
	username: string;
	name: string;
	profilePicture: string;
}

interface AuthState {
	status: AuthStatus;
	user: User | null;
	isAuthenticated: boolean;
	loginWithEmailAndPassword: (username: string, password: string) => Promise<void>;
	logout: () => void;
}

export const AuthContext: React.Context<AuthState> = createContext({} as AuthState);

export const useAuthContext = (): AuthState => useContext(AuthContext);

export const AuthProvider = ({ children }: PropsWithChildren) => {
	const [user, setUser] = usePrersistedState<User | null>('user', null);

	const loginWithEmailAndPassword = async (
		username: string,
		password: string
	): Promise<void> => {
		try {
			const { data } = await axios.post<ResponseSingin>(
				'http://localhost:8080/api/auth/singin',
				{ username, password },
				{ withCredentials: true }
			);

			setUser({
				id: data.other.id,
				name: data.other.name,
				username: data.other.username,
				profilePicture: data.other.profilePicture!,
			});
		} catch (error) {
			console.error('Login failed:', error);
		}
	};

	const logout = () => {
		setUser(null);
		localStorage.removeItem('user');
	};

	const status: AuthStatus = user ? 'authenticated' : 'unauthenticated';

	return (
		<AuthContext.Provider
			value={{
				status,
				user,
				isAuthenticated: !!user,
				loginWithEmailAndPassword,
				logout,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};
