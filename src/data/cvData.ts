// CV Data Structure
export interface CVData {
  personal: {
    name: string;
    title: string;
    email: string;
    phone: string;
    location: string;
    linkedin: string;
    github: string;
    website: string;
    photo: string;
  };
  summary: string;
  experience: Experience[];
  education: Education[];
  skills: {
    technical: string[];
    soft: string[];
    languages: Language[];
  };
  certifications: Certification[];
}

export interface Experience {
  id: number;
  company: string;
  position: string;
  duration: string;
  location: string;
  description: string[];
  technologies: string[];
}

export interface Education {
  id: number;
  institution: string;
  degree: string;
  duration: string;
  description: string;
}

export interface Language {
  name: string;
  level: string;
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
}

export const cvData: CVData = {
  personal: {
    name: "BEREKOUTOU Boniface",
    title: "Frontend Developer",
    email: "allahtoralphdjamel@gmail.com",
    phone: "+33 07 75 95 44 11",
    location: "Cherbourg-en-Cotentin, France",
    linkedin: "www.linkedin.com/in/boniface-berekoutou-4b068a36a/",
    github: "github.com/BEREKOUTOU",
    website: "berekoutou.github.io/portefeuille/",
    photo: "/portefeuille/assets/images/Boniface.webp",
  },
  summary:
    "Passionate Frontend Developer with expertise in React, TypeScript, and modern web technologies. Experienced in creating responsive, user-friendly applications with a focus on performance and accessibility. Strong background in UI/UX design principles and collaborative development.",
  experience: [
    {
      id: 1,
      company: "Solutions Innovatech",
      position: "Frontend Developer",
      duration: "2024 - Present",
      location: "Paris, France",
      description: [
        "Developed and maintained client-side websites using React, Next.js and TypeScript",
        "Collaborated with designers and backend developers to create fluid user experiences",
        "Implemented responsive design principles ensuring optimal performance across devices",
        "Optimized application performance and improved loading times by 40%",
      ],
      technologies: [
        "React",
        "TypeScript",
        "Next.js",
        "Tailwind CSS",
        "Node.js",
      ],
    },
    {
      id: 2,
      company: "Secretariat Général",
      position: "Agent Administratif",
      duration: "2017 - 2019",
      location: "Yaoudé, Cameroun",
      description: [
        "Création de contenu graphique",
        "Recherches sur internet",
        "Saisie de documents",
        "Mise à disposition outils de communication",
      ],
      technologies: ["Word", "Excel", "PowerPoint", "Outlook", "Internet"],
    },
    {
      id: 3,
      company: "DAK Sécurités",
      position: "Agent de Sécurités ",
      duration: "2015 - 2017",
      location: "Yaoudé, Cameroun",
      description: [
        "Veiller à la sécurité des biens et des personnes en tant qu'agent de Sécurités",
        "Intervenir lors d'un incident pour assurer la sécurité des lieux et des personnes",
        "Prendre les mesures qui s'imposent pour prévenir les risques et Garder les accès sécurisés",
        "Effectuer des rondes,Contrôler les allées et venues des personnes et des véhicules",
        "Contrôler le fonctionnement des différents dispositifs de sécurité et Rédiger des rapports d'incidents et de sécurité",
      ],
      technologies: [
        "Le Tonfa",
        "Le talkie-walkie",
        "La lampe torche",
        "La tenue de secours",
        "Le sifflet",
      ],
    },
  ],
  education: [
    {
      id: 1,
      institution: "University of Technology",
      degree: "Bachelor of Computer Science",
      duration: "2024 - 2025",
      description:
        "Specialized in web development and user interface design, focusing on modern JavaScript frameworks and reactive design principles.",
    },
    {
      id: 2,
      institution: "Digital Innovation Institute",
      degree: "Advanced Frontend Development Certificate",
      duration: "2023",
      description:
        "Intensive program covering React, state management, performance optimization and modern CSS frameworks.",
    },
  ],
  skills: {
    technical: [
      "React",
      "TypeScript",
      "JavaScript",
      "Next.js",
      "Vue.js",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "SCSS",
      "Responsive Design",
      "Git",
      "Webpack",
      "Vite",
      "Node.js",
      "REST APIs",
      "GraphQL",
      "Jest",
      "Cypress",
      "Figma",
      "Adobe XD",
    ],
    soft: [
      "Résolution de Problèmes",
      "Communication",
      "Travail d'Équipe",
      "Adaptabilité",
      "Gestion du Temps",
      "Attention aux Détails",
      "Pensée Créative",
      "Autonomie",
    ],
    languages: [
      { name: "French", level: "Courant" },
      { name: "English", level: "Débutant" },
      { name: "Spanish", level: "Intermediate" },
    ],
  },
  certifications: [
    {
      name: "React Developer Certification",
      issuer: "OpenClassrooms",
      date: "2025",
    },
    {
      name: "DÉVELOPPEMENT D’APPLICATIONS WEB",
      issuer: "POWERBACHE",
      date: "2020",
    },
    {
      name: "Secrétariat et Gestion Administrative",
      issuer: "POWERBACHE",
      date: "2015",
    },
  ],
};
