import { useState } from 'react';

import type { SubmitHandler } from 'react-hook-form';

import axios, { AxiosError } from 'axios';

interface ResppnseMssage {
	sucsses: boolean;
	message: string;
}

export const useAuthSingUpHook = () => {
	const [response, setResponse] = useState<ResppnseMssage>();

	const onSubmit: SubmitHandler<TypeForm> = async ({
		name,
		username,
		password,
		email,
	}) => {
		try {
			const formData = { name, username, password, email };
			const { data } = await axios.post(
				`http://localhost:8080/api/auth/singup`,
				formData
			);

			if (!data.succses) {
				setResponse({ sucsses: false, message: data.message });
			}

			setResponse({ sucsses: true, message: data.message });
		} catch (error) {
			console.log(error);

			if (axios.isAxiosError(error)) {
				const axiosError = error as AxiosError;
				// El servidor respondió con un código de estado fuera del rango 2xx
				if (axiosError.response) {
					if (!axiosError.response.data) return;
					const responseAxios = axiosError?.response?.data as ResppnseMssage;

					setResponse({ sucsses: responseAxios.sucsses, message: responseAxios.message });

					console.log(
						'error en la repuesta:',
						axiosError.response.status,
						axiosError.response.data
					);
				}
			}
		}
	};

	return {
		// properties
		response,

		// Metods
		onSubmit,
	} as const;
};
