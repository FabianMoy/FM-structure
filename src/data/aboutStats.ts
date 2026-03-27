import {LuCode, LuTrendingUp, LuAward, LuUsers} from 'react-icons/lu'
import type { AboutStat } from '@/types';

export const aboutStats: AboutStat[] = [
    { value: '10+', label: 'Projects entregados', icon: LuCode},
    { value: '100%', label: 'Satisfacción del cliente', icon: LuTrendingUp},
    { value: '3+', label: 'Años de experiencia', icon: LuAward},
    { value: '5+', label: 'Tecnologías', icon: LuUsers},
  ];

export const aboutFeatures: string[] = [
  'Implementación precisa de diseños, cuidando cada detalle.',
  'Arquitectura escalable preparada para crecimiento real.',
  'Pruebas y validaciones para asegurar calidad en producción.',
  'Comunicación clara y procesos ágiles durante todo el desarrollo.',
]

