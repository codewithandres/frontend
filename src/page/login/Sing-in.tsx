// import photo_user from '../../assets/phot_user.jpg';

import { Link, useNavigate } from 'react-router';
import { useForm, type SubmitHandler } from 'react-hook-form';

import './singIn.scss';

import { Buttom } from '../../components/Buttom';

import { useAuthContext } from '../../context/Auth.contex';
import { zodResolver } from '@hookform/resolvers/zod';
import { authSingIn } from '../../scheme/auth.scheme';

export const SingIn = () => {
	const { loginWithEmailandPassword } = useAuthContext();

	const { register, handleSubmit, formState } = useForm<TypeFormSingIn>({
		resolver: zodResolver(authSingIn),
	});

	const { username, password } = formState.errors;

	const navigate = useNavigate();

	const onLogin: SubmitHandler<TypeFormSingIn> = async ({ username, password }) => {
		loginWithEmailandPassword(username, password);

		navigate('/');
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
					<form onSubmit={handleSubmit(onLogin)}>
						<input type='text' placeholder='Username' {...register('username')} />
						{username && <span className='error'>{username?.message}</span>}

						<input type='password' placeholder='Password' {...register('password')} />
						{password && <span className='error'>{username?.message}</span>}

						<Buttom>Sing in</Buttom>
					</form>
				</div>
			</div>
		</div>
	);
};
