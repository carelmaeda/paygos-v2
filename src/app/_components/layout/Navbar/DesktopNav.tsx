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
} from "@/app/_components/ui/navigation-menu"
import { BookCallButton } from "@/app/_components/sections/cta/BookCallButton"
import { SOLUTIONS } from "./SolutionsMenu"

// ============================================
// COMPONENT
// ============================================

/**
 * DesktopNav Component
 * Desktop navigation menu with Solutions dropdown and top-level links
 * Hidden on mobile (md:flex)
 */
export function DesktopNav() {
  const [value, setValue] = useState("")

  return (
    <>
      {/* Desktop Navigation Menu */}
      <nav className="hidden items-center md:flex">
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
        <BookCallButton />
      </div>
    </>
  )
}
