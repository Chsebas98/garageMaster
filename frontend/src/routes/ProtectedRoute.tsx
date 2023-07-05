import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export const ProtectedRoute = () => {
  const { tokenApi } = useAuth();

  if (!tokenApi) return <Navigate to="/login" />;

  return <Outlet />;
};
