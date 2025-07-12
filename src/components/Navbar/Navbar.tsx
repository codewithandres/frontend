import { Link } from 'react-router';

import './Navbar.scss';
import photo_user from '../../assets/photo-user.webp';

import { Bell, House, LayoutGrid, Mail, Search, SunMoon, UserRound } from 'lucide-react';

export const Navbar = () => {
	return (
		<nav className='navbar'>
			<div className='left'>
				<Link to={'/home'}>
					<span> codewithsocial </span>
				</Link>

				<House size={20} />
				<SunMoon size={20} />
				<LayoutGrid size={20} />

				<div className='search'>
					<Search size={20} />
					<input type='search' placeholder='look for' required />
				</div>
			</div>

			<div className='right'>
				<div className='user'>
					<img src={photo_user} alt='Imagen del usuario' loading='lazy' />
					<span>codewitdandres</span>
				</div>

				<UserRound size={20} />
				<Mail size={20} />
				<Bell size={20} />
			</div>
		</nav>
	);
};
