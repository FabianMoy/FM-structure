import type { LucideIcon } from "lucide-react";

export interface NavigationItem {
  label: string;
  href: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  /** Ruta dentro de /public (ej. "/projects/barberia.webp"). Mientras sea un placeholder se muestra un marcador visual. */
  image: string;
  imageAlt: string;
  /** Etiqueta que aparece en el marcador mientras no haya imagen real. */
  placeholderLabel: string;
  /** URL completa (https://...). Mientras sea un placeholder el botón queda deshabilitado. */
  url: string;
}

export interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface ProcessStep {
  title: string;
  description: string;
}
