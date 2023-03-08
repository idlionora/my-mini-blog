function Login() {
    function submitForm(e) {
        e.preventDefault();
        
    }
    return (
		<div className="bg-theme-blue sm:bg-neutral-00 w-full h-screen flex justify-center items-center sm:px-5">
			<section className="bg-theme-blue h-fit w-full max-w-[25rem] mb-24 p-7 sm:drop-shadow-[7px_7px_0_#4267b2]">
				<h1 className="text-white text-5xl sm:text-6xl font-bold font-heading mb-5 mt-2">
					Login
				</h1>
				<form className="w-full" onSubmit={(e) => submitForm(e)}>
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
						className="w-full rounded-lg h-12 px-3 sm:px-4 text-lg tracking-wider mb-4"
						placeholder="Your email"
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
						className="w-full rounded-lg h-12 px-3 sm:px-4 text-lg tracking-wider mb-5"
						placeholder="Your password"
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
