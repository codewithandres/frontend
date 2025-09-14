import type { JSX } from 'react';
import { useAuthContext } from '../context/Auth.contex';
import { Navigate } from 'react-router';

declare interface Props {
	element: JSX.Element;
}

export const ProtectedRoute = ({ element }: Props) => {
	const { status } = useAuthContext();

	if (status === 'authenticated') {
		return element;
	}

	return <Navigate to='/sing-in' replace />;
};
