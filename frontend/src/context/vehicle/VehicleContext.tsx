import { createContext } from "react";
import { ListVehicleReviewDatum, RegisterVehicle, RegisterVehicleReview, VehicleWithClientsDatum } from "../../interfaces/vehicle";

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
  
  registerVehicleReview: ({
    detalles_revision,
    fecha_salida,
    tiempo_reparacion,
    peizas_cambiadas,
    extras,
    detalles_extra,
    precio,
  }: RegisterVehicleReview) => Promise<void>
  searchForPlate: (plate:string) => void
  searchResultVehicle: VehicleWithClientsDatum
  listReviewsVehicle: (plate:string) => void
  vehicleHistory: ListVehicleReviewDatum[]
  historyVehicle: ListVehicleReviewDatum[]
}

export const VehicleContext = createContext({} as VehicleContextProps);
