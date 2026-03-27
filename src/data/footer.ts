import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { LuMail } from 'react-icons/lu';
import type { ElementType } from 'react';

export interface SocialLink {
  label: string;
  href: string;
  icon: ElementType;
}

export interface FooterColumn {
  heading: string;
  links: { label: string; href: string }[];
}

export const socialLinks: SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com/FabianMoy', icon: FaGithub },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/fabian-moyedaga/', icon: FaLinkedin },
  { label: 'Correo electrónico', href: 'mailto:fmstructure.contacto@gmail.com', icon: LuMail },
];

export const footerLinks: FooterColumn[] = [
  {
    heading: 'Servicios',
    links: [
      { label: 'Aplicaciones Web', href: '#services' },
      { label: 'E-Commerce', href: '#services' },
      { label: 'Consultoría Técnica', href: '#services' },
      { label: 'Auditoría de Rendimiento', href: '#services' },
      { label: 'Arquitectura de Sistemas', href: '#services' },
    ],
  },
  {
    heading: 'Compañía',
    links: [
      { label: 'Sobre nosotros', href: '#about' },
      { label: 'Portafolio', href: '#portfolio' },
      { label: 'Contacto', href: '#contact' },
    ],
  },
  {
    heading: 'Legal',
    links: [
      { label: 'Política de privacidad', href: '/privacy' },
      { label: 'Términos de servicio', href: '/terms' },
    ],
  },
];