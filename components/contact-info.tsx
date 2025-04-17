"use client"

import { Phone, Mail } from "lucide-react"
import { SocialIcons } from "@/components/social-icons"
import { useState } from "react"
import { Button } from "@/components/ui/button"

export function ContactInfo() {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="hidden md:flex items-center gap-2">
      <a href="tel:2294224577" className="text-white hover:text-pink-100 flex items-center gap-1 text-sm">
        <Phone className="h-4 w-4" />
        <span>229 422 4577</span>
      </a>
      <span className="text-white/50">|</span>
      <a
        href="mailto:lic.juliavillagomez31@gmail.com"
        className="text-white hover:text-pink-100 flex items-center gap-1 text-sm"
      >
        <Mail className="h-4 w-4" />
        <span className="hidden lg:inline">lic.juliavillagomez31@gmail.com</span>
        <span className="lg:hidden">Email</span>
      </a>
      <div className="relative">
        <Button
          onClick={() => setIsExpanded(!isExpanded)}
          variant="ghost"
          size="sm"
          className="text-white hover:bg-pink-600/50 px-2 py-1 h-auto"
        >
          <span className="text-sm">Redes</span>
        </Button>

        {isExpanded && (
          <div className="absolute top-full right-0 mt-2 p-3 bg-white rounded-md shadow-lg z-50">
            <SocialIcons />
          </div>
        )}
      </div>
    </div>
  )
}
