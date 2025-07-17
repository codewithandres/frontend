/// <reference types="vite/client" />

declare interface PropsChildren {
	children: React.ReactNode;
}

declare interface DarkModeContextType {
	readonly darkMode: boolean | string;
	readonly toggle: () => void;
}
