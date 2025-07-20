import './posts.scss';

import { Post } from '../Post/post';

export const Posts = () => {
	// TEMPORY
	const posts = [
		{
			id: 1,
			name: 'John Doe',
			userID: 1,
			image:
				'https://www.georgetown.edu/wp-content/uploads/2022/02/Jkramerheadshot-scaled-e1645036825432-1050x1050-c-default.jpg',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum explicabo asperiores, vel porro incidunt quas ad ut voluptates vitae voluptatum hic quaerat. Eum, tempore nam? Culpa maiores quas cupiditate quis?',
			img: 'https://www.peru.travel/Contenido/General/Imagen/es/92/1.1/nor-yauyos-cochas.jpg',
		},
		{
			id: 2,
			name: 'Jenny Perez',
			userID: 2,
			image:
				'https://www.georgetown.edu/wp-content/uploads/2022/02/Jkramerheadshot-scaled-e1645036825432-1050x1050-c-default.jpg',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum explicabo asperiores, vel porro incidunt quas ad ut voluptates vitae voluptatum hic quaerat. Eum, tempore nam? Culpa maiores quas cupiditate quis?',
			img: 'https://www.peru.travel/Contenido/General/Imagen/es/92/1.1/nor-yauyos-cochas.jpg',
		},
	];
	return (
		<div className='posts'>
			{posts.map(post => (
				<Post key={post.id} {...post} />
			))}
		</div>
	);
};
