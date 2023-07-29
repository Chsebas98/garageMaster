import { createContext } from "react";
import { UserLogin } from "../interfaces/login";

interface AuthContextProps {
    login: (identifier: string, password: string) => Promise<void>
    tokenApi: string;
    
}

export const AuthContext = createContext({} as AuthContextProps);