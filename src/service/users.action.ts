import type { ResponseMentionSearch, User } from '../interface/ResponseSearchUser';
import { makeRequest } from './api/axios';

export const searchUsers = async (query: string): Promise<ResponseMentionSearch[]> => {
	const controller = new AbortController();

	if (!query.trim()) return [];

	// ? we create the params and clean them by removing the -> @codewithandres
	const params = new URLSearchParams();
	const CleanQuery = query.replaceAll('@', '');

	params.append('q', CleanQuery);

	const { data } = await makeRequest.get<ResponseMentionSearch[]>(`/user/search`, {
		params,
		signal: controller.signal,
	});

	controller.abort();

	const mapperData = data.flat(Infinity);

	return mapperData ?? [];
};

export const getAllUsers = async (): Promise<User[]> => {
	const controller = new AbortController();
	const { data } = await makeRequest.get<User[]>('/user', { signal: controller.signal });

	controller.abort();

	return data ?? [];
};
