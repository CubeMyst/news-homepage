export default function Card({ id, img, title, description }) {
	return (
		<div className="card">
			<img src={img} />
			<div>
				<h1>{id}</h1>
				<a href={`#${id}`}>{title}</a>
				<p>{description}</p>
			</div>
		</div>
	);
}
