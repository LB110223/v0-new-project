// Données statiques du site - Ces données sont partagées sur tous les appareils
// Pour modifier ces données, éditez ce fichier directement

export interface Testimonial {
  id: string
  quote: string
  author: string
  position: string
  image: string
}

export interface TeamMember {
  id: string
  name: string
  role: string
  bio: string
  image: string
  linkedin: string
}

export interface Service {
  id: string
  icon: string
  title: string
  subtitle: string
  description: string
}

export interface HeroContent {
  title: string
  highlightedText: string
  description: string
  ctaText: string
}

// Témoignages avec vos vraies données
export const testimonials: Testimonial[] = [
  {
    id: "testimonial-1",
    quote:
      "Smart Impulsion a transformé notre approche de l'IA. Leur focus sur le ROI nous a permis de justifier chaque euro investi avec des résultats concrets.",
    author: "Emmanuel Chochoy",
    position: "CEO",
    image: "https://i.ibb.co/zVry0KVN/Logo-Principal.png",
  },
  {
    id: "testimonial-2",
    quote:
      "L'approche méthodique de Smart Impulsion nous a permis d'identifier les opportunités d'IA à fort impact et de les déployer rapidement.",
    author: "Ervan Marduel",
    position: "Directeur Général",
    image: "https://i.ibb.co/whfVn5xF/295122456-421629786652142-8920593516092008608-n.jpg",
  },
]

// Équipe avec vos vraies données
export const teamMembers: TeamMember[] = [
  {
    id: "member-1",
    name: "Laurent Bouzon",
    role: "Co-fondateur & CEO",
    bio: "Serial entrepreneur orienté impact, ayant structuré ses précédentes entreprises autour de l'IA avec une maîtrise des leviers permettant un ROI rapide et mesurable.",
    image: "https://i.ibb.co/4w8YjnW6/image-avatar-LB.png",
    linkedin: "https://www.linkedin.com/in/laurent-bouzon-150237108/",
  },
  {
    id: "member-2",
    name: "Mohammad-Ali Bacha",
    role: "Co-fondateur & Expert IA",
    bio: "Entrepreneur et spécialiste en technologies d'IA appliquées aux problématiques business, avec une expertise dans l'implémentation de solutions à forte valeur ajoutée.",
    image: "https://i.ibb.co/GvdCZ8LR/image-avatar-MAB.png",
    linkedin: "https://www.linkedin.com/in/mohammad-ali-bacha/",
  },
]

// Services
export const services: Service[] = [
  {
    id: "service-1",
    icon: "GraduationCap",
    title: "Smart Training",
    subtitle: "Formation",
    description:
      "Programmes de formation personnalisés pour vos équipes sur les technologies d'IA, adaptés à vos besoins spécifiques et orientés vers des résultats concrets.",
  },
  {
    id: "service-2",
    icon: "LineChart",
    title: "Smart Analyse",
    subtitle: "Audit",
    description:
      "Analyse approfondie de vos processus et données pour identifier les opportunités d'optimisation par l'IA avec estimation précise du ROI potentiel.",
  },
  {
    id: "service-3",
    icon: "Cog",
    title: "Smart Action",
    subtitle: "Accompagnement opérationnel",
    description:
      "Mise en œuvre des solutions préconisées avec un accompagnement complet, du développement au déploiement, en mesurant précisément les résultats obtenus.",
  },
]

// Contenu du Hero
export const heroContent: HeroContent = {
  title: "L'IA au service de votre performance.",
  highlightedText: "Avec des résultats mesurables.",
  description:
    "Smart Impulsion ne se contente pas de vous digitaliser. Nous alignons chaque décision technologique sur vos objectifs business, avec un seul critère de succès : un retour sur investissement mesurable, ou rien.",
  ctaText: "Demander une évaluation gratuite",
}
