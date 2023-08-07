import { ReactNode } from "react";
import { VehicleContext } from "./VehicleContext";
import { axiosClient } from "../../apis";
import { RegisterVehicle, VehicleResponse } from "../../interfaces/vehicle";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

interface VehicleProviderProps {
  children: ReactNode;
}

export const VehicleProvider = ({ children }: VehicleProviderProps) => {
  const navigate = useNavigate();
  const { tokenApi } = useAuth();

  const registerVehicle = async ({
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
  }: RegisterVehicle): Promise<void> => {
    try {
      await axiosClient.post<VehicleResponse>(
        "/api/vehiculos",
        {
          data: {
            placa,
            color,
            kilometraje,
            anio,
            marca,
            modelo,
            combustible,
            fecha_ingreso,
            hora_ingreso: `${hora_ingreso}:00`,
            motivo_ingreso,
            clientes: [clientes],
          },
        },
        { headers: { Authorization: `Bearer ${tokenApi}` } }
      );
      swal("Vehiculo registrado!", "", "success");
      navigate("/home");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <VehicleContext.Provider value={{ registerVehicle }}>
      {children}
    </VehicleContext.Provider>
  );
};
