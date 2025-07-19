import { Outlet } from 'react-router';

import './Root-layout.scss';

import { Navbar } from '../components/Navbar/Navbar';
import { Rightbar } from '../components/Rightbar/Rightbar';
import { Leftbar } from '../components/Lefbar/Leftbar';
import { ProtectedRoute } from '../components/ProtectedRoute';
import { use } from 'react';
import { DarkModeContex } from '../context/contexts';

export const RootLayout = () => {
	const { darkMode } = use(DarkModeContex);

	return (
		<div className={`layout-wrapper  theme-${darkMode ? 'dark' : 'light'} `}>
			<ProtectedRoute>
				<Navbar />
				<div className='layout-wrapper-contet'>
					<Leftbar />

					<div style={{ flex: 6 }}>
						<Outlet />
					</div>

					<Rightbar />
				</div>
			</ProtectedRoute>
		</div>
	);
};
