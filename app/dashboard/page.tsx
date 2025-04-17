"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Plus, Trash2, Save, FileImage } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

// Mock data for galleries
const initialGalleries = [
  {
    id: "eventos",
    name: "Eventos Comunitarios",
    images: [
      {
        id: 1,
        url: "/placeholder.svg?height=400&width=600",
        title: "Evento 1",
        description: "Reunión comunitaria",
      },
      {
        id: 2,
        url: "/placeholder.svg?height=400&width=600",
        title: "Evento 2",
        description: "Foro ciudadano",
      },
      {
        id: 3,
        url: "/placeholder.svg?height=400&width=600",
        title: "Evento 3",
        description: "Encuentro vecinal",
      },
      {
        id: 4,
        url: "/placeholder.svg?height=400&width=600",
        title: "Evento 4",
        description: "Asamblea informativa",
      },
    ],
  },
  {
    id: "propuestas",
    name: "Propuestas en Acción",
    images: [
      {
        id: 5,
        url: "/placeholder.svg?height=400&width=600",
        title: "Propuesta 1",
        description: "Desarrollo social",
      },
      {
        id: 6,
        url: "/placeholder.svg?height=400&width=600",
        title: "Propuesta 2",
        description: "Infraestructura",
      },
      {
        id: 7,
        url: "/placeholder.svg?height=400&width=600",
        title: "Propuesta 3",
        description: "Educación",
      },
      {
        id: 8,
        url: "/placeholder.svg?height=400&width=600",
        title: "Propuesta 4",
        description: "Salud",
      },
    ],
  },
  {
    id: "recorridos",
    name: "Recorridos",
    images: [
      {
        id: 9,
        url: "/placeholder.svg?height=400&width=600",
        title: "Recorrido 1",
        description: "Visita a comunidad",
      },
      {
        id: 10,
        url: "/placeholder.svg?height=400&width=600",
        title: "Recorrido 2",
        description: "Recorrido por colonias",
      },
      {
        id: 11,
        url: "/placeholder.svg?height=400&width=600",
        title: "Recorrido 3",
        description: "Visita a escuelas",
      },
    ],
  },
]

export default function DashboardPage() {
  const [galleries, setGalleries] = useState(initialGalleries)
  const [selectedGallery, setSelectedGallery] = useState(initialGalleries[0].id)
  const [newImage, setNewImage] = useState({
    file: null as File | null,
    preview: "",
    title: "",
    description: "",
  })
  const [message, setMessage] = useState({ type: "", text: "" })
  const fileInputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()

  // In a real app, you would check authentication status here
  useEffect(() => {
    // This is a simple check - in a real app you would use a proper auth system
    const isAuthenticated = true // Mock authentication
    if (!isAuthenticated) {
      router.push("/login")
    }
  }, [router])

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    // Check if file is an image
    if (!file.type.startsWith("image/")) {
      setMessage({ type: "error", text: "Por favor, selecciona un archivo de imagen válido." })
      return
    }

    // Create a preview URL
    const previewUrl = URL.createObjectURL(file)

    setNewImage({
      ...newImage,
      file,
      preview: previewUrl,
    })

    setMessage({ type: "", text: "" })
  }

  const handleAddImage = () => {
    if (!newImage.file || !newImage.title) {
      setMessage({ type: "error", text: "Por favor, selecciona una imagen y agrega un título." })
      return
    }

    // In a real app, you would upload the file to a server or save it to the file system
    // Here we're just simulating the process

    // Create a simulated file path that would be created in a real app
    const fileName = `fotos/${selectedGallery}/${Date.now()}_${newImage.file.name.replace(/\s+/g, "-")}`

    setGalleries(
      galleries.map((gallery) => {
        if (gallery.id === selectedGallery) {
          return {
            ...gallery,
            images: [
              ...gallery.images,
              {
                id: Date.now(), // Simple ID generation
                url: newImage.preview, // In a real app, this would be the server path
                title: newImage.title,
                description: newImage.description,
                fileName: fileName, // Store the file path for reference
              },
            ],
          }
        }
        return gallery
      }),
    )

    // Show success message
    setMessage({
      type: "success",
      text: `Imagen "${newImage.title}" agregada a la galería "${galleries.find((g) => g.id === selectedGallery)?.name}". Archivo guardado como: ${fileName}`,
    })

    // Reset form
    setNewImage({
      file: null,
      preview: "",
      title: "",
      description: "",
    })

    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  const handleDeleteImage = (imageId: number) => {
    // In a real app, you would also delete the file from the server or file system
    setGalleries(
      galleries.map((gallery) => {
        if (gallery.id === selectedGallery) {
          return {
            ...gallery,
            images: gallery.images.filter((img) => img.id !== imageId),
          }
        }
        return gallery
      }),
    )

    setMessage({ type: "success", text: "Imagen eliminada correctamente." })
  }

  const handleLogout = () => {
    // In a real app, you would implement proper logout logic
    router.push("/")
  }

  return (
    <div className="min-h-screen bg-pink-50">
      <header className="bg-pink-500 border-b border-pink-400 shadow-sm">
        <div className="container flex h-16 items-center justify-between">
          <h1 className="text-xl font-bold text-white">Panel de Administración</h1>
          <div className="flex items-center gap-4">
            <Link href="/" target="_blank">
              <Button
                variant="outline"
                size="sm"
                className="bg-white text-pink-500 border-white hover:bg-pink-50 hover:text-pink-600"
              >
                Ver sitio
              </Button>
            </Link>
            <Button variant="ghost" size="sm" className="text-white hover:bg-pink-600" onClick={handleLogout}>
              Cerrar sesión
            </Button>
          </div>
        </div>
      </header>
      <main className="container py-8">
        <Tabs defaultValue="galleries" className="space-y-4">
          <TabsList className="bg-white border border-pink-100">
            <TabsTrigger value="galleries" className="data-[state=active]:bg-pink-500 data-[state=active]:text-white">
              Galerías
            </TabsTrigger>
            <TabsTrigger value="settings" className="data-[state=active]:bg-pink-500 data-[state=active]:text-white">
              Configuración
            </TabsTrigger>
            <TabsTrigger value="github" className="data-[state=active]:bg-pink-500 data-[state=active]:text-white">
              GitHub
            </TabsTrigger>
          </TabsList>

          <TabsContent value="galleries" className="space-y-4">
            {message.text && (
              <Alert
                variant={message.type === "error" ? "destructive" : "default"}
                className={message.type === "success" ? "bg-green-50 border-green-200 text-green-800" : ""}
              >
                <AlertDescription>{message.text}</AlertDescription>
              </Alert>
            )}

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card className="col-span-1">
                <CardHeader>
                  <CardTitle>Galerías</CardTitle>
                  <CardDescription>Selecciona una galería para administrar sus imágenes</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {galleries.map((gallery) => (
                      <Button
                        key={gallery.id}
                        variant={selectedGallery === gallery.id ? "default" : "outline"}
                        className={`w-full justify-start ${selectedGallery === gallery.id ? "bg-pink-500 hover:bg-pink-600" : "border-pink-200 text-pink-700 hover:bg-pink-50"}`}
                        onClick={() => setSelectedGallery(gallery.id)}
                      >
                        {gallery.name}
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>
              <Card className="col-span-1 md:col-span-3">
                <CardHeader>
                  <CardTitle>{galleries.find((g) => g.id === selectedGallery)?.name || "Galería"}</CardTitle>
                  <CardDescription>Administra las imágenes de esta galería</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {galleries
                      .find((g) => g.id === selectedGallery)
                      ?.images.map((image) => (
                        <Card key={image.id} className="overflow-hidden">
                          <div className="aspect-square relative bg-gray-100">
                            <Image
                              src={image.url || "/placeholder.svg"}
                              alt={image.title}
                              fill
                              className="object-cover"
                            />
                            <Button
                              variant="destructive"
                              size="icon"
                              className="absolute top-2 right-2"
                              onClick={() => handleDeleteImage(image.id)}
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                          <CardContent className="p-4">
                            <h3 className="font-medium">{image.title}</h3>
                            <p className="text-sm text-gray-500 line-clamp-2">{image.description}</p>
                            {image.fileName && <p className="text-xs text-gray-400 mt-2 truncate">{image.fileName}</p>}
                          </CardContent>
                        </Card>
                      ))}
                  </div>

                  <Card>
                    <CardHeader>
                      <CardTitle>
                        Agregar nueva imagen a {galleries.find((g) => g.id === selectedGallery)?.name}
                      </CardTitle>
                      <CardDescription>
                        Las imágenes se guardarán en la carpeta: fotos/{selectedGallery}/
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="imageFile">Seleccionar imagen</Label>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="col-span-1 md:col-span-2">
                              <div className="flex items-center gap-2">
                                <Input
                                  id="imageFile"
                                  ref={fileInputRef}
                                  type="file"
                                  accept="image/*"
                                  onChange={handleFileChange}
                                  className="border-pink-200"
                                />
                              </div>
                            </div>
                            <div className="col-span-1 aspect-square bg-gray-100 rounded-md relative overflow-hidden">
                              {newImage.preview ? (
                                <Image
                                  src={newImage.preview || "/placeholder.svg"}
                                  alt="Vista previa"
                                  fill
                                  className="object-cover"
                                />
                              ) : (
                                <div className="flex items-center justify-center h-full text-gray-400">
                                  <FileImage className="h-12 w-12" />
                                </div>
                              )}
                            </div>
                          </div>
                          <p className="text-xs text-gray-500">Formatos soportados: JPG, PNG, GIF, WEBP</p>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="imageTitle">Título</Label>
                          <Input
                            id="imageTitle"
                            placeholder="Título de la imagen"
                            value={newImage.title}
                            onChange={(e) => setNewImage({ ...newImage, title: e.target.value })}
                            className="border-pink-200"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="imageDescription">Descripción</Label>
                          <Textarea
                            id="imageDescription"
                            placeholder="Descripción de la imagen"
                            value={newImage.description}
                            onChange={(e) => setNewImage({ ...newImage, description: e.target.value })}
                            className="border-pink-200"
                          />
                        </div>
                        <Button
                          onClick={handleAddImage}
                          className="w-full bg-pink-500 hover:bg-pink-600"
                          disabled={!newImage.file || !newImage.title}
                        >
                          <Plus className="h-4 w-4 mr-2" />
                          Agregar imagen
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="settings">
            <Card>
              <CardHeader>
                <CardTitle>Configuración del sitio</CardTitle>
                <CardDescription>Administra la configuración general del sitio web</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="siteName">Nombre del sitio</Label>
                    <Input id="siteName" defaultValue="Mtra. Julia Villagómez Martínez" className="border-pink-200" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="siteDescription">Descripción</Label>
                    <Textarea
                      id="siteDescription"
                      defaultValue="Trabajando por un mejor futuro para nuestra comunidad."
                      className="border-pink-200"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="primaryColor">Color principal (Rosa)</Label>
                      <div className="flex gap-2">
                        <Input id="primaryColor" type="color" defaultValue="#ec407a" className="w-16 p-1 h-10" />
                        <Input defaultValue="#ec407a" className="flex-1 border-pink-200" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="secondaryColor">Color secundario (Verde Olivo)</Label>
                      <div className="flex gap-2">
                        <Input id="secondaryColor" type="color" defaultValue="#8c9a32" className="w-16 p-1 h-10" />
                        <Input defaultValue="#8c9a32" className="flex-1 border-pink-200" />
                      </div>
                    </div>
                  </div>
                  <Button className="bg-pink-500 hover:bg-pink-600">
                    <Save className="h-4 w-4 mr-2" />
                    Guardar cambios
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="github">
            <Card>
              <CardHeader>
                <CardTitle>Integración con GitHub</CardTitle>
                <CardDescription>Configura la integración con el repositorio de GitHub</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-gray-50 rounded-md border border-gray-200">
                    <div className="flex items-center">
                      <svg className="h-6 w-6 mr-2 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.167 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"
                        />
                      </svg>
                      <div>
                        <h3 className="font-medium">Repositorio conectado</h3>
                        <p className="text-sm text-gray-500">palesaurio/lic.julianew</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="branch">Rama principal</Label>
                    <Input id="branch" defaultValue="main" className="border-pink-200" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="deployKey">Clave de despliegue</Label>
                    <div className="relative">
                      <Input
                        id="deployKey"
                        type="password"
                        defaultValue="••••••••••••••••••••••••••••••"
                        className="border-pink-200 pr-20"
                        readOnly
                      />
                      <Button
                        variant="outline"
                        size="sm"
                        className="absolute right-1 top-1 h-7 border-pink-200 text-pink-500 hover:bg-pink-50"
                      >
                        Mostrar
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-sm font-medium">Acciones</h3>
                    <div className="flex flex-wrap gap-2">
                      <Button variant="outline" className="border-pink-200 text-pink-500 hover:bg-pink-50">
                        Sincronizar cambios
                      </Button>
                      <Button variant="outline" className="border-pink-200 text-pink-500 hover:bg-pink-50">
                        Desplegar sitio
                      </Button>
                      <Button variant="outline" className="border-pink-200 text-pink-500 hover:bg-pink-50">
                        Ver historial
                      </Button>
                    </div>
                  </div>

                  <div className="rounded-md border border-gray-200 overflow-hidden">
                    <div className="bg-gray-50 px-4 py-2 border-b border-gray-200">
                      <h3 className="font-medium">Últimos despliegues</h3>
                    </div>
                    <div className="divide-y divide-gray-200">
                      <div className="px-4 py-3 flex justify-between items-center">
                        <div>
                          <p className="font-medium">Actualización de galería</p>
                          <p className="text-sm text-gray-500">Hace 2 días</p>
                        </div>
                        <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">Exitoso</span>
                      </div>
                      <div className="px-4 py-3 flex justify-between items-center">
                        <div>
                          <p className="font-medium">Cambios en la página principal</p>
                          <p className="text-sm text-gray-500">Hace 5 días</p>
                        </div>
                        <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">Exitoso</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
