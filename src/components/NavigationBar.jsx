import iconChevron from "../assets/chevron-down.png";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const NavigationBar = ({page}) => {
    const navigate = useNavigate();
    const [isDropdown, setIsDropdown] = useState(false); 
	const [userData, setUserData] = useState(null)

	useEffect(() => { 
		if (!!localStorage.getItem('blog-user')) {
			setUserData(JSON.parse(localStorage.getItem('blog-user')))			
		}
	}, [])
	
	function logOut() {
		localStorage.removeItem('blog-user');
		setUserData(null)
	}
	
    return (
		<nav className="w-screen h-14 bg-theme-purple px-4 sm:px-5 flex justify-center items-center relative">
			<div className="w-full max-w-screen-xl h-full flex justify-between items-center relative">
				<div className="flex items-center w-full h-full bg-theme-purple z-20">
					<div className="h-11 w-11 bg-button-green rounded-full shrink-0" />
					<div
						className="pl-2 flex items-center cursor-pointer"
						onClick={() => setIsDropdown(!isDropdown)}
					>
						<p className="mr-1">Welcome, {!!userData? userData.username : 'Guest'}!</p>
						<img
							className={`w-4 h-fit ${
								isDropdown ? 'rotate-180' : ''
							} transition-transform`}
							src={iconChevron}
							alt="dropdown button"
						/>
					</div>
				</div>
				<ul className="h-full flex items-center whitespace-nowrap bg-theme-purple z-[21]">
					{page !== 'home' ? (
						<li
							className="ml-4 cursor-pointer hover:underline active:underline decoration-1 underline-offset-4"
							onClick={() => navigate('/')}
						>
							Home
						</li>
					) : (
						''
					)}
					<li className="ml-4 cursor-pointer hover:underline active:underline decoration-1 underline-offset-4">
						About
					</li>
					{page !== 'edit' && page !== 'blogPost' ? (
						<li
							className="ml-4 cursor-pointer hover:underline active:underline decoration-1 underline-offset-4"
							onClick={()=>!!userData ? navigate('/edit') : navigate('/login')}
						>
							Manage Posts
						</li>
					) : (
						''
					)}
				</ul>
				<div
					className="absolute left-0 bottom-0 w-full max-w-[12rem] bg-white border-x border-b border-violet-400 rounded-b-lg overflow-hidden transition-all duration-300 ease-in-out z-10"
					style={isDropdown ? { transform: 'translateY(100%' } : null}
				>
					{!!userData ? (
						<>
							<button
								className="block px-4 py-1 w-full hover:bg-neutral-00 active:bg-indigo-100"
								disabled={!isDropdown}
							>
								Change Picture
							</button>
							<button
								className="block px-4 py-1 w-full hover:bg-neutral-00 active:bg-indigo-100"
								disabled={!isDropdown} onClick={logOut}
							>
								Logout
							</button>
						</>
					) : (
						<button
							className="block px-4 py-1 w-full hover:bg-neutral-00 active:bg-indigo-100"
							disabled={!isDropdown} onClick={() => navigate('/login')}
						>
							Login
						</button>
					)}
				</div>
			</div>
		</nav>
	);
}

export default NavigationBar
