import Link from 'next/link';
import { LuCodeXml } from "react-icons/lu";
import { footerLinks, socialLinks, siteConfig } from '@/data';
import LegalPopover from '@/components/ui/LegalPopover';

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-white/10 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 group mb-6" aria-label="Ir al inicio">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-white font-bold">
                <LuCodeXml size={18} aria-hidden="true" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">FM Structure</span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Construimos aplicaciones web modernas con precisión, optimización y escalabilidad.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-slate-500 hover:text-white transition-colors"
                >
                  <Icon size={20} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
                    {footerLinks.map((column) => (
            <div key={column.heading}>
              <p className="text-white font-semibold mb-6">{column.heading}</p>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <p className="text-white font-semibold mb-6">Legal</p>
            <ul className="space-y-3">
              <LegalPopover type="privacy" label="Política de privacidad" />
              <LegalPopover type="terms" label="Términos de servicio" />
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            © 2026 {siteConfig.name}. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}