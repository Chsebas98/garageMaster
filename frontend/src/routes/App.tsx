import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { Start } from "../pages/StartPage";
import { Home } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";
import { RegisterPage } from "../pages/RegisterPage";
import { IncomeCarPage } from "../pages/IncomeCarPage";
import { VehicleHistoryPage } from "../pages/VehicleHistoryPage";
import { VehicleReviewPage } from "../pages/VehicleReviewPage";
import { Layout } from "../containers/Layout";

export const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/start" element={<Start />} />
          <Route path="/" element={<Start />} />
          <Route path="/home" element={<Home />} />
          <Route path="/*" element={<Outlet />} />
          {/* Páginas */}

          <Route path="/ingreso" element={<IncomeCarPage />} />
          <Route path="/historial" element={<VehicleHistoryPage />} />
          <Route path="/revision" element={<VehicleReviewPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};
/* 
createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
        loader: ({ request }) =>
          fetch("/api/dashboard.json", {
            signal: request.signal,
          }),
      },
      {
        element: <AuthLayout />,
        children: [
          {
            path: "login",
            element: <Login />,
            loader: redirectIfUser,
          },
          {
            path: "logout",
            action: logoutUser,
          },
        ],
      },
    ],
  },
]);
 */
