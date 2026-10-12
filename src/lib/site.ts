export const siteConfig = {
  name: "FM Structure",
  tagline: "Desarrollo web para negocios que quieren crecer.",
  description:
    "Diseño y desarrollo de páginas web para negocios, emprendedores y profesionales independientes. Landing pages modernas, rápidas y pensadas para convertir visitantes en clientes.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://fmstructure.com/",
  phone: "8132510251",
  phoneCountryCode: "52",
  email: "fmstructure.contacto@gmail.com",
  socials: {
    instagram: "SOCIAL_INSTAGRAM_URL",
    facebook: "SOCIAL_FACEBOOK_URL",
    linkedin: "SOCIAL_LINKEDIN_URL",
  },
} as const;

export const whatsappUrl = (message?: string) => {
  const base = `https://wa.me/${siteConfig.phoneCountryCode}${siteConfig.phone}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
};

export const mailtoUrl = (subject?: string, body?: string) => {
  const params = new URLSearchParams();
  if (subject) params.set("subject", subject);
  if (body) params.set("body", body);
  const query = params.toString().replace(/\+/g, "%20");
  return `mailto:${siteConfig.email}${query ? `?${query}` : ""}`;
};

/** Un valor es real cuando es una URL completa; los placeholders (SOCIAL_*, PROJECT_URL_*) no lo son. */
export const isRealUrl = (value: string) => /^https?:\/\//.test(value);
