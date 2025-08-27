import { use } from 'react';

import './profile.scss';

import photo_placeholder from '../../assets/placeholder-user-stories.jpg';
import photo_bacground from '../../assets/cover_picture.jpg';
import logo_facebook from '../../assets/facebook.svg';
import logo_instagran_light from '../../assets/instagram-light.svg';
import logo_instagran_dark from '../../assets/instagram_dark.svg';
import logo_x_light from '../../assets/x-ligth.svg';
import logo_x_dark from '../../assets/x_dark.svg';
import logo_linkedin from '../../assets/linkedin.svg';
import logo_pinterest from '../../assets/pinterest.svg';

import { DarkModeContex } from '../../context/contexts';
import { EllipsisVertical, Globe, Mail, MapPinHouse } from 'lucide-react';

import { Posts } from '../../components/posts/Posts';
import { useParams } from 'react-router';
import { useProfile } from '../../hooks/use-profile';
import { useAuthContext } from '../../context/Auth.contex';

export const Profile = () => {
	const { id: currentUser } = useParams();

	const { darkMode } = use(DarkModeContex);

	const { user } = useAuthContext();

	const {
		profileQuery: { data },
	} = useProfile({ userId: +currentUser! });

	const isCurrentUser: boolean = currentUser === user?.id;
	console.log(data);
	return (
		<div className='profile'>
			<div className='images'>
				<img
					src={data?.prfile_cover ?? photo_bacground}
					alt='photo bacground'
					className='cover'
					loading='lazy'
				/>

				<img
					src={data?.profilePicture ?? photo_placeholder}
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
						<span className='user__name'>{data?.name}</span>
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

						{isCurrentUser ? (
							<button className='button-follow'>follow</button>
						) : (
							<button className='button-update'> Update profile</button>
						)}
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
