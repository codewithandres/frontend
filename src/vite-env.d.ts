/// <reference types="vite/client" />

declare interface PropsChildren {
	children: React.ReactNode;
}
declare interface DarkModeContextType {
	readonly darkMode: boolean | string;
	readonly toggle: () => void;
}
declare interface User {
	_id: string;
	username: string;
	avatar: string;
}
declare interface AuthContextType {
	readonly user: User | null;
	readonly login: () => void;
	readonly logout?: () => void;
	// readonly loading: boolean;
	// readonly error: Error | null;
}

declare interface TypeForm {
	username: string;
	name: string;
	email: string;
	password: string;
	confirmPassword: string;
}
