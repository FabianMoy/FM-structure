# FM Structure — Landing page

Next.js (App Router) + TypeScript + Tailwind CSS 4 + Motion + Lucide.

## Instalación
```bash
npm install
```
## Desarrollo
```bash
npm run dev
```
Abre http://localhost:3000
## Build
```bash
npm run build
```
## Producción
```bash
npm run start
```
Otros comandos: `npm run lint`.

## Dónde modificar cada cosa

| Qué | Dónde |
| --- | --- |
| Teléfono, correo, nombre, descripción, redes sociales, código de país de WhatsApp | `src/lib/site.ts` |
| URL pública del sitio (canonical, sitemap, Open Graph) | `.env.local` con `NEXT_PUBLIC_SITE_URL` (ver `.env.example`) o `src/lib/site.ts` |
| Proyectos del portafolio (título, categoría, descripción) | `src/data/projects.ts` (agrega objetos al arreglo, el diseño se adapta solo) |
| Imágenes de proyectos | Guárdalas en `public/projects/` y en `src/data/projects.ts` pon `image: "/projects/barberia.webp"`. Hasta entonces se muestra un marcador `PROJECT_IMAGE_n` |
| URLs de proyectos | Campo `url` en `src/data/projects.ts` (`https://...`). Mientras sea `PROJECT_URL_n` el botón "Ver proyecto" queda deshabilitado |
| Redes sociales | `socials` en `src/lib/site.ts`: reemplaza `SOCIAL_INSTAGRAM_URL`, `SOCIAL_FACEBOOK_URL`, `SOCIAL_LINKEDIN_URL` por URLs reales; aparecen solas en el footer |
| Servicios, beneficios, pasos del proceso, tipos de proyecto | `src/data/content.ts` |
| Menú de navegación | `src/data/navigation.ts` |
| Paleta de colores | bloque `@theme` en `src/app/globals.css` |
| Metadatos SEO y JSON-LD | `src/app/layout.tsx` |
| Imagen Open Graph | `src/app/opengraph-image.tsx` |

## Formulario de contacto
No tiene backend. Al enviarlo abre WhatsApp o tu cliente de correo con el mensaje redactado. Para conectarlo a un servicio, sustituye los handlers de `src/components/ContactForm.tsx` por una llamada `fetch` a tu endpoint.

## Notas
- El enlace de WhatsApp asume código de país 52 (México); cámbialo en `phoneCountryCode` si hace falta.
- Las fuentes (Space Grotesk y Figtree) están incluidas en `src/app/fonts/` y se cargan con `next/font/local`, sin depender de Google en el build.
