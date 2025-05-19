import { CookieSettingsButton } from "./cookie-settings-button"
import { Logo } from "./logo"
import Link from "next/link"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 bg-white border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <Logo variant="footer" className="mb-4" />
            <p className="text-gray-600 mb-4">Transformez votre entreprise avec l'IA et un ROI mesurable.</p>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase text-gray-500 mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-gray-600 hover:text-black transition-colors">
                  Smart Training
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-600 hover:text-black transition-colors">
                  Smart Analyse
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-600 hover:text-black transition-colors">
                  Smart Action
                </a>
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
                <Link href="/presence-locale" className="text-gray-600 hover:text-black transition-colors">
                  Toutes nos implantations
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
