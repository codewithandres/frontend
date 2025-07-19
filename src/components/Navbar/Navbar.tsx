import { use } from 'react';
import './Navbar.scss';

import { Link } from 'react-router';

import { DarkModeContex } from '../../context/contexts';

import { Bell, House, LayoutGrid, Mail, Search, SunMoon, UserRound } from 'lucide-react';
import photo_user from '../../assets/photo-user.webp';

export const Navbar = () => {
	const { toggle } = use(DarkModeContex);

	return (
		<nav className='navbar'>
			<div className='left'>
				<Link to={'/home'}>
					<span> codewithsocial </span>
				</Link>

				<House size={20} />
				<SunMoon size={20} onClick={toggle} />
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
