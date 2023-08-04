import { ReactNode } from "react";
import { ClientContext } from "./ClientContext";
import { RegisterClient } from "../../interfaces/registerClient";
import { axiosClient } from "../../apis";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

interface ClientProviderProps {
  children: ReactNode;
}

export const ClientProvider = ({ children }: ClientProviderProps) => {

  const { tokenApi } = useAuth();

  const navigate = useNavigate();
  
  const registerClient = async ({
    nombre,
    apellido,
    correo,
    telefono,
    direccion,
  }: RegisterClient): Promise<void> => {
    try {
      await axiosClient.post<RegisterClient>(
        "/api/clientes",
        {
          data: {
            nombre,
            apellido,
            correo,
            telefono,
            direccion,
          },
        },
        { headers: { "Authorization": `Bearer ${tokenApi}` } }
      );
      navigate("/home");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <ClientContext.Provider value={{ registerClient }}>
      {children}
    </ClientContext.Provider>
  );
};
