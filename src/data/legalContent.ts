import type { LegalContent } from "@/types/legal";
import {siteConfig} from '@/data'

export const legalContent: LegalContent = {
  privacy: {
    title: "Política de Privacidad",
    lastUpdated: "Enero 206",
    sections: [
      {
        heading: "Información que recopilamos",
        body: "FM Structure no recopila información personal de forma automática. Solo recibimos los datos que tú nos proporcionas directamente al contactarnos por correo electrónico o WhatsApp, como tu nombre y dirección de correo.",
      },
      {
        heading: "Uso de la información",
        body: "La información que compartes con nosotros se utiliza exclusivamente para responderte y gestionar la relación de trabajo contigo. No la compartimos con terceros ni la usamos con fines comerciales adicionales.",
      },
      {
        heading: "Cookies y rastreo",
        body: "Este sitio no utiliza cookies, herramientas de analítica ni scripts de seguimiento de ningún tipo. Tu visita es completamente anónima.",
      },
      {
        heading: "Contacto",
        body: `Si tienes preguntas sobre esta política escríbenos a ${siteConfig.email}`
      },
    ],
  },
  terms: {
    title: "Términos de Servicio",
    lastUpdated: "Enero 2026",
    sections: [
      {
        heading: "Uso del sitio",
        body: "Al acceder a fmstructure.com aceptas usar este sitio únicamente con fines lícitos. Queda prohibido cualquier uso que pueda dañar, deshabilitar o perjudicar el sitio o a terceros.",
      },
      {
        heading: "Propiedad intelectual",
        body: "Todo el contenido de este sitio — textos, diseño, código y gráficos — es propiedad de FM Structure. No está permitida su reproducción sin autorización expresa.",
      },
      {
        heading: "Servicios",
        body: "Los proyectos y condiciones específicas de cada servicio se acuerdan por escrito entre FM Structure y el cliente antes de iniciar cualquier trabajo.",
      },
      {
        heading: "Limitación de responsabilidad",
        body: "FM Structure no se hace responsable de daños indirectos derivados del uso o imposibilidad de uso de este sitio.",
      },
      {
        heading: "Contacto",
        body: `Para cualquier consulta sobre estos términos escríbenos a ${siteConfig.email}.`,
      },
    ],
  },
};