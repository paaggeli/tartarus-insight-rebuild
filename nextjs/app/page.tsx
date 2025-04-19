import Menu from './components/Menu';
import Hero from './components/Hero';
import About from './components/About';
import HowItWorks from './components/HowItWorks';
import Examples from './components/Examples';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

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