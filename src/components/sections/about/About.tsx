import Motion from '@/components/animation/Motion'
import { FaRegCheckCircle } from "react-icons/fa";
import { aboutStats, aboutFeatures } from '@/data'

export default function About() {

  return (
    <section id="about" className="py-12 bg-slate-950 border-y border-white/5 relative overflow-hidden">
      <div aria-hidden="true" className="absolute -left-64 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[128px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <Motion
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
<p className="text-sm font-semibold text-blue-400 tracking-wider uppercase mb-3">
  Sobre FM Structure
</p>
<h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-[1.1] mb-6">
  Construimos soluciones digitales sólidas, pensadas para crecer.
</h2>

            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              Trabajamos con principios de código limpio y arquitectura bien definida para desarrollar aplicaciones robustas y mantenibles. Más que solo programar, nos enfocamos en entender el problema y resolverlo con soluciones técnicas claras y eficientes.
            </p>

            <ul className="space-y-4 mb-10">
              {aboutFeatures.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-300">
                  <FaRegCheckCircle size={20} aria-hidden="true" className="text-cyan-400 mt-1 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Motion>

          <div className="grid grid-cols-2 gap-4">
            {aboutStats.map((stat, i) => {
              const Icon = stat.icon
              return (<Motion
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-8 rounded-2xl bg-white/[0.03] border border-white/10 hover:bg-white/[0.05] transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 mb-4">
                  <Icon size={20} aria-hidden="true" />
                </div>
                <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-sm text-slate-400 font-medium">{stat.label}</div>
              </Motion>
              )
            })}
          </div>

        </div>
      </div>
    </section>
  );
}