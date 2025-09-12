export interface ProfileType {
	success: boolean;
	user: ProfileUser;
	message?: string;
}

export interface ProfileUser {
	id: number;
	username: string;
	email: string;
	profilePicture: null;
	prfile_cover: null;
	bio: string;
	createdAt: Date;
	updatedAt: null;
	name: string;
	address: string;
}
