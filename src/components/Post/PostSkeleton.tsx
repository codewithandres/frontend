import './postSkeleton.scss';

declare interface Options {
	count?: number;
}

export const PostSkeleton = ({ count = 1 }: Options) => {
	return (
		<>
			{[...Array(count)].map((_, index) => (
				<div key={index} className='post-skeleton'>
					<div className='container'>
						<div className='user'>
							<div className='userInfo'>
								<div className='skeleton-avatar'></div>
								<div className='details'>
									<div className='skeleton-name'></div>
									<div className='skeleton-date'></div>
								</div>
							</div>
							<div className='skeleton-menu'></div>
						</div>

						<div className='content'>
							<div className='skeleton-text'></div>
							<div className='skeleton-text short'></div>
							<div className='skeleton-image'></div>
						</div>

						<div className='info'>
							<div className='skeleton-action'></div>
							<div className='skeleton-action'></div>
							<div className='skeleton-action'></div>
						</div>
					</div>
				</div>
			))}
		</>
	);
};
