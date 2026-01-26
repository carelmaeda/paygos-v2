import type { Variants } from "framer-motion"
import type { ViewportConfig, CustomVariantConfig } from "./types"

/**
 * Default viewport configuration
 * once: false means animations re-trigger every time element enters viewport
 */
export const defaultViewport: ViewportConfig = {
  once: false,
  amount: 0.2,
  margin: "0px",
}

/**
 * Fade in animation - simple opacity transition
 */
export const fadeIn: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
}

/**
 * Slide up animation - moves element up while fading in
 */
export const slideUp: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
}

/**
 * Slide in from left animation
 */
export const slideInLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -30,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
}

/**
 * Slide in from right animation
 */
export const slideInRight: Variants = {
  hidden: {
    opacity: 0,
    x: 30,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
}

/**
 * Scale in animation - grows element while fading in
 */
export const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
}

/**
 * Stagger container - orchestrates staggered children animations
 */
export const staggerContainer: Variants = {
  hidden: {
    opacity: 1,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0,
    },
  },
}

/**
 * Stagger item - individual item in a staggered list
 */
export const staggerItem: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
}

/**
 * Reduced motion variants - accessibility-safe instant transitions
 * Removes transforms, keeps simple opacity fade for visibility
 */
export const reducedMotionVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.01,
    },
  },
}

/**
 * Map of all standard variants by name
 */
export const variants = {
  fadeIn,
  slideUp,
  slideInLeft,
  slideInRight,
  scaleIn,
  staggerContainer,
} as const

/**
 * Factory function to create custom variants with timing overrides
 */
export function createCustomVariant(
  baseVariant: Variants,
  config?: CustomVariantConfig
): Variants {
  const hidden = {
    ...(baseVariant.hidden as object),
    ...(config?.hidden as object),
  }

  const baseVisible = baseVariant.visible as {
    transition?: object
    [key: string]: unknown
  }
  const configVisible = config?.visible as {
    transition?: object
    [key: string]: unknown
  }

  const visible = {
    ...baseVisible,
    ...configVisible,
    transition: {
      ...(baseVisible?.transition || {}),
      ...(configVisible?.transition || {}),
      ...(config?.transition || {}),
    },
  }

  return { hidden, visible }
}

/**
 * Helper to apply delay to a variant
 */
export function withDelay(variant: Variants, delay: number): Variants {
  return createCustomVariant(variant, {
    visible: {
      transition: { delay },
    },
  })
}

/**
 * Helper to apply duration to a variant
 */
export function withDuration(variant: Variants, duration: number): Variants {
  return createCustomVariant(variant, {
    visible: {
      transition: { duration },
    },
  })
}

/**
 * Helper to create a stagger container with custom timing
 */
export function createStaggerContainer(
  staggerDelay: number = 0.1,
  delayChildren: number = 0
): Variants {
  return {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren,
      },
    },
  }
}
