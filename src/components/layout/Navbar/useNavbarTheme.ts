"use client"

import { useState, useLayoutEffect } from "react"
import { usePathname } from "next/navigation"

export type NavbarTheme = "light" | "dark"

const NAVBAR_HEIGHT = 80

function calculateCurrentTheme(): NavbarTheme {
  if (typeof window === "undefined") return "dark"

  const sections = document.querySelectorAll<HTMLElement>("[data-navbar-theme]")

  for (const section of sections) {
    const rect = section.getBoundingClientRect()
    // Check if section is at the navbar position
    if (rect.top <= NAVBAR_HEIGHT && rect.bottom > NAVBAR_HEIGHT) {
      return (section.getAttribute("data-navbar-theme") as NavbarTheme) || "dark"
    }
  }
  return "dark"
}

export function useNavbarTheme(): NavbarTheme {
  const [theme, setTheme] = useState<NavbarTheme>("dark")
  const pathname = usePathname()

  useLayoutEffect(() => {
    // Calculate initial theme synchronously before paint
    setTheme(calculateCurrentTheme())

    // Set up observer for scroll/navigation changes
    const sections = document.querySelectorAll<HTMLElement>("[data-navbar-theme]")
    if (sections.length === 0) return

    const observerOptions: IntersectionObserverInit = {
      rootMargin: "-80px 0px -80% 0px",
      threshold: 0
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionTheme = entry.target.getAttribute("data-navbar-theme") as NavbarTheme
          if (sectionTheme) {
            setTheme(sectionTheme)
          }
        }
      })
    }, observerOptions)

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [pathname])

  return theme
}
