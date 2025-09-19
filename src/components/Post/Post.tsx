import './post.scss';

import { Bookmark, Copy, Edit, MessageCircleMore, Trash } from 'lucide-react';

import Like from '../Like/Like';

import { lazy, Suspense, useState } from 'react';

import type { Datum } from '../../interface/ResponseTypePosts';

import placeholderAvat from '../../assets/Avatar-Profile-Vector-PNG-Pic.png';

import { formateRelattiveTime } from '../../utils/dateFormater';

import { useComments } from '../../hooks/use-commets';

const Commets = lazy(() => import('../comments/Commets'));

import { Ring } from 'ldrs/react';
import 'ldrs/react/Ring.css';

import { useAuthContext } from '../../context/Auth.contex';
import { useLikes } from '../../hooks/use-likes';
import { Link } from 'react-router';

import NumberFlow, { continuous } from '@number-flow/react';
import { DropdownMenuCustom } from '../Dropdawn/DropdawCusrom';

interface PostProps {
	Post: Datum;
}

const menuItems = [
	{
		icon: <Edit />,
		label: 'Editar',
		shortcut: '⌘E',

		actions: () => console.log('Editar '),
	},
	{
		icon: <Copy />,
		label: 'Copiar enlace',

		actions: () => console.log('Copiar'),
	},
	{ type: 'separator' as const },
	{
		icon: <Trash />,
		label: 'Eliminar',
		destructive: true,
		shortcut: '⌘⌫',

		actions: () => console.log('Eliminar'),
	},
];

export const Post = ({ Post }: PostProps) => {
	const { user } = useAuthContext();

	const [commnetOpen, setCommnetOpen] = useState<boolean>(false);

	const {
		commentsQuery: { data: comments },
	} = useComments({ postId: String(Post.id) });

	const {
		likeQuery: { data: Likes },
		likeMutation,
	} = useLikes({ postId: Post.id });

	if (!user) return;

	const isLike = Likes?.some(like => like.userId === user.id || false);
	const likeCont = Likes?.length ?? 0;

	const postCreatedByTheCurrentUser: boolean = Post.userId === user.id;

	const handleLike = () => {
		likeMutation.mutate(Post.id);
	};

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

					{/* actions Post */}
					<div>
						{postCreatedByTheCurrentUser ? (
							<DropdownMenuCustom items={menuItems} side='bottom' align='end' />
						) : (
							<button>
								<Bookmark />
							</button>
						)}
					</div>
				</div>

				<div className='content'>
					<p>{Post.description}</p>
					{Post.image && <img src={Post.image} alt={Post.name} />}
				</div>

				<div className='info'>
					<button className='item' onClick={handleLike}>
						<Like isCheket={isLike} />
						<NumberFlow plugins={[continuous]} value={likeCont} /> Likes
					</button>

					<button className='item' onClick={() => setCommnetOpen(!commnetOpen)}>
						<MessageCircleMore strokeWidth='1.25' size={20} />
						<NumberFlow plugins={[continuous]} value={comments?.length ?? 0} /> comments
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
