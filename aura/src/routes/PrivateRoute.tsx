import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/auth/useAuth";
import { ROUTES } from "./routes";

const PrivateRoute = () => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? <Outlet /> : <Navigate to={ROUTES.LOGIN} />;
};

export default PrivateRoute;
