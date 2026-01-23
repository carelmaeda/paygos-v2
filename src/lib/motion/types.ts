import type { Variants, TargetAndTransition, Transition } from "framer-motion"
import type { ElementType, ReactNode } from "react"

/**
 * Union type of available motion variant names
 */
export type MotionVariantName =
  | "fadeIn"
  | "slideUp"
  | "slideInLeft"
  | "scaleIn"
  | "staggerContainer"

/**
 * Viewport trigger configuration
 */
export interface ViewportConfig {
  /** Amount of element that must be visible (0-1 or px value) */
  amount?: number | "some" | "all"
  /** Only animate once (false = re-trigger on each viewport entry) */
  once?: boolean
  /** Margin around viewport for trigger detection */
  margin?: string
}

/**
 * Props for the MotionSection wrapper component
 */
export interface MotionSectionProps {
  /** The animation variant to use */
  variant?: MotionVariantName
  /** Custom variant to override standard variants */
  customVariant?: Variants
  /** Delay before animation starts (seconds) */
  delay?: number
  /** Animation duration (seconds) */
  duration?: number
  /** Element type to render */
  as?: ElementType
  /** Additional CSS classes */
  className?: string
  /** Child content */
  children: ReactNode
  /** Override viewport configuration */
  viewport?: ViewportConfig
}

/**
 * Props for the MotionList container component
 */
export interface MotionListProps {
  /** Delay between each child animation (seconds) */
  staggerDelay?: number
  /** Element type to render */
  as?: ElementType
  /** Additional CSS classes */
  className?: string
  /** Child content (MotionListItem components) */
  children: ReactNode
  /** Override viewport configuration */
  viewport?: ViewportConfig
}

/**
 * Props for individual MotionListItem components
 */
export interface MotionListItemProps {
  /** Element type to render */
  as?: ElementType
  /** Additional CSS classes */
  className?: string
  /** Child content */
  children: ReactNode
}

/**
 * Configuration for creating custom variants
 */
export interface CustomVariantConfig {
  /** Initial state (hidden) */
  hidden?: TargetAndTransition
  /** Final state (visible) */
  visible?: TargetAndTransition
  /** Transition configuration */
  transition?: Transition
}
