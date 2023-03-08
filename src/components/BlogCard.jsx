import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import thumbDefault from '../assets/thumbnail example1.png';
import iconPencil from '../assets/noun-pencil-1051456.png';
import iconTrashbin from '../assets/noun-trash-123755.png';

const BlogCard = ({
	page,
	id = 999,
	title = 'Title will be shown here',
	thumbnailPath = thumbDefault,
}) => {
	const navigate = useNavigate();
	const [isShown, setIsShown] = useState(false);

	function clickTopLayer() {
		setIsShown(!isShown);
	}

	return (
		<div className="w-full flex justify-center relative">
			<div className="w-full max-w-sm bg-theme-purple rounded-xl overflow-hidden flex flex-col">
				<div
					className="bg-white w-full h-[45vw] max-h-[12.178rem] sm:h-44 md:h-40 lg:h-32 flex cursor-pointer"
					onClick={() => navigate(`/post/${id}`)}
				>
					<img
						className="w-full object-cover"
						src={thumbnailPath}
						alt={'thumbnail ' + id}
					/>
				</div>
				<div className="grow min-h-[3.7rem] flex flex-col justify-center text-center items-center">
					<p className="mx-4 my-3 w-fit font-semibold cursor-pointer" onClick={() => navigate(`/post/${id}`)}>
						{title}
					</p>
				</div>
				{/* checking isShown intended to make top layer responsive for touchscreen devices */}
				{page === 'edit' && (
					<div
						className="absolute w-full h-full rounded-xl overflow-hidden flex flex-col opacity-0 transition-opacity"
						onClick={(e) => {
							e.stopPropagation();
							clickTopLayer();
						}}
						onMouseEnter={() => setIsShown(true)}
						onMouseLeave={() => setIsShown(false)}
						style={isShown ? { opacity: 1 } : null}
					>
						<div
							className="bg-black w-full opacity-40 h-[45vw] max-h-[12.178rem] sm:h-44 md:h-40 lg:h-32 flex"
							onClick={() => (isShown ? navigate(`/post/${id}`) : null)}
						/>
						<div className="bg-pink-200 grow min-h-[3.7rem] justify-center text-center relative grid grid-cols-2">
							<div className="h-full bg-button-green flex justify-center items-center">
								<img className="h-6" src={iconPencil} alt="edit post" />
							</div>
							<div className="h-full bg-button-red flex justify-center items-center">
								<img
									className="h-6 opacity-90"
									src={iconTrashbin}
									alt="delete post"
								/>
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default BlogCard;
