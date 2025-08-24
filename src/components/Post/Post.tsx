import './post.scss';
import { Link } from 'react-router';

import { Ellipsis, ExternalLink, MessageCircleMore } from 'lucide-react';

import Like from '../Like/Like';

import { lazy, Suspense, useState } from 'react';

import type { Datum } from '../../interface/ResponseTypePosts';

import placeholderAvat from '../../assets/Avatar-Profile-Vector-PNG-Pic.png';

import { formateRelattiveTime } from '../../utils/dateFormater';

import { useComments } from '../../hooks/use-commets';

const Commets = lazy(() => import('../comments/Commets'));

import { Ring } from 'ldrs/react';
import 'ldrs/react/Ring.css';

interface PostProps {
	Post: Datum;
}

export const Post = ({ Post }: PostProps) => {
	//  Tempory
	// const isLike = false;

	const [commnetOpen, setCommnetOpen] = useState<boolean>(false);

	const { commentsQuery } = useComments({ postId: String(Post.id) });

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
						<MessageCircleMore strokeWidth='1.25' size={20} />
						{commentsQuery.data?.length} comments
					</button>

					<button className='item'>
						<ExternalLink strokeWidth='1.25' size={20} /> 12 Likes
					</button>
				</div>

				{commnetOpen && (
					<Suspense
						fallback={
							<div className='loadig-component'>
								<Ring size='30' stroke='2' bgOpacity='0.41' speed='2' color='#ffff' />
							</div>
						}
					>
						<Commets postId={String(Post.id)} />
					</Suspense>
				)}
			</div>
		</div>
	);
};
