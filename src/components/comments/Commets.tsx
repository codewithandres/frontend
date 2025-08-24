import './commets.scss';

import avatarPlaceHolder from '../../assets/placeholder-user-stories.jpg';

import { useAuthContext } from '../../context/Auth.contex';

import { useComments } from '../../hooks/use-commets';
import { useRef } from 'react';
import { formateRelattiveTime } from '../../utils/dateFormater';
import { LoaderBar } from '../Loaders/loader-bar';

declare interface Props {
	postId: string;
}

export const Commets = ({ postId }: Props) => {
	const inputRef = useRef<HTMLInputElement>(null);
	const commetCard = useRef<HTMLDivElement>(null);

	const { user } = useAuthContext();

	const { commentsQuery, commentsMutation } = useComments({ postId });

	const handleComment = () => {
		if (!inputRef.current?.value) return;
		console.log(inputRef.current?.value);

		const commentData = {
			comment: inputRef.current.value,
			postId: postId,
		};

		commentsMutation.mutate(commentData, {
			onSuccess: () => commetCard.current!.classList.add('scale-up-bl'),
			onSettled: () => (inputRef.current!.value = ''),
		});
	};
	console.log(commentsQuery.data);
	console.log(commentsQuery.isFetching);
	return (
		<div className='comments'>
			<div>{commentsQuery.isLoading && <LoaderBar />}</div>

			{commentsQuery.data?.map(comment => (
				<div className='comment' key={comment.id}>
					<img src={comment.profilePicture ?? avatarPlaceHolder} alt={comment.name} />
					<div className='comment__body'>
						<div className='comment__body__name'>{comment.name}</div>
						<div className='comment__body__description'>{comment.description}</div>
					</div>
					<span className='date'>{formateRelattiveTime(comment.createdAt)}</span>
				</div>
			))}

			<div className='comments__write'>
				<img
					src={user?.profilePicture ?? avatarPlaceHolder}
					alt='Photo Profile'
					width={40}
					height={40}
					loading='lazy'
				/>
				<input type='text ' placeholder='Write a comment' required ref={inputRef} />
				<button className='button-comment' onClick={handleComment}>
					comment
				</button>
			</div>
		</div>
	);
};
