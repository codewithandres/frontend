import { use } from 'react';
import './stories.scss';
import { AuthContex } from '../../context/Auth.contex';
import { Plus } from 'lucide-react';
import { StoryItem } from '../Story-item';

// TEMPORY
const stories = [
	{
		id: 1,
		name: 'John Doe',
		image:
			'https://www.georgetown.edu/wp-content/uploads/2022/02/Jkramerheadshot-scaled-e1645036825432-1050x1050-c-default.jpg',
	},
	{
		id: 2,
		name: 'Jenny Peres',
		image:
			'https://www.georgetown.edu/wp-content/uploads/2022/02/Jkramerheadshot-scaled-e1645036825432-1050x1050-c-default.jpg',
	},
	{
		id: 3,
		name: 'Sebastian Beleño',
		image:
			'https://www.georgetown.edu/wp-content/uploads/2022/02/Jkramerheadshot-scaled-e1645036825432-1050x1050-c-default.jpg',
	},
	{
		id: 4,
		name: 'Juan Diego',
		image:
			'https://www.georgetown.edu/wp-content/uploads/2022/02/Jkramerheadshot-scaled-e1645036825432-1050x1050-c-default.jpg',
	},
] as const;

export const Stories = () => {
	const { currentUser } = use(AuthContex);
	if (!currentUser) return;

	return (
		<div className='stories'>
			<StoryItem
				id={currentUser.id}
				image={currentUser.profilePicture}
				name={currentUser.username}
				icon={<Plus />}
			/>

			{stories.map(story => (
				<StoryItem {...story} />
			))}
		</div>
	);
};
