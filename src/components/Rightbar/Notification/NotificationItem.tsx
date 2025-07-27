type TypeNotification = 'like' | 'follow' | 'comment';

interface NotificationProps {
	photouser: string;
	username: string;
	isRead: boolean;
	notificationType: TypeNotification;
}

export const NotificationItem = ({
	photouser,
	username,
	isRead,
	notificationType,
}: NotificationProps) => {
	if (notificationType === 'follow') {
		return (
			<div className='notification__body__item'>
				<div className='notification__body__item--info'>
					<img
						src={photouser}
						alt=''
						className='item-info__img'
						loading='lazy'
						width={50}
						height={50}
					/>
					<p className='item-info__text'>
						<span className='item-info__text--bold'>@{username}</span> follow yuo
					</p>
				</div>

				<div className='read'>
					{isRead && <span className='dot__read'></span>}

					<p>2 Hors ago</p>
				</div>
			</div>
		);
	}

	if (notificationType === 'like') {
		return (
			<div className='notification__body__item'>
				<div className='notification__body__item--info'>
					<img
						src={photouser}
						alt=''
						className='item-info__img'
						loading='lazy'
						width={50}
						height={50}
					/>
					<p className='item-info__text'>
						<span className='item-info__text--bold'>@{username}</span> liked your post
					</p>
				</div>

				<div className='read'>
					{isRead && <span className='dot__read'></span>}

					<p>2 Hors ago</p>
				</div>
			</div>
		);
	}

	if (notificationType === 'comment') {
		return (
			<div className='notification__body__item'>
				<div className='notification__body__item--info'>
					<figure>
						<img
							src={photouser}
							alt='imagen user'
							className='item-info__img'
							loading='lazy'
							// width={50}
							// height={50}
						/>
						<p className='item-info__text'>
							<span className='item-info__text--bold'>@{username}</span> follow yuo
						</p>
					</figure>

					<section className='item-info__commet'>
						<p>love the background on this.! would love to learm how</p>
					</section>
				</div>

				<div className='read'>
					{isRead && <span className='dot__read'></span>}

					<p>2 Hors ago</p>
				</div>
			</div>
		);
	}
};
