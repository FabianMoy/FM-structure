import type { Service } from '@/types'
import { LuMonitorSmartphone, LuCpu, LuZap, LuSettings, LuShield, LuGauge } from 'react-icons/lu';

export const services: Service[] = [
  {
    title: 'Desarrollo de Aplicaciones Web',
    description: 'Creamos sitios y aplicaciones a medida que se adaptan a cualquier dispositivo, diseñados para cubrir exactamente lo que tu negocio necesita.',
    iconClassName: 'text-blue-400',
    icon: LuMonitorSmartphone
  },
  {
    title: 'Consultoría Tecnológica',
    description: 'Te ayudamos a tomar mejores decisiones sobre cómo construir o mejorar tu producto digital, con claridad y enfoque en tus objetivos.',
    iconClassName: 'text-cyan-400',
    icon: LuCpu
  },
  {
    title: 'Optimización de Rendimiento',
    description: 'Mejoramos la velocidad y el funcionamiento de tu aplicación para que tus usuarios tengan una experiencia fluida desde el primer momento.',
    iconClassName: 'text-blue-400',
    icon: LuZap
  },
  {
    title: 'Integración de Sistemas',
    description: 'Conectamos tu plataforma con los servicios y herramientas que necesitas para que todo opere de forma fluida y automatizada.',
    iconClassName: 'text-cyan-400',
    icon: LuSettings
  },
  {
    title: 'Auditoría de Seguridad',
    description: 'Analizamos tu aplicación para identificar puntos vulnerables y garantizar que la información de tus usuarios esté siempre protegida.',
    iconClassName: 'text-blue-400',
    icon: LuShield
  },
  {
    title: 'Arquitectura Escalable',
    description: 'Diseñamos soluciones que crecen junto con tu negocio, manteniendo la velocidad y estabilidad sin importar cuánto aumente tu base de usuarios.',
    iconClassName: 'text-cyan-400',
    icon: LuGauge
  }
]

