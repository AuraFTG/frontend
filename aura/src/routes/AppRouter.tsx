// routes/AppRouter.tsx
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ROUTES } from "./routes";
import PrivateRoute from "./PrivateRoute";

// Layouts
import MainLayout from "../layouts/MainLayout";
import AuthLayout from "../layouts/AuthLayout";
import DashboardLayout from "../layouts/DashboardLayout";

// Pages
import LoginPage from "../pages/auth/LoginPage";
import RegisterPage from "../pages/auth/RegisterPage";
import DashboardPage from "../pages/dashboard/DashboardPage";
// import EmployeesListPage from "../pages/employees/EmployeesListPage";
// import EmployeeDetailPage from "../pages/employees/EmployeeDetailPage";
// import PaymentsPage from "../pages/payments/PaymentsPage";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rutas públicas con AuthLayout */}
        <Route element={<AuthLayout />}>
          <Route path={ROUTES.LOGIN} element={<LoginPage />} />
          <Route path={ROUTES.REGISTER} element={<RegisterPage />} />
        </Route>

        {/* Rutas privadas con MainLayout */}
        <Route element={<MainLayout />}>
          <Route element={<PrivateRoute />}>
            {/* Home redirige al dashboard */}
            <Route
              path={ROUTES.HOME}
              element={<Navigate to={ROUTES.DASHBOARD} />}
            />

            {/* Rutas del dashboard */}
            <Route element={<DashboardLayout />}>
              <Route path={ROUTES.DASHBOARD} element={<DashboardPage />} />
              {/* <Route path={ROUTES.EMPLOYEES} element={<EmployeesListPage />} /> */}
              {/* <Route
                path={ROUTES.EMPLOYEE_DETAIL}
                element={<EmployeeDetailPage />}
              /> */}
              {/* <Route path={ROUTES.PAYMENTS} element={<PaymentsPage />} /> */}
            </Route>
          </Route>
        </Route>

        {/* Ruta para "not found" */}
        <Route path="*" element={<Navigate to={ROUTES.LOGIN} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
