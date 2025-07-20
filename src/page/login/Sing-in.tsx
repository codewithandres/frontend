import { use, type FormEvent } from 'react';
import { Link, useNavigate } from 'react-router';

import './singIn.scss';

import { AuthContex } from '../../context/Auth.contex';
import { Buttom } from '../../components/Buttom';

export const SingIn = () => {
	const navigate = useNavigate();

	const { Login } = use(AuthContex);

	const handleLogin = (event: FormEvent) => {
		event.preventDefault();
		Login();
		navigate('/')
	};

	return (
		<div className='sing-in'>
			<div className='card'>
				<div className='left'>
					<h2>Hello Word</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit velit impedit
						nisi doloribus, laudantium nostrum!
					</p>
					<Link to={'/sing-up'}>
						<span>Don't you have an account.?</span>
					</Link>
				</div>
				<div className='right'>
					<h2>Sing In</h2>
					<form>
						<input type='text' placeholder='Username' />
						<input type='password' placeholder='Password' />

						<Buttom onLogin={handleLogin}>Sing in</Buttom>
					</form>
				</div>
			</div>
		</div>
	);
};
