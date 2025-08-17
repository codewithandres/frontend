import './post.scss';
import { Link } from 'react-router';

import { Ellipsis, ExternalLink, MessageCircleMore } from 'lucide-react';

import Like from '../Like/Like';
import { useState } from 'react';
import { Commets } from '../comments/Commets';
import type { Datum } from '../../interface/ResponseTypePosts';

import placeholderAvat from '../../assets/Avatar-Profile-Vector-PNG-Pic.png';
import { formateRelattiveTime } from '../../utils/dateFormater';

interface PostProps {
	Post: Datum;
}

export const Post = ({ Post }: PostProps) => {
	//  Tempory
	// const isLike = false;

	const [commnetOpen, setCommnetOpen] = useState<boolean>(false);

	return (
		<div className={`post`}>
			<div className='container'>
				<div className='user'>
					<div className='userInfo'>
						<img
							src={Post.profilePicture ?? placeholderAvat}
							alt={Post.name}
							loading='lazy'
						/>

						<div className='details'>
							<Link
								to={`profile/${Post.userId}`}
								style={{ textDecoration: 'none', color: 'inherit' }}
							>
								<span className='name'>{Post.name}</span>
							</Link>
							<span className='date'> {formateRelattiveTime(Post.createdAt)} </span>
						</div>
					</div>
					<Ellipsis />
				</div>

				<div className='content'>
					<p>{Post.description}</p>
					{Post.image && <img src={Post.image} alt={Post.name} />}
				</div>

				<div className='info'>
					<button className='item'>
						<Like /> 12 Likes
					</button>

					<button className='item' onClick={() => setCommnetOpen(!commnetOpen)}>
						<MessageCircleMore strokeWidth='1.25' size={20} /> 9 comments
					</button>

					<button className='item'>
						<ExternalLink strokeWidth='1.25' size={20} /> 12 Likes
					</button>
				</div>

				{commnetOpen && <Commets />}
			</div>
		</div>
	);
};
