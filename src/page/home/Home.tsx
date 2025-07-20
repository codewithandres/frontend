import './home.scss';

import { Stories } from '../../components/stories/stories';
import { Posts } from '../../components/posts/Posts';

export const Home = () => {
	return (
		<div className='home'>
			<Stories />
			<Posts />
		</div>
	);
};
