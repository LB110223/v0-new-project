/**
 * Vérifie que les variables d'environnement requises sont définies
 * et lance une erreur explicite si ce n'est pas le cas
 */
export function validateEnv() {
  const requiredEnvVars = [
    { key: "NOTION_API_KEY", name: "Clé d'API Notion" },
    { key: "NOTION_DATABASE_ID", name: "ID de la base de données Notion" },
  ]

  const missingEnvVars = requiredEnvVars.filter(({ key }) => !process.env[key])

  if (missingEnvVars.length > 0) {
    const missingVarsMessage = missingEnvVars.map(({ key, name }) => `- ${name} (${key})`).join("\n")

    throw new Error(
      `Variables d'environnement manquantes :\n${missingVarsMessage}\n\nVeuillez créer un fichier .env.local à la racine du projet avec ces variables.`,
    )
  }
}
