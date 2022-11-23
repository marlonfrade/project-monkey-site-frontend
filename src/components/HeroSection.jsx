import { Link } from "react-router-dom";

import Navbar from "./NavHome";
import SvgBgEffect from "./SvgBgEffect";

import HeroBgDesktop from "../images/hero-desktop-bg.png";
import HeroBgMobile from "../images/hero-mobile-bg.png";

export default function Hero({ windowWidth, theme, setTheme, navigation }) {
  return (
    <div className="container max-w-screen-xl mx-auto isolate">
      <Navbar theme={theme} setTheme={setTheme} navigation={navigation} />

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
              <p className="mt-6 text-md leading-8 dark:text-gray-300 sm:text-center">
                Assim como nossos amigos macacos, nós possuímos formas
                simplificadas de linguagem, Capacidade empática e além de
                usarmos ferramentas Existentes, também somos capazes de
                desenvolve-las!!! Aqui na Monkey Branch a gente quebra galho,
                balança no cipó e ainda planta árvore!!!
              </p>
              <div className="mt-8 flex gap-y-4 flex-col sm:flex-row sm:justify-center sm:gap-x-4">
                <a
                  href="#services"
                  className="inline-block rounded-lg bg-red-600 px-4 py-2 text-base font-semibold text-center  leading-7 text-white shadow-sm hover:bg-red-500"
                >
                  Contrate a Monkey
                </a>
                <Link
                  to="/projects"
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

      <SvgBgEffect />
    </div>
  );
}
