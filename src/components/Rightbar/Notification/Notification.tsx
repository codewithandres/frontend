import './Notification.scss';

import { NotificationItem } from './NotificationItem';
import { CheckCheck } from 'lucide-react';

import photo_user from '../../../assets/phot_user.jpg';

export const Notification = () => {
	return (
		<section className='notification'>
			<div className='notification__wrapper'>
				<section className='notification__header'>
					<h2 className='notification__header__title'>Your notifications</h2>
					<button className='notification__header__button'>
						<CheckCheck />
						Mark all as read
					</button>
				</section>

				<section className='notification__body'>
					<NotificationItem
						photouser={photo_user}
						username={'frankies sullivan'}
						isRead={true}
						notificationType='follow'
					/>

					<NotificationItem
						photouser={photo_user}
						username={'frankies sullivan'}
						isRead={true}
						notificationType='like'
					/>

					<NotificationItem
						photouser={photo_user}
						username={'frankies sullivan'}
						isRead={true}
						notificationType='comment'
					/>
				</section>
			</div>
		</section>
	);
};
