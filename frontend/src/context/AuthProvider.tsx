import { ReactNode, useEffect, useMemo, useState } from "react";
import { AuthContext } from "./AuthContext";
import axios from "axios";
import { AuthResponse } from "../interfaces/authResponse";
import { UserRegister } from "../interfaces/register";
import { UserLogin } from "../interfaces/login";

interface AuthProviderProps {
  children: ReactNode;
}

const API:string = import.meta.env.VITE_API;

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [tokenApi, setTokenApi] = useState<string>("");
  const [message, setMessage] = useState<string>("");


  const login = async ({identifier, password}:UserLogin) => {
   try {
    const { data } = await axios.post<AuthResponse>(`${API}/api/auth/local`, {
      identifier,
      password
    });
    setTokenApi(data.jwt);
   } catch (error) {
    if(axios.isAxiosError(error)) {
      setMessage(error.response?.data.message);
    }
    setMessage("");
   }
  };

  return (
    <AuthContext.Provider value={{login, tokenApi}}>{children}</AuthContext.Provider>
  );
};