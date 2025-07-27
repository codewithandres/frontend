import { use } from 'react';
import './Navbar.scss';

import { Link } from 'react-router';

import { DarkModeContex } from '../../context/contexts';

import {
	Bell,
	ChevronDown,
	House,
	LayoutGrid,
	LogOut,
	Mail,
	Search,
	SunMoon,
	User,
	UserRound,
} from 'lucide-react';
import { AuthContex } from '../../context/Auth.contex';

export const Navbar = () => {
	const { toggle } = use(DarkModeContex);
	const { currentUser } = use(AuthContex);

	console.log(currentUser);

	return (
		<nav className='navbar'>
			<div className='left'>
				<Link to={'/home'}>
					<span> codewithsocial </span>
				</Link>

				{/* <House size={20} />
				<LayoutGrid size={20} /> */}
				<SunMoon size={20} onClick={toggle} />

				<div className='search'>
					<Search size={20} />
					<input type='search' placeholder='look for' required />
				</div>
			</div>

			<div className='right'>
				<div className='user'>
					<img
						src={currentUser?.profilePicture}
						alt='Imagen del usuario'
						loading='lazy'
					/>
					<span>{currentUser?.username}</span>
					<ChevronDown />
				</div>

				<div className='user-dropdaw'>
					<ul className='user-dropdaw__menu'>
						<li className='user-dropdaw__item'>
							<User /> <span> Profile </span>
						</li>
						<li className='user-dropdaw__item'>
							<Bell /> <span> Notifications </span>
						</li>
						<li className='user-dropdaw__item'>
							<LogOut /> <span> log out </span>
						</li>
					</ul>
				</div>

				{/* <UserRound size={20} />
				<Mail size={20} />
				<Bell size={20} /> */}
			</div>
		</nav>
	);
};
