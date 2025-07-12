import { Outlet } from 'react-router';

import './Root-layout.scss';

import { Navbar } from '../components/Navbar/Navbar';
import { Rightbar } from '../components/Rightbar/Rightbar';
import { Leftbar } from '../components/Lefbar/Leftbar';
import { ProtectedRoute } from '../components/ProtectedRoute';

export const RootLayout = () => {
	return (
		<div className='layout-wrapper'>
			<ProtectedRoute>
				<Navbar />
				<div className='layout-wrapper-contet'>
					<Leftbar />

					<Outlet />

					<Rightbar />
				</div>
			</ProtectedRoute>
		</div>
	);
};
