import { useQuery } from '@tanstack/react-query';

import { getPosts } from '../service/actions';

declare interface Options {
	userId?: number;
}

export const usePosts = ({ userId }: Options) => {
	const postsQuery = useQuery({
		queryKey: ['posts', { userId }],
		queryFn: () => getPosts(userId),
		retry: false,
		staleTime: 1000 * 60 * 60,
	});

	return { postsQuery };
};
