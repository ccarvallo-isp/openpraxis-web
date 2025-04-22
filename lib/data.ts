import { ServiceType, TestimonialType, ProjectType, TeamMemberType } from "./types";

export const services: ServiceType[] = [
  {
    id: "geospatial-analysis",
    title: "Análisis geoespacial para políticas públicas",
    description: "Utilizamos tecnología GIS avanzada para ayudar a las entidades gubernamentales a tomar decisiones informadas basadas en datos geoespaciales precisos.",
    icon: "map",
    image: "https://images.pexels.com/photos/7108/notebook-computer-chill-relax.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    features: [
      "Análisis de patrones espaciales",
      "Modelado de accesibilidad",
      "Evaluación de impacto territorial",
      "Planificación urbana basada en datos",
      "Visualización de políticas públicas"
    ]
  },
  {
    id: "field-data",
    title: "Sistemas de captura de datos en campo",
    description: "Desarrollamos soluciones móviles para la recolección eficiente de datos georreferenciados en terreno, garantizando precisión y facilidad de uso.",
    icon: "tablet",
    image: "https://images.pexels.com/photos/169573/pexels-photo-169573.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    features: [
      "Aplicaciones móviles personalizadas",
      "Sincronización en tiempo real",
      "Trabajo sin conexión",
      "Validación de datos automática",
      "Integración con sistemas existentes"
    ]
  },
  {
    id: "risk-analysis",
    title: "Análisis de riesgos para sector público",
    description: "Identificamos y evaluamos riesgos geoespaciales para ayudar a las organizaciones públicas a desarrollar estrategias efectivas de mitigación y respuesta.",
    icon: "alert-triangle",
    image: "https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    features: [
      "Mapeo de zonas de riesgo",
      "Análisis de vulnerabilidad",
      "Modelado de escenarios",
      "Planificación de evacuación",
      "Sistemas de alerta temprana"
    ]
  },
  {
    id: "data-visualization",
    title: "Visualización de datos demográficos y ambientales",
    description: "Transformamos datos complejos en visualizaciones interactivas y accesibles que revelan patrones, tendencias y relaciones espaciales importantes.",
    icon: "bar-chart",
    image: "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    features: [
      "Dashboards interactivos",
      "Mapas temáticos",
      "Visualizaciones 3D",
      "Integración de datos en tiempo real",
      "Informes personalizados"
    ]
  }
];

export const testimonials: TestimonialType[] = [
  {
    id: "1",
    quote: "El sistema GIS desarrollado por Open Praxis transformó nuestra capacidad para tomar decisiones basadas en datos territoriales. La visualización interactiva facilita el análisis y la comunicación con todas las partes interesadas.",
    author: "Elena Ramírez",
    company: "Ministerio de Desarrollo Urbano",
    role: "Directora de Planificación",
    avatar: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: "2",
    quote: "La aplicación de captura de datos que implementaron revolucionó nuestro trabajo de campo. Hemos reducido errores en un 85% y el tiempo de procesamiento en más de la mitad.",
    author: "Carlos Mendoza",
    company: "Instituto Nacional de Estadística",
    role: "Coordinador de Censo",
    avatar: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: "3",
    quote: "Su análisis de riesgos nos permitió desarrollar un plan de contingencia robusto. Cuando ocurrieron las inundaciones, estábamos preparados y pudimos responder con eficacia.",
    author: "Lucía Fuentes",
    company: "Protección Civil Municipal",
    role: "Jefa de Emergencias",
    avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: "4",
    quote: "Las visualizaciones de datos ambientales que crearon han sido fundamentales para comunicar la importancia de nuestros proyectos de conservación y obtener financiamiento adicional.",
    author: "Javier Torres",
    company: "Fundación Ecosistemas",
    role: "Director Ejecutivo",
    avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];

export const projects: ProjectType[] = [
  {
    id: "1",
    title: "Sistema de monitoreo de calidad del aire urbano",
    description: "Desarrollo de una plataforma GIS para el monitoreo en tiempo real de la calidad del aire en Ciudad de México, integrando datos de sensores distribuidos por la ciudad y generando alertas automáticas.",
    category: "Visualización de datos",
    client: "Secretaría de Medio Ambiente",
    sector: "Gobierno",
    image: "https://images.pexels.com/photos/4386442/pexels-photo-4386442.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    results: [
      { label: "Estaciones monitoreadas", value: "48" },
      { label: "Reducción de tiempo de respuesta", value: "65%" },
      { label: "Alertas automatizadas", value: "100%" },
      { label: "Usuarios activos", value: "12,500+" }
    ],
    technologies: ["React", "Node.js", "MongoDB", "Leaflet", "D3.js"]
  },
  {
    id: "2",
    title: "Análisis de riesgo sísmico para infraestructura crítica",
    description: "Evaluación geoespacial del riesgo sísmico en infraestructuras críticas como hospitales, escuelas y estaciones de bomberos para priorizar intervenciones estructurales y planes de respuesta.",
    category: "Análisis de riesgos",
    client: "Comisión Nacional de Emergencias",
    sector: "Gobierno",
    image: "https://images.pexels.com/photos/3616764/pexels-photo-3616764.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    results: [
      { label: "Edificios evaluados", value: "1,245" },
      { label: "Ahorro estimado", value: "$3.8M" },
      { label: "Tiempo de implementación", value: "6 meses" },
      { label: "Reducción de vulnerabilidad", value: "42%" }
    ],
    technologies: ["Python", "ArcGIS", "PostgreSQL/PostGIS", "Machine Learning"]
  },
  {
    id: "3",
    title: "Aplicación móvil para censo agrícola",
    description: "Diseño e implementación de una aplicación móvil para recolección de datos georreferenciados sobre cultivos, tipos de suelo y prácticas agrícolas, con funcionamiento offline y sincronización automática.",
    category: "Sistemas de captura de datos",
    client: "Ministerio de Agricultura",
    sector: "Gobierno",
    image: "https://images.pexels.com/photos/440731/pexels-photo-440731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    results: [
      { label: "Reducción de errores", value: "85%" },
      { label: "Hectáreas mapeadas", value: "36,000" },
      { label: "Tiempo ahorrado", value: "58%" },
      { label: "Productores beneficiados", value: "4,200+" }
    ],
    technologies: ["React Native", "Firebase", "GeoJSON", "Turf.js"]
  },
  {
    id: "4",
    title: "Plataforma de planificación urbana participativa",
    description: "Desarrollo de una plataforma web que permite a los ciudadanos participar en procesos de planificación urbana mediante la visualización de propuestas y el envío de comentarios georreferenciados.",
    category: "Análisis geoespacial",
    client: "Municipalidad de Monterrey",
    sector: "Gobierno",
    image: "https://images.pexels.com/photos/2093323/pexels-photo-2093323.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    results: [
      { label: "Participación ciudadana", value: "+210%" },
      { label: "Propuestas implementadas", value: "24" },
      { label: "Comentarios recibidos", value: "8,750+" },
      { label: "Satisfacción ciudadana", value: "87%" }
    ],
    technologies: ["Vue.js", "Django", "PostgreSQL/PostGIS", "Mapbox GL"]
  },
  {
    id: "5",
    title: "Sistema de gestión de recursos hídricos",
    description: "Implementación de un sistema GIS para monitoreo y gestión de recursos hídricos, incluyendo niveles de acuíferos, calidad del agua y patrones de consumo para optimizar la distribución.",
    category: "Visualización de datos",
    client: "Comisión Nacional del Agua",
    sector: "Gobierno",
    image: "https://images.pexels.com/photos/414579/pexels-photo-414579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    results: [
      { label: "Reducción de pérdidas", value: "28%" },
      { label: "Ahorro anual", value: "$2.3M" },
      { label: "Fuentes monitoreadas", value: "384" },
      { label: "Alertas tempranas", value: "120+" }
    ],
    technologies: ["Angular", "Python/Django", "TimescaleDB", "Deck.gl"]
  },
  {
    id: "6",
    title: "Atlas de vulnerabilidad al cambio climático",
    description: "Creación de un atlas interactivo que visualiza la vulnerabilidad de diferentes regiones al cambio climático, incluyendo modelado de escenarios futuros y estrategias de adaptación.",
    category: "Análisis de riesgos",
    client: "Ministerio de Ambiente y Desarrollo Sostenible",
    sector: "Gobierno",
    image: "https://images.pexels.com/photos/60132/pexels-photo-60132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    results: [
      { label: "Regiones analizadas", value: "26" },
      { label: "Variables modeladas", value: "42" },
      { label: "Escenarios proyectados", value: "12" },
      { label: "Descarga de informes", value: "5,800+" }
    ],
    technologies: ["R", "Shiny", "Leaflet", "AWS"]
  }
];

export const team: TeamMemberType[] = [
  {
    id: "1",
    name: "Dr. Alejandro Méndez",
    role: "Director General y Fundador",
    bio: "Doctor en Geomática con más de 15 años de experiencia en el desarrollo de soluciones GIS para el sector público. Ha liderado proyectos de análisis espacial en más de 10 países de América Latina.",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    education: "Doctorado en Geomática, Universidad de Santiago",
    expertise: ["Análisis espacial", "Políticas públicas", "Desarrollo sostenible", "Gestión de riesgos"]
  },
  {
    id: "2",
    name: "Dra. Carmen Rodríguez",
    role: "Directora de Tecnología",
    bio: "Especialista en desarrollo de software y arquitectura de sistemas GIS. Cuenta con amplia experiencia en la implementación de soluciones tecnológicas para gobiernos y organizaciones internacionales.",
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    education: "Doctorado en Ciencias de la Computación, Universidad Autónoma",
    expertise: ["Arquitectura de software", "Bases de datos espaciales", "Desarrollo web", "GIS en la nube"]
  },
  {
    id: "3",
    name: "Ing. Roberto Sánchez",
    role: "Líder de Desarrollo",
    bio: "Ingeniero de software con especialización en tecnologías web y móviles para aplicaciones GIS. Ha dirigido el desarrollo técnico de más de 30 proyectos para diversos sectores.",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    education: "Maestría en Ingeniería de Software, Instituto Tecnológico",
    expertise: ["Desarrollo full-stack", "Aplicaciones móviles", "UX/UI para GIS", "Sistemas en tiempo real"]
  },
  {
    id: "4",
    name: "Dra. Isabel Morales",
    role: "Directora de Análisis Espacial",
    bio: "Geógrafa con experiencia en modelos predictivos y análisis espacial avanzado. Su trabajo se ha centrado en la aplicación de técnicas estadísticas espaciales para la toma de decisiones.",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    education: "Doctorado en Geografía, Universidad Nacional",
    expertise: ["Estadística espacial", "Modelos predictivos", "Teledetección", "Análisis ambiental"]
  }
];