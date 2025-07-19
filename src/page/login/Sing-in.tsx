import './singIn.scss';
import { Buttom } from '../../components/Buttom';
import { Link } from 'react-router';

export const SingIn = () => {
	return (
		<div className='sing-in'>
			<div className='card'>
				<div className='left'>
					<h2>Hello Word</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit velit impedit
						nisi doloribus, laudantium nostrum!
					</p>
					<Link to={'/sing-up'}>
						<span>Don't you have an account.?</span>
					</Link>
				</div>
				<div className='right'>
					<h2>Sing In</h2>
					<form>
						<input type='text' placeholder='Username' />
						<input type='password' placeholder='Password' />

						<Buttom>Sing in</Buttom>
					</form>
				</div>
			</div>
		</div>
	);
};
