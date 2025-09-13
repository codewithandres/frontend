import { useMutation, useQueryClient } from '@tanstack/react-query';
import { newFollow } from '../service/actions';
import { toast } from 'sonner';

export const useFollowMutation = () => {
	const queryClient = useQueryClient();

	const followMutation = useMutation({
		mutationFn: newFollow,
		retry: false,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['follows'] });
			toast.success('Followed successfully');
		},

		onError: () => {
			toast.error('Error following user');
		},
	});

	return {
		followMutation,
	};
};
