import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { getFollows, getProfile, updateProfileAction } from '../service/actions';

declare interface Options {
	userId: number;
}

const STALE_TIME = 1000 * 60 * 60;

export const useProfile = ({ userId }: Options) => {
	const queryClient = useQueryClient();

	const profileQuery = useQuery({
		queryKey: ['profile', { userId }],
		queryFn: () => getProfile(userId),
		staleTime: STALE_TIME,
		enabled: !!userId && userId > 0,
	});

	const followsQuery = useQuery({
		queryKey: ['follows', { userId }],
		queryFn: () => getFollows(userId),
		staleTime: STALE_TIME,
		enabled: !!userId && userId > 0,
	});

	const isFollowing = followsQuery.data?.follower?.some(
		(follow: { followingId: number }) => follow.followingId === userId
	);

	const profileUpdateMutation = useMutation({
		mutationFn: updateProfileAction,

		onMutate: async newProfile => {
			const queryKey = ['profile', { userId }];
			await queryClient.cancelQueries({ queryKey });
			const previousProfile = queryClient.getQueryData(queryKey);

			queryClient.setQueryData(queryKey, newProfile);

			return { previousProfile };
		},

		onError: (_, __, context) => {
			if (context?.previousProfile) {
				queryClient.setQueryData(['profile', { userId }], context.previousProfile);
			}
		},

		onSettled: () => queryClient.invalidateQueries({ queryKey: ['profile', { userId }] }),
	});

	return { profileQuery, followsQuery, profileUpdateMutation, isFollowing };
};
