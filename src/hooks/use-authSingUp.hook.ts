import { useState } from 'react';

import type { SubmitHandler } from 'react-hook-form';

import axios, { AxiosError } from 'axios';
import { toast } from 'sonner';

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
				`${import.meta.env.VITE_API_URL || 'https://localhost:8080'}/api/auth/singup`,
				formData
			);

			if (!data.succses) {
				setResponse({ sucsses: false, message: data.message });
			}

			setResponse({ sucsses: true, message: data.message });

			toast.success('account created successfully', {
				position: 'top-center',
			});
		} catch (error) {
			console.log(error);

			if (axios.isAxiosError(error)) {
				const axiosError = error as AxiosError;
				// El servidor respondió con un código de estado fuera del rango 2xx
				if (axiosError.response) {
					if (!axiosError.response.data) return;
					const responseAxios = axiosError?.response?.data as ResppnseMssage;

					setResponse({ sucsses: responseAxios.sucsses, message: responseAxios.message });

					toast.error('Error creating account', {
						description: response?.message,
						position: 'top-center',
						action: {
							// * realizar caulquier accion
							label: 'Close',
							onClick: () => toast.dismiss(),
						},
					});
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
