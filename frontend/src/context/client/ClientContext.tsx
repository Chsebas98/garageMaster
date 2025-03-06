import { createContext } from "react";
import { ClientResponse, Datum, RegisterClient } from "../../interfaces/client";

interface ClientContextProps {
  registerClient: ({
    nombre,
    apellido,
    correo,
    telefono,
    direccion,
  }: RegisterClient) => Promise<void>
  clients: Datum[]
}

export const ClientContext = createContext({} as ClientContextProps);
