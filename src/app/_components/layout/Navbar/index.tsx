"use client"

import { useSyncExternalStore } from "react"
import Link from "next/link"
import Image from "next/image"
import { DesktopNav } from "./DesktopNav"
import { MobileNav } from "./MobileNav"

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

  // ============================================
  // RENDER
  // ============================================
  return (
    <header className="sticky top-0 z-50 w-full bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        {/* Logo */}
        <Link href="/">
          <Image
            src="https://cdn.brandfetch.io/iduoAS1dpZ/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B"
            alt="Brand Logo"
            width={150}
            height={50}
            priority
          />
        </Link>

        {/* Navigation - Only render on client to prevent hydration mismatch */}
        {isClient && (
          <>
            <DesktopNav />
            <MobileNav />
          </>
        )}
      </div>
    </header>
  )
}
