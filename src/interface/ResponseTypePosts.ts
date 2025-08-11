export interface Posts {
	success: boolean;
	data: Datum[];
}

export interface Datum {
	id: number;
	description: string;
	image: null | string;
	createdAt: Date;
	updatedAt: null;
	userId: number;
	name: string;
	profilePicture: null | string;
}
