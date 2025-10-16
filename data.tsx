import {
  BellPlus,
  PenTool,
  BookText,
  Briefcase,
  Brush,
  Code2,
  CodeSquare,
  Home,
  Inbox,
  Mail,
  PanelsTopLeft,
  Phone,
  UserRound,
  UsersRound,
  Wrench,
  Layers, // opcional (para Skills)
  Palette, // opcional (para diseño)
} from "lucide-react";

export const dataAboutMe = [
    {
        id: 1,
        name: "Experiencia",
        icon: <Briefcase />,
        description: "+4 años de experiencia",
    },
    {
        id: 2,
        name: "Clientes",
        icon: <UsersRound />,
        description: "+200 clientes satisfechos",
    },
    {
        id: 3,
        name: "Proyectos",
        icon: <Wrench />,
        description: "+50 completados",
    },
];

export const itemsNavbar = [
  {
    id: 1,
    title: "Inicio",
    icon: <Home size={20} />,
    link: "#home",
  },
  {
    id: 2,
    title: "Sobre mí",
    icon: <UserRound size={20} />,
    link: "#about",
  },
  {
    id: 3,
    title: "Servicios",
    icon: <BookText size={20} />,
    link: "#services",
  },
  {
    id: 4,
    title: "Proyectos",
    icon: <CodeSquare size={20} />,
    link: "#proyectos",
  },
  {
    id: 5,
    title: "Contacto",
    icon: <Mail size={20} />,
    link: "#contact",
  },
];


export const dataSlider = [
    {
        id: 1,
        url: "/slider-1.jpg",
    },
    {
        id: 2,
        url: "/slider-2.jpg",
    },
    {
        id: 3,
        url: "/slider-3.jpg",
    },
    {
        id: 4,
        url: "/slider-4.jpg",
    },
]

import { Globe, Code } from "lucide-react";

export const dataPortfolio = [
  {
    id: 1,
    title: "AIL Online",
    image: "/image-1.png",
    urlGithub: "https://github.com/bereail",
    urlDemo: "https://ailonline.com.ar",
    description:
      "Landing page profesional para mi marca personal y servicios de diseño y desarrollo web. Construida con React, Tailwind CSS y enfoque SEO.",
    tech: ["React", "Tailwind CSS", "Netlify"],
  },
  {
    id: 2,
    title: "StatuApp",
    image: "/image-2.png",
    urlGithub: "https://github.com/bereail/statuApp",
    urlDemo: "https://statuapp.netlify.app/",
    description:
      "Aplicación web cultural que permite explorar estatuas y monumentos de Rosario mediante un mapa interactivo y códigos QR. Backend en Django y frontend en React.",
    tech: ["Django", "React", "Leaflet", "API REST"],
  },

  {
    id: 3,
    title: "Unipack SA",
    image: "/image-4.png",
    urlGithub: "https://github.com/bereail",
    urlDemo: "https://unipacksa.com.ar/",
    description:
      "Sitio institucional desarrollado para empresa de packaging industrial. Diseño responsive, optimización SEO y despliegue productivo con Nginx.",
    tech: ["HTML", "CSS", "JavaScript", "SEO"],
  },
      {
    id: 4,
    title: "Ultracor",
    image: "/image-6.png",
    urlGithub: "https://github.com/bereail/ultracor",
    urlDemo: "https://ultracor.com.ar/",
    description:
      "Sistema interno para control de stock de insumos de oficina. Incluye autenticación, carga de datos y control de inventario, desarrollado con Django y React.",
    tech: ["Django", "React", "MySQL", "API REST"],
  },
    {
    id: 5,
    title: "ReadMe",
    image: "/image-3.png",
    urlGithub: "https://github.com/bereail/ReadMe",
    urlDemo: "#",
    description:
      "App web y móvil para registrar lecturas, anotaciones y puntuaciones, conectada con la API de OpenLibrary. Desarrollada con Django REST Framework y React Native.",
    tech: ["Django REST", "React", "React Native", "API OpenLibrary"],
  },
  {
    id: 6,
    title: "StockToner",
    image: "/image-5.png",
    urlGithub: "https://github.com/bereail/stockToner",
    urlDemo: "#",
    description:
      "Sistema interno para control de stock de insumos de oficina. Incluye autenticación, carga de datos y control de inventario, desarrollado con Django y React.",
    tech: ["Django", "React", "MySQL", "API REST"],
  },

];



export const dataExperience = [
  {
    id: 1,
    title: "Frontend Development 🎨",
    experience: [
      {
        name: "React / Next.js",
        subtitle: "Experimentada",
        value: 85,
      },
      {
        name: "JavaScript / TypeScript",
        subtitle: "Intermedia",
        value: 75,
      },
      {
        name: "Tailwind CSS / Shadcn UI",
        subtitle: "Experimentada",
        value: 80,
      },
      {
        name: "HTML5 / CSS3",
        subtitle: "Sólida base",
        value: 90,
      },
      {
        name: "React Native / Expo",
        subtitle: "Intermedia",
        value: 70,
      },
      {
        name: "Bootstrap / DaisyUI",
        subtitle: "Experimentada",
        value: 80,
      },
    ],
  },
  {
    id: 2,
    title: "Backend Development ⚙️",
    experience: [
      {
        name: "Python / Django / DRF",
        subtitle: "Experimentada",
        value: 85,
      },
      {
        name: ".NET 6 / C#",
        subtitle: "Intermedia",
        value: 70,
      },
      {
        name: "Entity Framework Core",
        subtitle: "Intermedia",
        value: 65,
      },
      {
        name: "MySQL / SQLite",
        subtitle: "Experimentada",
        value: 80,
      },
      {
        name: "REST API Design / JWT Auth",
        subtitle: "Experimentada",
        value: 85,
      },
      {
        name: "Nginx / Certbot / Deploy",
        subtitle: "Intermedia",
        value: 75,
      },
    ],
  },
]



export const dataServices = [
  {
    id: 1,
    title: "Desarrollo Web Fullstack",
    icon: <PanelsTopLeft />,
    features: [
      { name: "Desarrollo de sitios web y aplicaciones con Django y React" },
      { name: "Integración de APIs y bases de datos MySQL / SQLite" },
      { name: "Diseño responsive con Tailwind CSS y Shadcn UI" },
      { name: "Optimización de rendimiento y SEO técnico" },
      { name: "Implementación de autenticación y seguridad (JWT, Auth)" },
      { name: "Despliegues con Nginx, Certbot y entornos productivos" },
      { name: "Mantenimiento y soporte técnico continuo" },
    ],
  },
  {
    id: 2,
    title: "Diseño UI/UX",
    icon: <Brush />,
    features: [
      { name: "Diseño centrado en el usuario para mejorar la experiencia" },
      { name: "Prototipado interactivo (Figma, Framer)" },
      { name: "Sistemas de diseño con Tailwind y tokens visuales" },
      { name: "Diseños accesibles y consistentes en todas las plataformas" },
      { name: "Pruebas de usabilidad y mejoras iterativas" },
      { name: "Diseño adaptable para dispositivos móviles y escritorio" },
    ],
  },
  {
    id: 3,
    title: "Contenido & Branding Digital",
    icon: <PenTool />,
    features: [
      { name: "Creación de identidad visual y material gráfico coherente" },
      { name: "Redacción técnica y comunicación clara para productos digitales" },
      { name: "Gestión de contenido web y optimización de textos" },
      { name: "Estrategias de presentación y portfolios para marcas o proyectos" },
      { name: "Diseño de materiales para redes y presentaciones" },
    ],
  },
];



export const dataContact = [
  {
    id: 1,
    title: "Teléfono",
    subtitle: "+54 341 318 4829",
    link: "tel:+543413184829",
    icon: <Phone />,
  },
  {
    id: 2,
    title: "GitHub",
    subtitle: "github.com/bereail",
    link: "https://github.com/bereail", // ✅ agregado https://
    icon: <Code2 />,
  },
  {
    id: 3,
    title: "Email",
    subtitle: "bereailsolohaga@hotmail.com",
    link: "mailto:bereailsolohaga@hotmail.com",
    icon: <Inbox />,
  },
];
