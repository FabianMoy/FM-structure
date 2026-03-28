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