import './home.scss';

import { Stories } from '../../components/stories/stories';
import { Post } from '../../components/posts/Post';

export const Home = () => {
	return (
		<div className='home'>
			<Stories />
			<Post />
		</div>
	);
};
