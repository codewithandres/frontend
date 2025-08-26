export interface TypesLikes {
	success: boolean;
	message?: string;
	likes: Like[];
}

export interface Like {
	userId: number;
}
