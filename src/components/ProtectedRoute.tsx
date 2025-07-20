import { use } from 'react';
import { Navigate } from 'react-router';
import { AuthContex } from '../context/Auth.contex';

export const ProtectedRoute = ({ children }: PropsChildren) => {
	const { currentUser } = use(AuthContex);

	if (!currentUser) {
		return <Navigate to={'/sing-in'} />;
	}

	return <div>{children}</div>;
};
