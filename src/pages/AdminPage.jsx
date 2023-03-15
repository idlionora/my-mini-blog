import { useRef, useState } from 'react';
import BlogCard from '../components/BlogCard';
import NavigationBar from '../components/NavigationBar';

function AdminPage() {
	const hiddenThumbInput = useRef();
	const hiddenBannerInput = useRef();
	const [screenOpacity, setScreenOpacity] = useState(true);

	function toggleScreenOpacity() {
		setScreenOpacity(!screenOpacity);
	}

	return (
		<>
			<div
				className={`bg-black w-full h-full fixed z-50 transition-opacity duration-200 ${
					screenOpacity ? 'opacity-60' : 'opacity-0'
				}`}
			/>
			<div className="absolute z-[51] w-full h-full sm:px-4 md:px-5 sm:py-20 flex justify-center">
				<div className="bg-neutral-00 w-full max-w-[39.5rem] md:max-w-[45rem] sm:rounded-2xl h-full sm:h-fit relative px-4 pt-14 sm:py-5 md:px-5 md:py-6">
					<form>
						<input
							type="text"
							name="title"
							id="title"
							className="w-full rounded-xl h-14 px-3 sm:px-4 md:px-5 text-md tracking-wide border font-heading font-bold border-slate-400 focus:outline-indigo-400 mb-3 text-center placeholder-shown:font-text placeholder-shown:font-semibold"
							placeholder="Type your title here"
						/>
						<div className="flex gap-3 mb-3">
							<button
								type="button"
								className="w-full bg-indigo-200 hover:bg-indigo-300 active:bg-indigo-300 p-3 rounded-xl border border-slate-400 font-semibold"
								onClick={() => hiddenThumbInput.current.click()}
							>
								Upload Thumbnail
							</button>
							<button
								type="button"
								className="w-full bg-indigo-200 hover:bg-indigo-300 active:bg-indigo-300 p-3 rounded-xl border border-slate-400 font-semibold"
								onClick={() => hiddenBannerInput.current.click()}
							>
								Upload Banner
							</button>
							<input
								type="file"
								name="thumbnail"
								id="thumbnail"
								ref={hiddenThumbInput}
								accept="image/png, image/gif, image/jpeg"
								hidden
							/>
							<input
								type="file"
								name="banner"
								id="banner"
								ref={hiddenBannerInput}
								accept="image/png, image/gif, image/jpeg"
								hidden
							/>
						</div>
						<textarea
							name="textpost"
							id="textpost"
							rows="10"
							className="w-full border border-slate-400 focus:outline-indigo-400 rounded-xl px-3 py-2 sm:px-4 sm:py-3 mb-2"
							placeholder="Type your blog text post here. Post preview will be cut from your first 80 characters in here."
						/>
						<div className="flex justify-end gap-2">
							<button
								type="submit"
								className="bg-button-green hover:bg-green-500 active:bg-green-500 hover:text-white active:text-white p-1 w-[5rem] font-semibold rounded-2xl border border-emerald-400"
							>
								Save
							</button>
							<button
								type="button"
								className="bg-button-red hover:bg-red-500 hover:text-white p-1 w-[5rem] font-semibold rounded-2xl border border-red-500"
							>
								Delete
							</button>
						</div>
					</form>
				</div>
			</div>

			<div className="w-full min-h-screen bg-neutral-00 flex flex-col items-center overflow-hidden">
				<NavigationBar page="edit"></NavigationBar>
				<section className="w-full px-4 sm:mx-5 flex flex-col items-center">
					<div className="w-full max-w-screen-xl">
						<button className="font-heading font-bold text-[1.25rem] bg-theme-blue px-4 py-3 rounded-2xl text-neutral-100 mt-9 mb-7">
							Create Blog +
						</button>
					</div>
					<div className="w-full max-w-screen-xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-7 mb-8">
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
		</>
	);
}

export default AdminPage;
