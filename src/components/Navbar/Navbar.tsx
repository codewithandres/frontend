import { use } from 'react';

import './Navbar.scss';

import avatarPlaceholder from '../../assets/Avatar-Profile-Vector-PNG-Pic.png';
import logo from '../../assets/logo.svg';

import { DarkModeContex } from '../../context/contexts';

import { Bell, ChevronDown, LogOut, Search, SunMoon, User } from 'lucide-react';
import { useAuthContext } from '../../context/Auth.contex';
import { Link } from 'react-router';

export const Navbar = () => {
	const { toggle } = use(DarkModeContex);

	const { user, logout } = useAuthContext();

	const handelDropDaw = () => {
		const dropDaw = document.querySelector('.user-dropdaw');
		dropDaw?.classList.toggle('active');
	};

	return (
		<nav className='navbar'>
			<div className='left'>
				<Link to={'/'}>
					<img src={logo} alt='logo' width={35} />
					<span> PhotoFrenzy </span>
				</Link>
			</div>

			<div className='search'>
				<Search size={20} />
				<input type='search' placeholder='look for' required />
			</div>

			<div className='right'>
				<div className='user' onClick={handelDropDaw}>
					<img
						src={user?.profilePicture ?? avatarPlaceholder}
						alt='Imagen del usuario'
						loading='lazy'
					/>
					<span>{user?.username}</span>
					<span> </span>
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

						<li className='user-dropdaw__item' onClick={toggle}>
							<SunMoon /> <span> Dark Mode </span>
						</li>

						<li className='user-dropdaw__item' onClick={logout}>
							<LogOut /> <span> log out </span>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};
