import { Link } from "react-router-dom";

import Navbar from "./Navbar";
import HeroBgDesktop from "../images/hero-desktop-bg.png";
import HeroBgMobile from "../images/hero-mobile-bg.png";

export default function Hero({ windowWidth, theme, setTheme }) {
  return (
    <div className="container max-w-screen-xl mx-auto isolate">
      <Navbar theme={theme} setTheme={setTheme} />
      {/* SVG top left background */}
      <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
        <svg
          className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
          viewBox="0 0 1155 678"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
            fillOpacity=".3"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#DD2929" />
              <stop offset={1} stopColor="#AC54EF" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      {/* HERO content */}
      <div className="relative px-6 py-12 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-3xl">
          <div>
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
              <div className="relative overflow-hidden rounded-full py-2 px-4 text-sm leading-6 ring-1 ring-red-500 hover:ring-red-700 dark:ring-white hover:dark:ring-white">
                <span className="dark:text-gray-300">
                  Venha para nossa comunidade no DISCORD.{" "}
                  <a
                    href="https://discord.com/invite/37sy2VcqtJ"
                    target="_blank"
                    className="text-red-500 pl-3"
                  >
                    <span className="absolute inset-0" aria-hidden="true" />
                    Clique Aqui <span aria-hidden="true">&rarr;</span>
                  </a>
                </span>
              </div>
            </div>
            <div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-center sm:text-6xl dark:text-gray-300">
                Quebramos galhos{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-600 via-red-500 to-purple-500">
                  & Criamos soluções
                </span>
              </h1>
              <p className="mt-6 text-lg leading-8 dark:text-gray-300 sm:text-center">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
                fugiat aliqua.
              </p>
              <div className="mt-8 flex gap-y-4 flex-col sm:flex-row sm:justify-center sm:gap-x-4">
                <Link
                  to="/"
                  className="inline-block rounded-lg bg-red-600 px-4 py-2 text-base font-semibold text-center  leading-7 text-white shadow-sm hover:bg-red-500"
                >
                  Contrate a Monkey
                </Link>
                <Link
                  to="/"
                  className="inline-block rounded-lg px-4 py-2 text-base font-semibold text-center leading-7 text-gray-900 dark:bg-white hover:bg-gray-100/90 dark:hover:bg-gray-100/90 ring-2 dark:ring-0 ring-gray-900/10 hover:ring-gray-900/20"
                >
                  Veja nossos projetos
                </Link>
              </div>
            </div>
            <div className="relative py-10 mx-auto">
              {windowWidth >= 1200 ? (
                <img
                  src={HeroBgDesktop}
                  className="w-full max-w-screen-sm mx-auto rounded  md:w-auto lg:max-w-screen-md"
                  alt=""
                />
              ) : (
                <img src={HeroBgMobile} className="w-60 mx-auto" alt="" />
              )}
            </div>
          </div>
        </div>
      </div>
      {/* SVG bottom right background */}
      <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
        <svg
          className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
          viewBox="0 0 1155 678"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
            fillOpacity=".3"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#DD2929" />
              <stop offset={1} stopColor="#AC54EF" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}
