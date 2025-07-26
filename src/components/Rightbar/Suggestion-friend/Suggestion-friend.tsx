import './seggestion-friend.scss';

import { Plus } from 'lucide-react';
import photo_user from '../../../assets/phot_user.jpg';

export const SuggestionFriend = () => {
	return (
		<section className='suggestion__friend'>
			<div className='wrapper__find'>
				{/* sections Friends */}
				<section className='friends'>
					<h2 className='find__title'> Find friends </h2>

					<div className='friend__wrapper'>
						<picture className='friends-list'>
							<figure className='friend__wrapper__item'>
								<img
									src={photo_user}
									alt='photo user '
									width={40}
									height={40}
									loading='lazy'
								/>
							</figure>

							<figure className='friend__wrapper__item'>
								<img
									src={photo_user}
									alt='photo user '
									width={40}
									height={40}
									loading='lazy'
								/>
							</figure>

							<figure className='friend__wrapper__item'>
								<img
									src={photo_user}
									alt='photo user '
									width={40}
									height={40}
									loading='lazy'
								/>
							</figure>

							<figure className='friend__wrapper__item'>
								<figcaption>+2</figcaption>
							</figure>
						</picture>

						<button className='add-friends'>
							<span>Add friends</span>
							<Plus className='icon-add' size={30} />
						</button>
					</div>
				</section>

				{/* section other Friends */}
				<section className='other__wrapper'>
					<div className='other__title'>
						<h2>Other friendss</h2>
						<p> 27 friends</p>
					</div>

					<div className='other__frind'>
						<div className='other__friend__item'>
							<figure className='other__friend__info'>
								<img
									src={photo_user}
									alt='photo user'
									width={40}
									height={40}
									loading='lazy'
								/>
								<div className='info'>
									<h4>Willian More</h4>
									<span>willian@icloud.com</span>
								</div>
							</figure>

							<button className='other__friend__add'>
								<Plus size={18} />
							</button>
						</div>

						<div className='other__friend__item'>
							<figure className='other__friend__info'>
								<img
									src={photo_user}
									alt='photo user'
									width={40}
									height={40}
									loading='lazy'
								/>
								<div className='info'>
									<h4>Linda Wilson</h4>
									<span>linada92@icloud.com</span>
								</div>
							</figure>

							<button className='other__friend__add'>
								<Plus size={18} />
							</button>
						</div>
					</div>
				</section>
			</div>
		</section>
	);
};
