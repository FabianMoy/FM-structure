import Motion from '@/components/animation/Motion';
import { LuArrowRight, LuSparkles } from 'react-icons/lu';
import Link from "next/link";

export default function Hero() {

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-slate-950">
      <div aria-hidden="true" className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[128px] pointer-events-none" />
      <div aria-hidden="true" className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-400/10 rounded-full blur-[128px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col items-start gap-8">
          <Motion
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-cyan-400"
          >
            <LuSparkles size={14} aria-hidden="true" />
            <span>Elevando tu experiencia digital</span>
          </Motion>

          <Motion
            as="h1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-[1.1]"
          >
            Creando tu sitio{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              web moderno.
            </span>
          </Motion>

          <Motion
            as='p'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-400 max-w-xl leading-relaxed"
          >
            FM Structure entregando alta eficiencia, aplicaciones web escalables y diseñadas con alta precisión para el mañana.
          </Motion>

          <Motion
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4"
          >
            <Link
              href="#portfolio"
              className="px-8 py-4 text-sm font-medium text-slate-950 bg-white hover:bg-slate-200 rounded-full transition-all flex items-center gap-2 group"
            >
              Mira nuestro trabajo
              <LuArrowRight size={16} aria-hidden="true" className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href='https://wa.link/ffd26q'
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contactar por WhatsApp"
              className="px-8 py-4 text-sm font-medium text-white bg-transparent hover:bg-white/5 border border-white/10 rounded-full transition-all"
            >
              Agenda una consulta
            </a>
          </Motion>
        </div>

        <Motion
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative lg:h-[500px] lg:w-[600px] hidden md:block"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/40 to-transparent rounded-3xl border border-white/10 backdrop-blur-sm overflow-hidden flex items-center justify-center shadow-2xl">
            <div className="relative w-full h-full p-6 flex items-center justify-center">
              <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

              <Motion
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="w-full max-w-[340px] bg-slate-950/80 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden shadow-[0_0_40px_rgba(56,189,248,0.1)] relative z-10"
              >
                <div className="px-4 py-3 flex items-center justify-between border-b border-white/10 bg-white/[0.02]">
                  <div className="flex gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                  </div>
                  <div className="text-[10px] font-mono text-slate-400 font-medium">System.tsx — FM Structure</div>
                </div>
                <div className="p-5 font-mono text-xs space-y-2.5">
                  <p className="text-slate-300">
                    <span className="text-blue-400">import</span> {'{'} <span className="text-cyan-300">Architect</span> {'}'} <span className="text-blue-400">from</span> <span className="text-green-300">'@fm/core'</span>;
                  </p>
                  <p className="text-slate-300 mt-2">
                    <span className="text-blue-400">const</span> <span className="text-yellow-200">System</span> <span className="text-cyan-400">=</span> () <span className="text-cyan-400">=&gt;</span> {'{'}
                  </p>
                  <p className="text-slate-300 pl-4">
                    <span className="text-blue-400">return</span> (
                  </p>
                  <p className="text-slate-300 pl-8">
                    &lt;<span className="text-cyan-300">Architect.Build</span>
                  </p>
                  <p className="text-slate-300 pl-12">
                    <span className="text-blue-300">scale</span>={'{'}<span className="text-orange-300">"global"</span>{'}'}
                  </p>
                  <p className="text-slate-300 pl-12">
                    <span className="text-blue-300">performance</span>={'{'}<span className="text-orange-300">"optimized"</span>{'}'}
                  </p>
                  <p className="text-slate-300 pl-8">
                    /&gt;
                  </p>
                  <p className="text-slate-300 pl-4">
                    );
                  </p>
                  <p className="text-slate-300">
                    {'}'};
                  </p>
                </div>
              </Motion>

              <Motion
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute right-1 top-1/4 bg-slate-900/90 backdrop-blur-md border border-white/10 rounded-xl p-3 shadow-xl z-20 flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center border border-green-500/20 text-green-400">
                  <span className="text-sm font-bold">99</span>
                </div>
                <div>
                  <div className="text-[10px] text-slate-400 font-medium uppercase tracking-wider mb-1.5">Performance</div>
                  <div className="w-20 h-1.5 bg-slate-800 rounded-full overflow-hidden">
                    <div className="w-[99%] h-full bg-green-400 rounded-full" />
                  </div>
                </div>
              </Motion>

              <Motion
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute left-1 bottom-1/3 bg-slate-900/90 backdrop-blur-md border border-cyan-500/20 rounded-xl p-4 shadow-xl z-20"
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_10px_rgba(34,211,238,0.6)]" />
                  <div className="text-[10px] font-mono text-cyan-400">API_CONNECTED</div>
                </div>
                <div className="flex gap-1.5 items-end h-8">
                  {[40, 60, 30, 80, 100].map((height, i) => (
                    <div key={i} className={`w-1.5 bg-cyan-500/40 rounded-sm`} style={{ height: `${height}%` }} />
                  ))}
                </div>
              </Motion>
            </div>
          </div>
        </Motion>
      </div>
    </section>
  );
}