import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Link, useNavigate } from 'react-router';

import './sing-up.scss';
import { authSingUp } from '../../scheme/auth.scheme';
import { useAuthSingUpHook } from '../../hooks/use-authSingUp.hook';
import { useAuthContext } from '../../context/Auth.contex';
import clsx from 'clsx';
import { useEffect } from 'react';

export const SingUp = () => {
	const navigate = useNavigate();
	const { status } = useAuthContext();

	useEffect(() => {
		if (status === 'authenticated') {
			navigate('/');
		}
	}, [status, navigate]);

	const {
		register,
		handleSubmit,
		formState: { errors, isLoading },

		// watch,
	} = useForm<TypeForm>({ resolver: zodResolver(authSingUp) });

	const { onSubmit } = useAuthSingUpHook();

	return (
		<div className={clsx('sing-up', { 'has-animated': errors })}>
			<div className='card'>
				<div className='left'>
					<h2>Social Networks</h2>
					<p>
						Join our social network and connect with friends, share moments, and discover
						new experiences. Start your journey with us today!{' '}
					</p>
					<Link to={'/sing-in'}>
						<span>Don't you have an account.?</span>
					</Link>
				</div>

				<div className='right'>
					<h2>Sing up</h2>
					<form onSubmit={handleSubmit(onSubmit)}>
						<input
							type='text'
							placeholder='Username'
							{...register('username')}
							disabled={isLoading}
							className={clsx({ 'has-error': errors.username?.message })}
						/>
						{errors.username?.message && (
							<span className='error fade-in-fwd'>{errors.username.message}</span>
						)}

						<input
							type='text'
							placeholder='Joe Done'
							disabled={isLoading}
							{...register('name')}
							className={clsx({ 'has-error': errors.name?.message })}
						/>
						{errors.name?.message && (
							<span className='error fade-in-fwd'>{errors.name.message}</span>
						)}

						<input
							type='email'
							placeholder='correo@demo.com'
							disabled={isLoading}
							{...register('email')}
							className={clsx({ 'has-error': errors.email?.message })}
						/>
						{errors.email?.message && (
							<span className='error fade-in-fwd'>{errors.email.message}</span>
						)}

						<input
							type='password'
							placeholder='Password'
							{...register('password')}
							disabled={isLoading}
							className={clsx({ 'has-error': errors.password?.message })}
						/>
						{errors.password?.message && (
							<span className='error fade-in-fwd'>{errors.password.message}</span>
						)}

						<input
							type='password'
							placeholder='Confirm Password'
							{...register('confirmPassword')}
							disabled={isLoading}
							className={clsx({ 'has-error': errors.confirmPassword?.message })}
						/>
						{errors.confirmPassword?.message && (
							<span className='error fade-in-fwd'>{errors.confirmPassword.message}</span>
						)}

						<button className='button-singIn'>
							{isLoading ? 'creating account...' : 'Sing up'}
						</button>
					</form>
					{/* <div>{JSON.stringify(watch(), null, 2)}</div> */}
				</div>
			</div>
		</div>
	);
};
