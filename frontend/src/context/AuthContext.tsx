import { createContext } from "react";
import { UserLogin } from "../interfaces/login";
import { UserRegister } from "../interfaces/register";

interface AuthContextProps {
  login: ({ identifier, password }: UserLogin) => Promise<void>;
  register: ({ username, email, password }: UserRegister) => Promise<void>;
  setMessage: (message: string) => void
  tokenApi: string;
  message: string
}

export const AuthContext = createContext({} as AuthContextProps);
