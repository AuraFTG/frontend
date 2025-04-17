import { Link } from "react-router-dom";
import LogoIcon from "../../assets/aura-icon.avif";

function Header() {
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
      <nav className="text-xl font-semibold">
        <ul className="flex gap-4 justify-between [&>li]:hover:underline">
          <li>
            <Link to="/frontend">Home</Link>
          </li>
          <li>
            <Link to="/auth/login">Login</Link>
          </li>
          <li>
            <Link to="/auth/register">Registro</Link>
          </li>
          <li>
            <Link to="/users">Usuarios</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
