import { use } from 'react';
import './profile.scss';

import photo_profile from '../../assets/phot_user.jpg';
import phot_bacground from '../../assets/photo_bacground.jpg';
import logo_facebook from '../../assets/facebook.svg';
import logo_instagran_light from '../../assets/instagram-light.svg';
import logo_instagran_dark from '../../assets/instagram_dark.svg';
import logo_x_light from '../../assets/x-ligth.svg';
import logo_x_dark from '../../assets/x_dark.svg';
import logo_linkedin from '../../assets/linkedin.svg';
import logo_pinterest from '../../assets/pinterest.svg';

import { DarkModeContex } from '../../context/contexts';
import { EllipsisVertical, Globe, Mail, MapPinHouse } from 'lucide-react';

import { Buttom } from '../../components/Buttom';
import { Posts } from '../../components/posts/Posts';

export const Profile = () => {
	const { darkMode } = use(DarkModeContex);

	return (
		<div className='profile'>
			<div className='images'>
				<img
					src={phot_bacground}
					alt='photo bacground'
					className='cover'
					loading='lazy'
				/>
				<img
					src={photo_profile}
					alt='photo profile'
					className='profile__picture'
					loading='lazy'
				/>
			</div>
			<section className='profile__container'>
				<div className='user__info'>
					<div className='left'>
						<a href='https://facebook.com'>
							<img
								src={logo_facebook}
								alt='logo facebook'
								loading='lazy'
								width={20}
								height={20}
							/>
						</a>

						<a href='https://facebook.com'>
							<img
								src={darkMode ? logo_instagran_dark : logo_instagran_light}
								alt='logo facebook'
								loading='lazy'
								width={20}
								height={20}
							/>
						</a>

						<a href='https://facebook.com'>
							<img
								src={darkMode ? logo_x_dark : logo_x_light}
								alt='logo facebook'
								loading='lazy'
								width={20}
								height={20}
							/>
						</a>

						<a href='https://facebook.com'>
							<img
								src={logo_linkedin}
								alt='logo facebook'
								loading='lazy'
								width={20}
								height={20}
							/>
						</a>

						<a href='https://facebook.com'>
							<img
								src={logo_pinterest}
								alt='logo facebook'
								loading='lazy'
								width={20}
								height={20}
							/>
						</a>
					</div>

					<div className='center'>
						<span className='user__name'>Jenny Perez</span>
						<div className='info'>
							<div className='item'>
								<MapPinHouse />
								<span>Colombia</span>
							</div>

							<div className='item'>
								<Globe />
								<span>www.jenny.com</span>
							</div>
						</div>
						<Buttom>follow</Buttom>
					</div>

					<div className='right'>
						<Mail />
						<EllipsisVertical />
					</div>
				</div>
				<Posts />
			</section>
		</div>
	);
};
