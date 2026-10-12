import { benefits } from "@/data/content";
import { Reveal } from "@/components/Reveal";

export function ClientBenefits() {
  return (
    <section aria-labelledby="beneficios-titulo" className="bg-mist py-24 lg:py-32">
      <div className="mx-auto grid max-w-6xl gap-14 px-5 sm:px-8 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <h2 id="beneficios-titulo" className="font-display text-4xl font-semibold leading-tight tracking-tight text-ink sm:text-5xl">
            Una página web no debería solamente verse bien.
          </h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-ink/80">
            Un sitio profesional trabaja por tu negocio incluso cuando tú no estás disponible.
          </p>
        </Reveal>
        <ul className="lg:col-span-7">
          {benefits.map((b, i) => (
            <li key={b.title}>
              <Reveal delay={i * 0.04} className="border-t border-ink/20 py-6">
                <h3 className="font-display text-2xl font-semibold tracking-tight text-ink">{b.title}</h3>
                <p className="mt-2 max-w-lg leading-relaxed text-ink/80">{b.text}</p>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
