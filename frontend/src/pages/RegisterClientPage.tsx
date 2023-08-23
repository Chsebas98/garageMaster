import { ChangeEvent, FormEvent, useState } from "react";
import { RegisterClient } from "../interfaces/client";
import { useClient } from "../hooks/useClient";
import swal from "sweetalert";

export const RegisterClientPage = () => {
	const [client, setClient] = useState<RegisterClient>({
		nombre: "",
		apellido: "",
		correo: "",
		telefono: "",
		direccion: "",
	});

	const { registerClient } = useClient();

	const handleClientChange = (event: ChangeEvent<HTMLInputElement>) => {
		setClient({
			...client,
			[event.target.name]: event.target.value,
		});
	};

	const handleSubmitClient = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		if (
			[
				client.nombre,
				client.apellido,
				client.correo,
				client.telefono,
				client.direccion,
			].includes("")
		) {
			swal("Todos los campos deben ser llenados", "", "error");
			return;
		}
		registerClient(client);
	};
	return (
		<div className="container-register">
			<div className="forms-container">
				<div className="signin-signup">
					<form onSubmit={handleSubmitClient} className="sign-in-form" id="form">
						<h2 className="title">Registrar Cliente</h2>
						<div className="input-signup">
							<i className="fas fa-user"></i>
							<input
								type="text"
								placeholder="Nombre"
								name="nombre"
								onChange={handleClientChange}
							/>
						</div>
						<div className="input-signup">
							<i className="fas fa-user"></i>
							<input
								type="text"
								placeholder="Apellido"
								name="apellido"
								onChange={handleClientChange}
							/>
						</div>
						<div className="input-signup">
							<i className="fas fa-envelope"></i>
							<input
								type="email"
								placeholder="Email"
								name="correo"
								onChange={handleClientChange}
							/>
						</div>
						<div className="input-signup">
							<i className="fas fa-phone"></i>
							<input
								type="tel"
								placeholder="Teléfono"
								name="telefono"
								onChange={handleClientChange}
							/>
						</div>
						<div className="input-signup">
							<i className="fas fa-map-marker"></i>
							<input
								type="text"
								placeholder="Dirección"
								name="direccion"
								onChange={handleClientChange}
							/>
						</div>
						<button type="submit" className="btn-login solid">
							Registrar
						</button>
					</form>
				</div>
			</div>

			<div className="panels-container">
				<div className="panel left-panel"></div>
			</div>
		</div>
	);
};
