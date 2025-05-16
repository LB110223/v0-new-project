import { Client } from "@notionhq/client"

// Initialiser le client Notion avec la clé d'API
const notion = new Client({
  auth: process.env.NOTION_API_KEY,
})

// ID de la base de données Notion où vous souhaitez stocker les soumissions de formulaire
const databaseId = process.env.NOTION_DATABASE_ID

export interface ContactFormData {
  name: string
  email: string
  company: string
  service: string
  message: string
}

export async function addContactToNotion(formData: ContactFormData) {
  try {
    if (!databaseId) {
      throw new Error("L'ID de la base de données Notion n'est pas défini")
    }

    console.log("Tentative d'ajout à la base de données Notion avec l'ID:", databaseId)

    // Créer une nouvelle entrée dans la base de données Notion
    const response = await notion.pages.create({
      parent: {
        database_id: databaseId,
      },
      properties: {
        // Ces propriétés doivent correspondre aux noms des colonnes dans votre base de données Notion
        Nom: {
          title: [
            {
              text: {
                content: formData.name,
              },
            },
          ],
        },
        Email: {
          email: formData.email,
        },
        Entreprise: {
          rich_text: [
            {
              text: {
                content: formData.company,
              },
            },
          ],
        },
        Service: {
          select: {
            name: formData.service,
          },
        },
        Message: {
          rich_text: [
            {
              text: {
                content: formData.message,
              },
            },
          ],
        },
        Date: {
          date: {
            start: new Date().toISOString(),
          },
        },
      },
    })

    return {
      success: true,
      id: response.id,
    }
  } catch (error) {
    console.error("Erreur lors de l'ajout du contact à Notion:", error)
    return {
      success: false,
      error: error instanceof Error ? error.message : "Une erreur inconnue s'est produite",
      errorDetails: error instanceof Error ? error.stack : null,
    }
  }
}
