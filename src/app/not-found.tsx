import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, Search } from "lucide-react"

export default function NotFound() {
  return (
    <main
      id="main-content"
      className="flex min-h-[60vh] flex-col items-center justify-center px-4"
    >
      <div className="text-center">
        <p className="mb-2 text-6xl font-bold text-teal-600">404</p>
        <h1 className="mb-2 text-2xl font-bold text-slate-900">
          Page Not Found
        </h1>
        <p className="mb-8 max-w-md text-slate-600">
          Sorry, we couldn&apos;t find the page you&apos;re looking for. It may
          have been moved or doesn&apos;t exist.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button variant="default" asChild className="gap-2">
            <Link href="/">
              <Home className="h-4 w-4" />
              Go home
            </Link>
          </Button>
          <Button variant="outline" asChild className="gap-2">
            <Link href="/contact">
              <Search className="h-4 w-4" />
              Contact us
            </Link>
          </Button>
        </div>
      </div>
    </main>
  )
}
