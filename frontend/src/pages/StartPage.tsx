import logo from "../assets/logo.png";
import { useAuth } from "../hooks/useAuth";
import "../styles/Start.css";

export const Start = () => {
	const { tokenApi } = useAuth();
	return (
		<>
			{tokenApi ? (
				<section className="mu">
					<button className="btn btn-download">
						<a
							href="/GM%20Manual%20de%20Usuario.pdf"
							target="_blank"
							rel="noopener noreferrer"
						>
							Descargar Manual de Usuario
						</a>
					</button>
				</section>
			) : null}
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
