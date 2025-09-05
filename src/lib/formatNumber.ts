/**
 * Formatea un número a una cadena con sufijos de unidades (k, M, B, T).
 *
 * @param num El número a formatear.
 * @param digits El número de decimales a mostrar.
 * @returns El número formateado como una cadena.
 */

export const formatNumber = (num: number, digis: number = 1): string => {
	const lookup = [
		{ value: 1, symbol: '' },
		{ value: 1e3, symbol: 'k' },
		{ value: 1e6, symbol: 'M' },
		{ value: 1e9, symbol: 'B' },
		{ value: 1e12, symbol: 'T' },
		{ value: 1e15, symbol: 'P' },
		{ value: 1e18, symbol: 'E' },
	];

	const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;

	const item = lookup
		.slice()
		.reverse()
		.find(item => num >= item?.value);

	return item ? (num / item.value).toFixed(digis).replace(rx, '$1') + item.symbol : '0';
};
