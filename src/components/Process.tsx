import { processSteps } from "@/data/content";
import { Reveal } from "@/components/Reveal";

export function Process() {
  return (
    <section id="proceso" aria-labelledby="proceso-titulo" className="mx-auto max-w-6xl px-5 py-24 sm:px-8 lg:py-32">
      <Reveal>
        <h2 id="proceso-titulo" className="font-display text-4xl font-semibold leading-tight tracking-tight text-ink sm:text-5xl">
          Así trabajamos.
        </h2>
        <p className="mt-5 max-w-xl text-lg text-ink/75">
          No necesitas conocimientos técnicos. Nosotros nos encargamos de la parte técnica y te explicamos cada paso con claridad.
        </p>
      </Reveal>
      <ol className="mt-14 grid gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-4">
        {processSteps.map((step, i) => (
          <li key={step.title}>
            <Reveal delay={i * 0.08} className="h-full border-t-2 border-brand pt-6">
              <span className="font-display text-5xl font-semibold text-brand" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-4 text-xl font-semibold"><span className="sr-only">Paso {i + 1}: </span>{step.title}</h3>
              <p className="mt-2 leading-relaxed text-ink/75">{step.description}</p>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  );
}
