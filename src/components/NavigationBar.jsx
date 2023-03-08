import iconChevron from "../assets/chevron-down.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const NavigationBar = ({page}) => {
    const navigate = useNavigate();
    const [isDropdown, setIsDropdown] = useState(false); 
    const [isLoggedin, setIsLoggedin] = useState(false);
    const [username, setUsername] = useState("Guest")

    function checkToken() {
        navigate("/edit")
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
						<p className="mr-1">Welcome, {username}!</p>
						<img
							className={`w-4 h-fit ${
								isDropdown ? 'rotate-180' : ''
							} transition-transform`}
							src={iconChevron}
							alt="dropdown button"
						/>
					</div>
				</div>
				<ul className="h-full flex flex-col items-end sm:flex-row sm:items-center whitespace-nowrap bg-theme-purple z-[21]">
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
							onClick={checkToken}
						>
							Manage Posts
						</li>
					) : (
						''
					)}
				</ul>
				<div
					className="absolute left-0 bottom-0 w-full max-w-[12rem] bg-white border border-violet-400 rounded-lg overflow-hidden transition-all duration-300 ease-in-out z-10"
					style={isDropdown ? { transform: 'translateY(100%' } : null}
				>
					{isLoggedin ? (
						<>
							<button
								className="block px-4 py-1 w-full hover:bg-neutral-00 active:bg-indigo-100"
								disabled={!isDropdown}
							>
								Change Picture
							</button>
							<button
								className="block px-4 py-1 w-full hover:bg-neutral-00 active:bg-indigo-100"
								disabled={!isDropdown}
							>
								Logout
							</button>
						</>
					) : (
						<button
							className="block px-4 py-1 w-full hover:bg-neutral-00 active:bg-indigo-100"
							disabled={!isDropdown}
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
