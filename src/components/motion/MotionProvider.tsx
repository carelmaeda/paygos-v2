"use client"

import { LazyMotion, domAnimation } from "framer-motion"
import type { ReactNode } from "react"

interface MotionProviderProps {
  children: ReactNode
}

/**
 * LazyMotion wrapper using domAnimation features
 * This reduces bundle size by ~40% compared to full framer-motion (~16KB vs ~25KB)
 *
 * Wrap your app content with this provider to enable motion components
 */
export function MotionProvider({ children }: MotionProviderProps) {
  return (
    <LazyMotion features={domAnimation} strict>
      {children}
    </LazyMotion>
  )
}
