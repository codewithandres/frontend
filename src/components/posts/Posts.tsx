import { usePosts } from '../../hooks/use-posts';
import { CreatePost } from '../CreatePost/CreatePost';

import { Post } from '../Post/Post';
import { PostSkeleton } from '../Post/PostSkeleton';

import './posts.scss';

export const Posts = () => {
	const { postsQuery } = usePosts();
	
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
