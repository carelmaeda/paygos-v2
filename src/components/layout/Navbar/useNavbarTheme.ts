"use client"

import { useState, useEffect } from "react"

export type NavbarTheme = "light" | "dark"

export function useNavbarTheme(): NavbarTheme {
  const [theme, setTheme] = useState<NavbarTheme>("dark") // Default to dark (hero)

  useEffect(() => {
    // Find all sections with data-navbar-theme attribute
    const sections = document.querySelectorAll<HTMLElement>("[data-navbar-theme]")

    if (sections.length === 0) return

    const observerOptions: IntersectionObserverInit = {
      rootMargin: "-80px 0px -80% 0px", // Top 80px (navbar height + offset)
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

    // Observe all sections
    sections.forEach((section) => observer.observe(section))

    // Cleanup
    return () => {
      sections.forEach((section) => observer.unobserve(section))
    }
  }, [])

  return theme
}
