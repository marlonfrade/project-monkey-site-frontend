import { Link } from "react-router-dom";

import SvgBgEffect from "../components/SvgBgEffect";

export default function NotFound() {
  return (
    <div>
      <div className="bg-white dark:bg-black relative overflow-hidden h-screen">
        <div className="container mx-auto px-6 md:px-12 relative z-10 flex items-center py-32 xl:py-40">
          <SvgBgEffect />
          <div className="w-full font-inter flex flex-col items-center relative z-10">
            <h1 className="font-extrabold text-5xl text-center text-gray-900 dark:text-gray-300 leading-tight mt-4">
              Página não encontrada
            </h1>
            <p className="font-extrabold text-8xl my-44 text-gray-900 dark:text-gray-300 animate-bounce">
              404
            </p>
            <Link
              to="/"
              className="mt-4 inline-block rounded-lg px-4 py-2 text-base font-semibold text-center leading-7 text-gray-900 dark:bg-white hover:bg-gray-100/90 dark:hover:bg-gray-100/90 ring-2 dark:ring-0 ring-gray-900/10 hover:ring-gray-900/20"
            >
              Página Inicial
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
