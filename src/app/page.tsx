import Hero from "@/components/sections/hero/Hero";
import Services from "@/components/sections/services/Services";
import Portfolio from "@/components/sections/portfolio/Portfolio";
import About from "@/components/sections/about/About";
import CTA from "@/components/sections/CTA/CTA";


export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Portfolio />
      <About />
      <CTA /> 
    </>
  );
}