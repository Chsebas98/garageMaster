import { createContext } from "react";
import { RegisterVehicle } from "../../interfaces/vehicle";

interface VehicleContextProps {
  registerVehicle: ({
    placa,
    color,
    kilometraje,
    anio,
    marca,
    modelo,
    combustible,
    fecha_ingreso,
    hora_ingreso,
    motivo_ingreso,
    clientes,
  }: RegisterVehicle) => Promise<void>;
}

export const VehicleContext = createContext({} as VehicleContextProps);
