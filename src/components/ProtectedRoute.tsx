import { Navigate } from 'react-router';

export const ProtectedRoute = ({ children }: PropsChildren) => {
	// const { user } = use(AuthContext);
	const user = true;

	if (!user) {
		return <Navigate to={'/sing-in'} />;
	}

	return <div>{children}</div>;
};
