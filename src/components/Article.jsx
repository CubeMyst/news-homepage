import { useMediaQuery } from 'react-responsive';
import Aside from './Aside';
import mobileBanner from '../assets/images/image-web-3-mobile.jpg';
import desktopBanner from '../assets/images/image-web-3-desktop.jpg';

export default function Article() {
	const isMobile = useMediaQuery({ maxWidth: 768 });

	return (
		<main className="container">
			<section className="main_section">
				{isMobile ? <img src={mobileBanner} /> : <img src={desktopBanner} />}
				<article>
					<h1>The Bright Future of Web 3.0?</h1>
					<div>
						<p>
							We dive into the next evolution of the web that claims to put the
							power of the platforms back into the hands of the people. But is
							it really fulfilling its promise?
						</p>
						<a href="#">Read more</a>
					</div>
				</article>
			</section>
			<Aside />
		</main>
	);
}
