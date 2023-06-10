import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "../styles/Login.css";
import { useState, ChangeEvent, FormEvent } from "react";

export const LoginPage = () => {
	const [correo, setCorreo] = useState("");
	const [password, setPassword] = useState("");

	//password
	const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
		setPassword(event.target.value);
	};

	//Logueo
	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
	};

	return (
		<>
			<div className="container-fluid bg-container-custom">
				<div className="row">
					<div
						className="col-sm-4 bg-custom text-white p-4 d-flex flex-column justify-content-center"
						id="sidebar"
					>
						<img src={logo} alt="" />
						<div className="text-center py-3 ">
							<h4 className="mb-4">Garage Master</h4>
							<Link to="/" className="btn btn-back ">
								<i className="fa-solid fa-circle-arrow-left"></i> Volver
							</Link>
							<br />
							<small className=" text-white">¿Ya tienes una cuenta?</small>
							<br />
							<Link to="/register" className="btn btn-back ">
								Registrate <i className="fa-solid fa-circle-arrow-right"></i>
							</Link>
						</div>
					</div>
					<div className="col-sm-8 p-4 d-flex align-items-center justify-content-center">
						<div className="container">
							<div className="text-center"></div>
							<form
								className="d-flex flex-column align-items-center"
								onSubmit={handleSubmit}
							>
								<div className="form-group py-2 my-2">
									<label htmlFor="password" className="fw-bold">
										Correo Electrónico
									</label>
									<input
										type="email"
										className="form-control smaller-input"
										id="email"
										placeholder="Ingrese el correo electrónico "
										value={correo}
										onChange={(event) => setCorreo(event.target.value)}
									/>
								</div>
								<div className="form-group py-2 my-2">
									<label htmlFor="password" className="fw-bold">
										Contraseña
									</label>
									<input
										type="password"
										className="form-control smaller-input"
										id="password"
										placeholder="Password"
										value={password}
										onChange={handlePasswordChange}
									/>
								</div>
								<Link to={"/home"}>
									<button type="submit" className="btn btn-custom my-2">
										Iniciar Sesión
									</button>
								</Link>
							</form>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
