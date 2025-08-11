import { useQuery } from '@tanstack/react-query';

import { getPosts } from '../service/actions';

export const usePosts = () => {
	const postsQuery = useQuery({
		queryKey: ['posts'],
		queryFn: () => getPosts(),
		retry: false,
		staleTime: 1000 * 60 * 60,
	});

	return { postsQuery };
};
