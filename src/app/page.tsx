import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ValueSection } from "@/components/ValueSection";
import { Services } from "@/components/Services";
import { Portfolio } from "@/components/Portfolio";
import { ClientBenefits } from "@/components/ClientBenefits";
import { Process } from "@/components/Process";
import { CTA } from "@/components/CTA";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="contenido">
        <Hero />
        <ValueSection />
        <Services />
        <Portfolio />
        <ClientBenefits />
        <Process />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
