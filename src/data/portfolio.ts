export const personalInfo = {
  name: "Prénom Nom",
  title: "Développeur Full-Stack",
  tagline: "Passionné par le web moderne",
  avatar: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400",
  email: "contact@example.com",
  phone: "+33 6 12 34 56 78",
  linkedin: "https://linkedin.com/in/votreprofil",
  github: "https://github.com/votreprofil",
};

export const education = [
  {
    year: "2021 - 2023",
    title: "Master Développement Web",
    institution: "École Supérieure d'Informatique",
    description: "Spécialisation en développement full-stack et architecture logicielle",
  },
  {
    year: "2018 - 2021",
    title: "Licence Informatique",
    institution: "Université Paris",
    description: "Formation en informatique générale et développement web",
  },
];

export const experience = [
  {
    year: "2022 - Présent",
    title: "Alternant Développeur Full-Stack",
    company: "EC2E",
    description: "Développement d'applications web avec React, Vue.js, Symfony et Laravel. Conception et maintenance de bases de données, intégration d'APIs REST.",
  },
  {
    year: "2021 - 2022",
    title: "Stagiaire Développeur Web",
    company: "WebAgency Studio",
    description: "Création de sites web responsive, intégration de maquettes, développement de fonctionnalités front-end.",
  },
];

export const skills = [
  {
    category: "Frontend",
    items: [
      { name: "React", level: 90 },
      { name: "Vue.js", level: 85 },
      { name: "JavaScript/TypeScript", level: 90 },
      { name: "Tailwind CSS", level: 85 },
      { name: "HTML/CSS", level: 95 },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Symfony", level: 80 },
      { name: "Laravel", level: 80 },
      { name: "PHP", level: 85 },
      { name: "Node.js", level: 75 },
      { name: "MySQL/PostgreSQL", level: 80 },
    ],
  },
  {
    category: "Outils",
    items: [
      { name: "Git/GitHub", level: 85 },
      { name: "Docker", level: 70 },
      { name: "Vite/Webpack", level: 75 },
      { name: "REST APIs", level: 85 },
      { name: "Figma", level: 70 },
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "Plateforme e-commerce complète avec panier, paiement et gestion des commandes",
    technologies: ["React", "Symfony", "MySQL", "Stripe"],
    image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600",
    github: "https://github.com/votreprofil/ecommerce",
    demo: "https://demo.example.com",
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Application de gestion de tâches collaborative avec notifications en temps réel",
    technologies: ["Vue.js", "Laravel", "WebSocket", "Tailwind"],
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600",
    github: "https://github.com/votreprofil/task-manager",
    demo: "https://tasks.example.com",
  },
  {
    id: 3,
    title: "Portfolio CMS",
    description: "Système de gestion de contenu pour portfolios créatifs avec éditeur visuel",
    technologies: ["React", "Laravel", "PostgreSQL", "TailwindCSS"],
    image: "https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=600",
    github: "https://github.com/votreprofil/portfolio-cms",
    demo: null,
  },
  {
    id: 4,
    title: "Blog Platform",
    description: "Plateforme de blogging avec markdown, commentaires et système de tags",
    technologies: ["Vue.js", "Symfony", "MySQL", "Markdown"],
    image: "https://images.pexels.com/photos/261662/pexels-photo-261662.jpeg?auto=compress&cs=tinysrgb&w=600",
    github: "https://github.com/votreprofil/blog-platform",
    demo: "https://blog.example.com",
  },
  {
    id: 5,
    title: "Real Estate Listings",
    description: "Site d'annonces immobilières avec recherche avancée et carte interactive",
    technologies: ["React", "Laravel", "PostgreSQL", "Mapbox"],
    image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600",
    github: "https://github.com/votreprofil/real-estate",
    demo: "https://realestate.example.com",
  },
  {
    id: 6,
    title: "Social Media Dashboard",
    description: "Tableau de bord pour gérer plusieurs comptes de réseaux sociaux",
    technologies: ["React", "Symfony", "MongoDB", "OAuth"],
    image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=600",
    github: "https://github.com/votreprofil/social-dashboard",
    demo: null,
  },
];
