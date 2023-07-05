import { createContext } from "react";
import { UserLogin } from "../interfaces/login";

interface AuthContextProps {
    tokenApi: string;
    login: (user: UserLogin) => Promise<void>;
}

export const AuthContext = createContext({} as AuthContextProps);