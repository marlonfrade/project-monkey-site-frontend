import { Link } from "react-router-dom";

import ProjectOmalaBg from "../images/project-omala.png";
import ProjectValidoBg from "../images/project-valido.png";
import ProjectTakipBg from "../images/project-takip.png";
import ProjectDatafleetBg from "../images/project-datafleet.png";

import MotionComponent from "./MotionComponent";

export default function Projects() {
  return (
    <div
      id="projects"
      className="container max-w-screen-xl mx-auto isolate px-6 lg:px-8 py-12 lg:py-20"
    >
      <MotionComponent>
        <div className="flex flex-col mb-20 lg:justify-between lg:flex-row md:mb-8">
          <h2 className="max-w-lg mb-5 font-sans text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-red-600 via-red-500 to-purple-500 sm:text-4xl sm:leading-none md:mb-6">
            <span className="inline-block pt-20 sm:py-0 sm:mb-4">
              "Deixe que nossa preocupação avançada se torne pensamento e
              planejamento avançados."
            </span>
            <div className="h-1 ml-auto duration-300 origin-left transform bg-deep-purple-accent-400 scale-x-30 group-hover:scale-x-100" />
          </h2>
          <p className="text-gray-700 dark:text-gray-300 lg:text-sm lg:max-w-md">
            Com projetos que abrangem desde a área de turismo até a área de
            construção, a Monkey conta com um Know-How no quesito ferramenta de
            negócio. Atualmente com alguns projetos dentro do mercado, a monkey
            possui os seguintes projetos:
          </p>
        </div>
        <div className="grid gap-20 row-gap-5 mb-8 lg:gap-6 lg:grid-cols-4 sm:row-gap-6 sm:grid-cols-2">
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
            <a href="https://omala.com.br/">
              <img
                className="rounded-t-lg w-full h-60"
                src={ProjectOmalaBg}
                alt="Projeto Omala"
              />

              <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Omala
                </h5>

                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Viaje mais pagando pouco, com Omala. utilize nossa
                  inteligência e compre passagens aéreas acessíveis.
                </p>
                <button
                  aria-label="open Validô"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Acessar
                  <svg
                    aria-hidden="true"
                    className="w-4 h-4 ml-2 -mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
            </a>
          </div>

          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
            <a href="https://discord.com/invite/r52u8e29u3">
              <img
                className="rounded-t-lg w-full h-60"
                src={ProjectTakipBg}
                alt="Projeto Takip"
              />

              <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Takip
                </h5>

                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Acompanhe os Despachos e faça Análise de
                  Viabilidade/Colidência muito mais rápido e fácil. Acesse a
                  plataforma e ganhe eficiência.
                </p>
                <button
                  aria-label="open Validô"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Acessar
                  <svg
                    aria-hidden="true"
                    className="w-4 h-4 ml-2 -mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
            </a>
          </div>

          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
            <a href="https://valido.dev/">
              <img
                className="rounded-t-lg w-full"
                src={ProjectValidoBg}
                alt="Projeto Validô"
              />

              <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Validô
                </h5>

                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Validar acesso nunca foi tão fácil e rápido.Acesse a API,
                  envie uma requisição e tá pronto.
                </p>
                <button
                  aria-label="open Validô"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Acessar
                  <svg
                    aria-hidden="true"
                    className="w-4 h-4 ml-2 -mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
            </a>
          </div>

          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
            <a href="https://datafleet.io/">
              <img
                className="rounded-t-lg w-full h-70.  sm:h-60"
                src={ProjectDatafleetBg}
                alt="Projeto Datafleet"
              />

              <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  DataFleet
                </h5>

                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Aplicativo desenvolvido para gerir frotas da empresa WPX com
                  mais controle e confiança.
                </p>
                <button
                  aria-label="open Datafleet"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Acessar
                  <svg
                    aria-hidden="true"
                    className="w-4 h-4 ml-2 -mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
            </a>
          </div>
        </div>
        <div className="text-center">
          <Link
            to="/projects"
            aria-label="Monkey Branch projects"
            className="inline-flex items-center font-semibold transition-colors duration-200 text-gray-800 dark:text-gray-300 hover:text-red-600 hover:dark:text-red-600"
          >
            Veja todos nossos projetos
            <svg
              className="inline-block w-3 ml-2"
              fill="currentColor"
              viewBox="0 0 12 12"
            >
              <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
            </svg>
          </Link>
        </div>
      </MotionComponent>
    </div>
  );
}
