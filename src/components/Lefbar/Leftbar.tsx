import './Leftbar.scss';

import avatarPlaceholder from '../../assets/Avatar-Profile-Vector-PNG-Pic.png';

import { useAuthContext } from '../../context/Auth.contex';

import { Home, Compass, UserRoundSearch, Bookmark } from 'lucide-react';

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
						<div>
							<p>{user?.name}</p>
							<span>@{user?.username} </span>
						</div>
					</div>

					<div className='links'>
						<div className='item active '>
							<Home />
							<p>Home </p>
						</div>

						<div className='item'>
							<Compass />
							<p>Explore</p>
						</div>

						<div className='item'>
							<UserRoundSearch />
							<p>People</p>
						</div>

						<div className='item'>
							<Bookmark />
							<p>saved</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
