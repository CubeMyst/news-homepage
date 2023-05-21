import Navbar from './components/Navbar';
import Article from './components/Article';
import Card from './components/Card';
import imageOne from './assets/images/image-retro-pcs.jpg';
import imageTwo from './assets/images/image-top-laptops.jpg';
import imageThree from './assets/images/image-gaming-growth.jpg';

export default function App() {
	const cards = [
		{
			id: '01',
			img: imageOne,
			title: 'Reviving Retro PCs',
			description: 'What happens when old PCs are given modern upgrades?',
		},
		{
			id: '02',
			img: imageTwo,
			title: 'Top 10 Laptops of 2022',
			description: 'Our best picks for various needs and budgets.',
		},
		{
			id: '03',
			img: imageThree,
			title: 'The Growth of Gaming',
			description: 'How the pandemic has sparked fresh opportunities.',
		},
	];

	return (
		<div className="main">
			<Navbar />
			<Article />
			<div className="cards">
				{cards.map((card) => (
						<Card
							key={card.id}
							id={card.id}
							title={card.title}
							img={card.img}
							description={card.description}
						/>
					)
				)}
			</div>
		</div>
	);
}
