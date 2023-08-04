import { createContext } from "react";
import { RegisterClient } from "../../interfaces/registerClient";

interface ClientContextProps {
  registerClient: ({
    nombre,
    apellido,
    correo,
    telefono,
    direccion,
  }: RegisterClient) => Promise<void>
}

export const ClientContext = createContext({} as ClientContextProps);
