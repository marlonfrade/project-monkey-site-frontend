import { useState } from "react";
import { Tab } from "@headlessui/react";

import Navbar from "../components/NavHome";
import MotionComponent from "../components/MotionComponent";
import Footer from "../components/Footer";
import SvgBgEffect from "../components/SvgBgEffect";

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
        title: "Does drinking coffee make you smarter?",
        date: "5h ago",
        commentCount: 5,
        shareCount: 2,
      },
      {
        id: 2,
        title: "So you've bought coffee... now what?",
        date: "2h ago",
        commentCount: 3,
        shareCount: 2,
      },
    ],
    SitesDisabled: [],
    AppsDisabled: [],
    VRDisabled: [],
  });

  // Verify if "disabled" is working
  console.log(Object.keys(categories));
  console.log(
    Object.keys(categories).map((category) => category.includes("Disabled"))
  );

  return (
    <div className="container max-w-screen-xl mx-auto isolate">
      <MotionComponent>
        <Navbar theme={theme} setTheme={setTheme} navigation={navigation} />

        <section className="bg-white dark:bg-gray-900 rounded-t-lg mt-7">
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
                          "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700",
                          "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                          selected
                            ? "bg-white shadow"
                            : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
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
                      className={classNames(
                        "rounded-xl bg-white p-3",
                        "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
                      )}
                    >
                      <ul>
                        {projects.map((project) => (
                          <li
                            key={project.id}
                            className="relative rounded-md p-3 hover:bg-gray-100"
                          >
                            <h3 className="text-sm font-medium leading-5">
                              {project.title}
                            </h3>

                            <ul className="mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-500">
                              <li>{project.date}</li>
                              <li>&middot;</li>
                              <li>{project.commentCount} comments</li>
                              <li>&middot;</li>
                              <li>{project.shareCount} shares</li>
                            </ul>

                            <a
                              href="#"
                              className={classNames(
                                "absolute inset-0 rounded-md",
                                "ring-blue-400 focus:z-10 focus:outline-none focus:ring-2"
                              )}
                            />
                          </li>
                        ))}
                      </ul>
                    </Tab.Panel>
                  ))}
                </Tab.Panels>
              </Tab.Group>
            </div>

            <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2">
              <div className="lg:flex">
                <img
                  className="object-cover w-full h-56 rounded-lg lg:w-64"
                  src="https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  alt=""
                />

                <div className="flex flex-col justify-between py-6 lg:mx-6">
                  <a
                    href="#"
                    className="text-xl font-semibold text-gray-800 hover:underline dark:text-white "
                  >
                    How to use sticky note for problem solving
                  </a>

                  <span className="text-sm text-gray-500 dark:text-gray-300">
                    On: 20 October 2019
                  </span>
                </div>
              </div>

              <div className="lg:flex">
                <img
                  className="object-cover w-full h-56 rounded-lg lg:w-64"
                  src="https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  alt=""
                />

                <div className="flex flex-col justify-between py-6 lg:mx-6">
                  <a
                    href="#"
                    className="text-xl font-semibold text-gray-800 hover:underline dark:text-white "
                  >
                    How to use sticky note for problem solving
                  </a>

                  <span className="text-sm text-gray-500 dark:text-gray-300">
                    On: 20 October 2019
                  </span>
                </div>
              </div>

              <div className="lg:flex">
                <img
                  className="object-cover w-full h-56 rounded-lg lg:w-64"
                  src="https://images.unsplash.com/photo-1544654803-b69140b285a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  alt=""
                />

                <div className="flex flex-col justify-between py-6 lg:mx-6">
                  <a
                    href="#"
                    className="text-xl font-semibold text-gray-800 hover:underline dark:text-white "
                  >
                    Morning routine to boost your mood
                  </a>

                  <span className="text-sm text-gray-500 dark:text-gray-300">
                    On: 25 November 2020
                  </span>
                </div>
              </div>

              <div className="lg:flex">
                <img
                  className="object-cover w-full h-56 rounded-lg lg:w-64"
                  src="https://images.unsplash.com/photo-1530099486328-e021101a494a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1547&q=80"
                  alt=""
                />

                <div className="flex flex-col justify-between py-6 lg:mx-6">
                  <a
                    href="#"
                    className="text-xl font-semibold text-gray-800 hover:underline dark:text-white "
                  >
                    All the features you want to know
                  </a>

                  <span className="text-sm text-gray-500 dark:text-gray-300">
                    On: 30 September 2020
                  </span>
                </div>
              </div>

              <div className="lg:flex">
                <img
                  className="object-cover w-full h-56 rounded-lg lg:w-64"
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1484&q=80"
                  alt=""
                />

                <div className="flex flex-col justify-between py-6 lg:mx-6">
                  <a
                    href="#"
                    className="text-xl font-semibold text-gray-800 hover:underline dark:text-white "
                  >
                    Minimal workspace for your inspirations
                  </a>

                  <span className="text-sm text-gray-500 dark:text-gray-300">
                    On: 13 October 2019
                  </span>
                </div>
              </div>

              <div className="lg:flex">
                <img
                  className="object-cover w-full h-56 rounded-lg lg:w-64"
                  src="https://images.unsplash.com/photo-1624996379697-f01d168b1a52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  alt=""
                />

                <div className="flex flex-col justify-between py-6 lg:mx-6">
                  <a
                    href="#"
                    className="text-xl font-semibold text-gray-800 hover:underline dark:text-white "
                  >
                    What do you want to know about Blockchane
                  </a>

                  <span className="text-sm text-gray-500 dark:text-gray-300">
                    On: 20 October 2019
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer theme={theme} />
      </MotionComponent>
      <SvgBgEffect />
    </div>
  );
}
