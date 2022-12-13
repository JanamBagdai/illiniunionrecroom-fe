import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../Styles/main.css";
import logo from '../pictures/logo.png';

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

	return (
		<header>
			<h3>Illini RecRoom</h3>
			<img src={logo} alt="Logo"/>
			<nav ref={navRef}>
				<a href="/">Registration</a>
				<a href="/List">Check</a>
				<a href="/Prices">Prices</a>
				<a href="/Rules">Rules</a>
				<a href="https://union.illinois.edu/recroom">About us</a>

				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button className="nav-btn" onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar;