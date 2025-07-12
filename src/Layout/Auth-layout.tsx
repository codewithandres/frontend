import React from 'react';
import { ProtectedRoute } from '../components/ProtectedRoute';
import { Outlet } from 'react-router';

export const AuthLayout = () => {
	return (
		<ProtectedRoute>
			<Outlet />
		</ProtectedRoute>
	);
};
