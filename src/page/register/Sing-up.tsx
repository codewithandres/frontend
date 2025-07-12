import { Link } from 'react-router';
import { Buttom } from '../../components/Buttom';

import './sing-up.scss';

export const SingUp = () => {
	return (
		<div className='sing-up'>
			<div className='card'>
				<div className='left'>
					<h2>Social Networks</h2>
					<p>
						Join our social network and connect with friends, share moments, and discover
						new experiences. Start your journey with us today!{' '}
					</p>
					<Link to={'/sing-in'}>
						<span>Don't you have an account.?</span>
					</Link>

					{/* <button>Sing in</button> */}
				</div>
				<div className='right'>
					<h2>Sing up</h2>
					<form>
						<input type='text' placeholder='Username' required />
						<input type='text' placeholder='Joe Done' required />
						<input type='email' placeholder='correo@demo.com' required />
						<input type='password' placeholder='Password' required />

						<Buttom>Sing up</Buttom>
					</form>
				</div>
			</div>
		</div>
	);
};
