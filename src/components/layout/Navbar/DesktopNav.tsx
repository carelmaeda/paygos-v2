"use client"

import { useState } from "react"
import Link from "next/link"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { SOLUTIONS } from "./SolutionsMenu"
import { Button } from "@/components/ui/button"
import type { NavbarTheme } from "./useNavbarTheme"

// ============================================
// COMPONENT
// ============================================

// ============================================
// PROPS
// ============================================

interface DesktopNavProps {
  theme: NavbarTheme
}

// ============================================
// COMPONENT
// ============================================

/**
 * DesktopNav Component
 * Desktop navigation menu with Solutions dropdown and top-level links
 * Hidden on mobile (md:flex)
 */
export function DesktopNav({ theme }: DesktopNavProps) {
  const [value, setValue] = useState("")
  const textColor = theme === "dark" ? "text-white" : "text-black"

  return (
    <>
      {/* Desktop Navigation Menu */}
      <nav className={`hidden items-center gap-2 md:flex ${textColor}`}>
        <NavigationMenu value={value} onValueChange={setValue}>
          <NavigationMenuList>
            <NavigationMenuItem value="solutions">
              <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid w-150 max-w-[90vw] grid-cols-2 gap-3 p-4">
                  {SOLUTIONS.map((item) => {
                    const Icon = item.icon
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block rounded-md p-3 transition-colors hover:bg-teal-300"
                        onClick={() => setValue("")}
                      >
                        <div className="flex items-start gap-3">
                          {Icon && <Icon className="mt-0.5 h-5 w-5 shrink-0" />}
                          <div className="space-y-1">
                            <p className="text-sm font-medium">{item.title}</p>
                            <p className="text-muted-foreground text-sm">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </Link>
                    )
                  })}
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Top-level Navigation Links */}
        <Link href="/customers" className={navigationMenuTriggerStyle()}>
          Customers
        </Link>
        <Link href="/roi" className={navigationMenuTriggerStyle()}>
          ROI Calculator
        </Link>
        <Link href="/about" className={navigationMenuTriggerStyle()}>
          About Us
        </Link>
      </nav>

      {/* Desktop CTA Button */}
      <div className="hidden md:block">
        <Button size="sm" variant="default">
          <Link href="mailto:johndoe@fakeemail.com" aria-label="Book a Call">
            Book a Call
          </Link>
        </Button>
      </div>
    </>
  )
}
