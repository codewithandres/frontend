import './Leftbar.scss';
import photo_user from '../../assets/photo-user.webp';
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
	return (
		<div className='leftbar'>
			<div className='container'>
				<div className='menu'>
					<div className='user'>
						<img src={photo_user} width={30} height={30} loading='lazy' />
						<span>codewitdandres</span>
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
