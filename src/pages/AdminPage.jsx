import { useRef, useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import BlogCard from '../components/BlogCard';
import NavigationBar from '../components/NavigationBar';

function AdminPage() {
	const hiddenThumbInput = useRef(null);
	const hiddenBannerInput = useRef(null);
	const editorRef = useRef(null);
	const [screenDisplay, setScreenDisplay] = useState(false);
	const [screenOpacity, setScreenOpacity] = useState(false);
	const [formDisplay, setFormDisplay] = useState(false);
	const [formInPosition, setFormInPosition] = useState(false);
	const [isEditorFocus, setIsEditorFocus] = useState(false);

	function handleModal() {
		if (!formDisplay) {
			setScreenDisplay(true);
			setFormDisplay(true);
			setTimeout(() => {
				setScreenOpacity(true);
				setFormInPosition(true);
			}, 10);
		} else {
			setScreenOpacity(false);
			setFormInPosition(false);
			setTimeout(() => { setScreenDisplay(false) }, 210);
			setTimeout(() => { setFormDisplay(false) }, 410);
			editorRef.current.setContent(
				'<p>Type your blog text post here. Post preview will be cut from your first 80 characters in here.</p>'
			);			
		}
	}

	const submitForm = () => {
		if (editorRef.current) {
			console.log(editorRef.current.getContent());
		}
		handleModal();
	}

	return (
		<>
			<div
				className={`bg-black w-full h-full fixed z-50 transition-opacity duration-200 ${
					screenDisplay ? 'block' : 'hidden'
				} ${screenOpacity ? 'opacity-60' : 'opacity-0'}`}
				onClick={handleModal}
			/>
			<div
				className={`absolute z-[51] w-full h-full sm:px-4 md:px-5 sm:py-20 flex justify-center ${
					formDisplay ? 'block' : 'hidden'
				} ${
					formInPosition ? 'translate-y-0 opacity-100' : 'translate-y-[-10rem] opacity-0'
				}`}
				style={{ transition: 'opacity 320ms ease-in-out, transform 400ms ease-in-out' }}
				onClick={handleModal}
			>
				<div
					className="bg-neutral-00 w-full max-w-[39.5rem] md:max-w-[45rem] sm:rounded-2xl h-full sm:h-fit relative px-4 pt-14 sm:py-5 md:px-5 md:py-6"
					onClick={(e) => e.stopPropagation()}
				>
					<form
						onSubmit={(e) => {
							e.preventDefault();
							submitForm();
						}}
					>
						<input
							type="text"
							name="title"
							id="title"
							className="w-full rounded-xl h-14 px-3 sm:px-4 md:px-5 text-md tracking-wide border font-heading font-bold border-slate-400 focus:border-indigo-400 focus:outline focus:outline-1 focus:outline-indigo-400 mb-3 text-center placeholder-shown:font-text placeholder-shown:font-semibold "
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
						<div
							id="editor-container"
							className={`border rounded-xl overflow-hidden ${
								isEditorFocus
									? 'border-indigo-400 outline outline-1 outline-indigo-400'
									: 'border-slate-400'
							}`}
						>
							<Editor
								apiKey="ofbohmy5kj2x83n3n1iw4f9xdcfchxkb8k6vpv3ogxwk97bv"
								tinymceScriptSrc={'/tinymce/tinymce.min.js'}
								onInit={(evt, editor) => (editorRef.current = editor)}
								initialValue="<p>Type your blog text post here. Post preview will be cut from your first 80 characters in here.</p>"
								init={{
									height: 350,
									menubar: false,
									plugins: [
										'advlist',
										'autolink',
										'lists',
										'link',
										'image',
										'charmap',
										'anchor',
										'searchreplace',
										'visualblocks',
										'code',
										'fullscreen',
										'insertdatetime',
										'media',
										'table',
										'preview',
										'help',
										'wordcount',
									],
									toolbar:
										'undo redo | blocks | ' +
										'bold italic forecolor | alignleft aligncenter ' +
										'alignright alignjustify | bullist numlist outdent indent | ' +
										'removeformat | help',
									content_style:
										"body { font-family:'Source Sans Pro', 'Arial', 'sans-serif'; font-size:16px } " +
										"h1, h1, h3, h4, h5, h6 { font-family:'Oxygen', 'Helvetica', 'sans-serif'}",
								}}
								onFocus={() => setIsEditorFocus(true)}
								onBlur={()=> setIsEditorFocus(false)}
							/>
						</div>

						<div className="flex justify-end gap-2 mt-2">
							<button
								type="submit"
								className="bg-button-green hover:bg-green-500 active:bg-green-500 hover:text-white active:text-white p-1 w-[5rem] font-semibold rounded-2xl border border-emerald-400"
							>
								Save
							</button>
							<button
								type="button"
								className="bg-button-red hover:bg-red-500 hover:text-white p-1 w-[5rem] font-semibold rounded-2xl border border-red-500"
								onClick={handleModal}
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
						<button
							className="font-heading font-bold text-[1.25rem] bg-theme-blue px-4 py-3 rounded-2xl text-neutral-100 mt-9 mb-7"
							onClick={handleModal}
						>
							Create Blog +
						</button>
					</div>
					<div className="w-full max-w-screen-xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-7 mb-8">
						{/* Will map data here later on*/}
						<BlogCard
							page="edit"
							title="Testing Long Title Here To See If The Card Stretch"
							handleModal={handleModal}
						/>
						<BlogCard page="edit" handleModal={handleModal} />
						<BlogCard page="edit" handleModal={handleModal} />
						<BlogCard page="edit" handleModal={handleModal} />
						<BlogCard page="edit" handleModal={handleModal} />
						<BlogCard page="edit" handleModal={handleModal} />
						<BlogCard page="edit" handleModal={handleModal} />
						<BlogCard page="edit" handleModal={handleModal} />
						<BlogCard page="edit" handleModal={handleModal} />
						<BlogCard page="edit" handleModal={handleModal} />
					</div>
				</section>
			</div>
		</>
	);
}

export default AdminPage;
