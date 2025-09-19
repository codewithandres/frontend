//? className: Para el wrapper principal

//? menuClassName: Para el menú desplegable

//? buttonClassName: Para el botón trigger

import { Ellipsis } from 'lucide-react';
import {
	useState,
	useRef,
	useEffect,
	useCallback,
	type JSX,
	type ReactNode,
} from 'react';
import clsx from 'clsx';

import './dropdawnCustom.scss';

interface DropdownItem {
	icon?: JSX.Element;
	label: string;
	actions?: () => void;
	disabled?: boolean;
	destructive?: boolean;
	shortcut?: string;
}

interface DropdownSeparator {
	type: 'separator';
}

type DropdownMenuItemType = DropdownItem | DropdownSeparator;

interface Props {
	items: DropdownMenuItemType[];
	trigger?: ReactNode;
	align?: 'start' | 'end';
	side?: 'top' | 'bottom';
	className?: string;
	menuClassName?: string;
	buttonClassName?: string;
}

export const DropdownMenuCustom = ({
	items,
	trigger,
	align = 'end',
	side = 'bottom',
	buttonClassName,
	className,
	menuClassName,
}: Props) => {
	const [isOpen, setIsOpen] = useState(false);
	const [focusedIndex, setFocusedIndex] = useState(-1);
	const wrapperRef = useRef<HTMLDivElement>(null);
	const menuRef = useRef<HTMLDivElement>(null);

	const validItems = items.filter(
		(item): item is DropdownItem => !('type' in item) || item.type !== 'separator'
	);

	const closeMenu = useCallback(() => {
		setIsOpen(false);
		setFocusedIndex(-1);
	}, []);

	// Cerrar al hacer clic fuera
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
				closeMenu();
			}
		};

		if (isOpen) {
			document.addEventListener('mousedown', handleClickOutside);
			return () => document.removeEventListener('mousedown', handleClickOutside);
		}
	}, [isOpen, closeMenu]);

	// Navegación por teclado
	useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
			if (!isOpen) return;

			switch (event.key) {
				case 'Escape':
					event.preventDefault();
					closeMenu();
					break;
				case 'ArrowDown':
					event.preventDefault();
					setFocusedIndex(prev => (prev < validItems.length - 1 ? prev + 1 : 0));
					break;
				case 'ArrowUp':
					event.preventDefault();
					setFocusedIndex(prev => (prev > 0 ? prev - 1 : validItems.length - 1));
					break;
				case 'Enter':
				case ' ':
					event.preventDefault();
					if (focusedIndex >= 0 && focusedIndex < validItems.length) {
						const item = validItems[focusedIndex];
						if (!item.disabled) {
							item.actions?.();
							closeMenu();
						}
					}
					break;
			}
		};

		if (isOpen) {
			document.addEventListener('keydown', handleKeyDown);
			return () => document.removeEventListener('keydown', handleKeyDown);
		}
	}, [isOpen, focusedIndex, validItems, closeMenu]);

	const toggleDropdown = () => {
		setIsOpen(!isOpen);
		setFocusedIndex(-1);
	};

	const handleItemClick = (item: DropdownItem) => {
		if (item.disabled) return;
		item.actions?.();
		closeMenu();
	};

	return (
		<div ref={wrapperRef} className={clsx(' dropdown-wrapper', className)}>
			<button
				className={clsx('dropdown-button', buttonClassName, isOpen && 'is-active')}
				onClick={toggleDropdown}
				aria-haspopup='menu'
				aria-expanded={isOpen}
			>
				{trigger || <Ellipsis />}
			</button>

			<div
				ref={menuRef}
				className={clsx(
					'dropdown-menu',
					`align-${align}`,
					`side-${side}`,
					menuClassName,
					isOpen && 'is-active'
				)}
				role='menu'
				aria-orientation='vertical'
			>
				{items.map((item, index) => {
					if ('type' in item && item.type === 'separator') {
						return <div key={`separator-${index}`} className='dropdown-separator' />;
					}

					const dropdownItem = item as DropdownItem;
					const validIndex = validItems.indexOf(dropdownItem);
					const isFocused = focusedIndex === validIndex;

					return (
						<div
							key={dropdownItem.label}
							className={clsx(
								'dropdown-item',
								dropdownItem.disabled && 'is-disabled',
								dropdownItem.destructive && 'is-destructive',
								isFocused && 'is-focused'
							)}
							role='menuitem'
							tabIndex={-1}
							onClick={() => handleItemClick(dropdownItem)}
							onMouseEnter={() => setFocusedIndex(validIndex)}
						>
							<div className='dropdown-item-content'>
								{dropdownItem.icon && (
									<span className='dropdown-item-icon'>{dropdownItem.icon}</span>
								)}
								<span className='dropdown-item-label'>{dropdownItem.label}</span>
							</div>
							{dropdownItem.shortcut && (
								<span className='dropdown-item-shortcut'>{dropdownItem.shortcut}</span>
							)}
						</div>
					);
				})}
			</div>
		</div>
	);
};
