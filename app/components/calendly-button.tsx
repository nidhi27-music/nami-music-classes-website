"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Calendar } from "lucide-react"
import config from "@/app/config.yaml"

interface CalendlyButtonProps {
  text: string
  large?: boolean
  className?: string
}

export function InlineCalendlyButton({ text, large, className = "" }: CalendlyButtonProps) {
  useEffect(() => {
    // Load Calendly script
    const script = document.createElement("script")
    script.src = "https://assets.calendly.com/assets/external/widget.js"
    script.async = true
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  const openCalendly = () => {
    // @ts-ignore
    if (window.Calendly) {
      // @ts-ignore
      window.Calendly.initPopupWidget({
        url: `https://calendly.com/${config.contact.calendly}/30min`,
      })
    }
  }

  return (
    <Button
      onClick={openCalendly}
      size={large ? "lg" : "default"}
      className={`bg-orange-700 hover:bg-orange-800 text-white ${className}`}
    >
      <Calendar className="mr-2 h-4 w-4" />
      {text}
    </Button>
  )
}
