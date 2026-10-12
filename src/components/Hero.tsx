import { HeroVisual } from "@/components/HeroVisual";
import { Reveal } from "@/components/Reveal";
import { buttonClass } from "@/components/Button";

export function Hero() {
  return (
    <section id="inicio" aria-labelledby="hero-titulo" className="relative overflow-hidden">
      <div aria-hidden="true" className="bg-dots bg-dots-fade absolute inset-0 text-brand/15" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 pt-14 sm:px-8 lg:grid-cols-12 lg:gap-10 lg:pt-4">
        <div className="lg:col-span-6">
          <Reveal>
            <h1 id="hero-titulo" className="font-display text-[clamp(2.5rem,7vw,4.5rem)] font-semibold leading-[1.04] tracking-tight text-ink">
              Tu negocio merece una presencia digital profesional.
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-ink/75 sm:text-xl">
              Creamos sitios web modernos, rápidos y diseñados para convertir visitantes en clientes.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href="#contacto" className={buttonClass("primary")}>Solicitar cotización</a>
              <a href="#portafolio" className={buttonClass("secondary")}>Ver proyectos</a>
            </div>
          </Reveal>
        </div>
        <div className="lg:col-span-6">
          <Reveal delay={0.2}>
            <HeroVisual />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
