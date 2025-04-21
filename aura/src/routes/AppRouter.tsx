// routes/AppRouter.tsx
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";
import { ROUTES } from "./routes";
import PrivateRoute from "./PrivateRoute";

// Layouts
import MainLayout from "../layouts/MainLayout";
// import AuthLayout from "../layouts/AuthLayout";
import DashboardLayout from "../layouts/DashboardLayout";
import Loader from "../components/ui/Loader";
import PatientList from "../pages/dashboard/PatientList";

// Pages
const LoginPage = lazy(() => import("../pages/auth/LoginPage"));
const RegisterPage = lazy(() => import("../pages/auth/RegisterPage"));
const DashboardPage = lazy(() => import("../pages/dashboard/DashboardPage"));
const NotFound = lazy(() => import("../components/ui/NotFound"));

const AppRouter = () => {
  return (
    <BrowserRouter basename="/frontend">
      <Suspense fallback={<Loader text="Cargando" />}>
        <Routes>
          <Route element={<MainLayout />}>
            {" "}
            {/* MainLayout contiene Header y Footer */}
            {/* Rutas públicas */}
            <Route path={ROUTES.LOGIN} element={<LoginPage />} />
            <Route path={ROUTES.REGISTER} element={<RegisterPage />} />
            <Route path={ROUTES.USERS} element={<PatientList />} />
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
      </Suspense>
    </BrowserRouter>
  );
};

export default AppRouter;
