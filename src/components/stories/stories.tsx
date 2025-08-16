import './stories.scss';
import placeholderStory from '../../assets/placeholder-user-stories.jpg';
import { useAuthContext } from '../../context/Auth.contex';

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
	const { user } = useAuthContext();
	if (!user) return;

	return (
		<div className='stories'>
			<StoryItem
				id={user.id}
				image={user.profilePicture ?? placeholderStory}
				name={user.username}
				icon={<Plus />}
			/>

			{stories.map(story => (
				<StoryItem {...story} key={story.id} />
			))}
		</div>
	);
};
