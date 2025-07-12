import { Navigate } from 'react-router';

export const ProtectedRoute = ({ children }: PropsChildren) => {
	const current_user = true;

	if (!current_user) {
		return <Navigate to={'/sing-in'} />;
	}

	return <div>{children}</div>;
};
