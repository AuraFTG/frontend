// layouts/AuthLayout.tsx
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8">
        <Outlet /> {/* Aquí se renderizarán LoginPage o RegisterPage */}
      </div>
    </div>
  );
};

export default AuthLayout;
