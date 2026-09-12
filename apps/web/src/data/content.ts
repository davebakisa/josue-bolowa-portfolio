export const profile = {
  name: "Josue Bolowa",
  role: "Graphiste designer & monteur vidéos",
  location: "Kinshasa, RDC",
  studio: "Altruisme Services",
  bio: "Graphiste designer passionné par la créativité, je vous aide à communiquer avec votre clientèle cible et à construire une image de marque forte et cohérente.",
  email: "josuebolowa8@gmail.com",
  phone: "+243 810 552 177",
  socials: [
    { label: "Instagram", href: "https://instagram.com" },
    { label: "Facebook", href: "https://facebook.com/josue.bolowa" },
    { label: "LinkedIn", href: "https://linkedin.com/in/josue-bolowa-9bba12304/" },
    { label: "TikTok", href: "https://tiktok.com" },
  ],
};

export const languages = [
  { code: "FR", label: "Français", level: 95 },
  { code: "EN", label: "Anglais", level: 65 },
];

export const tools = [
  "Photoshop",
  "Illustrator",
  "Lightroom",
  "Premiere Pro",
  "CapCut",
  "Figma",
];

export const experience = [
  {
    year: "2026",
    role: "Graphiste designer",
    org: "Freelance",
    detail:
      "Identité de marque, packaging et supports de communication pour des indépendants et petites entreprises.",
  },
  {
    year: "2025",
    role: "Directeur artistique",
    org: "L'Impact du message dans nos vies",
    detail: "Direction artistique de la charte visuelle et des supports de campagne.",
  },
  {
    year: "2024",
    role: "Brand designer",
    org: "High Tech Market",
    detail: "Conception de l'identité de marque et de ses déclinaisons produits.",
  },
  {
    year: "2024",
    role: "Chargé de la communication",
    org: "ABL Smile",
    detail: "Création des visuels de communication et animation des réseaux sociaux.",
  },
] as const;

export type Project = {
  slug: string;
  client: string;
  category: string;
  tagline: string;
  description: string;
  image: string;
  accent: string;
  tags: string[];
};

export const brandProjects: Project[] = [
  {
    slug: "winner-fast-food",
    client: "Winner Fast Food",
    category: "Identité de marque",
    tagline: "Un logo gourmand pour un fast-food de quartier.",
    description:
      "Construction d'une identité complète autour d'un emblème rond noir et or : déclinaisons sur enseigne, uniformes de cuisine, casquettes et goodies pour une présence de marque cohérente jusque dans la boutique.",
    image: "/images/project-winner.jpg",
    accent: "#F2B705",
    tags: ["Logo", "Charte graphique", "Produits dérivés"],
  },
  {
    slug: "genie-technologie",
    client: "Génie Technologie",
    category: "Identité de marque",
    tagline: "La sécurité électronique, rendue lisible en un pictogramme.",
    description:
      "Un blason bleu dégradé — bouclier et viseur — pour une entreprise de vidéosurveillance et d'installations électriques. Décliné sur application mobile, badges d'accès, uniformes de chantier et supports imprimés.",
    image: "/images/project-genie.jpg",
    accent: "#2E7DBE",
    tags: ["Logo", "UI mobile", "Signalétique"],
  },
  {
    slug: "bmstyle",
    client: "BMstyle",
    category: "Identité de marque",
    tagline: "Une signature dorée pour une marque de mode urbaine.",
    description:
      "Wordmark manuscrit et couronne dorée pensés pour circuler vite : sacs, tote bags, bonnets et bracelets tissés, avec une version noire et une version blanche pour s'adapter à tous les supports.",
    image: "/images/project-bmstyle.jpg",
    accent: "#E08E1D",
    tags: ["Logo", "Textile", "Packaging souple"],
  },
  {
    slug: "happy-cosmetic",
    client: "Happy Cosmetic",
    category: "Identité de marque",
    tagline: "Une feuille comme promesse de douceur naturelle.",
    description:
      "Palette taupe et rosée, typographie minérale et pictogramme végétal pour une marque de cosmétiques : cartes de visite, packaging de parfum, polos d'équipe et signalétique de boutique.",
    image: "/images/project-happy.jpg",
    accent: "#8A6A63",
    tags: ["Logo", "Packaging", "Retail"],
  },
];

export const packagingProject: Project = {
  slug: "symphonie-lactee",
  client: "Symphonie Lactée",
  category: "Packaging",
  tagline: "Un yaourt à boire, entre fraîcheur laitière et énergie du matin.",
  description:
    "Système de packaging complet — bouteille, gobelets et fiche nutritionnelle — porté par un jaune éclatant sur fond vert, prolongé en affichage urbain, roll-up et goodies pour la sortie produit.",
  image: "/images/project-symphonie.jpg",
  accent: "#5B9A1B",
  tags: ["Packaging", "Affichage", "Goodies"],
};

export const socialGalleries = [
  {
    title: "Communication digitale",
    description:
      "Visuels de campagne pour associations, événements religieux, artistes et services académiques : chaque publication garde une hiérarchie claire entre message, visuel et appel à l'action.",
    image: "/images/social-1.jpg",
  },
  {
    title: "Communication digitale — suite",
    description:
      "Cartes de vœux, annonces d'anniversaire, sorties de livre et flyers d'église : un langage visuel chaleureux, pensé pour circuler sur les statuts et réseaux sociaux.",
    image: "/images/social-2.jpg",
  },
];

export const campaignProject = {
  title: "Génie Technologie — campagne complète",
  description:
    "Une série d'annonces produit déclinée sur un même gabarit bleu nuit : vidéosurveillance, contrôle d'accès, énergie solaire, GPS, radiocommunication et installation électrique — un système graphique répétable pour une communication mensuelle.",
  image: "/images/campaign-genie.jpg",
};

export const musicProject = {
  title: "Pochettes & visuels d'artistes",
  description:
    "Direction artistique pour des artistes et prédicateurs gospel : compositions type affiche, jeux de lumière et typographie éditoriale pour donner à chaque sortie sa propre identité visuelle.",
  image: "/images/music-covers.jpg",
};
