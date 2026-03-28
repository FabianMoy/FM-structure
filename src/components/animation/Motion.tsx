'use client'

import { motion, type MotionProps } from 'framer-motion'
import { ElementType, ComponentPropsWithoutRef, useMemo } from 'react'

type MotionComponentProps<T extends ElementType = 'div'> = {
  as?: T
} & MotionProps &
  Omit<ComponentPropsWithoutRef<T>, keyof MotionProps>

export default function Motion<T extends ElementType = 'div'>({
  as,
  ...props
}: MotionComponentProps<T>) {
  const Component = useMemo(() => motion(as || 'div'), [as])

  return <Component {...(props as MotionProps)} />
}