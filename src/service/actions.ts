import type { Datum, Posts } from '../interface/ResponseTypePosts';
import type { Comment, TypeCommets } from '../interface/ResposeTypeComment';
import { makeRequest } from './api/axios';

export const sleep = (ms: number): Promise<void> => {
	return new Promise(resolve => setTimeout(resolve, ms));
};

export const getPosts = async (): Promise<Datum[]> => {
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
	const { data } = await makeRequest.post<PostResponse>('/posts', post);
	return data;
};

// ccomments Actions

export const getComments = async (postId: string): Promise<Comment[]> => {
	sleep(500);
	if (!postId) throw new Error('Post ID is required');

	const controller = new AbortController();

	const params = new URLSearchParams();
	params.append('postId', postId);

	const { data } = await makeRequest.get<TypeCommets>('/comments', {
		params,
		signal: controller.signal,
	});

	controller.abort();

	return data.comment ?? [];
};

declare interface CommentLike {
	comment: string;
	postId: string;
}

export const createComment = async (comment: CommentLike): Promise<PostResponse> => {
	const controller = new AbortController();

	const { data } = await makeRequest.post<PostResponse>('/comments', comment, {
		signal: controller.signal,
	});

	controller.abort();

	return data;
};
