import { useState } from "react";
import { Tab } from "@headlessui/react";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import MotionComponent from "../components/MotionComponent";
import Footer from "../components/Footer";
import SvgBgEffect from "../components/SvgBgEffect";
import ProjectsList from "../components/ProjectsList";

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
        name: "Lorem Ipsum",
        image:
          "https://images.unsplash.com/photo-1515658323406-25d61c141a6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=709&q=80",
        link: "",
        title: "Lorem Ipsum",
        description:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit Facilis voluptas molestias nostrum mollitia, corrupti",
        launch: "Agosto/2022",
      },
      {
        id: 2,
        name: "Lorem Ipsum",
        image:
          "https://images.unsplash.com/flagged/photo-1550489518-40f49ba4bf20?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
        link: "",
        title: "Lorem Ipsum",
        description:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit Facilis voluptas molestias nostrum mollitia, corrupti",
        launch: "Agosto/2022",
      },
      {
        id: 3,
        name: "Lorem Ipsum",
        image:
          "https://images.unsplash.com/photo-1598190895998-62696125f1c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
        link: "",
        title: "Lorem Ipsum",
        description:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit Facilis voluptas molestias nostrum mollitia, corrupti",
        launch: "Agosto/2022",
      },
      {
        id: 4,
        name: "Lorem Ipsum",
        image:
          "https://images.unsplash.com/photo-1585335107823-94c8bc6c9291?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        link: "",
        title: "Lorem Ipsum",
        description:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit Facilis voluptas molestias nostrum mollitia, corrupti",
        launch: "Agosto/2022",
      },
      {
        id: 5,
        name: "Lorem Ipsum",
        image:
          "https://images.unsplash.com/photo-1593489062665-9f26fa627d73?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        link: "",
        title: "Lorem Ipsum",
        description:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit Facilis voluptas molestias nostrum mollitia, corrupti",
        launch: "Agosto/2022",
      },
      {
        id: 6,
        name: "Lorem Ipsum",
        image:
          "https://images.unsplash.com/photo-1610906570945-f1463d3a6558?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        link: "",
        title: "Lorem Ipsum",
        description:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit Facilis voluptas molestias nostrum mollitia, corrupti",
        launch: "Agosto/2022",
      },
      {
        id: 7,
        name: "Lorem Ipsum",
        image:
          "https://images.unsplash.com/photo-1556031330-4536769f448f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80",
        link: "",
        title: "Lorem Ipsum",
        description:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit Facilis voluptas molestias nostrum mollitia, corrupti",
        launch: "Agosto/2022",
      },
      {
        id: 8,
        name: "Lorem Ipsum",
        image:
          "https://images.unsplash.com/photo-1590280148249-4984a249ac84?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
        link: "",
        title: "Lorem Ipsum",
        description:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit Facilis voluptas molestias nostrum mollitia, corrupti",
        launch: "Agosto/2022",
      },
    ],
    SitesDisabled: [],
    AppsDisabled: [],
    VRDisabled: [],
  });

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
                        <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2 h-full">
                          {projects.map((project) => (
                            <Link
                              to={`/projects/${project.name}`}
                              state={project}
                              key={project.id}
                            >
                              <ProjectsList
                                image={project.image}
                                alt={project.description}
                                link={project.link}
                                title={project.title}
                                description={project.description}
                                launch={project.launch}
                              />
                            </Link>
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
