import { ReactNode, useEffect, useState } from "react";
import { VehicleContext } from "./VehicleContext";
import { axiosClient } from "../../apis";
import {
  RegisterVehicle,
  VehicleResponse,
  VehicleWithClients,
  VehicleWithClientsDatum,
} from "../../interfaces/vehicle";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

interface VehicleProviderProps {
  children: ReactNode;
}

export const VehicleProvider = ({ children }: VehicleProviderProps) => {
  const [vehicleInformation, setVehicleInformation] = useState<VehicleWithClientsDatum[]>([]);
  const [searchResultVehicle, setsearchResultVehicle] = useState<VehicleWithClientsDatum>({} as VehicleWithClientsDatum);
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

  const getVehicleInformationWithClients = async (): Promise<void> => {
    try {
      const { data } = await axiosClient.get<VehicleWithClients>(
        "api/vehiculos?populate=*",
        { headers: { Authorization: `Bearer ${tokenApi}` } }
      );
      setVehicleInformation(data.data);
      console.log(data.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if(tokenApi) {
      getVehicleInformationWithClients();
    }
    
  }, [tokenApi]);

  const searchForPlate = (plate: string):void => {
    const informationVehicle = vehicleInformation.find(
      (search) => search.attributes.placa === plate
    );
    setsearchResultVehicle(informationVehicle as VehicleWithClientsDatum);
  };

  return (
    <VehicleContext.Provider value={{ registerVehicle, searchForPlate, searchResultVehicle }}>
      {children}
    </VehicleContext.Provider>
  );
};
