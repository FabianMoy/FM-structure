import { Reveal } from "@/components/Reveal";
import { buttonClass } from "@/components/Button";

export function CTA() {
  return (
    <section aria-labelledby="cta-titulo" className="px-5 sm:px-8">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-brand px-7 py-20 text-white sm:px-16 lg:py-28">
        <div aria-hidden="true" className="bg-dots absolute inset-0 text-white/15 [mask-image:linear-gradient(to_left,#000,transparent_70%)]" />
        <Reveal className="relative">
          <h2 id="cta-titulo" className="max-w-3xl font-display text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
            ¿Listo para llevar tu negocio a internet?
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/90 sm:text-xl">
            Cuéntanos sobre tu negocio y descubramos qué tipo de sitio web necesitas.
          </p>
          <a href="#contacto" className={buttonClass("accent-dark", "mt-10")}>Solicitar cotización</a>
        </Reveal>
      </div>
    </section>
  );
}
