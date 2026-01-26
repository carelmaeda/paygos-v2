"use client"

import { m } from "framer-motion"
import type { ElementType, ComponentPropsWithoutRef } from "react"
import {
  staggerItem,
  reducedMotionVariants,
  defaultViewport,
  createStaggerContainer,
  useReducedMotion,
} from "@/lib/motion"
import type { MotionListProps, MotionListItemProps } from "@/lib/motion"

type PolymorphicListProps<E extends ElementType> = MotionListProps &
  Omit<ComponentPropsWithoutRef<E>, keyof MotionListProps>

type PolymorphicItemProps<E extends ElementType> = MotionListItemProps &
  Omit<ComponentPropsWithoutRef<E>, keyof MotionListItemProps>

// Pre-create motion components at module level to avoid creating during render
const motionComponents = {
  ul: m.ul,
  ol: m.ol,
  li: m.li,
  div: m.div,
  span: m.span,
  section: m.section,
  article: m.article,
  nav: m.nav,
  aside: m.aside,
  header: m.header,
  footer: m.footer,
  main: m.main,
} as const

type MotionComponentKey = keyof typeof motionComponents

/**
 * Container component for staggered list animations
 *
 * Use with MotionListItem children for staggered reveal effects
 *
 * @example
 * ```tsx
 * <MotionList staggerDelay={0.15}>
 *   <MotionListItem>Item 1</MotionListItem>
 *   <MotionListItem>Item 2</MotionListItem>
 *   <MotionListItem>Item 3</MotionListItem>
 * </MotionList>
 * ```
 */
export function MotionList<E extends ElementType = "ul">({
  staggerDelay = 0.1,
  as,
  className,
  children,
  viewport,
  ...rest
}: PolymorphicListProps<E>) {
  const { prefersReducedMotion } = useReducedMotion()

  const containerVariant = prefersReducedMotion
    ? reducedMotionVariants
    : createStaggerContainer(staggerDelay)

  const viewportConfig = {
    ...defaultViewport,
    ...viewport,
  }

  // Get the motion component from pre-created map (not creating new components, just lookup)
  // eslint-disable-next-line react-hooks/static-components
  const Component = motionComponents[as as MotionComponentKey] || motionComponents.ul

  return (
    <Component
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
      variants={containerVariant}
      className={className}
      {...rest}
    >
      {children}
    </Component>
  )
}

/**
 * Individual item component for use within MotionList
 *
 * Automatically inherits stagger timing from parent MotionList
 */
export function MotionListItem<E extends ElementType = "li">({
  as,
  className,
  children,
  ...rest
}: PolymorphicItemProps<E>) {
  const { prefersReducedMotion } = useReducedMotion()

  const itemVariant = prefersReducedMotion ? reducedMotionVariants : staggerItem

  // Get the motion component from pre-created map (not creating new components, just lookup)
  // eslint-disable-next-line react-hooks/static-components
  const Component = motionComponents[as as MotionComponentKey] || motionComponents.li

  return (
    <Component variants={itemVariant} className={className} {...rest}>
      {children}
    </Component>
  )
}
