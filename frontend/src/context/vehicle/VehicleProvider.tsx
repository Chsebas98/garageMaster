import { ReactNode } from "react";
import { VehicleContext } from "./VehicleContext";
import { axiosClient } from "../../apis";
import { VehicleResponse } from "../../interfaces/vehicle";

interface VehicleProviderProps {
  children: ReactNode;
}

export const VehicleProvider = ({ children }: VehicleProviderProps) => {
  const registerVehicle = async (): Promise<void> => {
    try {
      await axiosClient.post<VehicleResponse>("/api/vehiculos", {
        data: {
            
        }
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <VehicleContext.Provider value={{}}>{children}</VehicleContext.Provider>
  );
};
