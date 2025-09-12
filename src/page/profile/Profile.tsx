import './profile.scss';

import { useState } from 'react';

import photo_placeholder from '../../assets/placeholder-user-stories.jpg';
import photo_background from '../../assets/cover_picture.jpg';
import { UserPlus, UserRoundPen } from 'lucide-react';
import NumberFlow, { continuous } from '@number-flow/react';

import { Posts } from '../../components/posts/Posts';
import { Navigate, useParams } from 'react-router';
import { useProfile } from '../../hooks/use-profile';
import { useAuthContext } from '../../context/Auth.contex';
import { formatNumber } from '../../lib/formatNumber';
import { useFollowMutation } from '../../hooks/use-followMutation';
import Modal from '../../components/modal/Modal';
import { flushSync } from 'react-dom';
import { FormUpdateProfile } from '../../components/FormUpdate/FormUpdateProfile';

export const Profile = () => {
	const [showModal, setShowModal] = useState<boolean>(false);

	const { id: currentUser } = useParams();

	const { user } = useAuthContext();

	const {
		profileQuery: { data },
		followsQuery: { data: follows },
	} = useProfile({ userId: +currentUser! });

	const { followMutation } = useFollowMutation();

	if (!currentUser && user?.id) {
		return <Navigate to='/' replace />;
	}

	const isCurrentUser: boolean = +currentUser! === user?.id;

	const onFollower = () => {
		if (!user?.id || !currentUser) return;

		followMutation.mutate({ followerId: user?.id, followingId: +currentUser });
	};

	const handleOpenModal = () =>
		document.startViewTransition(() => {
			flushSync(() => setShowModal(true));
		});

	const handleCloseModal = () =>
		document.startViewTransition(() => {
			flushSync(() => setShowModal(false));
		});

	if (!data) return <Navigate to={'/'} />;

	return (
		<div className='profile'>
			<section className='profile-cover'>
				<picture>
					<img
						src={data?.prfile_cover ?? photo_background}
						alt={data?.username}
						loading='lazy'
					/>
				</picture>
			</section>

			<section className='profile-info'>
				<picture className='profile-info-avatar'>
					<img
						src={data?.profilePicture ?? photo_placeholder}
						alt={data?.name}
						loading='lazy'
						// width={200}
					/>
				</picture>

				<section className=' profile-info-conten '>
					<h3 className='profile-info-name'>{data?.name}</h3>
					<p className='profile-info-bio'>
						{data?.bio ?? 'Lead product Designer at Android'}
					</p>
					<p className='profile-info-país'>
						<img src='https://flagsapi.com/CO/flat/64.png' />
						Santader, Santender Colombia
					</p>

					<section className='followers'>
						<p>
							<span>
								<NumberFlow
									plugins={[continuous]}
									value={+formatNumber(follows?.follower.length ?? 0)}
								/>
							</span>
							followers
						</p>
						<p>
							<span>
								<NumberFlow
									plugins={[continuous]}
									value={+formatNumber(follows?.following.length ?? 0)}
								/>
							</span>
							followed
						</p>
					</section>

					<section className=' profile-info-action '>
						{!isCurrentUser && (
							<button className='follow-action' onClick={onFollower}>
								<span>
									<UserPlus /> Follow
								</span>
								{/* <span>
									<UserRoundCheck /> following
								</span> */}
							</button>
						)}

						{isCurrentUser && (
							<button
								onClick={handleOpenModal}
								className='profile-action-edit'
								style={{
									viewTransitionName: showModal ? 'none' : 'edit-button-to-modal',
									pointerEvents: showModal ? 'none' : 'auto',
								}}
							>
								<span>
									<UserRoundPen /> Edit profile
								</span>
							</button>
						)}
					</section>
				</section>
			</section>

			{/* Modal */}

			<Modal show={showModal} onClose={handleCloseModal}>
				<FormUpdateProfile
					username={data.username}
					name={data.name}
					email={data.email}
					address={data.address}
					profilePhoto={data.profilePicture}
					coverPhoto={data.prfile_cover}
					biography={data.bio}
				/>
			</Modal>

			<Posts />
		</div>
	);
};
