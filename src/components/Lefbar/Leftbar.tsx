import { use } from 'react';

import './Leftbar.scss';

import avatarPlaceholder from '../../assets/Avatar-Profile-Vector-PNG-Pic.png';

import { useAuthContext } from '../../context/Auth.contex';

import {
	ContactRound,
	Group,
	Store,
	TvMinimalPlay,
	Clock2,
	CalendarClock,
	Gamepad2,
	Images,
	Clapperboard,
	Mail,
} from 'lucide-react';

export const Leftbar = () => {
	const { user } = useAuthContext();
	return (
		<div className='leftbar'>
			<div className='container'>
				<div className='menu'>
					<div className='user'>
						<img
							src={user?.profilePicture ?? avatarPlaceholder}
							width={30}
							height={30}
							loading='lazy'
						/>

						<span>{user?.username} </span>
					</div>

					<div className='item'>
						<ContactRound />
						<p>Friends</p>
					</div>

					<div className='item'>
						<Group />
						<p>Groups</p>
					</div>

					<div className='item'>
						<Store />
						<p>Marketplace</p>
					</div>

					<div className='item'>
						<TvMinimalPlay />
						<p>Watch</p>
					</div>

					<div className='item'>
						<TvMinimalPlay />
						<p>Watch</p>
					</div>

					<div className='item'>
						<Clock2 />
						<p>Memories</p>
					</div>
				</div>

				<hr />
				<div className='menu'>
					<p>Your shorcuths</p>

					<div className='item'>
						<CalendarClock />
						<p>Events</p>
					</div>

					<div className='item'>
						<Gamepad2 />
						<p>Gamer</p>
					</div>

					<div className='item'>
						<Clock2 />
						<p>Memories</p>
					</div>

					<div className='item'>
						<Images />
						<p>Gallery</p>
					</div>

					<div className='item'>
						<Clapperboard />
						<p>Videos</p>
					</div>

					<div className='item'>
						<Mail />
						<p>Message</p>
					</div>
				</div>
			</div>
		</div>
	);
};
