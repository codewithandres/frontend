export const setItem = (key: string, value: unknown): void => {
	try {
		localStorage.setItem(key, JSON.stringify(value));
	} catch (error) {
		console.error(error);
	}
};

export const getItem = <T>(key: string): T | null => {
	try {
		const item = localStorage.getItem(key);

		if (item === null || item === undefined) return null;

		return JSON.parse(item) as T;
	} catch (error) {
		console.error(error);
		return null;
	}
};
