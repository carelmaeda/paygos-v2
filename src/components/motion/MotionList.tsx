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

  const Component = as ? m(as as keyof typeof m) : m.ul

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

  const Component = as ? m(as as keyof typeof m) : m.li

  return (
    <Component variants={itemVariant} className={className} {...rest}>
      {children}
    </Component>
  )
}
