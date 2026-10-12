import type { Project } from "@/lib/types";

/**
 * Para agregar un proyecto, añade un objeto a este arreglo.
 * - image: ruta dentro de /public (ej. "/projects/barberia.webp")
 * - url: dirección completa del sitio (https://...)
 */
export const projects: Project[] = [
  {
    id: "barberia",
    title: "Barbería",
    category: "Barbería / Servicios personales",
    description:
      "Sitio de ejemplo para una barbería: servicios, ubicación y contacto directo para agendar.",
    image: "/projects/barberia.jpg",
    imageAlt: "Vista previa del sitio web de ejemplo para una barbería",
    placeholderLabel: "Imagen de barbería",
    url: "https://nomad-barber.vercel.app/",
  },
  {
    id: "psicologa",
    title: "Psicóloga",
    category: "Salud / Servicios profesionales",
    description:
      "Sitio de ejemplo para una psicóloga: presentación clara, áreas de atención y una forma sencilla de contactarla.",
    image: "/projects/psicologia.jpg",
    imageAlt: "Vista previa del sitio web de ejemplo para una psicóloga",
    placeholderLabel: "Imagen de psicóloga",
    url: "https://law-services.vercel.app/",
  },
  {
    id: "despacho-abogados",
    title: "Despacho de abogados",
    category: "Servicios legales",
    description:
      "Sitio de ejemplo para un despacho legal: áreas de práctica, confianza y contacto para primeras consultas.",
    image: "/projects/abogado.jpg",
    imageAlt: "Vista previa del sitio web de ejemplo para un despacho de abogados",
    placeholderLabel: "Imagen de despacho de abogados",
    url: "https://alma-serena-ten.vercel.app/",
  },
];
