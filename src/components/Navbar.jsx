import { useState } from "react";
import { Link } from "react-router-dom";

import { HiMenuAlt3 } from "react-icons/hi";
import { IoInvertModeOutline, IoInvertModeSharp } from "react-icons/io5";
import { IconContext } from "react-icons";
import { AnimatePresence, motion } from "framer-motion";

import NavMobileModal from "./NavMobileModal";

import LogoLightMode from "../images/logo-monkey-light-mode.svg";
import LogoDarkMode from "../images/logo-monkey-dark-mode.svg";
import DiscordIconSvg from "../images/discord-round-color-icon.svg";

export default function NavHome({ theme, setTheme, navigation }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    localStorage.setItem("user_color_preference", theme);
  };

  return (
    <div>
      <div className="px-6 pt-12 lg:px-8 py-6">
        <nav
          className="flex h-9 items-center justify-between"
          aria-label="Navigation"
        >
          <div className="flex lg:flex-1" aria-label="Logo Monkey Branch">
            <Link to="/">
              <span className="sr-only">Monkey Branch</span>
              {theme === "dark" ? (
                <img
                  src={LogoDarkMode}
                  className="w-20 h-20"
                  alt="logo Monkey Branch dark mode"
                />
              ) : (
                <img
                  src={LogoLightMode}
                  className="w-20 h-20"
                  alt="Logo Monkey Branch light mode"
                />
              )}
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-red-500"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <HiMenuAlt3 className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-center lg:gap-x-12">
            {navigation.map((item) => (
              <a
                href={item.href}
                key={item.name}
                className="font-bold text-gray-900 hover:text-gray-600 dark:text-white hover:dark:text-gray-300  "
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center">
            <div
              className=" flex items-center mx-4 cursor-pointer"
              onClick={handleThemeSwitch}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={theme}
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 20, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {theme === "dark" ? (
                    <IconContext.Provider
                      value={{
                        color: "white",
                        size: "30px",
                      }}
                    >
                      <div>
                        <IoInvertModeSharp />
                      </div>
                    </IconContext.Provider>
                  ) : (
                    <IconContext.Provider
                      value={{
                        color: "black",
                        size: "30px",
                      }}
                    >
                      <div>
                        <IoInvertModeOutline />
                      </div>
                    </IconContext.Provider>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
            <a
              href="https://discord.com/invite/37sy2VcqtJ"
              className="w-7 h-7 mr-4"
            >
              <img src={DiscordIconSvg} alt="discord icon" />
            </a>
            <Link
              to="/nft/login"
              className="inline-block rounded-lg px-4 py-1.5 text-base font-semibold leading-7 bg-red-600 text-white shadow-sm  hover:bg-red-500"
            >
              Clube NFT
            </Link>
          </div>
        </nav>
        <NavMobileModal
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
          theme={theme}
          navigation={navigation}
          handleThemeSwitch={handleThemeSwitch}
        />
      </div>
    </div>
  );
}
