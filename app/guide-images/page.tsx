import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function GuideImages() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6 bg-blue-600 text-white">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold">Guide : Comment héberger des images pour votre site</h1>
              <Link href="/admin-panel-si2023" className="text-white hover:text-blue-100">
                <ArrowLeft className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div className="p-6">
            <div className="prose max-w-none">
              <h2>Option 1 : Utiliser ImgBB (Recommandé)</h2>
              <p>ImgBB est un service gratuit d'hébergement d'images qui fournit des URLs directes.</p>

              <ol>
                <li>
                  <p>
                    <strong>Visitez le site ImgBB</strong>
                  </p>
                  <p>
                    Allez sur{" "}
                    <a href="https://imgbb.com/" target="_blank" rel="noopener noreferrer">
                      https://imgbb.com/
                    </a>
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Téléchargez votre image</strong>
                  </p>
                  <p>Cliquez sur le bouton "Start uploading" ou glissez-déposez votre image</p>
                </li>
                <li>
                  <p>
                    <strong>Obtenez l'URL directe</strong>
                  </p>
                  <p>Après le téléchargement, cherchez "Direct links" et copiez l'URL sous "Direct link"</p>
                </li>
                <li>
                  <p>
                    <strong>Utilisez cette URL dans le panneau d'administration</strong>
                  </p>
                </li>
              </ol>

              <h2>Option 2 : Utiliser Imgur</h2>
              <p>Imgur est un autre service populaire pour l'hébergement d'images.</p>

              <ol>
                <li>
                  <p>
                    <strong>Visitez le site Imgur</strong>
                  </p>
                  <p>
                    Allez sur{" "}
                    <a href="https://imgur.com/" target="_blank" rel="noopener noreferrer">
                      https://imgur.com/
                    </a>
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Téléchargez votre image</strong>
                  </p>
                  <p>Cliquez sur le bouton "New post" en haut de la page</p>
                </li>
                <li>
                  <p>
                    <strong>Obtenez l'URL directe</strong>
                  </p>
                  <p>
                    Après le téléchargement, faites un clic droit sur l'image et sélectionnez "Copier l'adresse de
                    l'image"
                  </p>
                  <p>L'URL doit se terminer par .jpg, .png, ou un autre format d'image</p>
                </li>
              </ol>

              <h2>Option 3 : Utiliser Postimages</h2>
              <p>Postimages est un service simple qui ne nécessite pas de compte.</p>

              <ol>
                <li>
                  <p>
                    <strong>Visitez le site Postimages</strong>
                  </p>
                  <p>
                    Allez sur{" "}
                    <a href="https://postimages.org/" target="_blank" rel="noopener noreferrer">
                      https://postimages.org/
                    </a>
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Téléchargez votre image</strong>
                  </p>
                  <p>Cliquez sur "Choose Images" et sélectionnez votre fichier</p>
                </li>
                <li>
                  <p>
                    <strong>Obtenez l'URL directe</strong>
                  </p>
                  <p>Après le téléchargement, copiez l'URL sous "Direct link"</p>
                </li>
              </ol>

              <h2>Conseils importants</h2>
              <ul>
                <li>Assurez-vous que l'URL se termine par une extension d'image (.jpg, .png, .webp, etc.)</li>
                <li>Utilisez des images carrées pour un meilleur rendu dans la section équipe</li>
                <li>Optimisez vos images pour le web (taille recommandée : 500x500 pixels)</li>
                <li>Testez l'URL dans un nouvel onglet pour vérifier qu'elle affiche bien l'image directement</li>
              </ul>

              <h2>Résolution des problèmes courants</h2>
              <ul>
                <li>
                  <strong>L'image ne s'affiche pas</strong> - Assurez-vous que l'URL pointe directement vers l'image et
                  non vers une page web contenant l'image
                </li>
                <li>
                  <strong>Message d'erreur "CORS"</strong> - Certains services bloquent l'utilisation de leurs images
                  sur d'autres sites. Essayez un autre service d'hébergement
                </li>
                <li>
                  <strong>L'image s'affiche dans le panneau d'administration mais pas sur le site</strong> -
                  Rafraîchissez la page d'accueil après avoir sauvegardé les images
                </li>
              </ul>
            </div>

            <div className="mt-8">
              <Link
                href="/admin-panel-si2023"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
              >
                Retour au panneau d'administration
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
