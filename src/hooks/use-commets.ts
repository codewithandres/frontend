import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { createComment, getComments } from '../service/actions';
import { toast } from 'sonner';

declare interface Options {
	postId: string;
}

export const useComments = ({ postId }: Options) => {
	const queyClient = useQueryClient();

	const commentsQuery = useQuery({
		queryKey: ['comments', { postId }],
		queryFn: () => getComments(postId),
		staleTime: 1000 * 60 * 60,
		retry: false,
	});

	const commentsMutation = useMutation({
		mutationFn: createComment,
		retry: false,

		onSuccess: () => {
			toast.success('Comment created successfully');
			queyClient.invalidateQueries({ queryKey: ['comments', { postId }] });
		},

		onError: () => toast.error('Error creating comment'),
	});

	return { commentsQuery, commentsMutation };
};
