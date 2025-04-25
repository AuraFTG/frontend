import { Link } from "react-router-dom";
import LogoIcon from "../../assets/aura-icon.avif";
import { MdMenu, MdClose } from "react-icons/md";
import { useEffect, useState } from "react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false); // Cierra el menú si la pantalla es grande
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="flex bg-blue-400 text-white items-center justify-between py-4 px-6">
      <div>
        <Link className="text-lg flex items-center gap-2 font-semibold" to="/">
          <img
            className="max-w-10 bg-white p-1 rounded-full"
            src={LogoIcon}
            alt=""
          />
          <p>AURA</p>
        </Link>
      </div>

      <nav
        className={`${
          isMenuOpen ? "block fixed inset-0 bg-blue-400 z-20" : "hidden"
        } md:block md:static md:bg-transparent text-xl font-semibold`}
      >
        <ul
          className={`flex ${
            isMenuOpen
              ? "flex-col justify-center items-center h-full gap-8"
              : ""
          } md:flex-row gap-4 justify-between [&>li]:hover:underline`}
        >
          <li onClick={handleMenu}>
            <Link to="/frontend">Home</Link>
          </li>
          <li onClick={handleMenu}>
            <Link to="/auth/login">Login</Link>
          </li>
          <li onClick={handleMenu}>
            <Link to="/auth/register">Registro</Link>
          </li>
          <li onClick={handleMenu}>
            <Link to="/patients">Pacientes</Link>
          </li>
          <li onClick={handleMenu}>
            <Link to="/schedule">Agenda</Link>
          </li>
        </ul>
      </nav>

      <button
        className="md:hidden cursor-pointer z-20"
        onClick={handleMenu}
        aria-label="Toggle menu"
      >
        {isMenuOpen ? <MdClose size={28} /> : <MdMenu size={28} />}
      </button>
    </header>
  );
}

export default Header;
