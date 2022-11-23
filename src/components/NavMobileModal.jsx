import { Dialog } from "@headlessui/react";
import { HiX } from "react-icons/hi";
import { Link } from "react-router-dom";

import SvgBgEffect from "./SvgBgEffect";

import LogoLightMode from "../images/logo-monkey-light-mode.svg";
import LogoDarkMode from "../images/logo-monkey-dark-mode.svg";
import DiscordIconSvg from "../images/discord-round-color-icon.svg";

import { IoInvertModeOutline, IoInvertModeSharp } from "react-icons/io5";
import { IconContext } from "react-icons";
import { AnimatePresence, motion } from "framer-motion";

export default function NavMobileModal({
  mobileMenuOpen,
  setMobileMenuOpen,
  theme,
  navigation,
  handleThemeSwitch,
}) {
  return (
    <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
      <Dialog.Panel
        focus="true"
        className="fixed inset-0 z-10 overflow-y-auto px-6 py-6 lg:hidden bg-white dark:bg-black"
      >
        <SvgBgEffect />
        <div className="flex h-9 items-center justify-between">
          <div className="flex">
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">MonkeyBranch</span>
              {theme === "dark" ? (
                <img src={LogoDarkMode} alt="logo Monkey Branch dark mode" />
              ) : (
                <img src={LogoLightMode} alt="Logo Monkey Branch light mode" />
              )}
            </Link>
          </div>
          <div className="flex">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-red-500 hover:text-red-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <HiX className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
        <div className="mt-6 flow-root">
          <div className="-my-6 divide-y divide-gray-900/10 dark:divide-gray-100/20">
            <div className="space-y-2 py-6">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold text-gray-900 dark:text-white hover:dark:text-gray-300  hover:text-gray-600"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                  {item.name}
                </a>
              ))}
            </div>
            <div className="py-6 flex items-center flex-start">
              <div
                className="flex items-center px-4 cursor-pointer"
                onClick={handleThemeSwitch}
              >
                <AnimatePresence mode initial={false}>
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
                className="w-7 h-7 mr-6"
                target="_blank"
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
          </div>
        </div>
      </Dialog.Panel>
    </Dialog>
  );
}
