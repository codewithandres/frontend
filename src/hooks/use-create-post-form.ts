import { useMemo, useState, type FormEvent } from 'react';
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

	const handleEmoji = useMemo(
		() => (event: EmojiClickData) => {
			setDescription(current => `${current}${event.emoji}`);
			setIsExpanded(true);
			// setIsExpanded(false);
		},
		[setDescription]
	);

	document
		.querySelector('.create-post')
		?.addEventListener('click', () => setIsExpanded(false));

	const handleSubmit = async (event: FormEvent) => {
		event.preventDefault();

		if (!description.trim()) return;

		const imageUrl = await imageUpload.uploadImage();

		postMutation.mutate({ description, ...(imageUrl && { image: imageUrl }) });

		resetForm();
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
