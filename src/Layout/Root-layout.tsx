import { Outlet } from 'react-router';

import './Root-layout.scss';

import { Navbar } from '../components/Navbar/Navbar';
import { Rightbar } from '../components/Rightbar/Rightbar';
import { ProtectedRoute } from '../components/ProtectedRoute';
import { use } from 'react';

import { DarkModeContex } from '../context/contexts';

import { Leftbar } from '../components/Lefbar/Leftbar';

export const RootLayout = () => {
	const { darkMode } = use(DarkModeContex);

	return (
		<div className={`layout-wrapper  theme-${darkMode ? 'dark' : 'light'} `}>
			<ProtectedRoute>
				<Navbar />
				<div className='layout-wrapper-contet'>
					<Leftbar />

					<div style={{ flex: 5 }}>
						<Outlet />
					</div>

					<Rightbar />
				</div>
			</ProtectedRoute>
		</div>
	);
};
