export const formateRelattiveTime = (date: Date | string) => {
	const now = new Date();

	const postDate = new Date(date);

	const diffinMs = now.getTime() - postDate.getTime();
	const diffInSeconds = Math.floor(diffinMs / 1000);
	const diffInMinutes = Math.floor(diffInSeconds / 60);
	const diffInHours = Math.floor(diffInMinutes / 60);
	const diffInDays = Math.floor(diffInHours / 24);

	if (diffInSeconds < 60) return 'Hace un momento';
	if (diffInMinutes === 1) return 'hace 1 minuto';
	if (diffInMinutes < 60) return `hace ${diffInMinutes} minutos`;
	if (diffInHours === 1) return `hace 1 hora `;
	if (diffInHours < 24) return `hace ${diffInHours} hora `;
	if (diffInDays === 1) return 'hace 1 dia';
	if (diffInDays < 7) return `hace ${diffInDays} dias`;
	if (diffInDays < 30) return `hace ${Math.floor(diffInDays / 7)} semanas`;
	return `hace ${Math.floor(diffInDays / 30)} Meses`;
};
