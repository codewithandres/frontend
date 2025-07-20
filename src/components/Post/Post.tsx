import './post.scss';
import { Link } from 'react-router';

import { Ellipsis, ExternalLink, MessageCircleMore } from 'lucide-react';

import Like from '../Like/Like';
import { useState } from 'react';
import { Commets } from '../comments/Commets';

interface PostProps {
	id: number;
	name: string;
	userID: number;
	image: string;
	description: string;
	img: string;
	// Metods
}

export const Post = ({ ...post }: PostProps) => {
	//  Tempory
	// const isLike = false;

	const [commnetOpen, setCommnetOpen] = useState<boolean>(false);

	return (
		<div className='post'>
			<div className='container'>
				<div className='user'>
					<div className='userInfo'>
						<img src={post.image} alt={post.name} loading='lazy' />
						<div className='details'>
							<Link
								to={`profile/${post.userID}`}
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

					<div className='item' onClick={() => setCommnetOpen(!commnetOpen)}>
						<MessageCircleMore strokeWidth='1.25' size={20} /> 9 comments
					</div>

					<div className='item'>
						<ExternalLink strokeWidth='1.25' size={20} /> 12 Likes
					</div>
				</div>

				{commnetOpen && <Commets />}
			</div>
		</div>
	);
};
