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

  const regsiter = async (user:UserRegister) => {
    
  }

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

  console.log(tokenApi);


  useEffect(() => {
    if (tokenApi) {
      axios.defaults.headers.common["Authorization"] = "Bear" + tokenApi;
      localStorage.setItem("token", tokenApi);
    } else {
      delete axios.defaults.headers.common["Authorization"];
      localStorage.removeItem("token");
    }
  }, [tokenApi]);
  const contextValue = useMemo(
    () => ({
      tokenApi,
      login,
    }),
    [tokenApi]
  );
  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
