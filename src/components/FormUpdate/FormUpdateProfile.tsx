import { ImageUp } from 'lucide-react';
import './FormUpdateProfile.scss';

import z from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import clsx from 'clsx';
import { useImagenLoad } from '../../hooks/use-image-load';
import { useProfile } from '../../hooks/use-profile';

const schema = z.object({
	username: z.string().min(3, 'username must be at least 3 character'),
	name: z.string().min(3, 'Name must be at least 3 character'),
	email: z.string().email('Invalid email address'),
	address: z.string(),
	biography: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

export const FormUpdateProfile = (dataProfile: TypeProfile) => {
	const { profileUpdateMutation } = useProfile({ userId: dataProfile.id });

	const profileImage = useImagenLoad();
	const coverImge = useImagenLoad();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>({
		resolver: zodResolver(schema),
		defaultValues: {
			username: dataProfile.username,
			name: dataProfile.name,
			email: dataProfile.email,
			address: dataProfile.address,
			biography: dataProfile.biography,
		},
	});

	const onSubmit = async (data: FormData) => {
		profileUpdateMutation.mutate(data, {
			onSuccess: (data: unknown) => {
				console.log(data);
			},
			onError: (error: unknown) => {
				console.log(error);
			},
		});
	};

	// Todo Subir imagen primero
	// try {
	// 	// subi imagen si exiten
	// 	const profilePhotoUrl = await profileImage.uploadImage();
	// 	const coverPhotoUrl = await coverImge.uploadImage();

	// 	const dataToSend = {
	// 		...data,
	// 		profilePhoto: profilePhotoUrl,
	// 		coverPhoto: coverPhotoUrl,
	// 	};

	// 	console.log(dataToSend);
	// } catch (error) {
	// 	console.log('Error en la peticion', error);
	// }

	return (
		<section className='form-update-wrapper'>
			<form onSubmit={handleSubmit(onSubmit)} className='form-upate'>
				<h2 className='form-title'> Update your data </h2>

				<div className='parent'>
					<div className='input-group div1'>
						<input
							type='text'
							id='username'
							{...register('username')}
							autoComplete='off'
							placeholder='Type username here'
							className={clsx({ 'has-error': !!errors.username })}
						/>
						<label htmlFor='username'>username</label>
					</div>

					<div className='input-group div2'>
						<input
							type='text'
							id='name'
							{...register('name')}
							autoComplete='off'
							placeholder='Type name here'
							className={clsx({ 'has-error': !!errors.name })}
						/>
						<label htmlFor='name'>name</label>
					</div>

					<div className='input-group div3'>
						<input
							type='email'
							{...register('email')}
							id='email'
							autoComplete='off'
							placeholder='Type email here'
							className={clsx({ 'has-error': !!errors.email })}
						/>
						<label htmlFor='email'>email</label>
					</div>

					<div className='input-group div4'>
						<input
							type='text'
							{...register('address')}
							id='adress'
							autoComplete='off'
							placeholder='write your address here'
							className={clsx({ 'has-error': !!errors.address })}
						/>
						<label htmlFor='adress'>adress</label>
					</div>

					<div className={clsx('input-group div5', { 'has-image': profileImage.imagen })}>
						<input
							type='file'
							onChange={profileImage.handleImagenChange}
							id='profile'
							className='input-file'
						/>
						<label htmlFor='profile' className='label-profile'>
							<ImageUp /> {profileImage.imagen ? 'Upload Image' : 'Select an image'}
						</label>
					</div>
					<div className='input-group div6'>
						<input
							type='file'
							id='cover'
							className='input-file'
							onChange={coverImge.handleImagenChange}
						/>
						<label htmlFor='cover' className='label-cover'>
							<ImageUp /> Upload cover Photo
						</label>
					</div>
					<div className='input-group div7'>
						<label htmlFor='biography'> </label>
						<textarea
							id='biography'
							{...register('biography')}
							placeholder='write your biography here'
							className={clsx({ 'has-error': errors.biography })}
						></textarea>
					</div>
				</div>

				<button type='submit'> update </button>
			</form>
		</section>
	);
};
