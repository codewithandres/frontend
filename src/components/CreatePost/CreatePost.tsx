import { useState } from 'react';
import { useAuthContext } from '../../context/Auth.contex';
import { Image, X } from 'lucide-react';
import './CreatePost.scss';

import avatarPlaceholder from '../../assets/Avatar-Profile-Vector-PNG-Pic.png';
import { usePostMutation } from '../../hooks/use-postMutation';
import { useEdgeStore } from '../../src/lib/edgestore';
import { Progress } from './progress-loader/progress';

export const CreatePost = () => {
	const { user } = useAuthContext();
	const { edgestore } = useEdgeStore();

	const [description, setDescription] = useState('');
	const [image, setImage] = useState<File | null>(null);

	const [imagePreview, setImagePreview] = useState<string>('');
	const [progresLoading, setProgresLoading] = useState<number>(0);

	const { postMutation } = usePostMutation();

	const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0];
		if (file) {
			setImage(file);
			setImagePreview(URL.createObjectURL(file));
		}
	};

	const removeImage = () => {
		setImage(null);
		setImagePreview('');
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		if (!description.trim()) return;

		if (image) {
			const response = await edgestore.PrivateFiles.upload({
				file: image,
				input: { type: 'private' },
				onProgressChange: (progress: number) => setProgresLoading(progress),
			});
			postMutation.mutate({ description, image: response.url });
		}

		postMutation.mutate({ description });

		// Reset form
		setDescription('');
		setImage(null);
		setImagePreview('');
		setProgresLoading(0);
	};

	return (
		<div className='create-post'>
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
					onChange={e => setDescription(e.target.value)}
					className='create-post__textarea'
					rows={3}
				/>
				{progresLoading > 0 && <Progress progresWidt={progresLoading} />}

				{imagePreview && (
					<div className='create-post__image-preview'>
						<img src={imagePreview} alt='Preview' />
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
					<label className='create-post__image-upload'>
						<Image size={20} />
						<span>Photo</span>
						<input type='file' accept='image/*' onChange={handleImageChange} hidden />
					</label>

					<button
						type='submit'
						className='create-post__submit'
						disabled={postMutation.isPending}
					>
						post
					</button>
				</div>
			</form>
		</div>
	);
};
