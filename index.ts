// Este archivo es necesario para que la página pueda ejecutarse correctamente cuando se suba a un host
// Exporta los componentes principales para que puedan ser importados desde otros archivos

export { default as Home } from "./app/page"
export { default as LoginPage } from "./app/login/page"
export { default as DashboardPage } from "./app/dashboard/page"

// Exporta los componentes principales
export { MainNav } from "./components/main-nav"
export { ContactInfo } from "./components/contact-info"
export { SocialIcons } from "./components/social-icons"
export { GallerySlider } from "./components/gallery-slider"
export { GalleryCarousel } from "./components/gallery-carousel"

// Exporta los datos de la galería
export { galleryData } from "./lib/gallery-data"
