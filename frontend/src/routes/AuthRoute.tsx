import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

interface Props {
  children: ReactNode;
}

export const AuthRoute = ({ children }: Props) => {

  const { tokenApi } = useAuth();

  if (!tokenApi) {
    return (
      <>
        <Navigate to="/login" />
      </>
    );
  }
  return <>{children}</>
};
