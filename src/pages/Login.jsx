import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
	const navigate = useNavigate();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [submittedForm, setSubmittedForm] = useState({});
	const [hasNotRegistered, setHasNotRegitered] = useState(false);
	const [wrongPass, setWrongPass] = useState(false);

	useEffect(()=> {
		if (!!localStorage.getItem('blog-user')) navigate('/');
	}, []);

	function submitForm(e) {
		e.preventDefault();
		setSubmittedForm({
			email: email,
			password: password,
		});

		//currently simple one account, local validation. subject to change.
		if (email !== 'admin@emailku.id') {
			setHasNotRegitered(true);
			return;
		}
		if (password !== 'pass567') {
			setWrongPass(true);
			return;
		}

		let userData = {
			username: 'Blog Admin',
			profilepic: 'https://avatars.githubusercontent.com/u/99245708',
			useracc: 'gVQzDqLVGgp9fboHTiVFySSaZ',
		};

		localStorage.setItem('blog-user', JSON.stringify(userData));
		navigate(-1);				
	}

	if (hasNotRegistered && email !== submittedForm.email) setHasNotRegitered(false);
	if (wrongPass && password !== submittedForm.password) setWrongPass(false);

	return (
		<div className="bg-theme-blue sm:bg-neutral-00 w-full h-full min-h-screen flex justify-center items-center sm:px-5">
			<section className="bg-theme-blue h-fit w-full max-w-[25rem] mb-24 sm:mb-10 p-7 sm:drop-shadow-[7px_7px_0_#4267b2] sm:relative sm:translate-x-[-1px]">
				<h1 className="text-white text-5xl sm:text-6xl font-bold font-heading mb-3 mt-2">
					Login
				</h1>
				{hasNotRegistered && (
					<div className="w-full text-center bg-rose-200 rounded-lg p-2 text-base text-red-700">
						Sorry, we couldn't sign you in. <br />
						User was not registered.
					</div>
				)}
				{wrongPass && (
					<div className="w-full text-center bg-rose-200 rounded-lg p-2 text-base text-red-700">
						The password you entered is incorrect. <br/>Please try again.
					</div>
				)}
				<form className="w-full mt-1" onSubmit={(e) => submitForm(e)}>
					<label
						htmlFor="email"
						className="block text-xl sm:text-2xl font-semibold sm:font-medium tracking-wider text-white mb-1"
					>
						Email
					</label>
					<input
						id="email"
						type="email"
						name="email"
						className={`w-full rounded-lg h-12 px-3 sm:px-4 text-lg tracking-wider mb-4 ${
							hasNotRegistered
								? 'border-2 border-rose-400 focus:outline-rose-500'
								: 'focus:outline-blue-800'
						}`}
						placeholder="Your email"
						required
						onChange={(e) => setEmail(e.target.value)}
					/>
					<label
						htmlFor="password"
						className="block text-xl sm:text-2xl font-semibold sm:font-medium tracking-wider text-white mb-1"
					>
						Password
					</label>
					<input
						id="password"
						type="password"
						name="password"
						className={`w-full rounded-lg h-12 px-3 sm:px-4 text-lg tracking-wider mb-5 ${
							hasNotRegistered || wrongPass
								? 'border-2 border-rose-400 focus:outline-rose-500'
								: 'focus:outline-blue-800'
						} `}
						placeholder="Your password"
						required
						onChange={(e) => setPassword(e.target.value)}
					/>
					<div className="flex gap-6 justify-between mb-4">
						<button
							type="button"
							className="bg-[#4267b2] w-full text-white text-lg tracking-wider px-3 py-1.5 rounded-lg drop-shadow-[6px_6px_0_#dbb632]"
						>
							<p style={{ textShadow: 'white 0 0 1px' }}>Facebook</p>
						</button>
						<button
							type="button"
							className="bg-[#dbb632] w-full text-white text-lg tracking-wider px-3 py-1.5 rounded-lg drop-shadow-[6px_6px_0_#4267b2]"
						>
							<p style={{ textShadow: 'white 0 0 1px' }}>Google</p>
						</button>
					</div>
					<button
						type="submit"
						className="bg-theme-purple w-full text-md tracking-widest font-semibold px-3 py-2 rounded-lg drop-shadow-[6px_6px_0_#4267b2] mb-6"
					>
						LOGIN
					</button>
				</form>
			</section>
		</div>
	);
}

export default Login;
