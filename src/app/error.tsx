"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AlertTriangle, RefreshCw, Home } from "lucide-react"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    if (process.env.NODE_ENV === "development") {
      console.error("Application error:", error)
    }
  }, [error])

  return (
    <main
      id="main-content"
      className="flex min-h-[60vh] flex-col items-center justify-center px-4"
    >
      <div className="text-center">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-red-100">
          <AlertTriangle className="h-8 w-8 text-red-600" />
        </div>
        <h1 className="mb-2 text-2xl font-bold text-slate-900">
          Something went wrong
        </h1>
        <p className="mb-8 max-w-md text-slate-600">
          We apologize for the inconvenience. Please try again or return to the
          homepage.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button onClick={reset} variant="default" className="gap-2">
            <RefreshCw className="h-4 w-4" />
            Try again
          </Button>
          <Button variant="outline" asChild className="gap-2">
            <Link href="/">
              <Home className="h-4 w-4" />
              Go home
            </Link>
          </Button>
        </div>
      </div>
    </main>
  )
}
