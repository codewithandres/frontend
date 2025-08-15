import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createPost } from '../service/actions';
import { toast } from 'sonner';

export const usePostMutation = () => {
	const queyClient = useQueryClient();

	const postMutation = useMutation({
		mutationFn: createPost,
		retry: false,
		onSuccess: () => {
			queyClient.invalidateQueries({ queryKey: ['posts'] });
			toast.success('Post created successfully');
		},
		onError: () => {
			toast.error('Error creating post');
		},
	});

	return { postMutation };
};
