import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { Reveal } from "@/components/Reveal";

// Patrón de composición: grande, pequeño, ancho. Se repite si agregas más proyectos.
const spans = ["md:col-span-7", "md:col-span-5", "md:col-span-12"];

export function Portfolio() {
  return (
    <section id="portafolio" aria-labelledby="portafolio-titulo" className="mx-auto max-w-6xl px-5 py-24 sm:px-8 lg:py-32">
      <Reveal>
        <h2 id="portafolio-titulo" className="max-w-2xl font-display text-4xl font-semibold leading-tight tracking-tight text-ink sm:text-5xl">
          Proyectos que hablan por sí mismos.
        </h2>
        <p className="mt-5 max-w-xl text-lg text-ink/75">Algunos ejemplos de sitios creados para diferentes tipos de negocio.</p>
      </Reveal>
      <ul className="mt-14 grid gap-6 md:grid-cols-12">
        {projects.map((project, i) => {
          const slot = i % spans.length;
          return (
            <li key={project.id} className={`flex ${spans[slot]}`}>
              <Reveal delay={(i % 2) * 0.08} className="w-full">
                <ProjectCard project={project} index={i} wide={slot === 2} />
              </Reveal>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
