import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import LogoLightMode from "../images/logo-monkey-light-mode.svg";
import LogoDarkMode from "../images/logo-monkey-dark-mode.svg";

const navigation = [
  { name: "Projects", href: "/projects" },
  { name: "Services", href: "/services" },
  { name: "Company", href: "/company" },
  { name: "Features", href: "/features" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [theme, setTheme] = useState(null);

  // verify user preferences for theme
  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  //verify and apply theme color in the root div
  useEffect(() => {
    //   invert theme below
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("user_color_preference", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("user_color_preference", "light");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    localStorage.setItem("user_color_preference", theme);
  };

  return (
    <div>
      <div className="px-6 pt-6 lg:px-8">
        <div>
          <nav
            className="flex h-9 items-center justify-between"
            aria-label="Global"
          >
            <div className="flex lg:min-w-0 lg:flex-1" aria-label="Global">
              <Link to="/">
                <span className="sr-only">Monkey Branch</span>
                {theme === "dark" ? (
                  <img src={LogoDarkMode} alt="logo dark mode" />
                ) : (
                  <img src={LogoLightMode} alt="Logo light mode" />
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
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-center lg:gap-x-12">
              {navigation.map((item) => (
                <Link
                  to={item.href}
                  key={item.name}
                  className="font-semibold text-gray-900 dark:text-white hover:dark:text-gray-300  hover:text-gray-700"
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-end">
              <div
                className=" flex items-center px-2 cursor-pointer"
                onClick={handleThemeSwitch}
              >
                <svg
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8V16Z"
                    fill={theme === "dark" ? "white" : "black"}
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM12 4V8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16V20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4Z"
                    fill={theme === "dark" ? "white" : "black"}
                  />
                </svg>
              </div>
              <Link
                to="/login"
                className="inline-block rounded-lg bg-red-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-red-600 hover:bg-red-500 hover:ring-red-500"
              >
                Log in
              </Link>
            </div>
          </nav>
          <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
            <Dialog.Panel
              focus="true"
              className="fixed inset-0 z-10 overflow-y-auto bg-white px-6 py-6 lg:hidden dark:bg-black text-white"
            >
              <div className="flex h-9 items-center justify-between">
                <div className="flex">
                  <Link to="/" className="-m-1.5 p-1.5">
                    <span className="sr-only">MonkeyBranch</span>
                    {theme === "dark" ? (
                      <img src={LogoDarkMode} alt="logo dark mode" />
                    ) : (
                      <img src={LogoLightMode} alt="Logo light mode" />
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
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-900/10 dark:divide-gray-100/20">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold text-gray-900 dark:text-white hover:dark:text-gray-300  hover:text-gray-700"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                  <div className="py-6 flex items-center flex-start">
                    <div
                      className="flex items-center h-8 w-10 cursor-pointer mb-3"
                      onClick={handleThemeSwitch}
                    >
                      <svg
                        width="24px"
                        height="24px"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8V16Z"
                          fill={theme === "dark" ? "white" : "black"}
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM12 4V8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16V20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4Z"
                          fill={theme === "dark" ? "white" : "black"}
                        />
                      </svg>
                    </div>
                    <Link
                      to="/login"
                      className="inline-block rounded-lg bg-red-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-red-600 hover:bg-red-500 hover:ring-red-500"
                    >
                      Log in
                    </Link>
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </Dialog>
        </div>
      </div>
    </div>
  );
}
