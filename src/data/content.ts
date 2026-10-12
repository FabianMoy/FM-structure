import {
  Gauge,
  Globe,
  LayoutTemplate,
  MousePointerClick,
  Palette,
  Search,
  Smartphone,
  Target,
  Wrench,
  PencilRuler,
} from "lucide-react";
import type { Feature, ProcessStep, Service } from "@/lib/types";

export const features: Feature[] = [
  { title: "Diseño personalizado", icon: Palette, description: "Cada negocio tiene una identidad distinta. Adaptamos el diseño a tu marca y a las personas que quieres atraer." },
  { title: "Diseño responsive", icon: Smartphone, description: "Tu sitio se ve y funciona bien en celulares, tablets y computadoras." },
  { title: "Velocidad", icon: Gauge, description: "Sitios rápidos y optimizados, para que nadie se quede esperando." },
  { title: "SEO", icon: Search, description: "Construimos la base técnica para que los buscadores puedan entender tu sitio." },
  { title: "Experiencia de usuario", icon: MousePointerClick, description: "Navegación clara y sencilla, pensada para que contactarte sea fácil." },
  { title: "Conversión", icon: Target, description: "Tu página ayuda a entender el negocio y a dar el siguiente paso." },
];

export const services: Service[] = [
  { title: "Landing pages", icon: LayoutTemplate, description: "Páginas enfocadas en presentar tu negocio, servicios y facilitar que tus clientes se pongan en contacto contigo." },
  { title: "Sitios web para negocios", icon: Globe, description: "Una presencia digital completa para empresas y profesionales que necesitan algo más que una página informativa." },
  { title: "Diseño y desarrollo personalizado", icon: PencilRuler, description: "Soluciones adaptadas a las necesidades específicas de cada negocio." },
  { title: "Optimización y mantenimiento", icon: Wrench, description: "Actualizaciones, mejoras y mantenimiento para mantener tu sitio funcionando correctamente." },
];

export const benefits = [
  { title: "Generar confianza", text: "Quien no te conoce te busca en internet antes de escribirte. Un sitio cuidado le dice que hay un negocio serio detrás." },
  { title: "Presentar tus servicios", text: "Explicas lo que haces, para quién y cómo trabajas, sin repetirlo en cada conversación." },
  { title: "Facilitar el contacto", text: "Un botón de WhatsApp o un correo a un toque: menos vueltas para quien quiere contratarte." },
  { title: "Diferenciarte", text: "Tu sitio cuenta lo que te hace distinto de otros negocios parecidos al tuyo." },
  { title: "Estar presente en internet", text: "Tu negocio disponible a cualquier hora, en el celular de quien lo busca." },
];

export const processSteps: ProcessStep[] = [
  { title: "Conocemos tu negocio", description: "Entendemos qué haces, a quién te diriges y qué necesitas conseguir con tu sitio." },
  { title: "Definimos la estructura", description: "Organizamos el contenido y la información para que los visitantes encuentren fácilmente lo que necesitan." },
  { title: "Diseñamos y desarrollamos", description: "Creamos la interfaz y construimos el sitio con tecnologías modernas." },
  { title: "Publicamos tu sitio", description: "Dejamos el sitio preparado para producción y publicación." },
];

export const projectTypes = [
  "Landing page",
  "Sitio web para mi negocio",
  "Diseño y desarrollo personalizado",
  "Optimización y mantenimiento",
  "Aún no lo sé",
];
