import './Notification.scss';

import { NotificationItem } from './NotificationItem';
import { CheckCheck } from 'lucide-react';

import photo_user from '../../../assets/phot_user.jpg';

// declare module 'react' {
// 	interface CSSProperties {
// 		'--value'?: number;
// 	}
// }

interface NotificationData {
	id: number;
	photouser: string;
	username: string;
	isRead: boolean;
	notificationType: 'follow' | 'like' | 'comment';
}

export const Notification = () => {
	const notifications: NotificationData[] = [
		{
			id: 1,
			photouser: photo_user,
			username: 'frankies sullivan',
			isRead: true,
			notificationType: 'follow',
		},
		{
			id: 2,
			photouser: photo_user,
			username: 'frankies sullivan',
			isRead: true,
			notificationType: 'like',
		},
		{
			id: 3,
			photouser: photo_user,
			username: 'frankies sullivan',
			isRead: true,
			notificationType: 'comment',
		},
	];

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
					{notifications.map(({ id, photouser, username, isRead, notificationType }) => (
						<NotificationItem
							key={id}
							photouser={photouser}
							username={username}
							isRead={isRead}
							notificationType={notificationType}
						/>
					))}
				</section>
			</div>
		</section>
	);
};
