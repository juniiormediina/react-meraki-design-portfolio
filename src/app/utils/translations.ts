export type Language = 'es' | 'en';

export const translations = {
  es: {
    nav: {
      about: 'Sobre mí',
      skills: 'Habilidades',
      tools: 'Herramientas',
      services: 'Servicios',
      projects: 'Proyectos',
      gallery: 'Galería',
      contact: 'Contacto',
    },
    hero: {
      title: 'Meraki Design',
      subtitle: 'Diseño con alma',
      description: 'Creando identidades visuales únicas que cuentan historias y conectan con las personas.',
      cta: 'Ver mi trabajo',
    },
    about: {
      title: 'Sobre mí',
      description: 'Soy diseñadora apasionada por crear experiencias visuales memorables. Con un enfoque en el diseño minimalista y funcional, ayudo a marcas a destacar y conectar con su audiencia a través de soluciones creativas y personalizadas.',
    },
    skills: {
      title: 'Habilidades',
      items: [
        { name: 'Pensamiento Creativo', description: 'Soluciones innovadoras y originales' },
        { name: 'Dominio Técnico', description: 'Expertise en herramientas de diseño' },
        { name: 'Sensibilidad Estética', description: 'Ojo para el detalle y la composición' },
        { name: 'Comunicación Efectiva', description: 'Transmitir ideas claramente' },
        { name: 'Gestión y Organización', description: 'Proyectos bien planificados' },
        { name: 'Adaptabilidad', description: 'Flexible a nuevos retos' },
      ],
    },
    tools: {
      title: 'Herramientas',
      subtitle: 'Tecnologías que domino',
      items: ['Premiere', 'Photoshop', 'InDesign', 'Illustrator', 'Figma', 'Fotografía'],
    },
    services: {
      title: 'Servicios',
      subtitle: 'Lo que ofrezco',
      items: [
        {
          name: 'Packaging',
          description: 'Diseño de empaques que destacan en el mercado',
        },
        {
          name: 'Fotografía Análoga y Digital',
          description: 'Captura de momentos con estilo único',
        },
        {
          name: 'Rebranding',
          description: 'Renovación de identidades existentes',
        },
        {
          name: 'Creación de Marca Personal',
          description: 'Construcción de marcas auténticas',
        },
        {
          name: 'Identidad Visual',
          description: 'Desarrollo de sistemas visuales coherentes',
        },
      ],
    },
    projects: {
      title: 'Proyectos Académicos',
      subtitle: 'Algunos de mis trabajos',
    },
    clients: {
      title: 'Clientes',
      subtitle: 'Marcas que han confiado en mí',
    },
    awards: {
      title: 'Reconocimientos y Certificados',
      items: [
        'Certificado de Diseño Gráfico Avanzado',
        'Mención Honorífica en Concurso de Diseño',
        'Certificación en Branding Estratégico',
      ],
    },
    testimonials: {
      title: 'Testimonios',
      subtitle: 'Lo que dicen mis clientes',
      items: [
        {
          name: 'María González',
          role: 'CEO, Startup Tech',
          text: 'Meraki Design transformó completamente nuestra identidad visual. El trabajo fue excepcional.',
        },
        {
          name: 'Carlos Rodríguez',
          role: 'Fundador, Café Artesanal',
          text: 'La atención al detalle y la creatividad superaron nuestras expectativas. Altamente recomendado.',
        },
        {
          name: 'Ana Martínez',
          role: 'Directora de Marketing',
          text: 'Profesionalismo y talento en cada proyecto. Un placer trabajar con Meraki Design.',
        },
      ],
    },
    gallery: {
      title: 'Arte Visual',
      subtitle: 'Explora mi trabajo creativo',
    },
    contact: {
      title: 'Contacto',
      subtitle: 'Hablemos de tu próximo proyecto',
      email: 'Email',
      phone: 'Teléfono',
      location: 'Ubicación',
      message: 'Mensaje',
      send: 'Enviar mensaje',
      service: 'Servicio de interés',
      selectService: 'Selecciona un servicio',
      servicePlaceholder: '¿Qué servicio te interesa?',
      contactButton: 'Contáctame',
      contactDescription: 'Haz clic para abrir tu cliente de correo con una plantilla lista para que puedas contarme sobre tu proyecto',
    },
    footer: {
      rights: 'Todos los derechos reservados.',
      made: 'Hecho con',
    },
  },
  en: {
    nav: {
      about: 'About',
      skills: 'Skills',
      tools: 'Tools',
      services: 'Services',
      projects: 'Projects',
      gallery: 'Gallery',
      contact: 'Contact',
    },
    hero: {
      title: 'Meraki Design',
      subtitle: 'Design with soul',
      description: 'Creating unique visual identities that tell stories and connect with people.',
      cta: 'View my work',
    },
    about: {
      title: 'About Me',
      description: "I'm a designer passionate about creating memorable visual experiences. With a focus on minimalist and functional design, I help brands stand out and connect with their audience through creative and personalized solutions.",
    },
    skills: {
      title: 'Skills',
      items: [
        { name: 'Creative Thinking', description: 'Innovative and original solutions' },
        { name: 'Technical Mastery', description: 'Expertise in design tools' },
        { name: 'Aesthetic Sensitivity', description: 'Eye for detail and composition' },
        { name: 'Effective Communication', description: 'Clear idea transmission' },
        { name: 'Management & Organization', description: 'Well-planned projects' },
        { name: 'Adaptability', description: 'Flexible to new challenges' },
      ],
    },
    tools: {
      title: 'Tools',
      subtitle: 'Technologies I master',
      items: ['Premiere', 'Photoshop', 'InDesign', 'Illustrator', 'Figma', 'Photography'],
    },
    services: {
      title: 'Services',
      subtitle: 'What I offer',
      items: [
        {
          name: 'Packaging',
          description: 'Package design that stands out in the market',
        },
        {
          name: 'Analog & Digital Photography',
          description: 'Capturing moments with unique style',
        },
        {
          name: 'Rebranding',
          description: 'Renewal of existing identities',
        },
        {
          name: 'Personal Branding',
          description: 'Building authentic brands',
        },
        {
          name: 'Visual Identity',
          description: 'Development of coherent visual systems',
        },
      ],
    },
    projects: {
      title: 'Academic Projects',
      subtitle: 'Some of my work',
    },
    clients: {
      title: 'Clients',
      subtitle: 'Brands that have trusted me',
    },
    awards: {
      title: 'Awards & Certificates',
      items: [
        'Advanced Graphic Design Certificate',
        'Honorable Mention in Design Contest',
        'Strategic Branding Certification',
      ],
    },
    testimonials: {
      title: 'Testimonials',
      subtitle: 'What my clients say',
      items: [
        {
          name: 'María González',
          role: 'CEO, Startup Tech',
          text: 'Meraki Design completely transformed our visual identity. The work was exceptional.',
        },
        {
          name: 'Carlos Rodríguez',
          role: 'Founder, Artisan Café',
          text: 'The attention to detail and creativity exceeded our expectations. Highly recommended.',
        },
        {
          name: 'Ana Martínez',
          role: 'Marketing Director',
          text: 'Professionalism and talent in every project. A pleasure to work with Meraki Design.',
        },
      ],
    },
    gallery: {
      title: 'Visual Art',
      subtitle: 'Explore my creative work',
    },
    contact: {
      title: 'Contact',
      subtitle: "Let's talk about your next project",
      email: 'Email',
      phone: 'Phone',
      location: 'Location',
      message: 'Message',
      send: 'Send message',
      service: 'Service of interest',
      selectService: 'Select a service',
      servicePlaceholder: 'What service are you interested in?',
      contactButton: 'Contact me',
      contactDescription: 'Click to open your email client with a template ready for you to tell me about your project',
    },
    footer: {
      rights: 'All rights reserved.',
      made: 'Made with',
    },
  },
};
