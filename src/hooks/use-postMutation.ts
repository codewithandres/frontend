// This hook manages the mutation state for creating new posts
// It uses React Query's useMutation hook to handle the create post operation
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createPost } from '../service/actions';

export const usePostMutation = () => {
	// Get access to the query client instance
	const queryClient = useQueryClient();

	const postMutation = useMutation({
		// Function that performs the create post API call
		mutationFn: createPost,
		
		// Called before mutation function executes
		// Optimistically updates the posts cache
		onMutate: async newPost => {
			// Cancel any outgoing refetches to avoid overwriting optimistic update
			await queryClient.cancelQueries({ queryKey: ['posts'] });

			// Snapshot the previous posts data
			const previousPost = queryClient.getQueryData(['posts']);

			// Optimistically update the posts cache with new post
			queryClient.setQueryData(['posts'], old => [old, newPost]);

			// Return context with snapshot data
			return { previousPost };
		},
		
		// Called if mutation encounters an error
		// Rolls back to the previous posts state
		onError: (_, __, context) => {
			queryClient.setQueryData(['posts'], context?.previousPost);
		},
		
		// Called when mutation is either successful or has failed
		// Refetch posts to ensure cache is in sync
		onSettled: () => queryClient.invalidateQueries({ queryKey: ['posts'] }),
	});

	return {
		postMutation,
	};
};
