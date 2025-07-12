import type { PropsWithChildren } from 'react';

import './Buttom.scss' with { type: 'css'};

export const Buttom = ( {children }: PropsWithChildren ) => {
	return (
		<>
			<button className='button'>
				<span className='shadow'></span>
				<span className='edge'></span>
				<div className='front'>
          <span>{ children} </span>
				</div>
			</button>
		</>
	);
};
