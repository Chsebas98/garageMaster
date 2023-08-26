import { ReactNode, useEffect, useState } from "react";
import { ClientContext } from "./ClientContext";
import { ClientResponse, Datum, RegisterClient } from "../../interfaces/client";
import { axiosClient } from "../../apis";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { useAuth } from "../../hooks/useAuth";
import axios from "axios";

interface ClientProviderProps {
  children: ReactNode;
}

export const ClientProvider = ({ children }: ClientProviderProps) => {
  const [clients, setClients] = useState<Datum[]>([]);
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
        { headers: { Authorization: `Bearer ${tokenApi}` } }
      );
      const res = await swal("Cliente registrado!", "", "success");
      if(res) {
        window.location.reload();
        navigate("/home");
      }
      window.location.href = "/home";
    } catch (error) {
      if (axios.isAxiosError(error)) {
        //alert(error.response?.data.error.message);
        swal(
          "Ya existe un cliente registrado con ese correo electrónico!",
          "",
          "error"
        );
      }
    }
  };

  const getClients = async (): Promise<void> => {
    try {
      const { data } = await axiosClient.get<ClientResponse>(
        "/api/clientes",
        { headers: { Authorization: `Bearer ${tokenApi}` } }
      );
      setClients(data.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (tokenApi) {
      getClients();
    }
    
  }, [tokenApi]);
  return (
    <ClientContext.Provider value={{ registerClient, clients }}>
      {children}
    </ClientContext.Provider>
  );
};
