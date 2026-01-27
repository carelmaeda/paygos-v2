export interface SalesAccelerationTool {
  title: string
  description: string
  image: string
  href: string
}

export const SALES_ACCELERATION_TOOLS: SalesAccelerationTool[] = [
  {
    title: "Optimized Ordering",
    description: "Faster, smarter order management.",
    image: "/solutions/ordering.png",
    href: "/sales-acceleration/ordering",
  },
  {
    title: "Rebates",
    description: "Automated rebates that drive growth.",
    image: "/solutions/rebates.png",
    href: "/sales-acceleration/rebates",
  },
  {
    title: "Training Management",
    description: "Engaging, trackable sales training.",
    image: "/paygos-hero.svg",
    href: "/sales-acceleration/training",
  },
  {
    title: "Returns Management",
    description: "Simplified, compliant returns.",
    image: "/solutions/returns.png",
    href: "/sales-acceleration/returns",
  },
  {
    title: "Payments",
    description: "Secure, automated incentive payments.",
    image: "/paygos-hero.svg",
    href: "/sales-acceleration/payments",
  },
  {
    title: "Marketing",
    description: "Targeted campaigns that perform.",
    image: "/solutions/marketing.png",
    href: "/sales-acceleration/marketing",
  },
]
