import { Mail, MessageCircle } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/Reveal";
import { buttonClass } from "@/components/Button";
import { mailtoUrl, siteConfig, whatsappUrl } from "@/lib/site";

export function Contact() {
  return (
    <section id="contacto" aria-labelledby="contacto-titulo" className="mx-auto max-w-6xl px-5 py-24 sm:px-8 lg:py-32">
      <div className="grid gap-14 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <h2 id="contacto-titulo" className="font-display text-4xl font-semibold leading-tight tracking-tight text-ink sm:text-5xl">
            Hablemos de tu proyecto.
          </h2>
          <dl className="mt-10 space-y-6">
            <div>
              <dt className="text-sm font-medium text-ink/70">WhatsApp / Teléfono</dt>
              <dd className="mt-1 text-xl font-semibold"><a href={`tel:+${siteConfig.phoneCountryCode}${siteConfig.phone}`} className="hover:text-brand">{siteConfig.phone}</a></dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-ink/70">Correo</dt>
              <dd className="mt-1 break-all text-xl font-semibold"><a href={mailtoUrl()} className="hover:text-brand">{siteConfig.email}</a></dd>
            </div>
          </dl>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href={whatsappUrl("Hola, quiero solicitar una cotización.")} target="_blank" rel="noopener noreferrer" className={buttonClass("primary")}>
              <MessageCircle aria-hidden="true" className="size-5" /> WhatsApp
              <span className="sr-only">(se abre en una pestaña nueva)</span>
            </a>
            <a href={mailtoUrl("Solicitud de cotización")} className={buttonClass("secondary")}>
              <Mail aria-hidden="true" className="size-5" /> Correo
            </a>
          </div>
        </Reveal>
        <Reveal delay={0.1} className="lg:col-span-7">
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
