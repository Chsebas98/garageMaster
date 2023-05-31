import { Link } from "react-router-dom";
import "../styles/Header.css";

export const Header = () => (
	<header>
		<nav className="navbar px-2">
			<a href="" className="navbar-logo">
				Garage Master
			</a>
			<ul className="navbar-opt">
				<li>
					<a href="">Home</a>
				</li>
				<li>
					<a href="">About</a>
				</li>
				<li>
					<a href="">Cars</a>
				</li>
				<li>
					<a href="">Services</a>
				</li>
				<li>
					<a href="">Reviews</a>
				</li>
			</ul>
			<Link to="/login" className="navbar-login">
				Login
			</Link>
		</nav>
	</header>
);
