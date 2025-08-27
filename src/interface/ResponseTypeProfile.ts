export interface ProfileType {
	success: boolean;
	user: ProfileUser;
}

export interface ProfileUser {
	id: number;
	username: string;
	email: string;
	profilePicture: null;
	prfile_cover: null;
	bio: null;
	createdAt: Date;
	updatedAt: null;
	name: string;
}
