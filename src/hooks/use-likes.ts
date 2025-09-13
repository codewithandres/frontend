import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { getLikes, toggleLike } from '../service/actions';

interface Options {
	postId: number;
}

const STALE_TIME: number = 1 * 60 * 60;

export const useLikes = ({ postId }: Options) => {
	const queryClient = useQueryClient();

	const likeQuery = useQuery({
		queryKey: ['likes', { postId }],
		queryFn: () => getLikes(postId),
		staleTime: STALE_TIME,
	});

	const likeMutation = useMutation({
		mutationFn: toggleLike,

		// Actualizacion optimista
		// onMutate: async postId => {
		// 	await queryClient.cancelQueries({ queryKey: ['likes', { postId }] });
		// 	const previousLikes = queryClient.getQueryData(['likes', { postId }]);

		// 	// Actualizacion optimistta
		// 	queryClient.setQueryData(['likes', { postId }], (old: LikeDataOld) => ({
		// 		...old,
		// 		isLiked: !old.isLiked,
		// 		count: old.isLiked ? old.count - 1 : old.count + 1,
		// 	}));

		// 	return { previousLikes };
		// },
		// onError: (_, __, context) => {
		// 	if (context?.previousLikes) {
		// 		queryClient.setQueryData(['likes', { postId }], context.previousLikes);
		// 	}
		// },
		retry: true,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['likes', { postId }] });
		},
	});

	return { likeQuery, likeMutation };
};
