import Motion from '@/components/animation/Motion';
import { LuArrowRight } from 'react-icons/lu';
import { siteConfig } from '@/data'; 

export default function CTA() {
  return (
    <section id="contact" className="py-24 bg-slate-950 relative overflow-hidden">
      <div aria-hidden="true" className="absolute inset-0 opacity-30 pointer-events-none flex items-center justify-center">
        <div className="w-[800px] h-[400px] bg-gradient-to-r from-blue-600/30 via-cyan-400/20 to-indigo-600/30 blur-[100px] rounded-[100%]" />
      </div>

      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10 text-center">
        <Motion
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-6 leading-tight">
            ¿Listo para llevar tu producto al{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              siguiente nivel?
            </span>
          </h2>

          <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
            Te ayudo a convertir tu idea en una aplicación web sólida, escalable y bien construida,
            cuidando tanto el rendimiento como la experiencia de usuario.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`mailto:${siteConfig.email}`}
              aria-label={`Enviar correo a ${siteConfig.email}`}
              className="px-8 py-4 w-full sm:w-auto text-base font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-full transition-all flex items-center justify-center gap-2 group shadow-[0_0_40px_-10px_rgba(37,99,235,0.5)] hover:shadow-[0_0_60px_-15px_rgba(37,99,235,0.6)]"
            >
              Contáctanos por email
              <LuArrowRight size={18} aria-hidden="true" className="group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#services"
              className="px-8 py-4 w-full sm:w-auto text-base font-medium text-slate-300 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-all flex items-center justify-center"
            >
              Explorar servicios
            </a>
          </div>
        </Motion>
      </div>
    </section>
  );
}