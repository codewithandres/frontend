import { z } from 'zod';

export const authSingUp = z
	.object({
		username: z
			.string()
			.min(3, { message: 'The username must have at least 3 characters.' })
			.max(20, { message: 'The username must have a maximum of 20 characters.' }),
		email: z.email({
			pattern: z.regexes.unicodeEmail,
			message: 'The email is not valid.',
		}),
		password: z
			.string()
			.min(6, { message: 'The password must have at least 6 characters.' })
			.max(20, { message: 'The password must have a maximum of 20 characters.' }),
		name: z
			.string()
			.min(3, { message: 'The username must have at least 3 characters.' })
			.max(25, { message: 'The username must have a maximum of 20 characters.' }),
		confirmPassword: z.string(),
	})
	.refine(data => data.password === data.confirmPassword, {
		path: ['confirmPassword'],
		message: 'The passwords do not match.',
	});

export const authSingIn = z.object({
	username: z
		.string()
		.min(3, { message: 'The username must have at least 3 characters.' })
		.max(20, { message: 'The username must have a maximum of 20 characters.' }),
	password: z.string(),
});
