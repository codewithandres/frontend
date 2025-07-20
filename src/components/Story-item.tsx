import type { ReactNode } from 'react';

interface StoryItemProps {
	id: number;
	name: string;
	image: string;
	icon?: ReactNode;
}

export const StoryItem = ({ id, name, image, icon }: StoryItemProps) => {
	return (
		<div className='story' key={id}>
			<img src={image} alt={name} loading='lazy' />
			<span>{name}</span>

			{icon && <button>{icon}</button>}
		</div>
	);
};
