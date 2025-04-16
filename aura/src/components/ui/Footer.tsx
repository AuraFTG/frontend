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
        <p>Aura copyright © 2025. Todos los derechos reservados.</p>
        <span></span>
      </article>
    </footer>
  );
}

export default Footer;
