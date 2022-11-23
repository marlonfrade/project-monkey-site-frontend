import { useEffect, useState } from "react";

import Hero from "../components/HeroSection";
import Company from "../components/Company";
import Projects from "../components/ProjectsSection";
import FaqWeb3 from "../components/FaqWeb3";
import Statistic from "../components/Statistic";
import HireUs from "../components/HireUs";
import Footer from "../components/Footer";

const navigation = [
  { name: "Projetos", href: "#projects" },
  { name: "Serviços", href: "#services" },
  { name: "Monkey", href: "#company" },
  { name: "Web3", href: "#faq" },
];

export default function Home({ theme, setTheme }) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => {
      const width = window.innerWidth;
      // const height = window.innerHeight;

      setWindowWidth(width);
    });
  }, []);

  return (
    <div>
      <Hero
        theme={theme}
        setTheme={setTheme}
        windowWidth={windowWidth}
        navigation={navigation}
      />
      <Company />
      <Projects />
      <Statistic />
      <FaqWeb3 />
      <HireUs windowWidth={windowWidth} />
      <Footer theme={theme} />
    </div>
  );
}
