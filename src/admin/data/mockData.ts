export const mockMessages = [
  {
    id: 1,
    name: "Marie Dupont",
    email: "marie.dupont@example.com",
    message: "Bonjour, je suis intéressée par vos services de développement web. Pouvons-nous discuter d'un projet de site e-commerce ?",
    date: "2025-10-07",
    status: "unread" as const,
  },
  {
    id: 2,
    name: "Jean Martin",
    email: "jean.martin@example.com",
    message: "Excellent portfolio ! J'aimerais vous proposer une mission freelance sur React et Node.js.",
    date: "2025-10-06",
    status: "read" as const,
  },
  {
    id: 3,
    name: "Sophie Bernard",
    email: "sophie.b@company.fr",
    message: "Nous recherchons un développeur full-stack pour un contrat de 6 mois. Seriez-vous disponible ?",
    date: "2025-10-05",
    status: "read" as const,
  },
  {
    id: 4,
    name: "Pierre Dubois",
    email: "p.dubois@startup.io",
    message: "Bonjour, votre profil correspond parfaitement à nos besoins. Pouvons-nous planifier un appel ?",
    date: "2025-10-04",
    status: "unread" as const,
  },
];

export const mockStats = {
  totalProjects: 6,
  totalMessages: 12,
  unreadMessages: 2,
  lastProjectAdded: "Social Media Dashboard",
  portfolioStatus: "online",
  viewsThisMonth: 1247,
  contactsThisWeek: 8,
};

export const mockSettings = {
  darkModeDefault: false,
  primaryColor: "#3B82F6",
  github: "https://github.com/votreprofil",
  linkedin: "https://linkedin.com/in/votreprofil",
  twitter: "https://twitter.com/votreprofil",
  email: "contact@example.com",
  siteTitle: "Portfolio Développeur",
  metaDescription: "Portfolio professionnel d'un développeur full-stack",
};
