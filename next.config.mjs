/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: false,
  },
 
  eslint: {
    ignoreDuringBuilds: true,
  },

  // ---------------------------------------------------------------------------
  // Deduplication editoriale — batch du 2026-08-04
  // Source : knowledge/data/audits/2026-08-04-audit-cannibalisation-clusters.md
  //
  // 7 doublons produits par le moteur editorial entre avril et juin 2026 (amnesie
  // du Keyword Strategist : 6 des 7 paires publiees a 1-3 jours d'ecart).
  // Chaque URL supprimee est redirigee en 301 vers l'article conserve du meme
  // couple. L'article conserve est, dans chaque cas, celui qui porte l'anciennete
  // d'URL et/ou les liens internes entrants (verifie le 2026-08-04).
  //
  // NB : `statusCode: 301` est utilise explicitement plutot que `permanent: true`
  // (qui produirait un 308) — l'audit et la convention SEO du projet demandent 301.
  // ---------------------------------------------------------------------------
  async redirects() {
    return [
      // Couple 1 — « qui former, sur quoi, avec quel budget ? » (4 & 5 mai 2026)
      // Titres et H1 identiques ; le slug supprime n'est qu'un suffixe « -2026 ».
      // Conserve : ...-guide-pratique (4195 mots, 1 lien interne entrant).
      {
        source: "/blog/formation-ia-dirigeants-guide-pratique-2026",
        destination: "/blog/formation-ia-dirigeants-guide-pratique",
        statusCode: 301,
      },

      // Couple 2 — conduite du changement / posture dirigeant (4 & 5 juin 2026)
      // Meme titre a la marque pres ; conserve = version longue (2906 vs 1829 mots).
      {
        source: "/blog/conduite-changement-ia-pme-posture-dirigeant",
        destination: "/blog/conduite-changement-ia-pme-erreurs-posture-dirigeants",
        statusCode: 301,
      },

      // Couple 3 — chatbot IA service client (15 & 17 juin 2026)
      // Conserve = l'URL historique du 2026-01-15 (7 mois d'anciennete + 1 lien
      // interne entrant), dont le titre/H1/excerpt ont deja ete rafraichis en 2026.
      {
        source: "/blog/chatbot-ia-service-client-pme",
        destination: "/blog/chatbots-ia-service-client-2025",
        statusCode: 301,
      },

      // Couple 4 — protocole MCP (16 & 18 juin 2026)
      // Volumes identiques (2375 mots), 0 lien entrant des deux cotes.
      // Conserve = slug en correspondance exacte avec la requete « protocole MCP PME ».
      {
        source: "/blog/mcp-protocole-agents-ia-dirigeants-pme",
        destination: "/blog/protocole-mcp-pme",
        statusCode: 301,
      },

      // Couple 5 — mesure du ROI d'un projet IA (8 & 11 juin 2026)
      // Conserve = l'URL historique du 2026-01-15, qui concentre 5 liens internes
      // entrants (benchmark-roi, cout-ia-tco, business-case x2, budget-ia-pme).
      {
        source: "/blog/mesurer-roi-projet-ia-pme",
        destination: "/blog/roi-intelligence-artificielle-comment-mesurer",
        statusCode: 301,
      },

      // Couple 6 et 7 — trio « audit IA express » (24, 27 & 30 avril 2026)
      // Le duplicate content le plus couteux du blog : 3 URLs quasi identiques sur
      // le mot-cle de l'offre commerciale principale. Conserve = le slug le plus
      // court et le seul a porter un H1 propre.
      {
        source: "/blog/audit-ia-express-methodologie-3-jours",
        destination: "/blog/audit-ia-express-methodologie",
        statusCode: 301,
      },
      {
        source: "/blog/audit-ia-express-3-jours-methodologie",
        destination: "/blog/audit-ia-express-methodologie",
        statusCode: 301,
      },
    ]
  },
}

export default nextConfig