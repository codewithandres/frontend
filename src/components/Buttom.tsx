import type {  ReactNode } from 'react';

import './Buttom.scss' with { type: 'css'};

interface PropsButton { 
	children: ReactNode; 
	// onLogin: () => void;
}

export const Buttom = ( {children, /* onLogin */  }: PropsButton ) => {
	return (
		<>
			<button className='button' >
				<span className='shadow'></span>
				<span className='edge'></span>
				<div className='front'>
          <span>{ children} </span>
				</div>
			</button>
		</>
	);
};
