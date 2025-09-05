import { ImageUp } from 'lucide-react';
import './FormUpdateProfile.scss';

export const FormUpdateProfile = () => {
	return (
		<section className='form-update-wrapper'>
			<form action='' className='form-upate'>
				<h2 className='form-title'> Update your data </h2>

				<div className='parent'>
					<div className='input-group div1'>
						<input
							type='text'
							id='username'
							name='username'
							required
							autoComplete='off'
							placeholder='Type username here'
							autoFocus
						/>
						<label htmlFor='username'>username</label>
					</div>

					<div className='input-group div2'>
						<input
							type='text'
							name='name'
							id='name'
							required
							autoComplete='off'
							placeholder='Type name here'
						/>
						<label htmlFor='name'>name</label>
					</div>

					<div className='input-group div3'>
						<input
							type='email'
							name='email'
							id='email'
							required
							autoComplete='off'
							placeholder='Type email here'
						/>
						<label htmlFor='email'>email</label>
					</div>

					<div className='input-group div4'>
						<input
							type='text'
							name='adress'
							id='adress'
							required
							autoComplete='off'
							placeholder='write your address here'
						/>
						<label htmlFor='adress'>adress</label>
					</div>

					<div className='input-group div5'>
						<input type='file' id='profile' required className='input-file' />
						<label htmlFor='profile' className='label-profile'>
							<ImageUp /> Upload Profile Photo
						</label>
					</div>
					<div className='input-group div6'>
						<input type='file' id='cover' required className='input-file' />
						<label htmlFor='cover' className='label-cover'>
							<ImageUp /> Upload cover Photo
						</label>
					</div>
					<div className='input-group div7'>
						<label htmlFor='biography'> </label>
						<textarea
							name='biography'
							id='biography'
							placeholder='write your biography here'
							required
						></textarea>
					</div>
				</div>

				<button type='submit'> update </button>
			</form>
		</section>
	);
};
