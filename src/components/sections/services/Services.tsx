import Motion from '@/components/animation/Motion';
import { services } from '@/data'

export default function Services() {

  return (
    <section id="services" className="py-16 bg-slate-950 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        <div className="max-w-2xl">
          <p className="text-sm font-semibold text-cyan-400 tracking-wider uppercase mb-3">
            Nuestra expertise
          </p>
          <h2 className="pb-8 text-3xl md:text-5xl font-bold text-white tracking-tight">
            Ingeniería por excelencia
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (<Motion
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:bg-white/[0.04] transition-colors group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 mb-6 group-hover:scale-110 transition-transform duration-300">
                <Icon
                  size={24}
                  aria-hidden="true"
                  className={service.iconClassName}
                />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
              <p className="text-slate-400 leading-relaxed">{service.description}</p>
            </Motion>
            )
          })}
        </div>
      </div>
    </section>
  );
}