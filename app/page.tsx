import Link from "next/link"
import { GallerySlider } from "@/components/gallery-slider"
import { SocialIcons } from "@/components/social-icons"
import { MainNav } from "@/components/main-nav"
import { Button } from "@/components/ui/button"
import { ContactInfo } from "@/components/contact-info"
import { GalleryCarousel } from "@/components/gallery-carousel"

// Importamos los datos de las galerías desde el archivo de configuración
import { galleryData } from "@/lib/gallery-data"

export default function Home() {
  return (
    <div className="min-h-screen bg-pink-50">
      <header className="sticky top-0 z-50 w-full border-b bg-pink-500/90 backdrop-blur-sm">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="font-bold text-white text-xl whitespace-nowrap">
              Lic. Julia Villagómez Martínez
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <MainNav />
            <ContactInfo />
            <Link href="/login">
              <Button
                variant="outline"
                size="sm"
                className="bg-white text-pink-500 border-white hover:bg-pink-50 hover:text-pink-600"
              >
                Admin
              </Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="container py-8">
        <section id="inicio" className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-pink-800 sm:text-5xl lg:leading-[3.5rem]">
                Trabajando por un mejor futuro
              </h1>
              <p className="mt-4 text-lg text-gray-600">
                Comprometida con el desarrollo y bienestar de nuestra comunidad. Juntos podemos lograr un cambio
                positivo.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button className="bg-pink-500 hover:bg-pink-600">Conoce mis propuestas</Button>
                <Button variant="outline" className="border-olive-500 text-olive-600 hover:bg-olive-50">
                  Contáctame
                </Button>
              </div>
              <div className="mt-6">
                <SocialIcons size="md" className="justify-start" />
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <GallerySlider items={galleryData.principal} />
            </div>
          </div>
        </section>

        <section id="galerias" className="py-12 border-t border-pink-100">
          <h2 className="text-3xl font-bold text-pink-800 mb-8">Galerías</h2>
          <div className="grid grid-cols-1 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-pink-700 mb-4">Eventos Comunitarios</h3>
              <GalleryCarousel items={galleryData.eventos} />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-pink-700 mb-4">Propuestas en Acción</h3>
              <GalleryCarousel items={galleryData.propuestas} />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-pink-700 mb-4">Recorridos</h3>
              <GalleryCarousel items={galleryData.recorridos} />
            </div>
          </div>
        </section>

        <section id="carrera-profesional" className="py-12 border-t border-pink-100">
          <h2 className="text-3xl font-bold text-pink-800 mb-8">Carrera Profesional</h2>
          <div className="bg-white p-6 rounded-lg shadow-md border border-pink-100">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-pink-700 mb-3">Formación Académica</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-pink-200 flex items-center justify-center mt-1 mr-2">
                      <div className="h-2 w-2 rounded-full bg-pink-600"></div>
                    </div>
                    <div>
                      <p className="font-medium">Universidad Popular Autónoma de Veracruz (UPAV)</p>
                      <p className="text-sm text-gray-600">Maestría en Juicios Orales</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-pink-200 flex items-center justify-center mt-1 mr-2">
                      <div className="h-2 w-2 rounded-full bg-pink-600"></div>
                    </div>
                    <div>
                      <p className="font-medium">Universidad Veracruzana con Certificación del CEJAV</p>
                      <p className="text-sm text-gray-600">CEJAV/30-MCE 209/2022</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-pink-200 flex items-center justify-center mt-1 mr-2">
                      <div className="h-2 w-2 rounded-full bg-pink-600"></div>
                    </div>
                    <div>
                      <p className="font-medium">Universidad Popular Autónoma de Veracruz (UPAV)</p>
                      <p className="text-sm text-gray-600">
                        Diplomado en Juicios Orales del Nuevo Sistema de Justicia Penal en México
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-pink-700 mb-3">Certificaciones</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-pink-200 flex items-center justify-center mt-1 mr-2">
                      <div className="h-2 w-2 rounded-full bg-pink-600"></div>
                    </div>
                    <div>
                      <p className="font-medium">Título y Cédula Profesional</p>
                      <p className="text-sm text-gray-600">Leyes 15-05-91</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-pink-200 flex items-center justify-center mt-1 mr-2">
                      <div className="h-2 w-2 rounded-full bg-pink-600"></div>
                    </div>
                    <div>
                      <p className="font-medium">Certificación</p>
                      <p className="text-sm text-gray-600">Leyes 23-09-96</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-pink-200 flex items-center justify-center mt-1 mr-2">
                      <div className="h-2 w-2 rounded-full bg-pink-600"></div>
                    </div>
                    <div>
                      <p className="font-medium">Certificación</p>
                      <p className="text-sm text-gray-600">Leyes 04-11-96</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold text-pink-700 mb-3">Experiencia Profesional</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-pink-200">
                  <thead className="bg-pink-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-pink-800 uppercase tracking-wider"
                      >
                        Institución
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-pink-800 uppercase tracking-wider"
                      >
                        Puesto
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-pink-800 uppercase tracking-wider"
                      >
                        Campo
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-pink-800 uppercase tracking-wider"
                      >
                        Periodo
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-pink-100">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Primera Sala</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        Oficial Administrativo por Contrato
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Leyes</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">30-07-96 a 03-11-96</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Tercera Sala</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        Oficial Administrativo Interino
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Leyes</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">17-12-96 a 06-01-97</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Tercera Sala</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        Oficial Administrativo Interino
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Leyes</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">29-01-98 a 30-01-98</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Juzgado Municipal de Acatlán, Ver
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Juez</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Leyes</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">20-04-98 a 19-04-98</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Juzgado Municipal de Catemaco, Ver
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Juez</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Leyes</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">16-05-00 a 15-05-00</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Juzgado Municipal de Jilotepec, Ver
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Juez</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Leyes</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">03-08-98 a 18-07-98</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Juzgado Municipal de Banderilla, Ver
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Juez</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Leyes</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">03-07-08 a 30-06-08</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Juzgado Municipal de Jalacingo, Ver
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Juez</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Leyes</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">29-08-98 a 28-08-98</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Juzgado Municipal de Rafael Lucio, Ver
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Juez</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Leyes</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">01-02-09 a 18-07-98</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Juzgado Municipal de Tlapacoyan, Ver
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Juez</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Leyes</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">19-03-2015 a 18-03-15</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Juzgado Municipal de Vega de Alatorre, Ver
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Juez</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Leyes</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Actualmente</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-6 text-right">
                <p className="text-sm text-gray-600">Xalapa, Ver, a 7 febrero de 2025</p>
                <p className="font-medium">Lic. Julia Villagómez Martínez</p>
              </div>
            </div>
          </div>
        </section>

        <section id="propuestas" className="py-12 border-t border-pink-100">
          <h2 className="text-3xl font-bold text-pink-800 mb-8">Propuestas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border border-pink-100">
              <h3 className="text-xl font-semibold text-pink-700 mb-3">Desarrollo Social</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-pink-200 flex items-center justify-center mt-1 mr-2">
                    <div className="h-2 w-2 rounded-full bg-pink-600"></div>
                  </div>
                  <span>Ampliar programas de apoyo a madres trabajadoras</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-pink-200 flex items-center justify-center mt-1 mr-2">
                    <div className="h-2 w-2 rounded-full bg-pink-600"></div>
                  </div>
                  <span>Mejorar la infraestructura educativa</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-pink-200 flex items-center justify-center mt-1 mr-2">
                    <div className="h-2 w-2 rounded-full bg-pink-600"></div>
                  </div>
                  <span>Crear centros comunitarios en zonas vulnerables</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-pink-100">
              <h3 className="text-xl font-semibold text-pink-700 mb-3">Economía</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-pink-200 flex items-center justify-center mt-1 mr-2">
                    <div className="h-2 w-2 rounded-full bg-pink-600"></div>
                  </div>
                  <span>Impulsar el emprendimiento femenino</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-pink-200 flex items-center justify-center mt-1 mr-2">
                    <div className="h-2 w-2 rounded-full bg-pink-600"></div>
                  </div>
                  <span>Facilitar créditos para pequeñas empresas</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-pink-200 flex items-center justify-center mt-1 mr-2">
                    <div className="h-2 w-2 rounded-full bg-pink-600"></div>
                  </div>
                  <span>Crear programas de capacitación laboral</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-pink-100">
              <h3 className="text-xl font-semibold text-pink-700 mb-3">Seguridad</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-pink-200 flex items-center justify-center mt-1 mr-2">
                    <div className="h-2 w-2 rounded-full bg-pink-600"></div>
                  </div>
                  <span>Mejorar la iluminación en espacios públicos</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-pink-200 flex items-center justify-center mt-1 mr-2">
                    <div className="h-2 w-2 rounded-full bg-pink-600"></div>
                  </div>
                  <span>Implementar programas de prevención del delito</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-pink-200 flex items-center justify-center mt-1 mr-2">
                    <div className="h-2 w-2 rounded-full bg-pink-600"></div>
                  </div>
                  <span>Fortalecer la policía comunitaria</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-pink-100">
              <h3 className="text-xl font-semibold text-pink-700 mb-3">Medio Ambiente</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-pink-200 flex items-center justify-center mt-1 mr-2">
                    <div className="h-2 w-2 rounded-full bg-pink-600"></div>
                  </div>
                  <span>Crear más áreas verdes y parques</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-pink-200 flex items-center justify-center mt-1 mr-2">
                    <div className="h-2 w-2 rounded-full bg-pink-600"></div>
                  </div>
                  <span>Implementar programas de reciclaje</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-pink-200 flex items-center justify-center mt-1 mr-2">
                    <div className="h-2 w-2 rounded-full bg-pink-600"></div>
                  </div>
                  <span>Promover el uso de energías renovables</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section id="contacto" className="py-12 border-t border-pink-100">
          <h2 className="text-3xl font-bold text-pink-800 mb-8">Contacto</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border border-pink-100">
              <form className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-700">
                      Nombre
                    </label>
                    <input
                      id="name"
                      type="text"
                      className="w-full rounded-md border border-pink-200 px-3 py-2 text-sm focus:border-pink-500 focus:outline-none focus:ring-1 focus:ring-pink-500"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="w-full rounded-md border border-pink-200 px-3 py-2 text-sm focus:border-pink-500 focus:outline-none focus:ring-1 focus:ring-pink-500"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-700">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full rounded-md border border-pink-200 px-3 py-2 text-sm focus:border-pink-500 focus:outline-none focus:ring-1 focus:ring-pink-500"
                    placeholder="Tu mensaje"
                  ></textarea>
                </div>
                <Button className="w-full bg-pink-500 hover:bg-pink-600">Enviar mensaje</Button>
              </form>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-pink-100">
              <h3 className="text-xl font-semibold text-pink-700 mb-4">Información de contacto</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="h-10 w-10 rounded-full bg-pink-100 flex items-center justify-center mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-pink-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500">Teléfono</h4>
                    <p className="text-base">229 422 4577</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="h-10 w-10 rounded-full bg-pink-100 flex items-center justify-center mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-pink-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500">Email</h4>
                    <p className="text-base">lic.juliavillagomez31@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="h-10 w-10 rounded-full bg-pink-100 flex items-center justify-center mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-pink-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500">Dirección</h4>
                    <p className="text-base">Av. Principal #123, Xalapa, Ver.</p>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-pink-700 mb-4">Sígueme en redes</h3>
                <div className="flex space-x-4">
                  <SocialIcons size="lg" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-pink-500 text-white py-8">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Lic. Julia Villagómez Martínez</h3>
              <p className="text-pink-100">Trabajando por un mejor futuro para nuestra comunidad.</p>
              <div className="mt-4">
                <a
                  href="https://github.com/palesaurio/lic.julianew"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-white hover:text-pink-200"
                >
                  <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.167 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"
                    />
                  </svg>
                  GitHub
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Enlaces rápidos</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#inicio" className="text-pink-100 hover:text-white">
                    Inicio
                  </a>
                </li>
                <li>
                  <a href="#galerias" className="text-pink-100 hover:text-white">
                    Galerías
                  </a>
                </li>
                <li>
                  <a href="#carrera-profesional" className="text-pink-100 hover:text-white">
                    Carrera Profesional
                  </a>
                </li>
                <li>
                  <a href="#propuestas" className="text-pink-100 hover:text-white">
                    Propuestas
                  </a>
                </li>
                <li>
                  <a href="#contacto" className="text-pink-100 hover:text-white">
                    Contacto
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contacto</h3>
              <p className="text-pink-100">
                Av. Principal #123, Xalapa, Ver.
                <br />
                lic.juliavillagomez31@gmail.com
                <br />
                229 422 4577
              </p>
              <div className="mt-4">
                <SocialIcons size="md" className="justify-start" />
              </div>
            </div>
          </div>
          <div className="border-t border-pink-400 mt-8 pt-8 text-center text-pink-100">
            <p>© {new Date().getFullYear()} Lic. Julia Villagómez Martínez. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
