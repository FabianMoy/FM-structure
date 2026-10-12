import { services } from "@/data/content";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/cn";

// Cada servicio tiene un tratamiento distinto para evitar una rejilla repetitiva.
const layouts = [
  { box: "md:col-span-7 bg-brand text-white", icon: "text-cyan", text: "text-white/90" },
  { box: "md:col-span-5 bg-slate border border-white/10 text-white", icon: "text-cyan", text: "text-white/80" },
  { box: "md:col-span-5 border border-white/20 text-white", icon: "text-cyan", text: "text-white/80" },
  { box: "md:col-span-7 bg-mist text-ink", icon: "text-brand", text: "text-ink/75" },
];

export function Services() {
  return (
    <section id="servicios" aria-labelledby="servicios-titulo" className="bg-ink py-24 text-white lg:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <h2 id="servicios-titulo" className="max-w-2xl font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Lo que podemos crear para tu negocio
          </h2>
        </Reveal>
        <ul className="mt-14 grid gap-5 md:grid-cols-12">
          {services.map(({ title, description, icon: Icon }, i) => {
            const l = layouts[i % layouts.length];
            return (
              <li key={title} className={cn("rounded-3xl p-8 sm:p-10", l.box)}>
                <Icon aria-hidden="true" className={cn("size-7", l.icon)} strokeWidth={1.75} />
                <h3 className="mt-10 font-display text-2xl font-semibold tracking-tight sm:text-3xl">{title}</h3>
                <p className={cn("mt-3 max-w-md leading-relaxed", l.text)}>{description}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
