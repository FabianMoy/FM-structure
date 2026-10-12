import { features } from "@/data/content";
import { Reveal } from "@/components/Reveal";

export function ValueSection() {
  return (
    <section id="por-que" aria-labelledby="valor-titulo" className="mx-auto max-w-6xl px-5 py-24 sm:px-8 lg:py-32">
      <div className="grid gap-14">
        <Reveal>
          <h2 id="valor-titulo" className="font-display text-4xl font-semibold leading-tight tracking-tight text-ink sm:text-5xl">
            Una web que representa tu negocio.
          </h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-ink/75">
            No se trata solo de tener una página. Se trata de que quien te encuentre entienda rápido lo que ofreces y sepa cómo contactarte.
          </p>
        </Reveal>
        <ul className="grid gap-x-10 sm:grid-cols-2">
          {features.map(({ title, description, icon: Icon }, i) => (
            <li key={title}>
              <Reveal delay={(i % 2) * 0.08} className="border-t border-ink/15 py-7">
                <span className="inline-flex size-10 items-center justify-center rounded-lg bg-mist text-brand">
                  <Icon aria-hidden="true" className="size-5" strokeWidth={1.75} />
                </span>
                <h3 className="mt-4 text-lg font-semibold">{title}</h3>
                <p className="mt-2 leading-relaxed text-ink/75">{description}</p>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
