import { createContext } from "react";
import { UserLogin } from "../../interfaces/login";
import { UserRegister } from "../../interfaces/register";
import { AuthResponse } from "../../interfaces/authResponse";

interface AuthContextProps {
	login: ({ identifier, password }: UserLogin) => Promise<void>;
	mechanic: AuthResponse | string | null
	register: ({
		username,
		email,
		password,
		nivel,
	}: UserRegister) => Promise<void>;
	tokenApi: string | undefined;
	logout: () => void
}

export const AuthContext = createContext({} as AuthContextProps);
