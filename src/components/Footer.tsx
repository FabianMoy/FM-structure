import { navigation } from "@/data/navigation";
import { isRealUrl, mailtoUrl, siteConfig } from "@/lib/site";

const socialLabels = { instagram: "Instagram", facebook: "Facebook", linkedin: "LinkedIn" } as const;
const link = "inline-flex min-h-10 items-center text-white/80 transition-colors hover:text-cyan";

export function Footer() {
  // Las redes solo aparecen cuando reemplazas los placeholders SOCIAL_* por URLs reales.
  const socials = (Object.keys(socialLabels) as Array<keyof typeof socialLabels>).filter((k) => isRealUrl(siteConfig.socials[k]));
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-3">
        <div>
          <p className="font-display text-2xl font-semibold">{siteConfig.name}</p>
          <p className="mt-2 max-w-xs text-white/75">{siteConfig.tagline}</p>
        </div>
        <nav aria-label="Pie de página">
          <ul className="space-y-1">
            {navigation.map((item) => (
              <li key={item.href}><a href={item.href} className={link}>{item.label}</a></li>
            ))}
          </ul>
        </nav>
        <div className="flex flex-col space-y-1">
          <a href={`tel:+${siteConfig.phoneCountryCode}${siteConfig.phone}`} className={link}>{siteConfig.phone}</a>
          <a href={mailtoUrl()} className={`${link} break-all`}>{siteConfig.email}</a>
          {socials.map((k) => (
            <a key={k} href={siteConfig.socials[k]} target="_blank" rel="noopener noreferrer" className={link}>{socialLabels[k]}</a>
          ))}
        </div>
      </div>
      <p className="border-t border-white/10 px-5 py-6 text-center text-sm text-white/70">© 2026 FM Structure. Todos los derechos reservados.</p>
    </footer>
  );
}
