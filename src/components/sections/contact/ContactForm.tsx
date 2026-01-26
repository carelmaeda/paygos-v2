"use client"

import { useRef, useState } from "react"
import emailjs from "@emailjs/browser"
import { toast } from "sonner"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type FormStatus = "idle" | "sending"

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null)
  const [status, setStatus] = useState<FormStatus>("idle")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!formRef.current) return

    setStatus("sending")

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_CONTACT!,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      setStatus("idle")
      formRef.current.reset()
      toast.success(
        <div>
          <div className="font-semibold">Thanks for reaching out!</div>
          <div className="text-sm text-gray-600">
            Our sales team will follow up shortly to explore how we can support
            your goals.
          </div>
        </div>
      )
    } catch (error) {
      setStatus("idle")

      let errorMessage = "Please try again later."
      if (error instanceof Error) {
        errorMessage = error.message
      } else if (typeof error === "object" && error !== null) {
        const err = error as Record<string, unknown>
        if (err.text) {
          errorMessage = String(err.text)
        } else if (err.status) {
          errorMessage = `Status ${err.status}: ${err.text || "Request failed"}`
        }
      }
      toast.error(`Something went wrong: ${errorMessage}`)
    }
  }

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="mx-auto max-w-lg space-y-6 p-4"
    >
      <div className="space-y-2">
        <Label htmlFor="user_name">Name</Label>
        <Input
          id="user_name"
          name="user_name"
          type="text"
          placeholder="Your name"
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="user_email">Email</Label>
        <Input
          id="user_email"
          name="user_email"
          type="email"
          placeholder="your@email.com"
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <textarea
          id="message"
          name="message"
          placeholder="How can we help you?"
          required
          rows={5}
          className={cn(
            "placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input w-full min-w-0 rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
            "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
            "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
            "resize-none"
          )}
        />
      </div>

      <Button
        variant="default"
        type="submit"
        size="lg"
        className="w-full!"
        disabled={status === "sending"}
      >
        {status === "sending" ? "Sending..." : "Send Message"}
      </Button>
    </form>
  )
}
