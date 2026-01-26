"use client"

import { m } from "framer-motion"
import type { Variants } from "framer-motion"
import type { ElementType, ComponentPropsWithoutRef } from "react"
import {
  variants,
  reducedMotionVariants,
  defaultViewport,
  createCustomVariant,
  useReducedMotion,
} from "@/lib/motion"
import type { MotionSectionProps, MotionVariantName } from "@/lib/motion"

/** Default delay applied to all animations for a subtle stagger effect */
const DEFAULT_DELAY = 0.1

// Pre-create motion components at module level to avoid creating during render
const motionComponents = {
  section: m.section,
  div: m.div,
  span: m.span,
  article: m.article,
  aside: m.aside,
  header: m.header,
  footer: m.footer,
  main: m.main,
  nav: m.nav,
  ul: m.ul,
  ol: m.ol,
  li: m.li,
  p: m.p,
  h1: m.h1,
  h2: m.h2,
  h3: m.h3,
  h4: m.h4,
  h5: m.h5,
  h6: m.h6,
  blockquote: m.blockquote,
  figure: m.figure,
  figcaption: m.figcaption,
} as const

type MotionComponentKey = keyof typeof motionComponents

type PolymorphicProps<E extends ElementType> = MotionSectionProps &
  Omit<ComponentPropsWithoutRef<E>, keyof MotionSectionProps>

/**
 * Main wrapper component for viewport-triggered animations
 *
 * Features:
 * - 5 standard animation variants (fadeIn, slideUp, slideInLeft, scaleIn, staggerContainer)
 * - Polymorphic `as` prop for semantic HTML
 * - Auto-handles initial="hidden", whileInView="visible"
 * - viewport={{ once: false }} for re-triggering animations
 * - Respects reduced motion preference
 * - Supports delay, duration, and custom variant overrides
 *
 * @example
 * ```tsx
 * <MotionSection variant="slideUp">
 *   <h2>Section Title</h2>
 *   <p>Content animates up when entering viewport</p>
 * </MotionSection>
 * ```
 */
export function MotionSection<E extends ElementType = "section">({
  variant = "fadeIn",
  customVariant,
  delay,
  duration,
  as,
  className,
  children,
  viewport,
  ...rest
}: PolymorphicProps<E>) {
  const { prefersReducedMotion } = useReducedMotion()

  // Use reduced motion variants if user prefers reduced motion
  let activeVariant: Variants = prefersReducedMotion
    ? reducedMotionVariants
    : customVariant || variants[variant as MotionVariantName]

  // Apply default delay and any overrides (only if not using reduced motion)
  if (!prefersReducedMotion) {
    const finalDelay = delay ?? DEFAULT_DELAY
    const overrides: { transition: { delay: number; duration?: number } } = {
      transition: { delay: finalDelay },
    }
    if (duration !== undefined) overrides.transition.duration = duration

    activeVariant = createCustomVariant(activeVariant, {
      visible: overrides,
    })
  }

  // Merge viewport config with defaults
  const viewportConfig = {
    ...defaultViewport,
    ...viewport,
  }

  // Get the motion component from pre-created map (not creating new components, just lookup)
  // eslint-disable-next-line react-hooks/static-components
  const Component = motionComponents[as as MotionComponentKey] || motionComponents.section

  return (
    <Component
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
      variants={activeVariant}
      className={className}
      {...rest}
    >
      {children}
    </Component>
  )
}
