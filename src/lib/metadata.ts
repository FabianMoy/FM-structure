import type { Metadata } from "next";

const title = "Desarrollo Web en Monterrey | FM Structure";
const description =
  "Agencia de desarrollo web en Monterrey especializada en landing pages, aplicaciones web y SEO técnico. Sitios rápidos, escalables y bien construidos.";

export const metadata: Metadata = {
  metadataBase: new URL("https://fmstructure.com"),

  title: {
    default: title,
    template: "%s | FM Structure",
  },
  description,
  keywords: [
    "Desarrollo web Monterrey",
    "Agencia web Monterrey",
    "Landing pages Monterrey",
    "Aplicaciones web México",
    "SEO técnico Monterrey",
    "Diseño web profesional",
    "Next.js developer Mexico",
    "Freelance web developer Monterrey",
  ],
  authors: [{ name: "FM Structure", url: "https://fmstructure.com" }],
  creator: "FM Structure",
  publisher: "FM Structure",

  alternates: {
    canonical: "https://fmstructure.com",
  },
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: "https://fmstructure.com",
    siteName: "FM Structure",
    title,
    description,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "FM Structure — Desarrollo Web en Monterrey",
      },
    ],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "TU_CODIGO_DE_VERIFICACION", // Google Search Console
  },
};