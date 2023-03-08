import thumbDefault from '../assets/thumbnail example1.png'
import iconPencil from '../assets/noun-pencil-1051456.png';
import iconTrashbin from '../assets/noun-trash-123755.png';

const BlogCard = ({page, id, title = 'Title will be shown here', thumbnailPath = thumbDefault}) => {
    return (
		<div className="w-full flex justify-center">
			<div className="w-full max-w-sm bg-theme-purple rounded-xl overflow-hidden flex flex-col">
				<div className="bg-white w-full h-[45vw] max-h-[12.178rem] sm:h-44 md:h-40 lg:h-32 flex">
                    <img className="w-full object-cover" src={thumbnailPath} alt={"thumbnail " + id}/>
                </div>
				<div className="grow min-h-[3.7rem] flex flex-col justify-center text-center relative">
					<p className="px-4 py-3 font-semibold">{title}</p>
                    {page === 'edit' && <div className='absolute bg-pink-400 h-full w-full grid grid-cols-2'>
                        <div className='h-full bg-button-green flex justify-center items-center'>
                            <img className="h-6" src={iconPencil} alt="edit post" />
                        </div>
                        <div className='h-full bg-button-red flex justify-center items-center'>
                            <img className="h-6 opacity-90" src={iconTrashbin} alt="delete post" />
                        </div>
                    </div>}
				</div>
			</div>
		</div>
	);
}

export default BlogCard
