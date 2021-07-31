import Image from 'next/image';

const Card = (props) => {
	return (
	<div className="card">
		<Image src={props.src} width='400' height='400' />
		<div className='container'>
			<h4><b>{props.title}</b></h4>
			<p>{props.desc}</p>
			<b>Created By:</b>
			<p>{props.creator}</p>
			<hr />
			<button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 my-2 rounded inline-flex items-center">
  				<svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
  				<span>Download</span>
			</button>
		</div>
	</div>
	);
};

export default Card;