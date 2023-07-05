import { Layout } from "./containers/Layout"
import { AuthProvider } from "./context/AuthProvider"
import { Routes } from "./routes/Index"

export const App = () => {
    return (
        <AuthProvider>
           
                <Routes />
            
        </AuthProvider>
    )
}