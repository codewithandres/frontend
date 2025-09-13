import { useState, type ChangeEvent } from 'react';
import { useEdgeStore } from '../lib/edgestore';

// amazonq-ignore-next-line
export const useImagenLoad = () => {
	const { edgestore } = useEdgeStore();

	const [imagen, setImagen] = useState<File | null>();
	const [uploadProgres, setUploadProgres] = useState<number>(0);
	const [imagenPreview, setImagenPreview] = useState<string>('');

	const handleImagenChange = ({ target }: ChangeEvent<HTMLInputElement>): void => {
		const file = target.files?.[0];
		if (file) {
			if (imagenPreview) URL.revokeObjectURL(imagenPreview);

			setImagen(file);
			setImagenPreview(URL.createObjectURL(file));
		}
	};

	const removeImage = (): void => {
		setImagen(null);
		setImagenPreview('');
		setUploadProgres(0);
	};

	const uploadImage = async (): Promise<string | null> => {
		if (!imagen) return null;
		try {
			const { url } = await edgestore.PrivateFiles.upload({
				file: imagen,
				input: { type: 'private' },
				onProgressChange: (progress: number) => setUploadProgres(progress),
			});
			return url;
		} catch (error) {
			console.log(error);
			setUploadProgres(0);
			return null;
		}
	};

	return {
		// Properties
		imagen,
		imagenPreview,
		uploadProgres,

		// methods
		handleImagenChange,
		removeImage,
		uploadImage,
	};
};
