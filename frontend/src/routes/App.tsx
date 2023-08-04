import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { Start } from "../pages/StartPage";
import { Home } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";
import { RegisterPage } from "../pages/RegisterPage";
import { IncomeCarPage } from "../pages/IncomeCarPage";
import { VehicleHistoryPage } from "../pages/VehicleHistoryPage";
import { VehicleReviewPage } from "../pages/VehicleReviewPage";
import { Layout } from "../containers/Layout";
import { AuthRoute } from "./AuthRoute";
import { AuthProvider } from "../context/auth/AuthProvider";
import { RegisterClientPage } from "../pages/RegisterClientPage";
import { ClientProvider } from "../context/client/ClientProvider";
import { VehicleProvider } from "../context/vehicle/VehicleProvider";
import { VehicleRegisterPage } from "../pages/RegisterVehiclePage";

export const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ClientProvider>
          <VehicleProvider>
            <Layout>
              <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/start" element={<Start />} />
                <Route path="/" element={<Start />} />
                <Route path="/*" element={<Outlet />} />
                {/* Páginas */}

                <Route
                  path="/home"
                  element={
                    <AuthRoute>
                      <Home />
                    </AuthRoute>
                  }
                />
                <Route
                  path="/ingreso"
                  element={
                    <AuthRoute>
                      <IncomeCarPage />
                    </AuthRoute>
                  }
                />
                <Route
                  path="/client"
                  element={
                    <AuthRoute>
                      <RegisterClientPage />
                    </AuthRoute>
                  }
                />
                <Route
                  path="/vehicle"
                  element={
                    <AuthRoute>
                      <VehicleRegisterPage />
                    </AuthRoute>
                  }
                />
                <Route
                  path="/historial"
                  element={
                    <AuthRoute>
                      <VehicleHistoryPage />
                    </AuthRoute>
                  }
                />
                <Route
                  path="/revision"
                  element={
                    <AuthRoute>
                      <VehicleReviewPage />
                    </AuthRoute>
                  }
                />
              </Routes>
            </Layout>
          </VehicleProvider>
        </ClientProvider>
      </AuthProvider>
    </BrowserRouter>
  );
};
