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
      {/* [ADJUSTS] - add projects's name to the card format */}
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

        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
            <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-ful">
              <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
                <img
                  className="object-cover w-full h-56 md:h-64 xl:h-80"
                  src={ProjectOmalaBg}
                  alt="project Omala"
                />
                <div className="p-5 border border-t-0">
                  <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                    <a
                      href="/"
                      className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
                      aria-label="Category"
                      title="traveling"
                    >
                      Monkey Branch
                    </a>
                    <span className="text-gray-600">— 2022</span>
                  </p>
                  <a
                    href="https://omala.com.br/"
                    aria-label="View Item Omala"
                    title="Omala"
                    className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
                  >
                    Omala
                  </a>
                  <p className="mb-2 text-gray-700">
                    Viaje mais pagando pouco, com Omala. utilize nossa
                    inteligência e compre passagens aéreas acessíveis.
                  </p>
                  <a
                    href="/"
                    aria-label=""
                    className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                  >
                    Ver Projeto
                  </a>
                </div>
              </div>
              <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
                <img
                  className="object-cover w-full h-56 md:h-64 xl:h-80"
                  src={ProjectTakipBg}
                  alt="Projeto Takip"
                />
                <div className="p-5 border border-t-0">
                  <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                    <a
                      href="/"
                      className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
                      aria-label="Category"
                      title="traveling"
                    >
                      Monkey Branch
                    </a>
                    <span className="text-gray-600">— 2022</span>
                  </p>
                  <a
                    href="https://omala.com.br/"
                    aria-label="View Item Omala"
                    title="Omala"
                    className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
                  >
                    Takip
                  </a>
                  <p className="mb-2 text-gray-700">
                    Acompanhe os Despachos e faça Análise de
                    Viabilidade/Colidência muito mais rápido e fácil. Acesse a
                    plataforma e ganhe eficiência.
                  </p>
                  <a
                    href="/"
                    aria-label=""
                    className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                  >
                    Ver Projeto
                  </a>
                </div>
              </div>
              <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
                <img
                  className="object-cover w-50 h-56 md:h-64 xl:h-60"
                  src={ProjectValidoBg}
                  alt="Projeto Validô"
                />
                <div className="p-5 border border-t-0">
                  <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                    <a
                      href="/"
                      className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
                      aria-label="Category"
                      title="traveling"
                    >
                      Monkey Branch
                    </a>
                    <span className="text-gray-600">— 2022</span>
                  </p>
                  <a
                    href="https://valido.dev/"
                    aria-label="View Item Omala"
                    title="Omala"
                    className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
                  >
                    Validô
                  </a>
                  <p className="mb-2 text-gray-700">
                    Validar acesso nunca foi tão fácil e rápido.Acesse a API,
                    envie uma requisição e tá pronto.
                  </p>
                  <a
                    href="/"
                    aria-label=""
                    className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                  >
                    Ver Projeto
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <a href="https://datafleet.io/" aria-label="View Item">
          <div className="relative md:h-64 xl:h-80 flex justify-center items-center overflow-hidden transition duration-200 transform rounded shadow-lg dark:shadow-gray-700 hover:-translate-y-2 hover:shadow-2xl">
            <img
              className="object-cover w-full h-56 md:h-64 xl:h-80"
              src={ProjectDatafleetBg}
              alt="Projeto Datafleet"
            />
            <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
              <p className="mb-4 text-lg font-bold text-gray-100">Datafleet</p>
              <p className="text-sm tracking-wide text-gray-300">
                Aplicativo desenvolvido para gerir frotas da empresa WPX com
                mais controle e confiança.
              </p>
            </div>
          </div>
        </a> */}
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
