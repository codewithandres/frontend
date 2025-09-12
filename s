warning: in the working copy of 'index.html', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'package.json', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'pnpm-lock.yaml', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'src/App.tsx', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'src/vite-env.d.ts', LF will be replaced by CRLF the next time Git touches it
[1mdiff --git a/index.html b/index.html[m
[1mindex e4b78ea..5d99990 100644[m
[1m--- a/index.html[m
[1m+++ b/index.html[m
[36m@@ -1,13 +1,13 @@[m
[31m-<!doctype html>[m
[32m+[m[32m<!DOCTYPE html>[m
 <html lang="en">[m
[31m-  <head>[m
[31m-    <meta charset="UTF-8" />[m
[31m-    <link rel="icon" type="image/svg+xml" href="/vite.svg" />[m
[31m-    <meta name="viewport" content="width=device-width, initial-scale=1.0" />[m
[31m-    <title>Vite + React + TS</title>[m
[31m-  </head>[m
[31m-  <body>[m
[31m-    <div id="root"></div>[m
[31m-    <script type="module" src="/src/main.tsx"></script>[m
[31m-  </body>[m
[32m+[m	[32m<head>[m
[32m+[m		[32m<meta charset="UTF-8" />[m
[32m+[m		[32m<link rel="icon" type="image/svg+xml" href="/public/logo.svg" />[m
[32m+[m		[32m<meta name="viewport" content="width=device-width, initial-scale=1.0" />[m
[32m+[m		[32m<title>PhotoFrenzy</title>[m
[32m+[m	[32m</head>[m
[32m+[m	[32m<body>[m
[32m+[m		[32m<div id="root"></div>[m
[32m+[m		[32m<script type="module" src="/src/main.tsx"></script>[m
[32m+[m	[32m</body>[m
 </html>[m
[1mdiff --git a/package.json b/package.json[m
[1mindex 7ce6200..11e199a 100644[m
[1m--- a/package.json[m
[1m+++ b/package.json[m
[36m@@ -16,6 +16,7 @@[m
 		"@number-flow/react": "^0.5.10",[m
 		"@tanstack/react-query": "^5.84.1",[m
 		"axios": "^1.11.0",[m
[32m+[m		[32m"clsx": "^2.1.1",[m
 		"emoji-picker-react": "^4.13.2",[m
 		"ldrs": "^1.1.7",[m
 		"lucide-react": "^0.525.0",[m
[1mdiff --git a/pnpm-lock.yaml b/pnpm-lock.yaml[m
[1mindex c9cd812..d88c0cc 100644[m
[1m--- a/pnpm-lock.yaml[m
[1m+++ b/pnpm-lock.yaml[m
[36m@@ -26,6 +26,9 @@[m [mimporters:[m
       axios:[m
         specifier: ^1.11.0[m
         version: 1.11.0[m
[32m+[m[32m      clsx:[m
[32m+[m[32m        specifier: ^2.1.1[m
[32m+[m[32m        version: 2.1.1[m
       emoji-picker-react:[m
         specifier: ^4.13.2[m
         version: 4.13.2(react@19.1.0)[m
[36m@@ -1193,6 +1196,10 @@[m [mpackages:[m
     resolution: {integrity: sha512-Qgzu8kfBvo+cA4962jnP1KkS6Dop5NS6g7R5LFYJr4b8Ub94PPQXUksCw9PvXoeXPRRddRNC5C1JQUR2SMGtnA==}[m
     engines: {node: '>= 14.16.0'}[m
 [m
[32m+[m[32m  clsx@2.1.1:[m
[32m+[m[32m    resolution: {integrity: sha512-eYm0QWBtUrBWZWG0d386OGAw16Z995PiOVo2B7bjWSbHedGl5e0ZWaq65kOGgUSNesEIDkB9ISbTg/JK9dhCZA==}[m
[32m+[m[32m    engines: {node: '>=6'}[m
[32m+[m
   color-convert@2.0.1:[m
     resolution: {integrity: sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==}[m
     engines: {node: '>=7.0.0'}[m
[36m@@ -3247,6 +3254,8 @@[m [msnapshots:[m
     dependencies:[m
       readdirp: 4.1.2[m
 [m
[32m+[m[32m  clsx@2.1.1: {}[m
[32m+[m
   color-convert@2.0.1:[m
     dependencies:[m
       color-name: 1.1.4[m
[1mdiff --git a/src/App.tsx b/src/App.tsx[m
[1mindex b4cfd11..7377323 100644[m
[1m--- a/src/App.tsx[m
[1m+++ b/src/App.tsx[m
[36m@@ -1,4 +1,3 @@[m
[31m-// import { SingIn } from './page/login/Sing-in';[m
 import { BrowserRouter, Route, Routes } from 'react-router';[m
 import { SingUp } from './page/register/Sing-up';[m
 import { SingIn } from './page/login/Sing-in';[m
[36m@@ -12,6 +11,8 @@[m [mimport { Toaster } from 'sonner';[m
 import { use } from 'react';[m
 import { DarkModeContex } from './context/contexts';[m
 [m
[32m+[m
[32m+[m
 function App() {[m
 	const { darkMode } = use(DarkModeContex);[m
 [m
[1mdiff --git a/src/Layout/Root-layout.scss b/src/Layout/Root-layout.scss[m
[1mindex 9a7987b..902bb87 100644[m
[1m--- a/src/Layout/Root-layout.scss[m
[1m+++ b/src/Layout/Root-layout.scss[m
[36m@@ -1,4 +1,3 @@[m
[31m-[m
 .layout-wrapper {[m
 	min-height: 100vh;[m
 [m
[1mdiff --git a/src/components/FormUpdate/FormUpdateProfile.scss b/src/components/FormUpdate/FormUpdateProfile.scss[m
[1mindex 0073ce4..969832e 100644[m
[1m--- a/src/components/FormUpdate/FormUpdateProfile.scss[m
[1m+++ b/src/components/FormUpdate/FormUpdateProfile.scss[m
[36m@@ -47,6 +47,17 @@[m
 						border-color: hsla(214, 100%, 50%, 0.774);[m
 					}[m
 [m
[32m+[m					[32m&:has(.has-error) {[m
[32m+[m						[32mbox-shadow: rgba(214, 3, 3, 0.3) 0px 0px 0px 3px;[m
[32m+[m						[32mborder-color: hsla(0, 100%, 50%, 0.774);[m
[32m+[m					[32m}[m
[32m+[m
[32m+[m					[32m&:has(.has-image) {[m
[32m+[m						[32mbackground-color: red;[m
[32m+[m						[32mbox-shadow: rgba(52, 214, 3, 0.3) 0px 0px 0px 3px;[m
[32m+[m						[32mborder-color: hsla(106, 100%, 50%, 0.774);[m
[32m+[m					[32m}[m
[32m+[m
 					label {[m
 						position: absolute;[m
 						top: 50%;[m
[1mdiff --git a/src/components/FormUpdate/FormUpdateProfile.tsx b/src/components/FormUpdate/FormUpdateProfile.tsx[m
[1mindex 28b994d..3692068 100644[m
[1m--- a/src/components/FormUpdate/FormUpdateProfile.tsx[m
[1m+++ b/src/components/FormUpdate/FormUpdateProfile.tsx[m
[36m@@ -1,10 +1,76 @@[m
 import { ImageUp } from 'lucide-react';[m
 import './FormUpdateProfile.scss';[m
 [m
[31m-export const FormUpdateProfile = () => {[m
[32m+[m[32mimport z from 'zod';[m
[32m+[m[32mimport { useForm } from 'react-hook-form';[m
[32m+[m[32mimport { zodResolver } from '@hookform/resolvers/zod';[m
[32m+[m
[32m+[m[32mimport clsx from 'clsx';[m
[32m+[m[32mimport { useImagenLoad } from '../../hooks/use-image-load';[m
[32m+[m[32mimport { useProfile } from '../../hooks/use-profile';[m
[32m+[m
[32m+[m[32mconst schema = z.object({[m
[32m+[m	[32musername: z.string().min(3, 'username must be at least 3 character'),[m
[32m+[m	[32mname: z.string().min(3, 'Name must be at least 3 character'),[m
[32m+[m	[32memail: z.string().email('Invalid email address'),[m
[32m+[m	[32maddress: z.string(),[m
[32m+[m	[32mbiography: z.string().optional(),[m
[32m+[m[32m});[m
[32m+[m
[32m+[m[32mtype FormData = z.infer<typeof schema>;[m
[32m+[m
[32m+[m[32mexport const FormUpdateProfile = (dataProfile: TypeProfile) => {[m
[32m+[m	[32mconst { profileUpdateMutaton } = useProfile({ userId: dataProfile.id });[m
[32m+[m
[32m+[m	[32mconst profileImage = useImagenLoad();[m
[32m+[m	[32mconst coverImge = useImagenLoad();[m
[32m+[m
[32m+[m	[32mconst {[m
[32m+[m		[32mregister,[m
[32m+[m		[32mhandleSubmit,[m
[32m+[m		[32mformState: { errors },[m
[32m+[m	[32m} = useForm<FormData>({[m
[32m+[m		[32mresolver: zodResolver(schema),[m
[32m+[m		[32mdefaultValues: {[m
[32m+[m			[32musername: dataProfile.username,[m
[32m+[m			[32mname: dataProfile.name,[m
[32m+[m			[32memail: dataProfile.email,[m
[32m+[m			[32maddress: dataProfile.address,[m
[32m+[m			[32mbiography: dataProfile.biography,[m
[32m+[m		[32m},[m
[32m+[m	[32m});[m
[32m+[m
[32m+[m	[32mconst onSubmit = async (data: FormData) => {[m
[32m+[m		[32mprofileUpdateMutaton.mutate(data, {[m
[32m+[m			[32monSuccess: (data: unknown) => {[m
[32m+[m				[32mconsole.log(data);[m
[32m+[m			[32m},[m
[32m+[m			[32monError: (error: unknown) => {[m
[32m+[m				[32mconsole.log(error);[m
[32m+[m			[32m},[m
[32m+[m		[32m});[m
[32m+[m	[32m};[m
[32m+[m
[32m+[m	[32m// Todo Subir imagen primero[m
[32m+[m	[32m// try {[m
[32m+[m	[32m// 	// subi imagen si exiten[m
[32m+[m	[32m// 	const profilePhotoUrl = await profileImage.uploadImage();[m
[32m+[m	[32m// 	const coverPhotoUrl = await coverImge.uploadImage();[m
[32m+[m
[32m+[m	[32m// 	const dataToSend = {[m
[32m+[m	[32m// 		...data,[m
[32m+[m	[32m// 		profilePhoto: profilePhotoUrl,[m
[32m+[m	[32m// 		coverPhoto: coverPhotoUrl,[m
[32m+[m	[32m// 	};[m
[32m+[m
[32m+[m	[32m// 	console.log(dataToSend);[m
[32m+[m	[32m// } catch (error) {[m
[32m+[m	[32m// 	console.log('Error en la peticion', error);[m
[32m+[m	[32m// }[m
[32m+[m
 	return ([m
 		<section className='form-update-wrapper'>[m
[31m-			<form action='' className='form-upate'>[m
[32m+[m			[32m<form onSubmit={handleSubmit(onSubmit)} className='form-upate'>[m
 				<h2 className='form-title'> Update your data </h2>[m
 [m
 				<div className='parent'>[m
[36m@@ -12,11 +78,10 @@[m [mexport const FormUpdateProfile = () => {[m
 						<input[m
 							type='text'[m
 							id='username'[m
[31m-							name='username'[m
[31m-							required[m
[32m+[m							[32m{...register('username')}[m
 							autoComplete='off'[m
 							placeholder='Type username here'[m
[31m-							autoFocus[m
[32m+[m							[32mclassName={clsx({ 'has-error': !!errors.username })}[m
 						/>[m
 						<label htmlFor='username'>username</label>[m
 					</div>[m
[36m@@ -24,11 +89,11 @@[m [mexport const FormUpdateProfile = () => {[m
 					<div className='input-group div2'>[m
 						<input[m
 							type='text'[m
[31m-							name='name'[m
 							id='name'[m
[31m-							required[m
[32m+[m							[32m{...register('name')}[m
 							autoComplete='off'[m
 							placeholder='Type name here'[m
[32m+[m							[32mclassName={clsx({ 'has-error': !!errors.name })}[m
 						/>[m
 						<label htmlFor='name'>name</label>[m
 					</div>[m
[36m@@ -36,11 +101,11 @@[m [mexport const FormUpdateProfile = () => {[m
 					<div className='input-group div3'>[m
 						<input[m
 							type='email'[m
[31m-							name='email'[m
[32m+[m							[32m{...register('email')}[m
 							id='email'[m
[31m-							required[m
 							autoComplete='off'[m
 							placeholder='Type email here'[m
[32m+[m							[32mclassName={clsx({ 'has-error': !!errors.email })}[m
 						/>[m
 						<label htmlFor='email'>email</label>[m
 					</div>[m
[36m@@ -48,23 +113,33 @@[m [mexport const FormUpdateProfile = () => {[m
 					<div className='input-group div4'>[m
 						<input[m
 							type='text'[m
[31m-							name='adress'[m
[32m+[m							[32m{...register('address')}[m
 							id='adress'[m
[31m-							required[m
 							autoComplete='off'[m
 							placeholder='write your address here'[m
[32m+[m							[32mclassName={clsx({ 'has-error': !!errors.address })}[m
 						/>[m
 						<label htmlFor='adress'>adress</label>[m
 					</div>[m
 [m
[31m-					<div className='input-group div5'>[m
[31m-						<input type='file' id='profile' required className='input-file' />[m
[32m+[m					[32m<div className={clsx('input-group div5', { 'has-image': profileImage.imagen })}>[m
[32m+[m						[32m<input[m
[32m+[m							[32mtype='file'[m
[32m+[m							[32monChange={profileImage.handleImagenChange}[m
[32m+[m							[32mid='profile'[m
[32m+[m							[32mclassName='input-file'[m
[32m+[m						[32m/>[m
 						<label htmlFor='profile' className='label-profile'>[m
[31m-							<ImageUp /> Upload Profile Photo[m
[32m+[m							[32m<ImageUp /> {profileImage.imagen ? 'Upload Image' : 'Select an image'}[m
 						</label>[m
 					</div>[m
 					<div className='input-group div6'>[m
[31m-						<input type='file' id='cover' required className='input-file' />[m
[32m+[m						[32m<input[m
[32m+[m							[32mtype='file'[m
[32m+[m							[32mid='cover'[m
[32m+[m							[32mclassName='input-file'[m
[32m+[m							[32monChange={coverImge.handleImagenChange}[m
[32m+[m						[32m/>[m
 						<label htmlFor='cover' className='label-cover'>[m
 							<ImageUp /> Upload cover Photo[m
 						</label>[m
[36m@@ -72,10 +147,10 @@[m [mexport const FormUpdateProfile = () => {[m
 					<div className='input-group div7'>[m
 						<label htmlFor='biography'> </label>[m
 						<textarea[m
[31m-							name='biography'[m
 							id='biography'[m
[32m+[m							[32m{...register('biography')}[m
 							placeholder='write your biography here'[m
[31m-							required[m
[32m+[m							[32mclassName={clsx({ 'has-error': errors.biography })}[m
 						></textarea>[m
 					</div>[m
 				</div>[m
[1mdiff --git a/src/components/Like/Like.tsx b/src/components/Like/Like.tsx[m
[1mindex 1d5ede3..35aad55 100644[m
[1m--- a/src/components/Like/Like.tsx[m
[1m+++ b/src/components/Like/Like.tsx[m
[36m@@ -7,7 +7,7 @@[m [mdeclare interface Props {[m
 const Like = ({ isCheket }: Props) => {[m
 	return ([m
 		<label className='ui-bookmark'>[m
[31m-			<input type='checkbox' checked={isCheket} />[m
[32m+[m			[32m<input type='checkbox' checked={!!isCheket} readOnly />[m
 			<div className='bookmark'>[m
 				<svg[m
 					viewBox='0 0 16 16'[m
[1mdiff --git a/src/components/Navbar/Navbar.scss b/src/components/Navbar/Navbar.scss[m
[1mindex 3e315db..b03b9a1 100644[m
[1m--- a/src/components/Navbar/Navbar.scss[m
[1m+++ b/src/components/Navbar/Navbar.scss[m
[36m@@ -29,7 +29,9 @@[m
 [m
 			a {[m
 				text-decoration: none;[m
[31m-[m
[32m+[m				[32mdisplay: inline-flex;[m
[32m+[m				[32malign-items: center;[m
[32m+[m				[32mgap: 1rem;[m
 				span {[m
 					font-weight: bold;[m
 					font-size: 1.5rem;[m
[1mdiff --git a/src/components/Navbar/Navbar.tsx b/src/components/Navbar/Navbar.tsx[m
[1mindex 2cb5f01..3f0661d 100644[m
[1m--- a/src/components/Navbar/Navbar.tsx[m
[1m+++ b/src/components/Navbar/Navbar.tsx[m
[36m@@ -3,13 +3,13 @@[m [mimport { use } from 'react';[m
 import './Navbar.scss';[m
 [m
 import avatarPlaceholder from '../../assets/Avatar-Profile-Vector-PNG-Pic.png';[m
[31m-[m
[31m-import { Link } from 'react-router';[m
[32m+[m[32mimport logo from '../../assets/logo.svg';[m
 [m
 import { DarkModeContex } from '../../context/contexts';[m
 [m
 import { Bell, ChevronDown, LogOut, Search, SunMoon, User } from 'lucide-react';[m
 import { useAuthContext } from '../../context/Auth.contex';[m
[32m+[m[32mimport { Link } from 'react-router';[m
 [m
 export const Navbar = () => {[m
 	const { toggle } = use(DarkModeContex);[m
[36m@@ -24,8 +24,9 @@[m [mexport const Navbar = () => {[m
 	return ([m
 		<nav className='navbar'>[m
 			<div className='left'>[m
[31m-				<Link to={'/home'}>[m
[31m-					<span> codewithsocial </span>[m
[32m+[m				[32m<Link to={'/'}>[m
[32m+[m					[32m<img src={logo} alt='logo' width={35} />[m
[32m+[m					[32m<span> PhotoFrenzy </span>[m
 				</Link>[m
 			</div>[m
 [m
[1mdiff --git a/src/components/Post/Post.tsx b/src/components/Post/Post.tsx[m
[1mindex 97e2b7e..6b588f8 100644[m
[1m--- a/src/components/Post/Post.tsx[m
[1m+++ b/src/components/Post/Post.tsx[m
[36m@@ -1,5 +1,4 @@[m
 import './post.scss';[m
[31m-import { Link } from 'react-router';[m
 [m
 import { Ellipsis, ExternalLink, MessageCircleMore } from 'lucide-react';[m
 [m
[36m@@ -22,6 +21,7 @@[m [mimport 'ldrs/react/Ring.css';[m
 [m
 import { useAuthContext } from '../../context/Auth.contex';[m
 import { useLikes } from '../../hooks/use-likes';[m
[32m+[m[32mimport { Link } from 'react-router';[m
 [m
 interface PostProps {[m
 	Post: Datum;[m
[1mdiff --git a/src/hooks/use-profile.ts b/src/hooks/use-profile.ts[m
[1mindex b3a9ee5..dfdb9da 100644[m
[1m--- a/src/hooks/use-profile.ts[m
[1m+++ b/src/hooks/use-profile.ts[m
[36m@@ -1,22 +1,52 @@[m
[31m-import { useQuery, useSuspenseQuery } from '@tanstack/react-query';[m
[31m-import { getFollows, getProfile } from '../service/actions';[m
[32m+[m[32mimport { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';[m
[32m+[m[32mimport { getFollows, getProfile, updateProfileAction } from '../service/actions';[m
 [m
 declare interface Options {[m
 	userId: number;[m
 }[m
 [m
 export const useProfile = ({ userId }: Options) => {[m
[32m+[m	[32mconst queryClient = useQueryClient();[m
[32m+[m
 	const profileQuery = useQuery({[m
 		queryKey: ['profile', { userId }],[m
 		queryFn: () => getProfile(userId),[m
 		staleTime: 1000 * 60 * 60,[m
[32m+[m		[32menabled: !!userId && userId > 0,[m
 	});[m
 [m
[31m-	const followsQuery = useSuspenseQuery({[m
[32m+[m	[32mconst followsQuery = useQuery({[m
 		queryKey: ['follows', { userId }],[m
 		queryFn: () => getFollows(userId),[m
 		staleTime: 1000 * 60 * 60,[m
[32m+[m		[32menabled: !!userId && userId > 0,[m
[32m+[m	[32m});[m
[32m+[m
[32m+[m	[32m// const isFollowing = followsQuery.data?.follows?.some([m
[32m+[m	[32m// 	(follow: { followingId: number }) => follow.followingId === userId[m
[32m+[m	[32m// );[m
[32m+[m
[32m+[m	[32mconst profileUpdateMutation = useMutation({[m
[32m+[m		[32mmutationFn: updateProfileAction,[m
[32m+[m
[32m+[m		[32monMutate: async newProfile => {[m
[32m+[m			[32mconst queryKey = ['profile', { userId }];[m
[32m+[m			[32mawait queryClient.cancelQueries({ queryKey });[m
[32m+[m			[32mconst previousProfile = queryClient.getQueryData(queryKey);[m
[32m+[m
[32m+[m			[32mqueryClient.setQueryData(queryKey, newProfile);[m
[32m+[m
[32m+[m			[32mreturn { previousProfile };[m
[32m+[m		[32m},[m
[32m+[m
[32m+[m		[32monError: (_, __, context) => {[m
[32m+[m			[32mif (context?.previousProfile) {[m
[32m+[m				[32mqueryClient.setQueryData(['profile', { userId }], context.previousProfile);[m
[32m+[m			[32m}[m
[32m+[m		[32m},[m
[32m+[m
[32m+[m		[32monSettled: () => queryClient.invalidateQueries({ queryKey: ['profile', { userId }] }),[m
 	});[m
 [m
[31m-	return { profileQuery, followsQuery };[m
[32m+[m	[32mreturn { profileQuery, followsQuery, profileUpdateMutation };[m
 };[m
[1mdiff --git a/src/interface/ResponseTypeProfile.ts b/src/interface/ResponseTypeProfile.ts[m
[1mindex 9b1e6cd..fb1d763 100644[m
[1m--- a/src/interface/ResponseTypeProfile.ts[m
[1m+++ b/src/interface/ResponseTypeProfile.ts[m
[36m@@ -1,6 +1,7 @@[m
 export interface ProfileType {[m
 	success: boolean;[m
 	user: ProfileUser;[m
[32m+[m	[32mmessage?: string;[m
 }[m
 [m
 export interface ProfileUser {[m
[36m@@ -9,8 +10,9 @@[m [mexport interface ProfileUser {[m
 	email: string;[m
 	profilePicture: null;[m
 	prfile_cover: null;[m
[31m-	bio: null;[m
[32m+[m	[32mbio: string;[m
 	createdAt: Date;[m
 	updatedAt: null;[m
 	name: string;[m
[32m+[m	[32maddress: string;[m
 }[m
[1mdiff --git a/src/page/profile/Profile.tsx b/src/page/profile/Profile.tsx[m
[1mindex ab21ec6..ef11425 100644[m
[1m--- a/src/page/profile/Profile.tsx[m
[1m+++ b/src/page/profile/Profile.tsx[m
[36m@@ -53,6 +53,8 @@[m [mexport const Profile = () => {[m
 			flushSync(() => setShowModal(false));[m
 		});[m
 [m
[32m+[m	[32mif (!data) return <Navigate to={'/'} />;[m
[32m+[m
 	return ([m
 		<div className='profile'>[m
 			<section className='profile-cover'>[m
[36m@@ -139,7 +141,15 @@[m [mexport const Profile = () => {[m
 			{/* Modal */}[m
 [m
 			<Modal show={showModal} onClose={handleCloseModal}>[m
[31m-				<FormUpdateProfile  />[m
[32m+[m				[32m<FormUpdateProfile[m
[32m+[m					[32musername={data.username}[m
[32m+[m					[32mname={data.name}[m
[32m+[m					[32memail={data.email}[m
[32m+[m					[32maddress={data.address}[m
[32m+[m					[32mprofilePhoto={data.profilePicture}[m
[32m+[m					[32mcoverPhoto={data.prfile_cover}[m
[32m+[m					[32mbiography={data.bio}[m
[32m+[m				[32m/>[m
 			</Modal>[m
 [m
 			<Posts />[m
[1mdiff --git a/src/service/actions.ts b/src/service/actions.ts[m
[1mindex 7144c85..cabbd69 100644[m
[1m--- a/src/service/actions.ts[m
[1m+++ b/src/service/actions.ts[m
[36m@@ -115,9 +115,41 @@[m [mexport const getProfile = async (userId: number): Promise<ProfileUser | undefine[m
 [m
 		const { data } = await makeRequest.get<ProfileType>(`/user/find/${userId}`);[m
 [m
[32m+[m		[32mif (!data.success) throw new Error(data.message);[m
[32m+[m
 		return data.user;[m
 	} catch (error) {[m
 		console.log('error en al peticion ', error);[m
[32m+[m		[32mthrow error;[m
[32m+[m	[32m}[m
[32m+[m[32m};[m
[32m+[m
[32m+[m[32mdeclare interface LikeProfile {[m
[32m+[m	[32musername: string;[m
[32m+[m	[32mname: string;[m
[32m+[m	[32memail: string;[m
[32m+[m	[32maddress: string;[m
[32m+[m	[32mprofilePhoto: string | null;[m
[32m+[m	[32mcoverPhoto: string | null;[m
[32m+[m	[32mbiography: string;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32mtype ResponseUpdateAction = Omit<ProfileType, 'user'>;[m
[32m+[m
[32m+[m[32mexport const updateProfileAction = async ([m
[32m+[m	[32mupdateprofile: LikeProfile[m
[32m+[m[32m): Promise<ResponseUpdateAction | undefined> => {[m
[32m+[m	[32mtry {[m
[32m+[m		[32mconst { data } = await makeRequest.put<ResponseUpdateAction>([m
[32m+[m			[32m'/user/update',[m
[32m+[m			[32mupdateprofile[m
[32m+[m		[32m);[m
[32m+[m
[32m+[m		[32mif (!data.success) throw new Error(data.message);[m
[32m+[m
[32m+[m		[32mreturn data;[m
[32m+[m	[32m} catch (error) {[m
[32m+[m		[32mconsole.log('Error en la peticion ', error);[m
 	}[m
 };[m
 [m
[36m@@ -132,9 +164,10 @@[m [mexport const getFollows = async (userId: number): Promise<TypeFollow | undefined[m
 [m
 		const { data: follows } = await makeRequest.get<TypeFollow>(`/follows`, { params });[m
 [m
[31m-		return follows ?? [];[m
[32m+[m		[32mreturn follows ?? { following: [], follower: [] };[m
 	} catch (error) {[m
 		console.log('error en la peticion', error);[m
[32m+[m		[32mreturn { following: [], follower: [] };[m
 	}[m
 };[m
 [m
[1mdiff --git a/src/vite-env.d.ts b/src/vite-env.d.ts[m
[1mindex 70e5a73..dcbf09c 100644[m
[1m--- a/src/vite-env.d.ts[m
[1m+++ b/src/vite-env.d.ts[m
[36m@@ -32,3 +32,14 @@[m [mdeclare interface TypeFormSingIn {[m
 	username: string;[m
 	password: string;[m
 }[m
[32m+[m
[32m+[m[32mdeclare interface TypeProfile {[m
[32m+[m	[32mid: number;[m
[32m+[m	[32musername: string;[m
[32m+[m	[32mname: string;[m
[32m+[m	[32memail: string;[m
[32m+[m	[32maddress: string;[m
[32m+[m	[32mprofilePhoto: string | null | FileList;[m
[32m+[m	[32mcoverPhoto: string | null | FileList;[m
[32m+[m	[32mbiography: string;[m
[32m+[m[32m}[m
