"use client"

import { useState, useEffect } from "react"
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

const solutions = [
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
]

export function Navbar() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <header className="sticky top-0 z-50 w-full bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <Link href="/">
          <Image
            src="https://cdn.brandfetch.io/iduoAS1dpZ/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B"
            alt="Brand Logo"
            width={150}
            height={50}
            priority
          />
        </Link>

        {mounted && (
          <>
            <nav className="hidden items-center gap-1 md:flex">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid w-150 max-w-[90vw] gap-3 p-4 md:grid-cols-2">
                        {solutions.map((item) => {
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

              <Link href="/clients" className={navigationMenuTriggerStyle()}>
                Clients
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

            <div className="hidden md:block">
              <BookCallButton />
            </div>

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
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="solutions" className="border-0">
                      <AccordionTrigger className="py-2 text-sm font-semibold hover:no-underline">
                        Solutions
                      </AccordionTrigger>
                      <AccordionContent className="flex flex-col gap-2 pt-1 pl-4">
                        {solutions.map((item) => {
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
                    <Link href="/about" className={navigationMenuTriggerStyle()}>
                      About Us
                    </Link>
                  </SheetClose>

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
