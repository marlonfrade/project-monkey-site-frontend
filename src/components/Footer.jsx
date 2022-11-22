import { Link } from "react-router-dom";

import LogoDarkMode from "../images/logo-monkey-dark-mode.svg";
import LogoLightMode from "../images/logo-monkey-light-mode.svg";

import { IoLogoInstagram, IoLogoGithub } from "react-icons/io5";
import { SiDiscord } from "react-icons/si";

export default function Footer({ theme }) {
  return (
    <footer className="flex flex-col gap-y-5 items-center justify-between p-6 bg-white dark:bg-gray-900 sm:flex-row">
      <Link to="/">
        <span className="sr-only">Monkey Branch</span>
        {theme === "dark" ? (
          <img src={LogoDarkMode} alt="logo dark mode" />
        ) : (
          <img src={LogoLightMode} alt="Logo light mode" />
        )}
      </Link>

      <p className="text-sm text-gray-600 dark:text-gray-300">
        © MonkeyBranch. Todos os direitos reservados
      </p>

      <div className="flex -mx-2">
        {/* [ADJUSTS] - add link to the the anchors below */}
        <a
          href="#"
          className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
          aria-label="Reddit"
        >
          <SiDiscord />
        </a>

        <a
          href="#"
          className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
          aria-label="Facebook"
        >
          <IoLogoInstagram />
        </a>

        <a
          href="#"
          className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
          aria-label="Github"
        >
          <IoLogoGithub />
        </a>
      </div>
    </footer>
  );
}
