import { use } from 'react';

import './Navbar.scss';

import avatarPlaceholder from '../../assets/Avatar-Profile-Vector-PNG-Pic.png';
import logo from '../../assets/logo.svg';

import { DarkModeContex } from '../../context/contexts';

import { Bell, ChevronDown, LogOut, Search, SunMoon, User } from 'lucide-react';
import { useAuthContext } from '../../context/Auth.contex';
import { Link, useNavigate } from 'react-router';

import { DropdownMenuCustom } from '../Dropdawn/DropdawCusrom';

export const Navbar = () => {
	const navigate = useNavigate();

	const { toggle } = use(DarkModeContex);

	const { user, logout } = useAuthContext();

	const handelDropDaw = () => {
		const dropDaw = document.querySelector('.user-dropdaw');
		dropDaw?.classList.toggle('active');
	};

	const navbarItems = [
		{
			icon: <User />,
			label: 'Profile',
			shortcut: '⌘E',

			actions: () => navigate(`/profile/${user?.id}`, { viewTransition: true }),
		},
		{
			icon: <Bell />,
			label: 'Notifications',

			actions: () => console.log('Copiar'),
		},

		{
			icon: <SunMoon />,
			label: 'Dark Mode ',
			actions: toggle,
		},
		{ type: 'separator' as const },
		{
			icon: <LogOut />,
			label: 'log out',
			destructive: true,
			shortcut: '⌘⌫',

			actions: logout,
		},
	];

	return (
		<nav className='navbar'>
			<div className='left'>
				<Link to={'/'} viewTransition>
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

					<DropdownMenuCustom
						items={navbarItems}
						trigger={<ChevronDown />}
						menuClassName='custom-menu'
					/>
				</div>
			</div>
		</nav>
	);
};
