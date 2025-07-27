import './Rightbar.scss';

import { SuggestionFriend } from './Suggestion-friend/Suggestion-friend';
import { Notification } from './Notification/Notification';

export const Rightbar = () => {
	return (
		<div className='righ-sidebar'>
			<div className='container'>
				{/* user suggestion */}
				<SuggestionFriend />

				{/* user activities  */}
				<Notification />
			</div>
		</div>
	);
};
