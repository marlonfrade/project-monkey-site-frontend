import { useEffect, useState } from "react";

import Hero from "../components/Hero";
import Company from "../components/Company";
import Projects from "../components/Projects";
import FaqWeb3 from "../components/FaqWeb3";
import Statistic from "../components/Statistic";
import HireUs from "../components/HireUs";
import Footer from "../components/Footer";

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
      <Hero theme={theme} setTheme={setTheme} windowWidth={windowWidth} />
      <Company />
      <Projects />
      <Statistic />
      <FaqWeb3 />
      <HireUs windowWidth={windowWidth} />
      <Footer theme={theme} />
    </div>
  );
}
