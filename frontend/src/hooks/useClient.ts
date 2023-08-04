import { useContext } from "react";
import { ClientContext } from "../context/client/ClientContext";

export const useClient = () => useContext(ClientContext);
