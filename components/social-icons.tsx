import Link from "next/link"
import { Facebook, Instagram, Phone, Mail, MessageCircle } from "lucide-react"
import { cn } from "@/lib/utils"

interface SocialIconsProps {
  className?: string
  size?: "sm" | "md" | "lg"
}

export function SocialIcons({ className, size = "md" }: SocialIconsProps) {
  const sizeClasses = {
    sm: "h-4 w-4",
    md: "h-5 w-5",
    lg: "h-6 w-6",
  }

  const containerClasses = {
    sm: "h-8 w-8",
    md: "h-9 w-9",
    lg: "h-10 w-10",
  }

  return (
    <div className={cn("flex items-center space-x-2", className)}>
      <Link
        href="https://www.facebook.com/profile.php?id=61575199135422"
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "flex items-center justify-center rounded-full bg-pink-100 text-pink-600 transition-colors hover:bg-pink-600 hover:text-white",
          containerClasses[size],
        )}
      >
        <Facebook className={sizeClasses[size]} />
        <span className="sr-only">Facebook</span>
      </Link>
      <Link
        href="https://www.instagram.com/juez.juliavillagomezmartinez/"
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "flex items-center justify-center rounded-full bg-pink-100 text-pink-600 transition-colors hover:bg-pink-600 hover:text-white",
          containerClasses[size],
        )}
      >
        <Instagram className={sizeClasses[size]} />
        <span className="sr-only">Instagram</span>
      </Link>
      <Link
        href="https://www.tiktok.com/@juliavillagomez"
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "flex items-center justify-center rounded-full bg-pink-100 text-pink-600 transition-colors hover:bg-pink-600 hover:text-white",
          containerClasses[size],
        )}
      >
        <svg className={sizeClasses[size]} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M19.321 5.562a5.124 5.124 0 0 1-3.414-1.267 5.124 5.124 0 0 1-1.537-3.168h-3.766v13.206c0 1.55-1.257 2.807-2.807 2.807a2.807 2.807 0 0 1-2.807-2.807 2.807 2.807 0 0 1 2.807-2.807c.193 0 .38.02.562.055V7.828a6.56 6.56 0 0 0-.562-.024 6.573 6.573 0 0 0-6.573 6.573A6.573 6.573 0 0 0 7.797 21a6.573 6.573 0 0 0 6.573-6.573V9.67a8.838 8.838 0 0 0 4.951 1.51V7.414a5.136 5.136 0 0 1-4.951-1.852h4.951z"
            fill="currentColor"
          />
        </svg>
        <span className="sr-only">TikTok</span>
      </Link>
      <Link
        href="tel:2294224577"
        className={cn(
          "flex items-center justify-center rounded-full bg-pink-100 text-pink-600 transition-colors hover:bg-pink-600 hover:text-white",
          containerClasses[size],
        )}
      >
        <Phone className={sizeClasses[size]} />
        <span className="sr-only">Teléfono</span>
      </Link>
      <Link
        href="https://wa.me/522294224577"
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "flex items-center justify-center rounded-full bg-pink-100 text-pink-600 transition-colors hover:bg-pink-600 hover:text-white",
          containerClasses[size],
        )}
      >
        <MessageCircle className={sizeClasses[size]} />
        <span className="sr-only">WhatsApp</span>
      </Link>
      <Link
        href="mailto:lic.juliavillagomez31@gmail.com"
        className={cn(
          "flex items-center justify-center rounded-full bg-pink-100 text-pink-600 transition-colors hover:bg-pink-600 hover:text-white",
          containerClasses[size],
        )}
      >
        <Mail className={sizeClasses[size]} />
        <span className="sr-only">Email</span>
      </Link>
    </div>
  )
}
