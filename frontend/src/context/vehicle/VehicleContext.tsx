import { createContext } from "react";
import { RegisterVehicle, VehicleWithClientsDatum } from "../../interfaces/vehicle";

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
  }: RegisterVehicle) => Promise<void>
  searchForPlate: (plate:string) => void
  searchResultVehicle: VehicleWithClientsDatum
}

export const VehicleContext = createContext({} as VehicleContextProps);
