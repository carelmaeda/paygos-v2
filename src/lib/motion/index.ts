// Types
export type {
  MotionVariantName,
  MotionSectionProps,
  MotionListProps,
  MotionListItemProps,
  ViewportConfig,
  CustomVariantConfig,
} from "./types"

// Variants
export {
  fadeIn,
  slideUp,
  slideInLeft,
  scaleIn,
  staggerContainer,
  staggerItem,
  reducedMotionVariants,
  variants,
  defaultViewport,
  createCustomVariant,
  withDelay,
  withDuration,
  createStaggerContainer,
} from "./variants"

// Hooks
export { useReducedMotion } from "./hooks/use-reduced-motion"
