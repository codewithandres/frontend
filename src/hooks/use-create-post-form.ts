import { useState, type FormEvent } from 'react';
import { usePostMutation } from './use-postMutation';
import { useImagenLoad } from './use-image-load';
import type { EmojiClickData } from 'emoji-picker-react';

export const useCreatePostForm = () => {
	const [description, setDescription] = useState<string>('');

	const [isExpanded, setIsExpanded] = useState<boolean>(false);

	const { postMutation } = usePostMutation();

	const imageUpload = useImagenLoad();

	const resetForm = () => {
		setDescription('');
		imageUpload.removeImage();
	};

	const handleEmoji = (event: EmojiClickData) => {
		setDescription(current => `${current}${event.emoji}`);
		setIsExpanded(true);
	};

	const handleSubmit = async (event: FormEvent) => {
		event.preventDefault();

		if (!description.trim()) return;

		try {
			const imageUrl = await imageUpload.uploadImage();

			postMutation.mutate({ description, image: imageUrl });
			resetForm();
		} catch (error) {
			console.log('failed to upload image: ', error);
			// Still allow post creation without image
			postMutation.mutate({ description, image: null });
			resetForm();
		}
	};
	return {
		// Properties
		description,
		isExpanded,

		// Getters
		isSubmitDisabled: !description.trim() || postMutation.isPending,
		isLoading: postMutation.isPending,
		isFormExpanded: isExpanded || Boolean(imageUpload.imagenPreview),

		// Methods
		handleSubmit,
		setDescription,
		...imageUpload,
		handleEmoji,
		setIsExpanded,
	};
};
