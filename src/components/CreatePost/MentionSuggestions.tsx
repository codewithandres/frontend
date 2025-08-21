import './MentionSuggestions.scss';
import type { User } from '../../interface/ResponseSearchUser';
import avatarPlaceholder from '../../assets/Avatar-Profile-Vector-PNG-Pic.png';

interface Props {
	suggestions: User[];
	visible: boolean;
	onSelect: (user: User) => void;
}

export const MentionSuggestions = ({ suggestions, visible, onSelect }: Props) => {
	if (!visible || suggestions.length === 0) return null;

	return (
		<div className="mention-suggestions">
			{suggestions.map(user => (
				<div
					key={user.id}
					className="mention-item"
					onClick={() => onSelect(user)}
				>
					<img src={user.profilePicture || avatarPlaceholder} alt={user.username} />
					<span>@{user.username}</span>
				</div>
			))}
		</div>
	);
};