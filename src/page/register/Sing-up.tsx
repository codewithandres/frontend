import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Link } from 'react-router';
import { Buttom } from '../../components/Buttom';

import './sing-up.scss';
import { authSingUp } from '../../scheme/auth.scheme';

export const SingUp = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		// watch,
	} = useForm<TypeForm>({ resolver: zodResolver(authSingUp) });

	const onSubmit: SubmitHandler<TypeForm> = data => console.log(data);

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
						<input type='text' placeholder='Username' {...register('username')} />
						{errors.username?.message && (
							<span className='error'>{errors.username.message}</span>
						)}

						<input type='text' placeholder='Joe Done' {...register('name')} />
						{errors.name?.message && <span className='error'>{errors.name.message}</span>}

						<input type='email' placeholder='correo@demo.com' {...register('email')} />
						{errors.email?.message && (
							<span className='error'>{errors.email.message}</span>
						)}
						<input type='password' placeholder='Password' {...register('password')} />
						{errors.password?.message && (
							<span className='error'>{errors.password.message}</span>
						)}

						<input
							type='password'
							placeholder='Confirm Password'
							{...register('confirmPassword')}
						/>
						{errors.confirmPassword?.message && (
							<span className='error'>{errors.confirmPassword.message}</span>
						)}
						<Buttom>Sing up</Buttom>
					</form>
					{/* <div>{JSON.stringify(watch(), null, 2)}</div> */}
				</div>
			</div>
		</div>
	);
};
