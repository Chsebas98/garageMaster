import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useAuth } from "../hooks/useAuth"
import { Home } from "../pages/HomePage";
import { IncomeCarPage } from "../pages/IncomeCarPage";
import { VehicleHistoryPage } from "../pages/VehicleHistoryPage";
import { VehicleReviewPage } from "../pages/VehicleReviewPage";
import { ProtectedRoute } from "./ProtectedRoute";
import { LoginPage } from "../pages/LoginPage";
import { RegisterPage } from "../pages/RegisterPage";
import { Start } from "../pages/StartPage";
import { Layout } from "../containers/Layout";

export const Routes = () => {
    const { tokenApi } = useAuth();
    //public routes 
    const routesForPublic = [
        {
            path: "/",
            element: <Start />
        },
        {
            path: "/service",
            element: <div>Service page</div>
        },
        {
            path: "/about-us",
            element: <div>About us</div>
        }
    ]

    const routesForAuthenticateOnly = [
        {
            path: "/",
            element: <ProtectedRoute />,
            children: [
                {
                    path: "/home",
                    element: <Home />
                },
                {
                    path: "/ingreso",
                    element: <IncomeCarPage />
                },
                {
                    path: "/historial",
                    element: <VehicleHistoryPage />
                },
                {
                    path: "/revision",
                    element: <VehicleReviewPage />
                },
            ]
        },
    ]

    //Define routes accessible only to non-authenticated users
    const routesForNotAuthenticateOnly = [
        {
            path: "/",
            element: <Start />
        },
        {
            path: "/login",
            element: <LoginPage />
        },
        {
            path: "/register",
            element: <RegisterPage />
        },
    ]

    //combine and conditionally include routes based on authentication status
    const router = createBrowserRouter([
        ...routesForPublic,
        ...(!tokenApi ? routesForNotAuthenticateOnly : []),
        ...routesForAuthenticateOnly
    ]);

    return (
        
            <RouterProvider router={router} />
        
    )

}