// import photo_user from '../../assets/phot_user.jpg';

import { Link, useNavigate } from 'react-router';
import { useForm, type SubmitHandler } from 'react-hook-form';

import { useAuthContext } from '../../context/Auth.contex';
import { zodResolver } from '@hookform/resolvers/zod';
import { authSingIn } from '../../scheme/auth.scheme';
import clsx from 'clsx';

import './singIn.scss';
import { useEffect } from 'react';

export const SingIn = () => {
	const navigate = useNavigate();

	const { loginWithEmailAndPassword, status } = useAuthContext();

	useEffect(() => {
		if (status === 'authenticated') {
			navigate('/', { viewTransition: true });
		}
	}, [navigate, status]);

	const { register, handleSubmit, formState } = useForm<TypeFormSingIn>({
		resolver: zodResolver(authSingIn),
	});

	const { username, password } = formState.errors;

	const onLogin: SubmitHandler<TypeFormSingIn> = ({ username, password }) => {
		loginWithEmailAndPassword(username, password);

		if (status === 'authenticated') {
			navigate('/', { viewTransition: true });
		}
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
						<input
							className={clsx({ 'has-error': username?.message })}
							type='text'
							placeholder='Username'
							{...register('username')}
						/>
						{username && <span className='error'>{username?.message}</span>}

						<input
							className={clsx({ 'has-error': password?.message })}
							type='password'
							placeholder='Password'
							{...register('password')}
						/>
						{password && <span className='error'>{password?.message}</span>}

						<button className='button-singIn'>Sing in</button>
					</form>
				</div>
			</div>
		</div>
	);
};
