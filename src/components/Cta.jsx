import { Link } from "react-router-dom";

import MotionComponent from "./MotionComponent";

import HeroDesktopBg from "../images/hero-desktop-bg.png";
import HeroMobileBg from "../images/hero-mobile-bg.png";

export default function Cta({ windowWidth }) {
  return (
    <div
      id="services"
      className="container max-w-screen-xl mx-auto isolate px-4 py-12 lg:py-20"
    >
      <MotionComponent>
        <div className="relative flex flex-col-reverse px-4 py-20 mx-auto lg:block lg:flex-col lg:py-32 xl:py-40 sm:max-w-xl md:max-w-full">
          <div className="z-0 flex justify-center h-full -mx-4 overflow-hidden lg:pt-24 lg:pb-16 lg:pr-8 xl:pr-0 lg:w-1/2 lg:absolute lg:justify-end lg:bottom-0 lg:left-0 lg:items-center">
            {windowWidth >= 1200 ? (
              <img
                src={HeroMobileBg}
                className="object-cover object-right w-full h-auto lg:w-auto lg:h-full"
                alt=""
              />
            ) : (
              <img
                src={HeroDesktopBg}
                className="object-cover object-right w-full h-auto lg:w-auto lg:h-full"
                alt=""
              />
            )}
          </div>
          <div className="relative flex justify-end max-w-xl mx-auto lg:max-w-screen-xl">
            <div className="mb-16 lg:pr-5 lg:max-w-lg lg:mb-0">
              <div className="max-w-xl mb-6">
                <div>
                  <p className="inline-block px-3 py-2 mb-6 text-xs font-semibold tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-red-600 via-red-500 to-purple-500 uppercase ring-1 rounded-lg ring-red-500 bg-teal-accent-400">
                    Bora Inovar?
                  </p>
                </div>
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-300 sm:text-4xl sm:leading-none">
                  Nós tiramos a SUA ideia do papel 💡
                </h2>
                <p className="text-base text-gray-700 dark:text-gray-300 md:text-lg">
                  Venha Inovar e construir Aplicações Incríveis junto com nosso
                  time de desenvolvimento, envie agora um email para entrarmos
                  em contato.
                </p>
              </div>
              <form>
                <div className="flex flex-col md:flex-row">
                  <input
                    placeholder="Name"
                    required=""
                    type="text"
                    className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none md:mr-2 focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                  />
                  <input
                    placeholder="Email"
                    required=""
                    type="text"
                    className="flex-grow w-full h-12 px-4 mb-3 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none md:mb-0 focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                  />
                </div>
                <div className="mt-8 flex gap-x-4 justify-start">
                  <Link
                    to="/"
                    className="inline-block rounded-lg bg-red-600 px-4 py-2 text-base font-semibold text-center  leading-7 text-white shadow-sm hover:bg-red-500"
                  >
                    Contratar
                  </Link>
                  <Link
                    to="/projects"
                    className="inline-block rounded-lg px-4 py-2 text-base font-semibold text-center leading-7 text-gray-900 dark:bg-white hover:bg-gray-100/90 dark:hover:bg-gray-100/90 ring-2 dark:ring-0 ring-gray-900/10 hover:ring-gray-900/20"
                  >
                    Ver projetos
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </MotionComponent>
    </div>
  );
}
