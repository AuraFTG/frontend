// routes/AppRouter.tsx
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ROUTES } from "./routes";
import PrivateRoute from "./PrivateRoute";

// Layouts
import MainLayout from "../layouts/MainLayout";
// import AuthLayout from "../layouts/AuthLayout";
import DashboardLayout from "../layouts/DashboardLayout";

// Pages
import LoginPage from "../pages/auth/LoginPage";
import RegisterPage from "../pages/auth/RegisterPage";
import DashboardPage from "../pages/dashboard/DashboardPage";
import UserList from "../pages/dashboard/UserList";
import NotFound from "../components/ui/NotFound";

// routes/AppRouter.tsx
const AppRouter = () => {
  return (
    <BrowserRouter basename="/frontend">
      <Routes>
        <Route element={<MainLayout />}>
          {" "}
          {/* MainLayout contiene Header y Footer */}
          {/* Rutas públicas */}
          <Route path={ROUTES.LOGIN} element={<LoginPage />} />
          <Route path={ROUTES.REGISTER} element={<RegisterPage />} />
          <Route path={ROUTES.USERS} element={<UserList />} />
          {/* Rutas privadas */}
          <Route element={<PrivateRoute />}>
            <Route
              path={ROUTES.HOME}
              element={<Navigate to={ROUTES.DASHBOARD} />}
            />

            <Route element={<DashboardLayout />}>
              <Route path={ROUTES.DASHBOARD} element={<DashboardPage />} />
              {/* otras rutas privadas */}
            </Route>
          </Route>
          {/* Ruta para "not found" */}
          {/* <Route path="*" element={<Navigate to={ROUTES.HOME} />} /> */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
