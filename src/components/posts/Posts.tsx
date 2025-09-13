import { useParams } from 'react-router';
import { usePosts } from '../../hooks/use-posts';
import { CreatePost } from '../CreatePost/CreatePost';

import { Post } from '../Post/Post';
import { PostSkeleton } from '../Post/PostSkeleton';

import './posts.scss';

export const Posts = () => {
	const { id } = useParams();

	const userId = id ? +id : 0;

	const { postsQuery } = usePosts({ userId });

	return (
		<div className='posts'>
			<CreatePost />

			{postsQuery.isLoading && <PostSkeleton count={3} />}

			{postsQuery.error && <span>Error al cargar las entradas</span>}

			{postsQuery.data?.map(post => (
				<Post key={post.id} Post={post} />
			))}
		</div>
	);
};
