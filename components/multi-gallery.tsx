"use client"

import { useState } from "react"
import Image from "next/image"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, X } from "lucide-react"

// Sample gallery items - these would be loaded from the file system in a real app
const galleryData = {
  eventos: [
    { id: 1, src: "/placeholder.svg?height=400&width=600", alt: "Evento 1", title: "Reunión comunitaria" },
    { id: 2, src: "/placeholder.svg?height=400&width=600", alt: "Evento 2", title: "Foro ciudadano" },
    { id: 3, src: "/placeholder.svg?height=400&width=600", alt: "Evento 3", title: "Encuentro vecinal" },
    { id: 4, src: "/placeholder.svg?height=400&width=600", alt: "Evento 4", title: "Asamblea informativa" },
    { id: 5, src: "/placeholder.svg?height=400&width=600", alt: "Evento 5", title: "Diálogo con ciudadanos" },
    { id: 6, src: "/placeholder.svg?height=400&width=600", alt: "Evento 6", title: "Jornada de atención" },
  ],
  propuestas: [
    { id: 1, src: "/placeholder.svg?height=400&width=600", alt: "Propuesta 1", title: "Desarrollo social" },
    { id: 2, src: "/placeholder.svg?height=400&width=600", alt: "Propuesta 2", title: "Infraestructura" },
    { id: 3, src: "/placeholder.svg?height=400&width=600", alt: "Propuesta 3", title: "Educación" },
    { id: 4, src: "/placeholder.svg?height=400&width=600", alt: "Propuesta 4", title: "Salud" },
  ],
  recorridos: [
    { id: 1, src: "/placeholder.svg?height=400&width=600", alt: "Recorrido 1", title: "Visita a comunidad" },
    { id: 2, src: "/placeholder.svg?height=400&width=600", alt: "Recorrido 2", title: "Recorrido por colonias" },
    { id: 3, src: "/placeholder.svg?height=400&width=600", alt: "Recorrido 3", title: "Visita a escuelas" },
  ],
}

interface MultiGalleryProps {
  galleryId: keyof typeof galleryData
}

export function MultiGallery({ galleryId }: MultiGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const images = galleryData[galleryId] || []

  const openLightbox = (index: number) => {
    setSelectedImage(index)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const goToPrevious = () => {
    if (selectedImage === null) return
    setSelectedImage((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const goToNext = () => {
    if (selectedImage === null) return
    setSelectedImage((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div
            key={image.id}
            className="relative aspect-square overflow-hidden rounded-md cursor-pointer group"
            onClick={() => openLightbox(index)}
          >
            <Image
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 p-3 text-white">
                <h4 className="text-sm font-medium">{image.title}</h4>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Dialog open={selectedImage !== null} onOpenChange={closeLightbox}>
        <DialogContent className="max-w-4xl p-0 bg-black/90 border-none">
          <div className="relative h-[80vh] w-full">
            {selectedImage !== null && (
              <Image
                src={images[selectedImage].src || "/placeholder.svg"}
                alt={images[selectedImage].alt}
                fill
                className="object-contain"
              />
            )}
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-2 right-2 text-white hover:bg-black/50 z-10"
              onClick={closeLightbox}
            >
              <X className="h-6 w-6" />
              <span className="sr-only">Cerrar</span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 text-white hover:bg-black/50 z-10"
              onClick={goToPrevious}
            >
              <ChevronLeft className="h-8 w-8" />
              <span className="sr-only">Anterior</span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 text-white hover:bg-black/50 z-10"
              onClick={goToNext}
            >
              <ChevronRight className="h-8 w-8" />
              <span className="sr-only">Siguiente</span>
            </Button>
            {selectedImage !== null && (
              <div className="absolute bottom-4 left-0 right-0 text-center text-white">
                <h3 className="text-xl font-bold">{images[selectedImage].title}</h3>
                <p className="text-sm text-gray-300">
                  {selectedImage + 1} de {images.length}
                </p>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
