// import { SingIn } from './page/login/Sing-in';
import { BrowserRouter, Route, Routes } from 'react-router';
import { SingUp } from './page/register/Sing-up';
import { SingIn } from './page/login/Sing-in';

function App() {
	return (
		<>
			{/* <SingIn /> */}

			<BrowserRouter>
				<Routes>
					<Route path='sing-in'>
						<Route index element={<SingIn />} />
					</Route>
					<Route path='sing-up' element={<SingUp />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
