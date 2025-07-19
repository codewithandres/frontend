export const setItem = (key: string, value: unknown): void => {
	try {
		localStorage.setItem(key, JSON.stringify(value));
	} catch (error) {
		console.log(error);
		return;
	}
};

export const getItem = <T>(key: string): T | null => {
	try {
		const item = localStorage.getItem(key);
		return item ? (JSON.parse(item) as T) : null;
	} catch (error) {
		console.log(error);
		return null;
	}
};
