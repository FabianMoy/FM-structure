import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { LuMail } from 'react-icons/lu';
import {SocialLink, FooterColumn} from '@/types'

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
];