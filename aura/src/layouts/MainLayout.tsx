import { Outlet } from "react-router-dom";
import Header from "../components/ui/Header";
import Footer from "../components/ui/Footer";

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-6">
        <Outlet /> {/* Aquí se renderizarán las páginas hijas */}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
