import { useState } from "react";
import { Tab } from "@headlessui/react";

import Navbar from "../components/Navbar";
import MotionComponent from "../components/MotionComponent";
import Footer from "../components/Footer";
import SvgBgEffect from "../components/SvgBgEffect";

import ProjectOmalaBg from "../images/project-omala.png";

const navigation = [{ name: "Home", href: "/" }];

const classNames = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

// Add "Disabled"" to Tab that you don't want to show
export default function Projects({ theme, setTheme }) {
  let [categories] = useState({
    Softwares: [
      {
        id: 1,
        image: "project-omala",
        link: "https://omala.com.br/",
        title: "Projeto Omala",
        description:
          "Viaje mais pagando pouco, com Omala. utilize nossa inteligência e compre passagens aéreas acessíveis",
        launch: "Agosto/2022",
      },
      {
        id: 1,
        image: "project-valido",
        link: "https://valido.dev/",
        title: "Projeto Validô",
        description:
          "Validar acesso nunca foi tão fácil e rápido.Acesse a API, envie uma requisição e tá pronto.",
        launch: "Agosto/2022",
      },
      {
        id: 1,
        image: "project-takip",
        link: "https://discord.com/invite/r52u8e29u3",
        title: "Projeto Takip",
        description:
          "Acompanhe os Despachos e faça Análise de Viabilidade/Colidência muito mais rápido e fácil. Acesse a plataforma e ganhe eficiência.",
        launch: "Agosto/2022",
      },
      {
        id: 1,
        image: "project-datafleet",
        link: "https://omala.com.br/",
        title: "Projeto Datafleet",
        description:
          "Software desenvolvido para gerir frotas da empresa WPX com mais controle e confiança",
        launch: "Agosto/2022",
      },
    ],
    SitesDisabled: [],
    AppsDisabled: [],
    VRDisabled: [],
  });

  console.log(categories.Softwares.map((el) => el.image));

  // Verify if "disabled" is working
  console.log(Object.keys(categories));
  console.log(
    Object.keys(categories).map((category) => category.includes("Disabled"))
  );

  return (
    <div className="container max-w-screen-xl mx-auto isolate">
      <MotionComponent>
        <Navbar theme={theme} setTheme={setTheme} navigation={navigation} />

        <section className="bg-transparent rounded-t-lg mt-7">
          <div className="container px-6 py-10 mx-auto">
            <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">
              Projetos Monkey
            </h1>
            <p className="text-xl pt-4 font-inter text-gray-800 dark:text-gray-500">
              Aqui você irá encontrar todos os projetos Desenvolvidos pelo Time
              da Monkey.
            </p>

            <div className="w-full px-2 py-16 sm:px-0">
              <Tab.Group>
                <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
                  {Object.keys(categories).map((category) => (
                    <Tab
                      key={category}
                      disabled={category.includes("Disabled")}
                      className={({ selected }) =>
                        classNames(
                          "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-red-600",
                          "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                          selected
                            ? "bg-white shadow"
                            : "text-red-400 hover:bg-white/[0.12] hover:text-white"
                        )
                      }
                    >
                      {category.split("Disabled")[0]}
                    </Tab>
                  ))}
                </Tab.List>
                <Tab.Panels className="mt-2">
                  {Object.values(categories).map((projects, idx) => (
                    <Tab.Panel
                      key={idx}
                      className={classNames("bg-transparent p-3")}
                    >
                      <ul>
                        <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2">
                          {projects.map((project) => (
                            <div key={project.id} className="lg:flex">
                              <img
                                className="object-cover w-full h-56 rounded-lg lg:w-64"
                                src={"/src/images/" + project.image + ".png"}
                                alt={project.description}
                              />

                              <div className="flex flex-col justify-between py-6 lg:mx-6">
                                <a
                                  href={project.link}
                                  className="text-xl font-semibold text-gray-800 hover:underline dark:text-white "
                                >
                                  {project.title}
                                </a>

                                <p className="text-md text-gray-500 dark:text-gray-300">
                                  {project.description}
                                </p>

                                <span className="text-sm text-gray-500 dark:text-gray-300">
                                  Projeto Lançado em: {project.launch}
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </ul>
                    </Tab.Panel>
                  ))}
                </Tab.Panels>
              </Tab.Group>
            </div>
          </div>
        </section>

        <Footer theme={theme} />
      </MotionComponent>
      <SvgBgEffect />
    </div>
  );
}
