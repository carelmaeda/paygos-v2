"use client"

import { useState, useEffect } from "react"

const QUERY = "(prefers-reduced-motion: reduce)"

/**
 * Hook to detect user's reduced motion preference
 * Handles SSR with safe defaults (assumes motion is OK on server)
 *
 * @returns Object with prefersReducedMotion boolean and shouldAnimate convenience boolean
 */
export function useReducedMotion() {
  // Default to false on server (assume motion is OK)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia(QUERY)

    // Set initial value
    setPrefersReducedMotion(mediaQuery.matches)

    // Listen for changes
    const handleChange = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches)
    }

    mediaQuery.addEventListener("change", handleChange)

    return () => {
      mediaQuery.removeEventListener("change", handleChange)
    }
  }, [])

  return {
    /** True if user prefers reduced motion */
    prefersReducedMotion,
    /** Convenience inverse - true if animations should play */
    shouldAnimate: !prefersReducedMotion,
  }
}
