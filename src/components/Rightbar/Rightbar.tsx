import photo_user from '../../assets/photo-user.webp';
import './Rightbar.scss';

export const Rightbar = () => {
	return (
		<div className='righ-sidebar'>
			<div className='container'>
				{/* user suggestion */}
				<div className='item'>
					<span>suggestions for you</span>
					<div className='user'>
						<figure className='user-info'>
							<img
								src={photo_user}
								alt='Photo Profile'
								width={40}
								height={40}
								loading='lazy'
							/>
							<p>
								<figcaption>Jane Doe</figcaption>
							</p>
						</figure>
						<div className='buttons'>
							<button>Follow</button>
							<button>dissmis</button>
						</div>
					</div>
				</div>

				{/* user activities  */}
				<div className='item'>
					<span> latest activities </span>
					<div className='user'>
						<figure className='user-info'>
							<img
								src={photo_user}
								alt='Photo Profile'
								width={40}
								height={40}
								loading='lazy'
							/>

							<p>
								<figcaption>Jane Doe</figcaption>
								changed their cover picture
							</p>
						</figure>
						<span>1 min ago</span>
					</div>
				</div>

				{/* Online Friends  */}
				<div className='item'>
					<span>online friends</span>
					<div className='user'>
						<figure className='user-info'>
							<img
								src={photo_user}
								alt='user photo'
								loading='lazy'
								width={40}
								height={40}
							/>
							<div className='online'></div>
							<span>Jenny Doe</span>
						</figure>
					</div>
				</div>
			</div>
		</div>
	);
};
