import type {  FormEvent, ReactNode } from 'react';

import './Buttom.scss' with { type: 'css'};

interface PropsButton { 
	children: ReactNode; 
	onLogin?: (event: FormEvent) => void;
}

export const Buttom = ( {children,  onLogin   }: PropsButton ) => {
	return (
		<>
			<button className='button' onClick={onLogin}>
				<span  className='shadow'></span>
				<span className='edge'></span>
				<div className='front'>
          <span>{ children} </span>
				</div>
			</button>
		</>
	);
};
