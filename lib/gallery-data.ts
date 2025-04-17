// Este archivo contiene los datos de las galerías
// Las imágenes se cargan desde la carpeta /fotos en la raíz del proyecto

export const galleryData = {
  principal: [
    {
      id: 1,
      image: "/fotos/principal/visita-comunidad.jpg",
      title: "Visita a la comunidad",
      description: "Trabajando junto a los vecinos para mejorar nuestro entorno",
      link: "#propuestas",
    },
    {
      id: 2,
      image: "/fotos/principal/foro-educacion.jpg",
      title: "Foro de educación",
      description: "Dialogando sobre el futuro de la educación en nuestra región",
      link: "#propuestas",
    },
    {
      id: 3,
      image: "/fotos/principal/programa-salud.jpg",
      title: "Programa de salud",
      description: "Impulsando iniciativas para mejorar la salud comunitaria",
      link: "#propuestas",
    },
    {
      id: 4,
      image: "/fotos/principal/desarrollo-economico.jpg",
      title: "Desarrollo económico",
      description: "Apoyando a emprendedores locales y generando oportunidades",
      link: "#propuestas",
    },
  ],
  eventos: [
    {
      id: 1,
      src: "/fotos/eventos/evento1.jpg",
      alt: "Evento 1",
      title: "Reunión comunitaria",
      description: "Trabajando junto a los vecinos para mejorar nuestro entorno",
    },
    {
      id: 2,
      src: "/fotos/eventos/evento2.jpg",
      alt: "Evento 2",
      title: "Foro ciudadano",
      description: "Dialogando sobre el futuro de nuestra comunidad",
    },
    {
      id: 3,
      src: "/fotos/eventos/evento3.jpg",
      alt: "Evento 3",
      title: "Encuentro vecinal",
      description: "Escuchando las necesidades de los ciudadanos",
    },
    {
      id: 4,
      src: "/fotos/eventos/evento4.jpg",
      alt: "Evento 4",
      title: "Asamblea informativa",
      description: "Compartiendo propuestas y recibiendo retroalimentación",
    },
    {
      id: 5,
      src: "/fotos/eventos/evento5.jpg",
      alt: "Evento 5",
      title: "Diálogo con ciudadanos",
      description: "Atendiendo inquietudes y propuestas de la comunidad",
    },
    {
      id: 6,
      src: "/fotos/eventos/evento6.jpg",
      alt: "Evento 6",
      title: "Jornada de atención",
      description: "Brindando servicios y apoyo a la comunidad",
    },
  ],
  propuestas: [
    {
      id: 1,
      src: "/fotos/propuestas/propuesta1.jpg",
      alt: "Propuesta 1",
      title: "Desarrollo social",
      description: "Programas para mejorar la calidad de vida de las familias",
    },
    {
      id: 2,
      src: "/fotos/propuestas/propuesta2.jpg",
      alt: "Propuesta 2",
      title: "Infraestructura",
      description: "Mejoramiento de calles, parques y espacios públicos",
    },
    {
      id: 3,
      src: "/fotos/propuestas/propuesta3.jpg",
      alt: "Propuesta 3",
      title: "Educación",
      description: "Apoyo a escuelas y programas educativos",
    },
    {
      id: 4,
      src: "/fotos/propuestas/propuesta4.jpg",
      alt: "Propuesta 4",
      title: "Salud",
      description: "Acceso a servicios médicos de calidad para todos",
    },
  ],
  recorridos: [
    {
      id: 1,
      src: "/fotos/recorridos/recorrido1.jpg",
      alt: "Recorrido 1",
      title: "Visita a comunidad",
      description: "Conociendo de primera mano las necesidades locales",
    },
    {
      id: 2,
      src: "/fotos/recorridos/recorrido2.jpg",
      alt: "Recorrido 2",
      title: "Recorrido por colonias",
      description: "Dialogando con los vecinos sobre sus preocupaciones",
    },
    {
      id: 3,
      src: "/fotos/recorridos/recorrido3.jpg",
      alt: "Recorrido 3",
      title: "Visita a escuelas",
      description: "Apoyando la educación de nuestra comunidad",
    },
  ],
}

// Nota: Si las imágenes no están disponibles, se usarán imágenes de placeholder
// Para usar imágenes reales, colócalas en la carpeta /public/fotos/ con la estructura adecuada
