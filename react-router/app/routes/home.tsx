import type { Route } from "./+types/home";
import Menu from "../components/menu";
import Hero from "../home/hero";
import About from "../home/about";
import HowItWorks from "../home/how-it-works";
import Examples from "../home/examples";
import FAQ from "../home/faq";
import Footer from "../components/footer";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Tartarus Insight" },
    { 
      name: "description", 
      content: "Trapped in the abyss of business struggles? Harness the Oracle's wisdom to ascend from struggle to success." 
    },
  ];
}

export default function Home() {
  return (
    <>
    <Menu />
    <Hero />
    <About />
    <HowItWorks />
    <Examples />
    <FAQ />
    <Footer />
    </>
  );
}
