import { useQuery } from '@tanstack/react-query';
import { getProfile } from '../service/actions';

declare interface Options {
	userId: number;
}

export const useProfile = ({ userId }: Options) => {
	const profileQuery = useQuery({
		queryKey: ['profile', { userId }],
		queryFn: () => getProfile(userId),
		staleTime: 1000 * 60 * 60,
	});

	return { profileQuery };
};
