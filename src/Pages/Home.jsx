import { useEffect, useState } from "react";

import Hero from "../components/Hero";
import Company from "../components/Company";
import Projects from "../components/Projects";
import Faq from "../components/Faq";
import Statistic from "../components/Statistic";
import Cta from "../components/Cta";
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
      <Faq />
      <Cta windowWidth={windowWidth} />
      <Footer theme={theme} />
    </div>
  );
}
