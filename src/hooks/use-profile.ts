import { useQuery, useSuspenseQuery } from '@tanstack/react-query';
import { getFollows, getProfile } from '../service/actions';

declare interface Options {
	userId: number;
}

export const useProfile = ({ userId }: Options) => {
	const profileQuery = useQuery({
		queryKey: ['profile', { userId }],
		queryFn: () => getProfile(userId),
		staleTime: 1000 * 60 * 60,
	});

	const followsQuery = useSuspenseQuery({
		queryKey: ['follows', { userId }],
		queryFn: () => getFollows(userId),
		staleTime: 1000 * 60 * 60,
	});

	return { profileQuery, followsQuery };
};
