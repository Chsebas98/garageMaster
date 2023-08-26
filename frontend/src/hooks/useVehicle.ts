import { useContext } from "react"
import { VehicleContext } from "../context/vehicle/VehicleContext"

export const useVehicle = () => useContext(VehicleContext);