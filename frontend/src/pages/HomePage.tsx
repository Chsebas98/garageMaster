import { Header } from "../components/Header";
import { userData } from "../hooks/helpers";

export const Home = () => {
	const { username } = userData();
	return (
		<>
			<Header username={username} />
			<div className="container">
				<h2 className="">Bienvenido {username}</h2>
			</div>
		</>
	);
};
