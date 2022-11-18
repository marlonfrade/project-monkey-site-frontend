import MotionComponent from "./MotionComponent";

export default function Statistic() {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <MotionComponent>
        <div className="grid gap-10 row-gap-8 lg:grid-cols-3">
          <div>
            <div className="flex">
              <h6 className="mr-2 text-4xl font-bold md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-red-600 via-red-500 to-purple-500">
                200+
              </h6>
              <div className="flex items-center justify-center rounded-full bg-teal-accent-400 w-7 h-7">
                <svg
                  className="text-red-500 w-7 h-7"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
            </div>
            <p className="mb-2 font-bold md:text-lg dark:text-gray-300">
              Pessoas
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Utilizando nossas plataformas do discord, aproveitando todas as
              vantagens que nossos bots personalizados oferecem.
            </p>
          </div>
          <div>
            <div className="flex">
              <h6 className="mr-2 text-4xl font-bold md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-red-600 via-red-500 to-purple-500">
                15+
              </h6>
              <div className="flex items-center justify-center rounded-full bg-teal-accent-400 w-7 h-7">
                <svg
                  className="text-red-500 w-7 h-7"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
            </div>
            <p className="mb-2 font-bold md:text-lg dark:text-gray-300">
              Projetos
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Desenvolvidos e entregues garantindo produtividade e eficiência.
              Com o selo de garantia © MonkeyBranch.
            </p>
          </div>
          <div>
            <div className="flex">
              <h6 className="mr-2 text-4xl font-bold md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-red-600 via-red-500 to-purple-500">
                500+
              </h6>
              <div className="flex items-center justify-center rounded-full bg-teal-accent-400 w-7 h-7">
                <svg
                  className="text-red-500 w-7 h-7"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
            </div>
            <p className="mb-2 font-bold md:text-lg dark:text-gray-300">
              Viagens
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Desburocratizadas, com nosso buscador de passagens aéreas © Omala
              garantindo a passagem mais barata para você.
            </p>
          </div>
        </div>
      </MotionComponent>
    </div>
  );
}
