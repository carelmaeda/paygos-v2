"use client"

import { Fragment } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { CheckIcon, ChevronDownIcon } from "lucide-react"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

// Map of path segments to readable labels
const segmentLabels: Record<string, string> = {
  about: "About Us",
  analytics: "Analytics",
  contact: "Contact Us",
  customers: "Customers",
  fsa: "Field Sales Automation",
  roi: "ROI Calculator",
  "sales-acceleration": "Sales Acceleration",
  // Customer story pages
  "pharma-returns": "Pharma Returns",
  "training-incentives": "Training Incentives",
  "returns-management": "Returns Management",
  "retail-efficiency": "Retail Efficiency",
  "rebate-management": "Rebate Management",
  "technology-scale": "Technology Scale",
  // Sales acceleration sub-pages
  marketing: "Marketing",
  ordering: "Ordering",
  payments: "Payments",
  rebates: "Rebates",
  returns: "Returns",
  training: "Training",
}

// Sales Acceleration sub-pages for dropdown navigation
const SALES_ACCELERATION_PAGES = [
  { label: "Ordering", href: "/sales-acceleration/ordering" },
  { label: "Marketing", href: "/sales-acceleration/marketing" },
  { label: "Payments", href: "/sales-acceleration/payments" },
  { label: "Rebates", href: "/sales-acceleration/rebates" },
  { label: "Returns", href: "/sales-acceleration/returns" },
  { label: "Training", href: "/sales-acceleration/training" },
]

function formatSegment(segment: string): string {
  // Check if we have a custom label
  if (segmentLabels[segment]) {
    return segmentLabels[segment]
  }
  // Fallback: convert kebab-case to Title Case
  return segment
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")
}

export function Breadcrumbs() {
  const pathname = usePathname()

  // Don't show breadcrumbs on the home page
  if (pathname === "/") {
    return null
  }

  // Split the pathname into segments and filter out empty strings
  const segments = pathname.split("/").filter((segment) => segment !== "")

  // Build the breadcrumb items with cumulative paths
  const breadcrumbItems = segments.map((segment, index) => {
    const href = "/" + segments.slice(0, index + 1).join("/")
    const isLast = index === segments.length - 1
    const label = formatSegment(segment)

    return {
      href,
      label,
      isLast,
      segment,
    }
  })

  // Check if we're on a sales-acceleration page (to highlight current in dropdown)
  const currentSalesAccelerationPage = pathname.startsWith("/sales-acceleration/")
    ? pathname
    : null

  return (
    <div className="breadcrumbs">
      <Breadcrumb>
        <BreadcrumbList>
          {/* Home link */}
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />

          {/* Dynamic segments */}
          {breadcrumbItems.map((item) => {
            // Check if this is the sales-acceleration segment
            const isSalesAcceleration = item.segment === "sales-acceleration"

            if (isSalesAcceleration) {
              // Render with dropdown
              return (
                <Fragment key={item.href}>
                  <BreadcrumbItem>
                    <DropdownMenu>
                      <DropdownMenuTrigger className="flex items-center gap-1 hover:text-foreground transition-colors">
                        {item.isLast ? (
                          <span className="text-foreground font-normal">
                            {item.label}
                          </span>
                        ) : (
                          <Link href={item.href}>{item.label}</Link>
                        )}
                        <ChevronDownIcon className="size-3.5" />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="start">
                        {SALES_ACCELERATION_PAGES.map((page) => (
                          <DropdownMenuItem key={page.href} asChild>
                            <Link
                              href={page.href}
                              className="flex items-center justify-between w-full"
                            >
                              {page.label}
                              {currentSalesAccelerationPage === page.href && (
                                <CheckIcon className="size-4 ml-2" />
                              )}
                            </Link>
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </BreadcrumbItem>
                  {!item.isLast && <BreadcrumbSeparator />}
                </Fragment>
              )
            }

            // Regular breadcrumb items
            return item.isLast ? (
              <BreadcrumbItem key={item.href}>
                <BreadcrumbPage>{item.label}</BreadcrumbPage>
              </BreadcrumbItem>
            ) : (
              <Fragment key={item.href}>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link href={item.href}>{item.label}</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
              </Fragment>
            )
          })}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  )
}
