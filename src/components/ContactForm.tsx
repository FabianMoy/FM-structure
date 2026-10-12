"use client";

import { useRef } from "react";
import { MessageCircle, Mail } from "lucide-react";
import { projectTypes } from "@/data/content";
import { buttonClass } from "@/components/Button";
import { mailtoUrl, whatsappUrl } from "@/lib/site";

const field = "mt-2 w-full rounded-xl border border-ink/25 bg-paper px-4 py-3 text-base text-ink placeholder:text-ink/50 focus:border-brand";

function buildMessage(form: HTMLFormElement) {
  const d = new FormData(form);
  const get = (k: string) => String(d.get(k) ?? "").trim();
  return [
    "Hola, quiero solicitar una cotización.",
    `Nombre: ${get("nombre")}`,
    get("negocio") && `Negocio: ${get("negocio")}`,
    get("email") && `Correo: ${get("email")}`,
    get("telefono") && `Teléfono: ${get("telefono")}`,
    get("tipo") && `Tipo de proyecto: ${get("tipo")}`,
    `Mensaje: ${get("mensaje")}`,
  ].filter(Boolean).join("\n");
}

/**
 * Sin backend: el formulario no envía datos a ningún servidor.
 * Al enviarlo se abre WhatsApp o el correo con el mensaje ya redactado.
 * Para conectarlo después a un servicio (Resend, Formspree, API propia),
 * sustituye estos dos handlers por una llamada fetch a tu endpoint.
 */
export function ContactForm() {
  const ref = useRef<HTMLFormElement>(null);

  const send = (channel: "whatsapp" | "email") => {
    const form = ref.current;
    if (!form || !form.reportValidity()) return;
    const message = buildMessage(form);
    if (channel === "whatsapp") {
      window.open(whatsappUrl(message), "_blank", "noopener,noreferrer");
    } else {
      window.location.href = mailtoUrl("Solicitud de cotización", message);
    }
  };

  return (
    <form ref={ref} onSubmit={(e) => { e.preventDefault(); send("whatsapp"); }} className="rounded-3xl border border-ink/10 bg-white p-6 sm:p-9" noValidate={false}>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block font-medium">Nombre <span aria-hidden="true">*</span>
          <input name="nombre" required autoComplete="name" className={field} />
        </label>
        <label className="block font-medium">Negocio
          <input name="negocio" autoComplete="organization" className={field} />
        </label>
        <label className="block font-medium">Correo <span aria-hidden="true">*</span>
          <input name="email" type="email" required autoComplete="email" className={field} />
        </label>
        <label className="block font-medium">Teléfono
          <input name="telefono" type="tel" autoComplete="tel" className={field} />
        </label>
        <label className="block font-medium sm:col-span-2">Tipo de proyecto
          <select name="tipo" defaultValue="" className={field}>
            <option value="">Selecciona una opción</option>
            {projectTypes.map((t) => <option key={t} value={t}>{t}</option>)}
          </select>
        </label>
        <label className="block font-medium sm:col-span-2">Mensaje <span aria-hidden="true">*</span>
          <textarea name="mensaje" required rows={4} className={field} placeholder="Cuéntanos qué hace tu negocio y qué necesitas." />
        </label>
      </div>
      <div className="mt-7 flex flex-col gap-3 sm:flex-row">
        <button type="submit" className={buttonClass("primary")}>
          <MessageCircle aria-hidden="true" className="size-5" /> Enviar por WhatsApp
        </button>
        <button type="button" onClick={() => send("email")} className={buttonClass("secondary")}>
          <Mail aria-hidden="true" className="size-5" /> Enviar por correo
        </button>
      </div>
      <p className="mt-4 text-sm text-ink/70">Este formulario no guarda información: al enviarlo se abre WhatsApp o tu correo con el mensaje listo. Los campos con * son obligatorios.</p>
    </form>
  );
}
