import { Outlet } from "react-router-dom";
// Puedes incluir componentes como Sidebar o DashboardHeader aquí

const DashboardLayout = () => {
  return (
    <div className="flex">
      {/* Sidebar podría ir aquí */}
      <div className="flex-grow">
        <Outlet /> {/* Aquí se renderizarán las páginas del dashboard */}
      </div>
    </div>
  );
};

export default DashboardLayout;
