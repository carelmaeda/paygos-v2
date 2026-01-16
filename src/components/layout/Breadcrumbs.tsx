"use client"

import { Fragment } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

// Map of path segments to readable labels
const segmentLabels: Record<string, string> = {
  about: "About Us",
  analytics: "Analytics",
  customers: "Customers",
  fsa: "Field Sales Automation",
  roi: "ROI Calculator",
  "sales-acceleration": "Sales Acceleration",
  // Customer story pages
  "finance-automation": "Finance Automation",
  "food-beverage-growth": "Food & Beverage Growth",
  "healthcare-compliance": "Healthcare Compliance",
  "manufacturing-efficiency": "Manufacturing Efficiency",
  "retail-time-saved": "Retail Time Saved",
  "technology-scale": "Technology Scale",
  // Sales acceleration sub-pages
  marketing: "Marketing",
  ordering: "Ordering",
  payments: "Payments",
  rebates: "Rebates",
  returns: "Returns",
  training: "Training",
}

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
    }
  })

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
          {breadcrumbItems.map((item) =>
            item.isLast ? (
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
          )}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  )
}
