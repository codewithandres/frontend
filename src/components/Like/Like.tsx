import './Like.scss';

declare interface Props {
	isCheket: boolean | undefined;
}

const Like = ({ isCheket }: Props) => {
	return (
		<label className='ui-bookmark'>
			<input type='checkbox' checked={!!isCheket} readOnly />
			<div className='bookmark'>
				<svg
					viewBox='0 0 16 16'
					style={{ marginTop: '4px' }}
					className='bi bi-heart-fill'
					height='25'
					width='25'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						d='M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314'
						// fill-rule='evenodd'
					></path>
				</svg>
			</div>
		</label>
	);
};
export default Like;
