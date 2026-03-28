import Image from 'next/image';
import Link from 'next/link';
import { LuExternalLink } from 'react-icons/lu';
import { projects } from '@/data';
import Motion from '@/components/animation/Motion';

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-8 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        <div className="mb-16 flex flex-col items-center text-center">
          <p className="text-sm font-semibold text-cyan-400 tracking-wider uppercase mb-3">
            Trabajo de calidad
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight max-w-2xl">
            Nuestro portafolio
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          {projects.map((project) => (
            <Motion
              key={project.title}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: project.index * 0.1 }}
              className={`group relative rounded-2xl overflow-hidden border border-white/10 ${project.span}`}
            >
              <Link
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Ver proyecto: ${project.title}`}
                className="absolute inset-0 z-10"
              />

              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="block text-cyan-400 text-sm font-medium mb-2">{project.category}</span>
                  <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                    {project.title}
                    <LuExternalLink size={18} aria-hidden="true" className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </h3>
                </div>
              </div>
            </Motion>
          ))}
        </div>
      </div>
    </section>
  );
}