import './CreatePost.scss';

import { use } from 'react';

import { useAuthContext } from '../../context/Auth.contex';

import { Image, SmilePlus, X } from 'lucide-react';
import EmojiPicker, { Theme, EmojiStyle } from 'emoji-picker-react';

import avatarPlaceholder from '../../assets/Avatar-Profile-Vector-PNG-Pic.png';
import { Progress } from './progress-loader/Progress';
import { DarkModeContex } from '../../context/contexts';
import { useCreatePostForm } from '../../hooks/use-create-post-form';

export const CreatePost = () => {
	// custom hook Authentication
	const { user } = useAuthContext();

	// custom hook para crear un post y manejo de formulario
	const {
		// Property/
		description,
		imagenPreview,
		isSubmitDisabled,
		uploadProgres,
		isExpanded,
		isFormExpanded,
		// Methods
		setDescription,
		handleSubmit,
		handleImagenChange,
		removeImage,
		handleEmoji,
		setIsExpanded,
	} = useCreatePostForm();

	// custom hook para el dark mode
	const { darkMode } = use(DarkModeContex);

	return (
		<div className={`create-post ${isFormExpanded && 'expanded'}`}>
			<div className='create-post__header'>
				<img
					src={user?.profilePicture ?? avatarPlaceholder}
					alt='Profile'
					className='create-post__avatar'
				/>
				<span className='create-post__username'>{user?.username}</span>
			</div>

			<form onSubmit={handleSubmit} className='create-post__form'>
				<textarea
					placeholder="What's on your mind?"
					value={description}
					onChange={({ target }) => setDescription(target.value)}
					className='create-post__textarea'
					rows={3}
					name='createPost'
				/>

				<EmojiPicker
					open={isExpanded}
					onEmojiClick={handleEmoji}
					theme={darkMode ? Theme.DARK : Theme.LIGHT}
					className='create-post__emoji-picker'
					emojiStyle={EmojiStyle.FACEBOOK}
					width={'100%'}
					lazyLoadEmojis={true}
					searchDisabled={true}
				/>

				{uploadProgres > 0 && <Progress progresWidt={uploadProgres} />}

				{imagenPreview && (
					<div className='create-post__image-preview'>
						<img src={imagenPreview} alt='Preview' />
						<button
							type='button'
							onClick={removeImage}
							className='create-post__remove-image'
						>
							<X size={20} />
						</button>
					</div>
				)}
				<div className='create-post__actions'>
					<div className='create-post__actions__group'>
						<label className='create-post__image-upload' htmlFor='inputFile'>
							<Image size={20} />
							<span>Photo</span>
							<input
								type='file'
								accept='image/*'
								onChange={handleImagenChange}
								hidden
								name='inputFile'
							/>
						</label>

						<label
							className='create-post__emoji'
							onClick={() => setIsExpanded(current => !current)}
						>
							<SmilePlus className='buttin-emoji' />
						</label>
					</div>

					<button
						type='submit'
						className='create-post__submit'
						disabled={isSubmitDisabled}
					>
						post
					</button>
				</div>
			</form>
		</div>
	);
};
