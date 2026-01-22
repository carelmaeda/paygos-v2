"use client"

import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Loader2, Mail } from "lucide-react"
import Image from "next/image"

interface LeadCaptureModalProps {
  isOpen: boolean
  onClose: () => void
  onSubmit: (email: string) => void
  isLoading: boolean
  error?: string | null
}

export function LeadCaptureModal({
  isOpen,
  onClose,
  onSubmit,
  isLoading,
  error,
}: LeadCaptureModalProps) {
  const [email, setEmail] = useState("")
  const [validationError, setValidationError] = useState<string | null>(null)

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setValidationError(null)

    if (!email.trim()) {
      setValidationError("Email is required")
      return
    }

    if (!validateEmail(email)) {
      setValidationError("Please enter a valid email address")
      return
    }

    onSubmit(email)
  }

  const handleClose = () => {
    setEmail("")
    setValidationError(null)
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && handleClose()}>
      <DialogContent
        className="flex max-h-[90vh] flex-col gap-0 overflow-hidden rounded-3xl border-none p-0 sm:max-w-md"
        onOpenAutoFocus={(e) => e.preventDefault()}
      >
        <DialogHeader className="shrink-0 space-y-0 bg-white px-8 pt-10 pb-6">
          <DialogTitle className="text-center">
            <span className="flex items-center justify-center text-2xl leading-none font-extrabold tracking-tight text-slate-900">
              Get Your Results from
              <Image
                src="/paygos/logo-full.webp"
                alt="Paygos"
                width={120}
                height={30}
                className="ml-2 inline-block h-8 w-auto"
              />
            </span>
          </DialogTitle>
          <DialogDescription className="text-md mt-2 text-center text-slate-500">
            Enter your email to receive your personalized ROI results.
          </DialogDescription>
        </DialogHeader>

        <div className="flex-1 bg-white px-8 pb-8">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <div className="relative">
                <Mail className="absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2 text-slate-400" />
                <Input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value)
                    setValidationError(null)
                  }}
                  className="h-12 rounded-xl pl-10 text-base"
                  disabled={isLoading}
                />
              </div>
              {(validationError || error) && (
                <p className="text-sm text-red-500">
                  {validationError || error}
                </p>
              )}
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Sending...
                </>
              ) : (
                "Send Results"
              )}
            </Button>

            <p className="text-center text-xs text-slate-400">
              We respect your privacy and won&apos;t spam you.
            </p>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  )
}
