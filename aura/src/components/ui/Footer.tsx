import { FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-black text-white py-4 px-6">
      <article className="flex justify-between">
        <a
          href="https://github.com/AuraFTG"
          target="_blank"
          rel="noopener noreferrer"
          title="Repositorio del proyecto"
          className="hover:opacity-80 transition-opacity"
        >
          <FaGithub className="text-3xl" />
        </a>
        <p className="text-center w-2/3 md:w-auto">
          Aura copyright © 2025. Todos los derechos reservados.
        </p>
        <span className="w-8"></span>
      </article>
    </footer>
  );
}

export default Footer;
