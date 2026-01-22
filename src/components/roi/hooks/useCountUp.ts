"use client"

import { useEffect, useRef, useState } from "react"

function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3)
}

export function useCountUp(
  targetValue: number,
  duration: number = 500
): number {
  const [currentValue, setCurrentValue] = useState(targetValue)
  const previousValueRef = useRef(targetValue)
  const animationFrameRef = useRef<number | null>(null)

  useEffect(() => {
    const startValue = previousValueRef.current
    const startTime = performance.now()

    if (startValue === targetValue) {
      return
    }

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      const easedProgress = easeOutCubic(progress)

      const newValue = startValue + (targetValue - startValue) * easedProgress
      setCurrentValue(newValue)

      if (progress < 1) {
        animationFrameRef.current = requestAnimationFrame(animate)
      } else {
        previousValueRef.current = targetValue
      }
    }

    animationFrameRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [targetValue, duration])

  return Math.round(currentValue)
}
