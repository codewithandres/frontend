import { BrowserRouter, Route, Routes } from 'react-router';
import { SingUp } from './page/register/Sing-up';
import { SingIn } from './page/login/Sing-in';
import { RootLayout } from './Layout/Root-layout';
import { Home } from './page/home/Home';
import { Profile } from './page/profile/Profile';

import { AuthLayout } from './Layout/Auth-layout';

import { Toaster } from 'sonner';
import { use } from 'react';
import { DarkModeContex } from './context/contexts';



function App() {
	const { darkMode } = use(DarkModeContex);

	return (
		<>
			<Toaster theme={darkMode ? 'dark' : 'light'} position='top-center' />

			<BrowserRouter>
				<Routes>
					<Route element={<RootLayout />}>
						<Route index element={<Home />} />
						<Route path='profile/:id' element={<Profile />} />
					</Route>

					<Route element={<AuthLayout />} />
					<Route path='sing-in'>
						<Route index element={<SingIn />} />
					</Route>

					<Route path='sing-up'>
						<Route index element={<SingUp />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
