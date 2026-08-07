"use client"

import { CookieSettingsButton } from "./cookie-settings-button"
import { Logo } from "./logo"
import Link from "next/link"
import { useEffect, useState } from "react"

// Types pour les informations générales
interface GeneralInfo {
  siteTitle: string
  siteDescription: string
  contactEmail: string
  phoneNumber: string
  address: string
  roiAverage: string
  footerText: string
}

/**
 * Piliers editoriaux mis en avant dans le pied de page.
 *
 * Source de verite : `config/clusters.yaml` (depot content-engine). Cette liste
 * en est une copie — a resynchroniser si les piliers changent.
 *
 * ============================================================================
 * LA REGLE DE COMPOSITION — ne pas raisonner en « combien d'entrees »
 * ============================================================================
 * Arbitree par le seo-geo-strategist le 2026-08-07 et inscrite dans
 * `config/clusters.yaml` -> `footer_links` (source de verite).
 *
 *   > Le pied de page porte le pilier de CHAQUE CLUSTER qui en a un,
 *   > sauf un pilier connu comme factuellement faux.
 *
 * C'est une REGLE, pas une liste de N entrees, et c'est deliberé : un nombre
 * choisi a la main est exactement ce qui a produit le defaut d'origine — 4
 * articles selectionnes en janvier 2026, jamais revus, pendant que le corpus
 * passait de ~15 a 58 articles. Une regle, elle, vieillit toute seule.
 *
 * Etat de l'application de la regle au 2026-08-07 — 7 clusters :
 *   - 5 clusters ont un pilier exploitable        -> les 5 entrees ci-dessous
 *   - `formation` : son pilier est EXCLU. `formation-ia-dirigeants-guide-pratique`
 *     fait partie des articles factuellement faux sur l'article 4 de l'AI Act.
 *     Un lien sitewide concentrerait l'autorite du site sur une affirmation
 *     qu'il faudra desavouer. A reintegrer une fois l'article corrige.
 *   - `tendances-agentic` : pas de pilier -> rien a porter.
 *
 * DONC : si un cluster gagne un pilier, si un pilier faux est corrige, ou si un
 * pilier devient faux, cette liste change. Le nombre d'entrees est un RESULTAT
 * de la regle, jamais une cible. Resynchroniser avec `footer_links`.
 *
 * POURQUOI DES PILIERS, ET POURQUOI FIXES
 * Le pied de page est monte dans `app/layout.tsx` : chacun de ces liens est
 * repete sur TOUTES les pages du site (75 URL au sitemap au 2026-08-07). C'est,
 * de loin, le premier emetteur de liens internes du site.
 *
 * Chaque pilier recoit un lien par page, quel que soit le nombre d'entrees :
 * ajouter une entree n'en retire a aucune autre (l'effet de dilution reel, par
 * partage de l'autorite sortante de chaque page, est de l'ordre de 2-3 %).
 *
 * Deux regles en decoulent :
 *  1. Une cible repetee sur chaque page doit etre une page que l'on veut faire ranker
 *     durablement — donc un pilier, jamais un article d'actualite. La liste
 *     precedente pointait vers 4 articles de janvier-fevrier 2026, figes depuis
 *     le lancement alors que le corpus passait de ~15 a 58 articles.
 *  2. Cette liste ne doit JAMAIS etre triee par fraicheur. Un pied de page qui
 *     suivrait les publications rebrasserait le maillage de tout le site chaque
 *     matin, et aucune page n'accumulerait de capital de liens. La stabilite est
 *     precisement l'interet des piliers.
 *
 * Les 3 piliers P0 disposent d'une route statique dediee sous `app/blog/`, qui
 * prime sur `[slug]` — l'URL servie est bien `/blog/<slug>` dans les deux cas
 * (verifie en production).
 *
 * Ne PAS rendre cette liste contextuelle sans arbitrage editorial : un lien
 * repete sur toutes les pages ne peut porter aucune pertinence thematique, et
 * doit viser une page que l'on veut faire ranker pendant des annees.
 *
 * Les libelles servent d'ancre de lien : ils portent le sujet de la page cible,
 * jamais une formule generique type « En savoir plus », qui ne transmettrait
 * aucun signal a force de repetition.
 */
const BLOG_PILLARS: ReadonlyArray<{ slug: string; label: string }> = [
  { slug: "audit-ia-pme-guide-complet", label: "Audit IA pour PME" },
  { slug: "roi-intelligence-artificielle-entreprise", label: "ROI de l'IA en entreprise" },
  { slug: "ia-pour-pme-guide", label: "IA pour PME : par où commencer" },
  { slug: "cas-usage-ia-pme-par-metier", label: "Cas d'usage IA par métier" },
  { slug: "ai-act-pme-guide-2026", label: "AI Act : guide conformité PME" },
]

// Informations générales par défaut
const defaultGeneralInfo: GeneralInfo = {
  siteTitle: "Smart Impulsion | IA à ROI mesurable pour entreprises françaises",
  siteDescription:
    "Smart Impulsion transforme votre entreprise avec des solutions d'intelligence artificielle garantissant un retour sur investissement mesurable.",
  contactEmail: "contact@smart-impulsion.com",
  phoneNumber: "04 82 53 28 16",
  address: "70 quai Perrache, 69002 Lyon",
  roiAverage: "+24%",
  footerText: "Transformez votre entreprise avec l'IA et un ROI mesurable.",
}

export function Footer() {
  const currentYear = new Date().getFullYear()
  const [generalInfo, setGeneralInfo] = useState(defaultGeneralInfo)

  // Charger les informations générales depuis localStorage
  useEffect(() => {
    try {
      const savedInfo = localStorage.getItem("general_info")
      if (savedInfo) {
        setGeneralInfo(JSON.parse(savedInfo))
      }
    } catch (error) {
      console.error("Erreur lors du chargement des informations générales:", error)
    }
  }, [])

  return (
    <footer className="py-12 bg-white border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          <div>
            <Logo variant="footer" className="mb-4" />
            <p className="text-gray-600 mb-4">{generalInfo.footerText}</p>
            {generalInfo.address && (
              <p className="text-gray-600 text-sm mb-1">{generalInfo.address}</p>
            )}
            {generalInfo.phoneNumber && (
              <p className="text-gray-600 text-sm mb-1">
                <a href={`tel:+33482532816`} className="hover:text-orange-500 transition-colors">
                  {generalInfo.phoneNumber}
                </a>
              </p>
            )}
            {generalInfo.contactEmail && (
              <p className="text-gray-600 text-sm">
                <a href={`mailto:${generalInfo.contactEmail}`} className="hover:text-orange-500 transition-colors">
                  {generalInfo.contactEmail}
                </a>
              </p>
            )}
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase text-gray-500 mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/formation" className="text-gray-600 hover:text-black transition-colors">
                  Smart Training
                </Link>
              </li>
              <li>
                <Link href="/services/audit" className="text-gray-600 hover:text-black transition-colors">
                  Smart Analyse
                </Link>
              </li>
              <li>
                <Link href="/services/accompagnement" className="text-gray-600 hover:text-black transition-colors">
                  Smart Action
                </Link>
              </li>
              <li>
                <Link href="/a-propos" className="text-gray-600 hover:text-black transition-colors">
                  A propos
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-600 hover:text-black transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase text-gray-500 mb-4">Présence locale</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/presence-locale/lyon" className="text-gray-600 hover:text-black transition-colors">
                  Lyon
                </Link>
              </li>
              <li>
                <Link href="/presence-locale/paris" className="text-gray-600 hover:text-black transition-colors">
                  Paris
                </Link>
              </li>
              <li>
                <Link href="/presence-locale/marseille" className="text-gray-600 hover:text-black transition-colors">
                  Marseille
                </Link>
              </li>
              <li>
                <Link href="/presence-locale/bordeaux" className="text-gray-600 hover:text-black transition-colors">
                  Bordeaux
                </Link>
              </li>
              <li>
                <Link href="/presence-locale/nantes" className="text-gray-600 hover:text-black transition-colors">
                  Nantes
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase text-gray-500 mb-4">Blog</h3>
            <ul className="space-y-2">
              {BLOG_PILLARS.map((pillar) => (
                <li key={pillar.slug}>
                  <Link
                    href={`/blog/${pillar.slug}`}
                    className="text-gray-600 hover:text-black transition-colors"
                  >
                    {pillar.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/blog" className="text-gray-600 hover:text-black transition-colors font-medium">
                  Tous les articles
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase text-gray-500 mb-4">Légal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/politique-de-confidentialite" className="text-gray-600 hover:text-black transition-colors">
                  Politique de Confidentialité
                </Link>
              </li>
              <li>
                <Link href="/mentions-legales" className="text-gray-600 hover:text-black transition-colors">
                  Mentions Légales
                </Link>
              </li>
              <li>
                <Link href="/notice-prospection" className="text-gray-600 hover:text-black transition-colors">
                  Notice de prospection
                </Link>
              </li>
              <li className="mt-4">
                <CookieSettingsButton className="text-gray-600 hover:text-black bg-transparent hover:bg-gray-100 border-gray-300 text-sm p-2 h-auto" />
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">© {currentYear} Smart Impulsion. Tous droits réservés.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="https://www.linkedin.com/company/107340725"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-black"
              >
                <span className="sr-only">LinkedIn</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
