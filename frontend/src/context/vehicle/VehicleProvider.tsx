import { ReactNode } from "react"
import { VehicleContext } from "./VehicleContext"

interface VehicleProviderProps {
    children: ReactNode
}

export const VehicleProvider = ({children}: VehicleProviderProps) => {
    
    return (
        <VehicleContext.Provider value={{}}>
            {children}
        </VehicleContext.Provider>
    )
}