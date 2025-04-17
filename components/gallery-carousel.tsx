"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface GalleryItem {
  id: number
  src: string
  alt: string
  title: string
  description?: string
}

interface GalleryCarouselProps {
  items: GalleryItem[]
  autoplay?: boolean
  interval?: number
}

export function GalleryCarousel({ items, autoplay = true, interval = 5000 }: GalleryCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1))
  }

  useEffect(() => {
    if (!autoplay) return

    const intervalId = setInterval(() => {
      nextSlide()
    }, interval)

    return () => clearInterval(intervalId)
  }, [autoplay, interval])

  if (items.length === 0) {
    return (
      <div className="relative h-[300px] w-full bg-gray-100 rounded-lg flex items-center justify-center">
        <p className="text-gray-500">No hay imágenes disponibles</p>
      </div>
    )
  }

  return (
    <div className="relative overflow-hidden rounded-lg">
      <div className="relative h-[300px] w-full">
        {items.map((item, index) => (
          <div
            key={item.id}
            className={`absolute inset-0 transition-opacity duration-500 ${
              index === currentIndex ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <Image
              src={item.src || "/placeholder.svg"}
              alt={item.alt}
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 p-4 text-white">
              <h3 className="text-lg font-bold">{item.title}</h3>
              {item.description && <p className="mt-1 text-sm text-gray-200">{item.description}</p>}
            </div>
          </div>
        ))}
      </div>
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 text-white hover:bg-black/50"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-5 w-5" />
        <span className="sr-only">Anterior</span>
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 text-white hover:bg-black/50"
        onClick={nextSlide}
      >
        <ChevronRight className="h-5 w-5" />
        <span className="sr-only">Siguiente</span>
      </Button>
      <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 space-x-1">
        {items.map((_, index) => (
          <button
            key={index}
            className={`h-1.5 w-1.5 rounded-full ${index === currentIndex ? "bg-white" : "bg-white/50"}`}
            onClick={() => setCurrentIndex(index)}
          >
            <span className="sr-only">Slide {index + 1}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
