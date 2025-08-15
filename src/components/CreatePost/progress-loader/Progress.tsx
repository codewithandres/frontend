import './progres.scss';

declare interface Options {
	progresWidt: number;
}

export const Progress = ({ progresWidt }: Options) => {
	return (
		<>
			<div className='progress-loader'>
				<div className='progress' data-size={progresWidt}></div>
			</div>
		</>
	);
};
