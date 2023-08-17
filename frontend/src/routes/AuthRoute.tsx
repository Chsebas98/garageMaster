import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { token } from "../apis/service/store";

interface Props {
  children: ReactNode;
}

export const AuthRoute = ({ children }: Props) => {

  if (!token) {
    return (
      <>
        <Navigate to="/login" />
      </>
    );
  }
  return <>{children}</>
};
