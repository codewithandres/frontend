import type { Datum, Posts } from '../interface/ResponseTypePosts';
import type { ProfileUser, ProfileType } from '../interface/ResponseTypeProfile';
import type { Comment, TypeCommets } from '../interface/ResposeTypeComment';
import { makeRequest } from './api/axios';
import type { Like, TypesLikes } from '../interface/ResponseTypeLikes';
import type { TypeFollow } from '../interface/ResponsrTypeFollow';

export const getPosts = async (userId?: number): Promise<Datum[]> => {
	const params: URLSearchParams = new URLSearchParams();
	if (userId) params.append('userId', String(userId));

	if (!userId) {
		const { data } = await makeRequest.get<Posts>('/posts');
		return data.data || [];
	}
	const { data } = await makeRequest.get<Posts>('/posts', { params });
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

//? ccomments Actions

export const getComments = async (postId: string): Promise<Comment[]> => {
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

// ? Likes Actions

export const getLikes = async (postId: number): Promise<Like[]> => {
	try {
		if (!postId) throw new Error('Post ID is Required');

		const params = new URLSearchParams();
		params.append('postId', String(postId));

		const { data } = await makeRequest.get<TypesLikes>('/likes', { params });

		if (!data.success) throw new Error(data?.message);
		return data.likes;
	} catch (error) {
		console.error('error getting Likes', error);
		throw error;
	}
};

export const toggleLike = async (postId: number): Promise<void> => {
	try {
		const params = new URLSearchParams();
		params.append('postId', String(postId));

		await makeRequest.post('/likes', {}, { params });
	} catch (error) {
		console.error('error with like action', error);
		throw error;
	}
};

// ? Actions user Porfile

export const getProfile = async (userId: number): Promise<ProfileUser | undefined> => {
	try {
		if (!userId) throw new Error('parameter in required');

		const { data } = await makeRequest.get<ProfileType>(`/user/find/${userId}`);

		if (!data.success) throw new Error(data.message);

		return data.user;
	} catch (error) {
		console.error('error en al peticion ', error);
		throw error;
	}
};

declare interface LikeProfile {
	username: string;
	name: string;
	email: string;
	address: string;
	profilePhoto: string | null;
	coverPhoto: string | null;
	biography: string;
}

type ResponseUpdateAction = Omit<ProfileType, 'user'>;

export const updateProfileAction = async (
	updateprofile: LikeProfile
): Promise<ResponseUpdateAction | undefined> => {
	try {
		const { data } = await makeRequest.put<ResponseUpdateAction>(
			'/user/update',
			updateprofile
		);

		if (!data.success) throw new Error(data.message);

		return data;
	} catch (error) {
		console.error('Error en la peticion ', error);
	}
};

// Actions follows

export const getFollows = async (userId: number): Promise<TypeFollow | undefined> => {
	try {
		if (!userId) throw new Error('parameter in required');

		const params = new URLSearchParams();
		params.append('userId', String(userId));

		const { data: follows } = await makeRequest.get<TypeFollow>(`/follows`, { params });

		return follows ?? { following: [], follower: [] };
	} catch (error) {
		console.error('error en la peticion', error);
		return { following: [], follower: [] };
	}
};

export const newFollow = async ({
	followerId,
	followingId,
}: {
	followerId: number;
	followingId: number;
}) => {
	try {
		if (!followerId && !followingId) throw new Error('parameter in Require');
		const { data } = await makeRequest.post('/follows', { followerId, followingId });

		return data;
	} catch (error) {
		console.error('Error en la peticion', error);
		throw error;
	}
};
