import { Link } from "react-router-dom";
import { useState } from "react";
import { HeaderProps } from "../interfaces/HeaderProps.interface";
import "../styles/Header.css";

export const Header = ({ username }: HeaderProps) => {
	const [usernameState] = useState(username || "");
	console.log(usernameState);

	return (
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
				{!usernameState || usernameState == "" ? (
					<Link to="/login" className="navbar-btn-login">
						Login
					</Link>
				) : (
					<div className="d-flex align-items-baseline">
						<h5 className="me-2">Bienvenido {username}</h5>
						<Link to="/start">
							<i className="fa-solid fa-arrow-right-from-bracket"></i>
						</Link>
					</div>
				)}
			</nav>
		</header>
	);
};
