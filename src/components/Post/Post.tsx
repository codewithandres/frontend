import './post.scss';
import { Link } from 'react-router';

import { Ellipsis, ExternalLink, MessageCircleMore } from 'lucide-react';

import Like from '../Like/Like';

interface PostProps {
	id: number;
	name: string;
	userID: number;
	image: string;
	description: string;
	img: string;
}

export const Post = (post: PostProps) => {
	//  Tempory
	// const isLike = false;

	return (
		<div className='post'>
			<div className='container'>
				<div className='user'>
					<div className='userInfo'>
						<img src={post.image} alt={post.name} loading='lazy' />
						<div className='details'>
							<Link
								to={`/profail/${post.userID}`}
								style={{ textDecoration: 'none', color: 'inherit' }}
							>
								<span className='name'>{post.name}</span>
							</Link>
							<span className='date'>1 min ago</span>
						</div>
					</div>
					<Ellipsis />
				</div>

				<div className='content'>
					<p>{post.description}</p>
					<img src={post.img} alt={post.name} />
				</div>

				<div className='info'>
					<div className='item'>
						<Like /> 12 Likes
					</div>

					<div className='item'>
						<MessageCircleMore /> 9 comments
					</div>

					<div className='item'>
						<ExternalLink /> 12 Likes
					</div>
				</div>
			</div>
		</div>
	);
};
