import Hero from "@/features/hero/Hero";
import Services from "@/features/services/Services";
import Projects from "@/features/projects/Projects";
import About from "@/features/about/About";
import Footer from "@/components/footer/Footer";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Projects />
      <About />
      <Footer />
    </>
  );
}