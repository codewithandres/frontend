import { use } from 'react';
import './commets.scss';
import { AuthContex } from '../../context/Auth.contex';
import ButtonSend from '../button-send/Button-send';

export const Commets = () => {
	const comentsList = [
		{
			id: 1,
			description: 'es un lugar muy hermosos me da gsito que allas podido ir',
			name: 'Jenny Perrez',
			userID: 1,
			profileImage:
				'https://www.georgetown.edu/wp-content/uploads/2022/02/Jkramerheadshot-scaled-e1645036825432-1050x1050-c-default.jpg',
		},
		{
			id: 2,
			description: 'En vacacones fui con mi familia fuy una expreriencia maravillosa',
			name: 'Jone Doe',
			userID: 2,
			profileImage:
				'https://www.georgetown.edu/wp-content/uploads/2022/02/Jkramerheadshot-scaled-e1645036825432-1050x1050-c-default.jpg',
		},
	];

	const { currentUser } = use(AuthContex);

	return (
		<div className='comments'>
			<div className='comments__write'>
				<img
					src={currentUser?.profilePicture}
					alt='Photo Profile'
					width={40}
					height={40}
					loading='lazy'
				/>
				<input type='text ' placeholder='Write a comment' required />
				<ButtonSend className='comment-butto'>Comment</ButtonSend>
			</div>
			{comentsList.map(coment => (
				<div className='comment' key={coment.id}>
					<img src={coment.profileImage} alt={coment.name} />
					<div className='comment__body'>
						<div className='comment__body__name'>{coment.name}</div>
						<div className='comment__body__description'>{coment.description}</div>
					</div>
					<span className='date'>1 Hour ago</span>
				</div>
			))}
		</div>
	);
};
