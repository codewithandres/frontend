import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Link } from 'react-router';
import { Buttom } from '../../components/Buttom';

import './sing-up.scss';
import { authSingUp } from '../../scheme/auth.scheme';
import { useAuthSingUpHook } from '../../hooks/use-authSingUp.hook';

export const SingUp = () => {
	const {
		register,
		handleSubmit,
		formState: { errors, isLoading },

		// watch,
	} = useForm<TypeForm>({ resolver: zodResolver(authSingUp) });

	const { onSubmit } = useAuthSingUpHook();

	return (
		<div className='sing-up'>
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
							className={errors.username ? 'input-invalid' : ''}
						/>
						{errors.username?.message && (
							<span className='error'>{errors.username.message}</span>
						)}

						<input
							type='text'
							placeholder='Joe Done'
							disabled={isLoading}
							{...register('name')}
							className={errors.username ? 'input-invalid' : ''}
						/>
						{errors.name?.message && <span className='error'>{errors.name.message}</span>}

						<input
							type='email'
							placeholder='correo@demo.com'
							disabled={isLoading}
							{...register('email')}
							className={errors.username ? 'input-invalid' : ''}
						/>
						{errors.email?.message && (
							<span className='error'>{errors.email.message}</span>
						)}

						<input
							type='password'
							placeholder='Password'
							{...register('password')}
							disabled={isLoading}
							className={errors.username ? 'input-invalid' : ''}
						/>
						{errors.password?.message && (
							<span className='error'>{errors.password.message}</span>
						)}

						<input
							type='password'
							placeholder='Confirm Password'
							{...register('confirmPassword')}
							disabled={isLoading}
							className={errors.username ? 'input-invalid' : ''}
						/>
						{errors.confirmPassword?.message && (
							<span className='error'>{errors.confirmPassword.message}</span>
						)}

						<Buttom> {isLoading ? 'creating account...' : 'Sing up'} </Buttom>
					</form>
					{/* <div>{JSON.stringify(watch(), null, 2)}</div> */}
				</div>
			</div>
		</div>
	);
};
