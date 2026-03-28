import "./globals.css";
import { Inter } from 'next/font/google';
import Navbar from "@/components/layout/navbar/Navbar";
import type { ReactNode } from "react";
import Footer from "@/components/layout/footer/Footer";
export { metadata } from "@/lib/metadata";

const inter = Inter({ subsets: ['latin'] });

type RootLayoutProps = {
  children: ReactNode;
};

const bodyClasses = [
  inter.className,
  "min-h-screen",
  "bg-slate-950",
  "text-slate-50",
  "selection:bg-cyan-500/30",
  "selection:text-cyan-50",
].join(" ");

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "FM Structure",
  url: "https://fmstructure.com",
  description: "Agencia de desarrollo web en Monterrey especializada en landing pages, aplicaciones web y SEO técnico.",
  telephone: "+52-81-4949-8088",
  email: "hello@fmstructure.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Monterrey",
    addressRegion: "Nuevo León",
    addressCountry: "MX",
  },
  areaServed: ["Monterrey", "Nuevo León", "México"],
  serviceType: ["Desarrollo Web", "SEO Técnico", "Landing Pages"],
  priceRange: "$$",
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={bodyClasses}>
        <Navbar />
        <main>{children}</main>
      <Footer />
      </body>
    </html>
  );
}