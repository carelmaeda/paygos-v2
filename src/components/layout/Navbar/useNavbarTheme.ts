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
      return (
        (section.getAttribute("data-navbar-theme") as NavbarTheme) || "dark"
      )
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
    const observedElements = new Set<Element>()

    const intersectionObserverOptions: IntersectionObserverInit = {
      rootMargin: "-80px 0px -80% 0px",
      threshold: 0,
    }

    const intersectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionTheme = entry.target.getAttribute(
            "data-navbar-theme"
          ) as NavbarTheme
          if (sectionTheme && sectionTheme !== themeRef.current) {
            themeRef.current = sectionTheme
            onStoreChange()
          }
        }
      })
    }, intersectionObserverOptions)

    // Function to observe all theme sections and update theme
    const observeSections = () => {
      const sections = document.querySelectorAll<HTMLElement>(
        "[data-navbar-theme]"
      )

      sections.forEach((section) => {
        if (!observedElements.has(section)) {
          observedElements.add(section)
          intersectionObserver.observe(section)
        }
      })

      // Recalculate current theme
      const newTheme = calculateCurrentTheme()
      if (newTheme !== themeRef.current) {
        themeRef.current = newTheme
        onStoreChange()
      }
    }

    // MutationObserver to detect when new theme sections are added to the DOM
    // This handles Next.js client-side navigation where new page content is injected
    const mutationObserver = new MutationObserver((mutations) => {
      let shouldReobserve = false

      for (const mutation of mutations) {
        if (mutation.type === "childList" && mutation.addedNodes.length > 0) {
          for (const node of mutation.addedNodes) {
            if (node instanceof HTMLElement) {
              // Check if the added node or its descendants have data-navbar-theme
              if (
                node.hasAttribute("data-navbar-theme") ||
                node.querySelector("[data-navbar-theme]")
              ) {
                shouldReobserve = true
                break
              }
            }
          }
        }
        if (shouldReobserve) break
      }

      if (shouldReobserve) {
        // Use requestAnimationFrame to ensure layout is complete
        requestAnimationFrame(() => {
          observeSections()
        })
      }
    })

    // Start observing DOM changes
    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    })

    // Initial observation with multiple RAF frames to ensure DOM is ready
    // after Next.js client-side navigation completes rendering
    const scheduleInitialObservation = () => {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          observeSections()
        })
      })
    }

    scheduleInitialObservation()

    return () => {
      intersectionObserver.disconnect()
      mutationObserver.disconnect()
      observedElements.clear()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  const getSnapshot = useCallback(() => themeRef.current, [])

  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)

  return theme
}
