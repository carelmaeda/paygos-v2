"use client"

import { useSyncExternalStore, useCallback, useRef } from "react"
import { usePathname } from "next/navigation"

export type NavbarTheme = "light" | "dark"

const NAVBAR_HEIGHT = 80

function calculateCurrentTheme(): NavbarTheme {
  if (typeof window === "undefined") return "dark"

  const sections = document.querySelectorAll<HTMLElement>("[data-navbar-theme]")

  for (const section of sections) {
    const rect = section.getBoundingClientRect()
    if (rect.top <= NAVBAR_HEIGHT && rect.bottom > NAVBAR_HEIGHT) {
      return (section.getAttribute("data-navbar-theme") as NavbarTheme) || "dark"
    }
  }
  return "dark"
}

function getServerSnapshot(): NavbarTheme {
  return "dark"
}

export function useNavbarTheme(): NavbarTheme {
  const pathname = usePathname()
  const themeRef = useRef<NavbarTheme>("dark")

  const subscribe = useCallback((onStoreChange: () => void) => {
    // Calculate initial theme
    themeRef.current = calculateCurrentTheme()

    const observerOptions: IntersectionObserverInit = {
      rootMargin: "-80px 0px -80% 0px",
      threshold: 0
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionTheme = entry.target.getAttribute("data-navbar-theme") as NavbarTheme
          if (sectionTheme && sectionTheme !== themeRef.current) {
            themeRef.current = sectionTheme
            onStoreChange()
          }
        }
      })
    }, observerOptions)

    // Observe sections after a microtask to ensure DOM is ready after navigation
    queueMicrotask(() => {
      const sections = document.querySelectorAll<HTMLElement>("[data-navbar-theme]")
      sections.forEach((section) => observer.observe(section))

      // Recalculate after observing in case sections changed
      const newTheme = calculateCurrentTheme()
      if (newTheme !== themeRef.current) {
        themeRef.current = newTheme
        onStoreChange()
      }
    })

    return () => observer.disconnect()
  }, [pathname]) // Re-subscribe when pathname changes

  const getSnapshot = useCallback(() => themeRef.current, [])

  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)

  return theme
}
