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
        <div className="grid gap-20 row-gap-5 mb-8 lg:gap-6 lg:grid-cols-4 sm:row-gap-6 sm:grid-cols-2">
          <a href="https://omala.com.br/" aria-label="View Item Omala">
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
              <figure>
                <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
            <div className="relative bg-blue-300 overflow-hidden transition duration-200 transform rounded shadow-lg dark:shadow-gray-700 hover:-translate-y-2 hover:shadow-2xl">
              <img
                className="object-cover w-full h-56 md:h-64 xl:h-80"
                src={ProjectOmalaBg}
                alt="project Omala"
              />
              <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                <p className="mb-4 text-lg font-bold text-gray-100">Omala</p>
                <p className="text-sm tracking-wide text-gray-300">
                  Viaje mais pagando pouco, com Omala. utilize nossa
                  inteligência e compre passagens aéreas acessíveis.
                </p>
              </div>
            </div>
          </a>
          <a
            href="https://discord.com/invite/r52u8e29u3"
            aria-label="View Item"
          >
            <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg dark:shadow-gray-700 hover:-translate-y-2 hover:shadow-2xl">
              <img
                className="object-cover w-full h-56 md:h-64 xl:h-80"
                src={ProjectTakipBg}
                alt="Projeto Takip"
              />
              <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                <p className="mb-4 text-lg font-bold text-gray-100">Takip</p>
                <p className="text-sm tracking-wide text-gray-300">
                  Acompanhe os Despachos e faça Análise de
                  Viabilidade/Colidência muito mais rápido e fácil. Acesse a
                  plataforma e ganhe eficiência.
                </p>
              </div>
            </div>
          </a>
          <a href="https://valido.dev/" aria-label="View Item">
            <div className="relative md:h-64 xl:h-80 flex justify-center items-center bg-indigo-300 overflow-hidden transition duration-200 transform rounded shadow-lg  dark:shadow-gray-700 hover:-translate-y-2 hover:shadow-2xl ">
              <img
                className="object-cover w-50 h-56 md:h-64 xl:h-60"
                src={ProjectValidoBg}
                alt="Projeto Validô"
              />
              <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                <p className="mb-4 text-lg font-bold text-gray-100">Validô</p>
                <p className="text-sm tracking-wide text-gray-300">
                  Validar acesso nunca foi tão fácil e rápido.Acesse a API,
                  envie uma requisição e tá pronto.
                </p>
              </div>
            </div>
          </a>
          <a href="https://datafleet.io/" aria-label="View Item">
            <div className="relative md:h-64 xl:h-80 flex justify-center items-center overflow-hidden transition duration-200 transform rounded shadow-lg dark:shadow-gray-700 hover:-translate-y-2 hover:shadow-2xl">
              <img
                className="object-cover w-full h-56 md:h-64 xl:h-80"
                src={ProjectDatafleetBg}
                alt="Projeto Datafleet"
              />
              <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                <p className="mb-4 text-lg font-bold text-gray-100">
                  Datafleet
                </p>
                <p className="text-sm tracking-wide text-gray-300">
                  Aplicativo desenvolvido para gerir frotas da empresa WPX com
                  mais controle e confiança.
                </p>
              </div>
            </div>
          </a>
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
