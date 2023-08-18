import { ReactNode, useState } from "react";
import { AuthContext } from "./AuthContext";
import axios from "axios";
import { AuthResponse } from "../../interfaces/authResponse";
import { UserRegister } from "../../interfaces/register";
import { UserLogin } from "../../interfaces/login";
import { useNavigate } from "react-router-dom";
import { axiosClient } from "../../apis";
import swal from "sweetalert";

interface AuthProviderProps {
	children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
	const [tokenApi, setTokenApi] = useState<string>("");
	const [mechanic, setMechanic] = useState<AuthResponse>({} as AuthResponse)

	const navigate = useNavigate();

	const login = async ({ identifier, password }: UserLogin): Promise<void> => {
		try {
			const { data } = await axiosClient.post<AuthResponse>("/api/auth/local", {
				identifier,
				password,
			});
			setTokenApi(data.jwt);
			navigate("/home");
			setMechanic(data);
			localStorage.setItem("nivel", data.user.nivel);
			localStorage.setItem("token", data.jwt);
			//localStorage.setItem("mechanic", JSON.stringify(data.user))
		} catch (error) {
			if (axios.isAxiosError(error)) {
				//alert(error.response?.data.error.message);
				swal(`${error.response?.data.error.message}!`, "", "error");
			}
		}
	};

	const register = async ({
		username,
		email,
		password,
		nivel,
	}: UserRegister): Promise<void> => {
		try {
			await axiosClient.post<UserRegister>("/api/auth/local/register", {
				username,
				email,
				password,
				nivel,
			});
			navigate("/login");
		} catch (error) {
			if (axios.isAxiosError(error)) {
				//alert(error.response?.data.error.message);
				swal(`${error.response?.data.error.message}!`, "", "error");
			}
		}
	};

	return (
		<AuthContext.Provider value={{ login, register, tokenApi, mechanic }}>
			{children}
		</AuthContext.Provider>
	);
};
