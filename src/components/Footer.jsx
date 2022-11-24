import { Link } from "react-router-dom";

import LogoDarkMode from "../images/logo-monkey-dark-mode.svg";
import LogoLightMode from "../images/logo-monkey-light-mode.svg";

import { IconContext } from "react-icons";
import { IoLogoInstagram, IoLogoGitlab } from "react-icons/io5";
import { SiDiscord } from "react-icons/si";

export default function Footer({ theme }) {
  return (
    <footer className="container z-50 mx-auto flex flex-col gap-y-5 items-center justify-between p-6 bg-transparent sm:flex-row">
      <Link to="/">
        <span className="sr-only">Monkey Branch</span>
        {theme === "dark" ? (
          <img src={LogoDarkMode} className="w-20 h-20" alt="logo dark mode" />
        ) : (
          <img
            src={LogoLightMode}
            className="w-20 h-20"
            alt="Logo light mode"
          />
        )}
      </Link>

      <p className="text-sm text-gray-600 dark:text-gray-300">
        © MonkeyBranch. Todos os direitos reservados
      </p>

      <div className="flex -mx-2">
        <IconContext.Provider
          value={{
            size: "1.5em",
          }}
        >
          <a
            href="https://discord.com/invite/37sy2VcqtJ"
            target="_blank"
            className="mx-2 z-50 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-500"
            aria-label="Discord"
          >
            <SiDiscord />
          </a>

          <a
            href="https://www.instagram.com/monkeybranch.dev/"
            target="_blank"
            className="mx-2 z-50 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-500"
            aria-label="Instagram"
          >
            <IoLogoInstagram />
          </a>

          <a
            href="https://gitlab.com/monkeybranch"
            target="_blank"
            className="mx-2 z-50 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-500"
            aria-label="GitLab"
          >
            <IoLogoGitlab />
          </a>
        </IconContext.Provider>
      </div>
    </footer>
  );
}
