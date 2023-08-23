import { ReactNode, useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import axios from "axios";
import { AuthResponse } from "../../interfaces/authResponse";
import { UserRegister } from "../../interfaces/register";
import { UserLogin } from "../../interfaces/login";
import { useNavigate } from "react-router-dom";
import { axiosClient } from "../../apis";
import swal from "sweetalert";
import Cookie from "js-cookie";

interface AuthProviderProps {
  children: ReactNode;
}

const token = Cookie.get("token");
const mechanicUser = window.localStorage.getItem("mechanic");

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [tokenApi, setTokenApi] = useState<string | undefined>(token ? token : "");
  const [mechanic, setMechanic] = useState<AuthResponse>(mechanicUser ? JSON.parse(mechanicUser) : {} as AuthResponse);

  const navigate = useNavigate();

  const login = async ({ identifier, password }: UserLogin): Promise<void> => {
    try {
      const { data } = await axiosClient.post<AuthResponse>("/api/auth/local", {
        identifier,
        password,
      });

      navigate("/home");
      setMechanic(data);
      localStorage.setItem("nivel", data.user.nivel);
      localStorage.setItem("mechanic", JSON.stringify(data));
      if (data.jwt) {
        Cookie.set("token", data.jwt, { expires: 5 });
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        //alert(error.response?.data.error.message);
        swal(`${error.response?.data.error.message}!`, "", "error");
      }
    } finally {
      const token = Cookie.get("token");
      if(token) {
        setTokenApi(token);
        //setMechanic(JSON.parse(mechanicUser));
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

  const logout = () => {
    Cookie.remove("token");
    window.localStorage.removeItem("mechanic");
    window.location.reload();
    window.location.href = "/";
  };

  return (
    <AuthContext.Provider
      value={{ login, register, tokenApi, mechanic, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
