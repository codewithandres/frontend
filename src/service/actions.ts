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
