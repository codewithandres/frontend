import { usePosts } from '../../hooks/use-posts';

import { Post } from '../Post/Post';
import { PostSkeleton } from '../Post/PostSkeleton';

import './posts.scss';

export const Posts = () => {
	const { postsQuery } = usePosts();

	// console.log(postsQuery.error);

	console.log(postsQuery.data);

	return (
		<div className='posts'>
			{postsQuery.isLoading && <PostSkeleton count={3} />}

			{postsQuery.isError && <span>Error al cargar las entradas</span>}

			{postsQuery.data?.map(post => (
				<Post key={post.id} Post={post} />
			))}
		</div>
	);
};
