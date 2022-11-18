import MotionComponent from "./MotionComponent";

import MadeInBrazilSvg from "../images/made-in-brazil-icon.svg";
import DeveloperIconSvg from "../images/developer-icon.svg";
import DiscordIconSvg from "../images/discord-round-color-icon.svg";
import Web3IconSvg from "../images/web-3-icon.svg";

export default function Company() {
  return (
    <div
      id="company"
      className="container max-w-screen-xl mx-auto isolate px-6 lg:px-8 py-12 lg:py-20"
    >
      <MotionComponent>
        <div className="flex flex-col mb-20 lg:flex-row">
          <div className="lg:w-1/2">
            <h2 className="max-w-md mb-6 text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-red-600 via-red-500 to-purple-500 sm:text-4xl sm:leading-none xl:max-w-lg">
              Acreditamos na descentralização da Internet.
            </h2>
          </div>
          <div className="lg:w-1/2">
            <p className="text-base text-gray-700 dark:text-gray-300 md:text-lg">
              A Monkey é pensadamente Digital. Estamos na WEB3 para revolucionar
              o mercado de aplicações, pois no quesito economia, estamos
              aproveitando o máximo do que a tecnologia blockchain tem a
              oferecer.
            </p>
          </div>
        </div>
        <div className="grid gap-20 row-gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center justify-center w-16 h-16 mb-4">
              <img
                src={MadeInBrazilSvg}
                alt="made in brazil"
                className="w-13 h-13"
              />
            </div>
            <h6 className="mb-4 font-semibold leading-5 text-red-500">
              Empresa
            </h6>
            <p className="mb-3 text-sm text-gray-900 dark:text-gray-300">
              Localizados em Santa Catarina, nossa sede desenvolve seus projetos
              em território Brasileiro
            </p>
            <ul className="mb-4 -ml-1 space-y-2 dark:text-gray-300">
              <li className="flex items-start">
                <span className="mr-1">
                  <svg
                    className="w-5 h-5 mt-px text-deep-purple-accent-400"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="white"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </span>
                Originalidade
              </li>
              <li className="flex items-start">
                <span className="mr-1">
                  <svg
                    className="w-5 h-5 mt-px text-deep-purple-accent-400"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="white"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </span>
                Eficiência
              </li>
              <li className="flex items-start">
                <span className="mr-1">
                  <svg
                    className="w-5 h-5 mt-px text-deep-purple-accent-400"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="white"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </span>
                Nacionalidade
              </li>
            </ul>
            <a
              href="/"
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-red-500 hover:ring-1 hover:ring-red-500 rounded-lg p-2 "
            >
              Veja Mais
              <span className="text-red-500 pl-5 pt-1" aria-hidden="true">
                &rarr;
              </span>
            </a>
          </div>
          <div>
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
              <img
                src={DeveloperIconSvg}
                alt="Website UI"
                className="w-12 h-12"
              />
            </div>
            <h6 className="mb-2 font-semibold leading-5 text-red-500 ">
              Desenvolvedores
            </h6>
            <p className="mb-3 text-sm text-gray-900 dark:text-gray-300">
              Nosso time conta com os melhores desenvolvedores para atender seu
              projeto.
            </p>
            <ul className="mb-4 -ml-1 space-y-2 dark:text-gray-300">
              <li className="flex items-start">
                <span className="mr-1">
                  <svg
                    className="w-5 h-5 mt-px text-deep-purple-accent-400"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="white"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </span>
                Software
              </li>
              <li className="flex items-start">
                <span className="mr-1">
                  <svg
                    className="w-5 h-5 mt-px text-deep-purple-accent-400"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="white"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </span>
                Comunicação digital
              </li>
              <li className="flex items-start">
                <span className="mr-1">
                  <svg
                    className="w-5 h-5 mt-px text-deep-purple-accent-400"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="white"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </span>
                Inovação
              </li>
            </ul>
            <a
              href="/"
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-red-500 hover:ring-1 hover:ring-red-500 rounded-lg p-2 "
            >
              Veja mais
              <span className="text-red-500 pl-5 pt-1" aria-hidden="true">
                &rarr;
              </span>
            </a>
          </div>
          <div>
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
              <img src={DiscordIconSvg} alt="discord icon" />
            </div>
            <h6 className="mb-2 font-semibold leading-5 text-red-500">
              Time 100% Online
            </h6>
            <p className="mb-3 text-sm text-gray-900 dark:text-gray-300">
              Nosso time está onLine no Discord trazendo inovação e conteúdo
              sobre Tecnologia, criptomoedas e Web3.
            </p>
            <ul className="mb-4 -ml-1 space-y-2 dark:text-gray-300">
              <li className="flex items-start">
                <span className="mr-1">
                  <svg
                    className="w-5 h-5 mt-px text-deep-purple-accent-400"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="white"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </span>
                Criação de Bots e Tech
              </li>
              <li className="flex items-start">
                <span className="mr-1">
                  <svg
                    className="w-5 h-5 mt-px text-deep-purple-accent-400"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="white"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </span>
                NFT e criptomoedas
              </li>
              <li className="flex items-start">
                <span className="mr-1">
                  <svg
                    className="w-5 h-5 mt-px text-deep-purple-accent-400"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="white"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </span>
                Web3
              </li>
            </ul>
            <a
              href="/"
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-red-500 hover:ring-1 hover:ring-red-500 rounded-lg p-2 "
            >
              Veja mais
              <span className="text-red-500 pl-5 pt-1" aria-hidden="true">
                &rarr;
              </span>
            </a>
          </div>
          <div>
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
              <img src={Web3IconSvg} alt="Web 3" className="" />
            </div>
            <h6 className="mb-2 font-semibold leading-5 text-red-500">
              Somos o futuro da WEB
            </h6>
            <p className="mb-3 text-sm text-gray-900 dark:text-gray-300">
              Nossos projetos já são web3 e estão aqui para revolucionar o
              mercado de Softwares do Futuro.
            </p>
            <ul className="mb-4 -ml-1 space-y-2 dark:text-gray-300">
              <li className="flex items-start">
                <span className="mr-1">
                  <svg
                    className="w-5 h-5 mt-px text-deep-purple-accent-400"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="white"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </span>
                Proteção de dados
              </li>
              <li className="flex items-start">
                <span className="mr-1">
                  <svg
                    className="w-5 h-5 mt-px text-deep-purple-accent-400"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="white"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </span>
                Tecnologia Blockchain
              </li>
              <li className="flex items-start">
                <span className="mr-1">
                  <svg
                    className="w-5 h-5 mt-px text-deep-purple-accent-400"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="white"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </span>
                Descentralização de dados
              </li>
            </ul>
            <a
              href="/"
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-red-500 hover:ring-1 hover:ring-red-500 rounded-lg p-2 "
            >
              Veja mais
              <span className="text-red-500 pl-5 pt-1" aria-hidden="true">
                &rarr;
              </span>
            </a>
          </div>
        </div>
      </MotionComponent>
    </div>
  );
}
