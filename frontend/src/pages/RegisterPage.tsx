import { Link } from "react-router-dom";
import "../styles/Register.css";
import { ChangeEvent, FormEvent, useState } from "react";
import { UserRegister } from "../interfaces/register";
import { useAuth } from "../hooks/useAuth";
import swal from "sweetalert";

export const RegisterPage = () => {
	const [user, setUser] = useState<UserRegister>({
		username: "",
		email: "",
		password: "",
		nivel: "",
	});

	const { register } = useAuth();

	const handleRegisterChange = (event: ChangeEvent<HTMLInputElement>) => {
		setUser({
			...user,
			[event.target.name]: event.target.value,
		});
	};
	const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
		setUser({
			...user,
			[event.target.name]: event.target.value,
		});
	};
	const handleRegisterSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		if ([user.username, user.email, user.password, user.nivel].includes("")) {
			swal("Todos los campos deben ser llenados", "", "error");
			return;
		}
		//console.log(user);
		register(user);
	};
	return (
		<div className="container-register">
			<div className="forms-container">
				<div className="signin-signup">
					<form onSubmit={handleRegisterSubmit} className="sign-in-form" id="form">
						<h2 className="title">Registrate</h2>
						<div className="input-signup">
							<i className="fas fa-user"></i>
							<input
								type="text"
								placeholder="Nombre de usuario"
								name="username"
								onChange={handleRegisterChange}
							/>
						</div>
						<div className="input-signup">
							<i className="fas fa-envelope"></i>
							<input
								type="email"
								placeholder="Email"
								name="email"
								onChange={handleRegisterChange}
							/>
						</div>
						<div className="input-signup">
							<i className="fa-solid fa-circle-info"></i>

							<select
								name="nivel"
								id="nivel"
								value={user.nivel}
								onChange={handleSelectChange}
								className="form-select"
							>
								<option value="">Seleccione su nivel</option>
								<option value="Junior">Junior</option>
								<option value="Mid">Mid</option>
								<option value="Senior">Senior</option>
							</select>
						</div>
						<div className="input-signup">
							<i className="fas fa-lock"></i>
							<input
								type="password"
								placeholder="Contraseña"
								name="password"
								onChange={handleRegisterChange}
							/>
						</div>
						<button type="submit" className="btn-login solid">
							Registrar
						</button>
					</form>
				</div>
			</div>

			<div className="panels-container">
				<div className="panel left-panel">
					<div className="content">
						<h3>¿ Ya tienes cuenta ?</h3>
						<p>
							Ingresa con tus credenciales
						</p>
						<Link to="/login" className="btn-login transparent">
							Login
						</Link>
					</div>
					<img src="img/log.svg" className="image" alt="" />
				</div>
			</div>
		</div>
	);
};
