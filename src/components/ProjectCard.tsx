import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/types";
import { isRealUrl } from "@/lib/site";
import { cn } from "@/lib/cn";

interface ProjectCardProps {
  project: Project;
  wide?: boolean;
  priority?: boolean;
}

const tints = ["bg-mist", "bg-brand/10", "bg-cyan/15"];

function ProjectMedia({ project, index }: { project: Project; index: number }) {
  if (project.image.startsWith("/")) {
    return (
      <Image
        src={project.image}
        alt={project.imageAlt}
        fill
        sizes="(min-width: 1024px) 60vw, 100vw"
        className="object-cover transition-transform duration-500 group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
      />
    );
  }
  // Placeholder visual: se reemplaza al definir una ruta real en src/data/projects.ts
  return (
    <div role="img" aria-label={`${project.placeholderLabel} (pendiente de agregar)`} className={cn("absolute inset-0 flex items-center justify-center p-6", tints[index % tints.length])}>
      <div aria-hidden="true" className="w-full max-w-sm rounded-xl border border-ink/15 bg-white p-4 shadow-soft">
        <div className="flex gap-1.5">
          <span className="size-2 rounded-full bg-ink/25" />
          <span className="size-2 rounded-full bg-ink/25" />
          <span className="size-2 rounded-full bg-ink/25" />
        </div>
        <div className="mt-4 text-center">
          <p className="text-sm font-semibold text-ink">{project.image}</p>
          <p className="mt-1 text-sm text-ink/70">{project.placeholderLabel}</p>
        </div>
        <div className="mt-4 h-2 w-2/3 rounded-full bg-ink/10" />
      </div>
    </div>
  );
}

export function ProjectCard({ project, wide = false, index = 0 }: ProjectCardProps & { index?: number }) {
  const active = isRealUrl(project.url);
  const label = "Ver demo";
  return (
    <article className={cn("group flex flex-col overflow-hidden rounded-3xl border border-ink/10 bg-white", wide && "md:grid md:grid-cols-2")}>
      <div className={cn("relative aspect-[4/3] overflow-hidden", wide && "md:aspect-auto md:min-h-80")}>
        <ProjectMedia project={project} index={index} />
      </div>
      <div className="flex flex-1 flex-col justify-between gap-8 p-7 sm:p-9">
        <div>
          <p className="text-sm font-medium text-brand">{project.category}</p>
          <h3 className="mt-2 font-display text-3xl font-semibold tracking-tight text-ink">{project.title}</h3>
          <p className="mt-3 max-w-md leading-relaxed text-ink/75">{project.description}</p>
        </div>
        {active ? (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 w-fit items-center gap-2 rounded-full border border-ink/25 px-5 font-semibold text-ink transition-colors hover:border-ink hover:bg-ink hover:text-white"
          >
            {label}
            <ArrowUpRight aria-hidden="true" className="size-4" />
            <span className="sr-only"> de {project.title} (se abre en una pestaña nueva)</span>
          </a>
        ) : (
          <button type="button" disabled aria-disabled="true" className="inline-flex min-h-12 w-fit cursor-not-allowed items-center gap-2 rounded-full border border-ink/20 px-5 font-semibold text-ink/55">
            {label}
            <span className="sr-only"> de {project.title}: enlace pendiente</span>
          </button>
        )}
      </div>
    </article>
  );
}
