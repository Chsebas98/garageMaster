import CardOptions from "../components/Card-Options";
import { Header } from "../components/Header";
import { userData } from "../hooks/helpers";
import "../styles/Home.css";
export const Home = () => {
	const { username } = userData();
	return (
		<>
			<Header username={username} />
			<div className="container py-3 imgb">
				<div className="row my-3">
					<CardOptions
						title={"Ingreso de Vehículos"}
						icon={"fa-solid fa-circle-right fa-2xl"}
						dir={"/ingreso"}
					/>
				</div>
				<div className="row my-3">
					<CardOptions
						title={"Historial de Vehículos"}
						icon={"fa-solid fa-circle-right fa-2xl"}
						dir={"/historial"}
					/>
				</div>
				<div className="row my-3">
					<CardOptions
						title={"Revisión de Vehículos"}
						icon={"fa-solid fa-circle-right fa-2xl"}
						dir={"/revision"}
					/>
				</div>
			</div>
		</>
	);
};
