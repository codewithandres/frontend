export interface ResponseSingin {
	other: Other;
	token: string;
}

export interface Other {
	id: number;
	username: string;
	email: string;
	profilePicture: null;
	bio: null;
	createdAt: Date;
	updatedAt: null;
	name: string;
}
