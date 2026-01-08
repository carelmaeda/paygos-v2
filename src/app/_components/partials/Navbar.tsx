"use client"

import { useSyncExternalStore } from "react"
import Link from "next/link"
import {
  Menu,
  ShoppingCart,
  BarChart3,
  Receipt,
  ArrowLeftRight,
  CreditCard,
  UserCog,
} from "lucide-react"
import Image from "next/image"

import { Button } from "@/app/_components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/app/_components/ui/navigation-menu"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/app/_components/ui/sheet"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/_components/ui/accordion"
import { BookCallButton } from "./BookCallButton"

// ============================================
// STATIC CONFIGURATION
// ============================================

/** Solutions menu items with icons and descriptions */
const SOLUTIONS = [
  {
    title: "Optimized Ordering",
    href: "/solutions/ordering",
    description: "Add a subtext here.",
    icon: ShoppingCart,
  },
  {
    title: "Data & Analytics",
    href: "/solutions/data",
    description: "Add a subtext here.",
    icon: BarChart3,
  },
  {
    title: "Rebates",
    href: "/solutions/rebates",
    description: "Add a subtext here.",
    icon: Receipt,
  },
  {
    title: "Returns",
    href: "/solutions/returns",
    description: "Add a subtext here.",
    icon: ArrowLeftRight,
  },
  {
    title: "Payments",
    href: "/solutions/payments",
    description: "Add a subtext here.",
    icon: CreditCard,
  },
  {
    title: "Field Sales Automation",
    href: "/solutions/fsa",
    description: "Add a subtext here.",
    icon: UserCog,
  },
] as const

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
            {/* Desktop Navigation */}
            <nav className="hidden items-center gap-1 md:flex">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid w-150 max-w-[90vw] gap-3 p-4 md:grid-cols-2">
                        {SOLUTIONS.map((item) => {
                          const Icon = item.icon
                          return (
                            <Link
                              key={item.href}
                              href={item.href}
                              className="block rounded-md p-3 transition-colors hover:bg-teal-300"
                            >
                              <div className="flex items-start gap-3">
                                {Icon && (
                                  <Icon className="mt-0.5 h-5 w-5 shrink-0" />
                                )}
                                <div className="space-y-1">
                                  <p className="text-sm font-medium">
                                    {item.title}
                                  </p>
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

              <Link href="/customers" className={navigationMenuTriggerStyle()}>
                Customers
              </Link>
              <Link
                href="/contact"
                className={`${navigationMenuTriggerStyle()} hidden!`}
              >
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

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="md:hidden"
                  aria-label="Open navigation menu"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>

              <SheetContent side="right" className="w-72">
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <div className="mt-6 flex flex-col gap-4">
                  {/* Solutions Accordion */}
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="solutions" className="border-0">
                      <AccordionTrigger className="py-2 text-sm font-semibold hover:no-underline">
                        Solutions
                      </AccordionTrigger>
                      <AccordionContent className="flex flex-col gap-2 pt-1 pl-4">
                        {SOLUTIONS.map((item) => {
                          const Icon = item.icon
                          return (
                            <SheetClose key={item.href} asChild>
                              <Link
                                href={item.href}
                                className="flex items-center gap-2 text-sm"
                              >
                                {Icon && <Icon className="h-4 w-4" />}
                                <span>{item.title}</span>
                              </Link>
                            </SheetClose>
                          )
                        })}
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>

                  {/* Mobile Navigation Links */}
                  <SheetClose asChild>
                    <Link
                      href="/clients"
                      className={navigationMenuTriggerStyle()}
                    >
                      Clients
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link
                      href="/contact"
                      className={navigationMenuTriggerStyle()}
                    >
                      ROI Calculator
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link
                      href="/about"
                      className={navigationMenuTriggerStyle()}
                    >
                      About Us
                    </Link>
                  </SheetClose>

                  {/* Mobile CTA Button */}
                  <SheetClose asChild>
                    <BookCallButton />
                  </SheetClose>
                </div>
              </SheetContent>
            </Sheet>
          </>
        )}
      </div>
    </header>
  )
}
