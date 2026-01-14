"use client"

import { useSyncExternalStore } from "react"
import Link from "next/link"
import Image from "next/image"
import { DesktopNav } from "./DesktopNav"
import { MobileNav } from "./MobileNav"
import { useNavbarTheme } from "./useNavbarTheme"

// ============================================
// CLIENT-SIDE DETECTION HOOK
// ============================================

/**
 * Custom hook to detect if code is running on client-side
 * Uses useSyncExternalStore for optimal performance and no hydration warnings
 * Recommended pattern by React team for client-only rendering
 */
function useIsClient() {
  return useSyncExternalStore(
    () => () => {}, // subscribe - no-op function (client state never changes)
    () => true, // getSnapshot - always true on client
    () => false // getServerSnapshot - always false on server
  )
}

// ============================================
// COMPONENT
// ============================================

/**
 * Navbar Component
 * Main navigation header with logo and responsive navigation
 * Splits between DesktopNav and MobileNav for better maintainability
 */
export function Navbar() {
  // ============================================
  // CLIENT-SIDE DETECTION
  // ============================================
  // Prevent hydration mismatch with Radix UI components
  // Only render interactive components after client-side hydration
  const isClient = useIsClient()
  const theme = useNavbarTheme()

  // Determine text color and logo based on theme
  const isDark = theme === "dark"
  const textColor = isDark ? "text-white" : "text-black"
  const logoSrc = isDark
    ? "/paygos/logo-full-white.webp"
    : "/paygos/logo-full-black.webp"

  // ============================================
  // RENDER
  // ============================================
  return (
    <header className="fixed top-0 z-50 w-full bg-white/20 shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-md">
      <div
        className={`mx-auto flex h-14 max-w-7xl items-center justify-between px-6 transition-colors duration-300 ${textColor}`}
      >
        {/* Logo - swaps based on theme */}
        <Link href="/">
          <Image
            src={logoSrc}
            alt="Brand Logo"
            width={130}
            height={50}
            priority
            className="hover:opacity-70"
          />
        </Link>

        {/* Navigation - passes theme prop */}
        {isClient && (
          <>
            <DesktopNav theme={theme} />
            <MobileNav theme={theme} />
          </>
        )}
      </div>
    </header>
  )
}
