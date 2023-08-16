import { createContext } from "react";
import { UserLogin } from "../../interfaces/login";
import { UserRegister } from "../../interfaces/register";

interface AuthContextProps {
	login: ({ identifier, password }: UserLogin) => Promise<void>;
	register: ({
		username,
		email,
		password,
		nivel,
	}: UserRegister) => Promise<void>;
	tokenApi: string;
}

export const AuthContext = createContext({} as AuthContextProps);
