import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "../styles/Login.css";

export const LoginPage = () => {
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
						</div>
					</div>
					<div className="col-sm-8 p-4 d-flex align-items-center justify-content-center">
						<div className="container">
							<div className="text-center"></div>
							<form className="d-flex flex-column align-items-center">
								<div className="form-group py-2 my-2">
									<label htmlFor="email" className="fw-bold">
										Email
									</label>
									<input
										type="email"
										className="form-control smaller-input"
										id="email"
										placeholder="Enter email"
									/>
								</div>
								<div className="form-group py-2 my-2">
									<label htmlFor="password" className="fw-bold">
										Password
									</label>
									<input
										type="password"
										className="form-control smaller-input"
										id="password"
										placeholder="Password"
									/>
								</div>
								<button type="submit" className="btn btn-custom my-2">
									Iniciar Sesión
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
