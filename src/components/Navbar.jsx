import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import logo from '../assets/images/logo.svg';
import hamburgerIcon from '../assets/images/icon-menu.svg';
import closeIcon from '../assets/images/icon-menu-close.svg';

export default function Navbar() {
	const [menuOpen, setMenuOpen] = useState(false);
	const isMobile = useMediaQuery({ maxWidth: 768 });

	/**
	 * This function toggles the state of a menuOpen variable.
	 */
	function handleMenuToggle() {
		setMenuOpen(!menuOpen);
	}

	return (
		<header className="header">
			<nav className="navbar">
				<img
					src={logo}
				/>

				{isMobile ? (
					<div
						className="menu-toggle"
						onClick={handleMenuToggle}>
						<img
							src={hamburgerIcon}
						/>
					</div>
				) : (
					<ul className="list__links">
						<li className="items">
							<a href="#Home">Home</a>
						</li>
						<li className="items">
							<a href="#New">New</a>
						</li>
						<li className="items">
							<a href="#Popular">Popular</a>
						</li>
						<li className="items">
							<a href="#Trending">Trending</a>
						</li>
						<li className="items">
							<a href="#Categories">Categories</a>
						</li>
					</ul>
				)}

				{isMobile && menuOpen && (
					<ul className="list__links-mobile">
							<div
								className="menu-toggle"
								onClick={handleMenuToggle}>
								<img
									src={closeIcon}
									alt="hamburgueIcon"
								/>
							</div>
							<li className="items up">
								<a href="#Home">Home</a>
							</li>
							<li className="items">
								<a href="#New">New</a>
							</li>
							<li className="items">
								<a href="#Popular">Popular</a>
							</li>
							<li className="items">
								<a href="#Trending">Trending</a>
							</li>
							<li className="items">
								<a href="#Categories">Categories</a>
							</li>
						</ul>
				)}
			</nav>
		</header>
	);
}
