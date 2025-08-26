import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { getLikes, toggleLike } from '../service/actions';

declare interface Options {
	postId: number;
}

export const useLikes = ({ postId }: Options) => {
	const queryClient = useQueryClient();

	const likeQuery = useQuery({
		queryKey: ['Likes', { postId }],
		queryFn: () => getLikes(postId),
		staleTime: 100 * 60 * 60,
	});

	const likeMutation = useMutation({
		mutationFn: toggleLike,
		retry: false,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['Likes', { postId }] });
		},
	});

	return { likeQuery, likeMutation };
};
