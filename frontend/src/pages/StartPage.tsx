import logo from "../assets/logo.png";
import "../styles/Start.css";

export const Start = () => {
	return (
		<>
			<section className="mu">{/* <button href=""></button> */}</section>
			<section className="home">
				<div className="home-text">
					<h1>Garage Master</h1>
					<p>
						Potenciando Talleres: Eficiencia en Cada Tuerca Girada. Desde la gestión
						de revisiones hasta el registro de vehículos y clientes, nuestro sistema
						está diseñado para impulsar la productividad de los mecánicos y garantizar
						un servicio de calidad. Simplifica, organiza y optimiza tus operaciones
						con nuestra solución tecnológica de confianza. Tu éxito es nuestro
						impulso.
					</p>
				</div>
				<div className="home-image">
					<img src={logo} alt="" />
				</div>
			</section>
		</>
	);
};
