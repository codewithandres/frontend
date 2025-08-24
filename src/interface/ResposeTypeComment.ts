export declare interface TypeCommets {
	success: boolean;
	comment: Comment[];
}

export declare interface Comment {
	id: number;
	description: string;
	createdAt: Date;
	updatedAt: null;
	userId: number;
	postId: number;
	name: string;
	profilePicture: null;
}
