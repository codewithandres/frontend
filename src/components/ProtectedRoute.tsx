import { Navigate } from 'react-router';
import { useAuthContext } from '../context/Auth.contex';

export const ProtectedRoute = ({ children }: PropsChildren) => {
	const { isAuthenticated } = useAuthContext();

	if (!isAuthenticated) return <Navigate to={'/sing-in'} />;

	return <>{children}</>;
};
