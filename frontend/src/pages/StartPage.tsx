import { Header } from "../components/Header";
import logo from "../assets/logo.png";
import "../styles/Home.css";

export const Start = () => {
	return (
		<>
			<Header />
			<section className="home">
				<div className="home-text">
					<h1>Looking for a car</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius minima nisi
						asperiores. Ab, quae neque corporis minus in praesentium? Illum quidem
						rerum vero tempore natus dolorum officia expedita labore et.
					</p>
				</div>
				<div className="home-image">
					<img src={logo} alt="" />
				</div>
			</section>
		</>
	);
};
