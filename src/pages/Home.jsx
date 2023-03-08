import BlogCard from "../components/BlogCard";
import NavigationBar from "../components/NavigationBar"

function Home() {
    return (
		<div className="w-full min-h-screen bg-neutral-00 flex flex-col items-center">
			<NavigationBar page="home" />
			<section className="w-full px-4 pm:mx-5 flex flex-col items-center">
				<h1 className="font-heading font-bold text-[1.25rem] bg-theme-blue px-4 py-3 w-full max-w-[18rem] text-center rounded-2xl text-neutral-100 mt-9 mb-7">
					Welcome To My&nbsp;Blog
				</h1>
				<div className="w-full max-w-screen-xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-7">
                    {/* Will map data here later on*/}
					<BlogCard title="Testing Long Title Here To See If The Card Stretch"/>
					<BlogCard />
					<BlogCard />
					<BlogCard />
					<BlogCard />
					<BlogCard />
					<BlogCard />
					<BlogCard />
					<BlogCard />
					<BlogCard />
				</div>
			</section>
		</div>
	);
}

export default Home
