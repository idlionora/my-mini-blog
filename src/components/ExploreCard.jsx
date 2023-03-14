import { useNavigate } from 'react-router-dom';
import exploreThumb from '../assets/thumbnail example2.png';

const ExploreCard = (props) => {
	const {
		id = 1000,
		title = 'Title will be shown here',
		thumbnailPath = exploreThumb,
		desc = "Type anything for your own description and don't forget to add more stuff like...",
	} = props;
    //desc is shortened to max 80 characters
    const navigate = useNavigate();

	return (
		<div
			className="w-full max-w-[21.9rem] bg-white min-h-[6.5rem] p-[3px] flex items-start border border-theme-blue cursor-pointer"
			onClick={() => navigate(`/post/${id}`)}
		>
			<div className="bg-black h-[6.5rem] min-w-[6rem] flex">
				<img src={thumbnailPath} className="object-scale-down" alt={'thumbnail ' + id} />
			</div>
			<div className="w-full px-3 pt-2">
				<h4 className="font-heading font-bold text-sm mb-2">{title}</h4>
				<p className="text-sm mb-2">{desc}</p>
			</div>
		</div>
	);
};

export default ExploreCard;
