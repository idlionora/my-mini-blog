import BlogCard from '../components/BlogCard';
import NavigationBar from '../components/NavigationBar';

function AdminPage() {
	return (
		<div className="w-full min-h-screen bg-neutral-00 flex flex-col items-center">
			<NavigationBar page="edit"></NavigationBar>
			<section className="w-full px-4 pm:mx-5 flex flex-col items-center">
				<div className="w-full max-w-screen-xl">
					<button className="font-heading font-bold text-[1.25rem] bg-theme-blue px-4 py-3 rounded-2xl text-neutral-100 mt-9 mb-7">
						Create Blog +
					</button>
				</div>
				<div className="w-full max-w-screen-xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-7">
					{/* Will map data here later on*/}
					<BlogCard
						page="edit"
						title="Testing Long Title Here To See If The Card Stretch"
					/>
					<BlogCard page="edit" />
					<BlogCard page="edit" />
					<BlogCard page="edit" />
					<BlogCard page="edit" />
					<BlogCard page="edit" />
					<BlogCard page="edit" />
					<BlogCard page="edit" />
					<BlogCard page="edit" />
					<BlogCard page="edit" />
				</div>
			</section>
		</div>
	);
}

export default AdminPage;
