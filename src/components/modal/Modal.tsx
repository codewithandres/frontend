// Modal.tsx
import type { ReactNode } from 'react';

import './Modal.scss';

import { flushSync } from 'react-dom';
import { X } from 'lucide-react';

declare interface ModalProps {
	show: boolean;
	onClose: () => void;
	children: ReactNode;
}

const Modal = ({ show, onClose, children }: ModalProps) => {
	if (!show) return null;

	const handleClose = () =>
		document.startViewTransition(() => {
			flushSync(() => onClose());
		});

	return (
		<div className='modal-overlay'>
			<div
				className='modal-content'
				onClick={event => event.stopPropagation()}
				style={{ viewTransitionName: 'edit-button-to-modal' }}
			>
				<button className='modal-close' onClick={handleClose}>
					<X />
				</button>
				{children}
			</div>
		</div>
	);
};

export default Modal;
