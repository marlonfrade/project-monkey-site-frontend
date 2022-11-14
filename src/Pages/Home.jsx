import Hero from "../components/Hero";
import Feature from "../components/Feature";
import Content from "../components/Content";
import Faq from "../components/Faq";
import Statistic from "../components/Statistic";
import Cta from "../components/Cta";

export default function Home() {
  return (
    <div className="bg-white dark:bg-black py-6 sm:py-12">
      <Hero />
      <Feature />
      <Content />
      <Statistic />
      <Faq />
      <Cta />
    </div>
  );
}
