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

declare interface PostLike {
	description: string;
	image?: string | null;
}

declare interface PostResponse {
	success: boolean;
	message: string;
}

export const createPost = async (post: PostLike): Promise<PostResponse> => {
	console.log({ post });

	await sleep(2000);

	const { data } = await makeRequest.post<PostResponse>('/posts', post);
	console.log(data);
	return data;
};
