Agentic coding - OFF

---

Hola qusiera implementar una caracteristica para subir la imagen de la puclicacion en este caso quiero usar el servicio de edgestore puedes ayudarme ha implementarlo

---

Hola! Te ayudo a implementar EdgeStore para subir imágenes de publicaciones. Primero necesito ver la estructura de tu proyecto para entender cómo está organizado.

---

Ahora voy a revisar el componente CreatePost para entender la estructura actual:

---

Perfecto! Ahora voy a implementar EdgeStore para subir imágenes. Te ayudo con la implementación paso a paso:

## 1. Instalar EdgeStore

Primero necesitas instalar EdgeStore:

```bash
pnpm add @edgestore/react @edgestore/server
```

## 2. Configurar EdgeStore Provider

---

Necesito crear el EdgeStore provider y configuración. Primero creo el archivo de configuración:

```typescript
// src/lib/edgestore.ts
import { createEdgeStoreProvider } from '@edgestore/react';
import { type EdgeStoreRouter } from '@edgestore/server';

const { EdgeStoreProvider, useEdgeStore } = createEdgeStoreProvider<EdgeStoreRouter>();

export { EdgeStoreProvider, useEdgeStore };
```

```typescript
// src/lib/edgestore-server.ts
import { initEdgeStore } from '@edgestore/server';
import { createEdgeStoreNextHandler } from '@edgestore/server/adapters/next';

const es = initEdgeStore.create();

const edgeStoreRouter = es.router({
  publicImages: es.imageBucket({
    maxSize: 1024 * 1024 * 10, // 10MB
  }),
});

export default edgeStoreRouter;
export type EdgeStoreRouter = typeof edgeStoreRouter;
```

## 3. Actualizar el componente CreatePost

Ahora actualizo el componente CreatePost para usar EdgeStore:

```typescript
// src/components/CreatePost/CreatePost.tsx
import { useState } from 'react';
import { useAuthContext } from '../../context/Auth.contex';
import { Image, X, Upload } from 'lucide-react';
import './CreatePost.scss';

import avatarPlaceholder from '../../assets/Avatar-Profile-Vector-PNG-Pic.png';
import { usePostMutation } from '../../hooks/use-postMutation';
import { toast } from 'sonner';
import { useEdgeStore } from '../../lib/edgestore';

export const CreatePost = () => {
	const { user } = useAuthContext();
	const [description, setDescription] = useState('');
	const [image, setImage] = useState<File | null>(null);
	const [imagePreview, setImagePreview] = useState<string>('');
	const [isUploading, setIsUploading] = useState(false);

	const { postMutation } = usePostMutation();
	const { edgestore } = useEdgeStore();

	const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0];
		if (file) {
			setImage(file);
			setImagePreview(URL.createObjectURL(file));
		}
	};

	const removeImage = () => {
		setImage(null);
		setImagePreview('');
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		if (!description.trim() && !image) return;

		setIsUploading(true);
		
		try {
			let imageUrl = '';
			
			if (image) {
				const res = await edgestore.publicImages.upload({
					file: image,
				});
				imageUrl = res.url;
			}

			await postMutation.mutateAsync({ 
				description, 
				image: imageUrl 
			});

			// Reset form
			setDescription('');
			setImage(null);
			setImagePreview('');
			
			toast.success('Post created successfully');
		} catch (error) {
			toast.error('Error creating post');
		} finally {
			setIsUploading(false);
		}
	};

	return (
		<div className='create-post'>
			<div className='create-post__header'>
				<img
					src={user?.profilePicture ?? avatarPlaceholder}
					alt='Profile'
					className='create-post__avatar'
				/>
				<span className='create-post__username'>{user?.username}</span>
			</div>

			<form onSubmit={handleSubmit} className='create-post__form'>
				<textarea
					placeholder="What's on your mind?"
					value={description}
					onChange={e => setDescription(e.target.value)}
					className='create-post__textarea'
					rows={3}
				/>

				{imagePreview && (
					<div className='create-post__image-preview'>
						<img src={imagePreview} alt='Preview' />
						<button
							type='button'
							onClick={removeImage}
							className='create-post__remove-image'
						>
							<X size={20} />
						</button>
					</div>
				)}

				<div className='create-post__actions'>
					<label className='create-post__image-upload'>
						<Image size={20} />
						<span>Photo</span>
						<input type='file' accept='image/*' onChange={handleImageChange} hidden />
					</label>

					<button
						type='submit'
						className='create-post__submit'
						disabled={postMutation.isPending || isUploading}
					>
						{isUploading ? (
							<>
								<Upload size={16} />
								Uploading...
							</>
						) : (
							'Post'
						)}
					</button>
				</div>
			</form>
		</div>
	);
};
```

## 4. Actualizar el hook de mutación

---

Actualizo el hook para manejar la URL de la imagen:

```typescript
// src/hooks/use-postMutation.ts
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createPost } from '../service/actions';

interface CreatePostData {
	description: string;
	image?: string; // URL de la imagen subida
}

export const usePostMutation = () => {
	const queryClient = useQueryClient();

	const postMutation = useMutation({
		mutationFn: (data: CreatePostData) => createPost(data),
		retry: false,
		onSuccess: () => queryClient.invalidateQueries({ queryKey: ['posts'] }),
	});

	return { postMutation };
};
```

## 5. Actualizar el servicio de acciones

---



Actualizo el servicio para manejar la URL de imagen en lugar del archivo:

```typescript
// src/service/actions.ts
import type { Datum, Posts } from '../interface/ResponseTypePosts';
import { makeRequest } from './api/axios';

export const sleep = (ms: number): Promise<void> => {
	return new Promise(resolve => setTimeout(resolve, ms));
};

export const getPosts = async (): Promise<Datum[]> => {
	await sleep(5000);

	const { data } = await makeRequest.get<Posts>('/posts');
	return data.data || [];
};

// Mutation Posts

interface PostData {
	description: string;
	image?: string; // URL de la imagen
}

interface PostResponse {
	success: boolean;
	message: string;
}

export const createPost = async (post: PostData): Promise<PostResponse> => {
	await sleep(2000);

	const { data } = await makeRequest.post<PostResponse>('/posts', post);
	console.log(data);
	return data;
};
```

## 6. Configurar variables de entorno

Necesitas agregar las variables de EdgeStore en tu archivo `.env`:

```env
VITE_EDGESTORE_ACCESS_KEY=your_access_key
VITE_EDGESTORE_SECRET_KEY=your_secret_key
```

## Resumen de la implementación:

1. **EdgeStore Provider**: Configurado para manejar la subida de imágenes
2. **CreatePost actualizado**: Ahora sube la imagen a EdgeStore antes de crear el post
3. **Hook actualizado**: Maneja URLs de imagen en lugar de archivos
4. **Servicio actualizado**: Envía la URL de la imagen al backend

La implementación permite:
- Subir imágenes a EdgeStore
- Mostrar preview de la imagen
- Manejar estados de carga
- Enviar la URL de la imagen al backend en lugar del archivo

¿Necesitas que ajuste algo específico de la implementación?