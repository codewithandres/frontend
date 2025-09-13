import { useQuery } from '@tanstack/react-query';

import { getPosts } from '../service/actions';

interface Options {
	userId?: number;
}

export const usePosts = ({ userId }: Options) => {
	const postsQuery = useQuery({
		queryKey: ['posts', { userId }],
		queryFn: () => getPosts(userId),
		staleTime: 2 * 60 * 1000,
		refetchInterval: 5 * 60 * 1000, // Actualiza cada 5 min en background
		refetchIntervalInBackground: true,
	});

	return { postsQuery };
};
