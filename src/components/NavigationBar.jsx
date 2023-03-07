import { useNavigate } from "react-router-dom";

const NavigationBar = ({page}) => {
    const navigate = useNavigate();
    const username= "Guest";

    return (
		<nav className="w-screen h-14 bg-theme-purple py-1 px-4 sm:px-5 flex justify-center items-center relative">
			{/* <div className="w-full max-w-screen-xl h-11 bg-pink-100 absolute opacity-30" /> */}
			<div className="w-full max-w-screen-xl h-full flex justify-between items-center">
				<div className="flex items-center">
					<div className="h-11 w-11 bg-button-green rounded-full" />
                    <p className="pl-2">Welcome, {username}!</p>
				</div>
                <ul className="flex flex-col items-end sm:flex-row md:items-center">
                    {(page !== "home")? <li className="ml-4" onClick={()=>navigate("/")}>Home</li> : ""}
                    <li className="ml-4" >About</li>
                    {page !== "edit" && page !== "blogPost"? <li className="ml-4">Manage Posts</li> : ""}

                </ul>
			</div>
		</nav>
	);
}

export default NavigationBar
