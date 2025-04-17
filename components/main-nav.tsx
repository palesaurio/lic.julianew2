"use client"

import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navItems = [
  {
    name: "Inicio",
    href: "#inicio",
  },
  {
    name: "Galerías",
    href: "#galerias",
  },
  {
    name: "Carrera Profesional",
    href: "#carrera-profesional",
  },
  {
    name: "Propuestas",
    href: "#propuestas",
  },
  {
    name: "Contacto",
    href: "#contacto",
  },
]

export function MainNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)

  return (
    <>
      <nav className="flex items-center space-x-1">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "text-sm font-medium transition-colors text-white hover:text-pink-100 px-2 py-1 rounded-md hover:bg-pink-600/50",
            )}
          >
            {item.name}
          </Link>
        ))}
      </nav>
      <Button
        variant="ghost"
        className="md:hidden text-white hover:bg-pink-600/50"
        size="icon"
        onClick={() => setMobileMenuOpen(true)}
      >
        <Menu className="h-5 w-5" />
        <span className="sr-only">Open mobile menu</span>
      </Button>
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-pink-500 md:hidden">
          <div className="flex h-16 items-center justify-between px-4">
            <Link href="/" className="font-bold text-white text-xl">
              Lic. Julia Villagómez
            </Link>
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-pink-600/50"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X className="h-5 w-5" />
              <span className="sr-only">Close mobile menu</span>
            </Button>
          </div>
          <nav className="px-4 py-6">
            <ul className="space-y-4">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block text-base font-medium text-white hover:text-pink-100 px-3 py-2 rounded-md hover:bg-pink-600/50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </>
  )
}
