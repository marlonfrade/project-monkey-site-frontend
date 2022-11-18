import { Link } from "react-router-dom";

import MotionComponent from "../components/MotionComponent";

import NftLoginBg from "../images/nft-login-bg.png";
import LogoLightMode from "../images/logo-monkey-light-mode.svg";
import LogoDarkMode from "../images/logo-monkey-dark-mode.svg";

export default function NftLogin({ theme }) {
  return (
    <div className="h-screen">
      <div className="relative h-screen">
        <img
          src={NftLoginBg}
          className="absolute inset-0 object-cover w-full h-full"
          alt=""
        />
        <div className="relative bg-gray-900 bg-opacity-75 h-screen">
          <div className="flex justify-center items-center h-screen px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
            <div className="flex flex-col items-center justify-between xl:flex-row">
              <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
                <MotionComponent>
                  <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                    Em breve, uma nova <br className="hidden md:block" />
                    era digital com a{" "}
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-600 via-red-500 to-purple-500">
                      NFT Monkey Branch
                    </span>
                  </h2>
                  <p className="max-w-xl mb-4 text-base text-gray-200 md:text-lg">
                    Fique de olho! Acompanhe nossos canais de comunicação e
                    fique por dentro da nova coleção de NFT da Monkey, que será
                    um grande projeto para a comunidade de tecnologia.
                  </p>
                  <Link
                    to="/"
                    aria-label="Link Back to Home"
                    className="inline-flex items-center font-semibold tracking-wider transition-colors duration-200 bg-clip-text text-transparent bg-gradient-to-r from-red-600 via-red-500 to-purple-500 hover:text-teal-accent-700"
                  >
                    Voltar para o Site
                    <svg
                      className="inline-block w-3 ml-2"
                      fill="red"
                      viewBox="0 0 12 12"
                    >
                      <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                    </svg>
                  </Link>
                </MotionComponent>
              </div>
              <div className="w-full max-w-sm p-6 m-auto mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
                <MotionComponent>
                  <div className="w-full flex justify-center items-center">
                    <span className="sr-only">Monkey Branch</span>
                    {theme === "dark" ? (
                      <img
                        src={LogoDarkMode}
                        alt="logo Monkey Branch dark mode"
                      />
                    ) : (
                      <img
                        src={LogoLightMode}
                        alt="Logo Monkey Branch light mode"
                      />
                    )}
                  </div>

                  <form className="mt-6">
                    <div>
                      <label
                        htmlFor="username"
                        className="block text-sm text-gray-800 dark:text-gray-200"
                      >
                        Usuário
                      </label>
                      <input
                        id="username"
                        type="text"
                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                      />
                    </div>

                    <div className="mt-4">
                      <div className="flex items-center justify-between">
                        <label
                          htmlFor="password"
                          className="block text-sm text-gray-800 dark:text-gray-200"
                        >
                          Senha
                        </label>
                        <a
                          href="#"
                          className="text-xs text-gray-600 dark:text-gray-400 hover:underline"
                        >
                          Esqueceu sua Senha?
                        </a>
                      </div>

                      <input
                        type="password"
                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                      />
                    </div>

                    <div className="mt-6">
                      <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                        Login
                      </button>
                    </div>
                  </form>

                  <div className="flex items-center justify-between mt-4">
                    <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/5"></span>

                    <a
                      href="#"
                      className="text-xs text-center text-gray-500 uppercase dark:text-gray-400 hover:underline"
                    >
                      ou faça login com
                    </a>

                    <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/5"></span>
                  </div>

                  <div className="flex items-center mt-6 -mx-2">
                    <button
                      type="button"
                      className="flex items-center justify-center w-full px-6 py-2 mx-2 text-sm font-medium text-white transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:bg-blue-400 focus:outline-none"
                    >
                      <svg
                        className="w-4 h-4 mx-2 fill-current"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z"></path>
                      </svg>

                      <span className="hidden mx-2 sm:inline">
                        Entre com o Google
                      </span>
                    </button>
                  </div>
                </MotionComponent>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
