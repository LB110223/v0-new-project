import { NextResponse } from "next/server"
import { addContactToNotion, type ContactFormData } from "@/lib/notion"

export async function POST(request: Request) {
  try {
    const data = (await request.json()) as ContactFormData

    // Validation basique
    if (!data.name || !data.email || !data.message) {
      return NextResponse.json(
        { success: false, message: "Veuillez remplir tous les champs obligatoires" },
        { status: 400 },
      )
    }

    // Afficher l'ID de la base de données pour le débogage
    console.log("ID de la base de données Notion:", process.env.NOTION_DATABASE_ID)

    // Ajouter le contact à Notion
    const result = await addContactToNotion(data)

    if (result.success) {
      return NextResponse.json({
        success: true,
        message: "Votre message a été envoyé avec succès",
      })
    } else {
      return NextResponse.json(
        {
          success: false,
          message: result.error || "Une erreur est survenue",
          debug: {
            databaseId: process.env.NOTION_DATABASE_ID,
            error: result.errorDetails || "Pas de détails supplémentaires",
          },
        },
        { status: 500 },
      )
    }
  } catch (error) {
    console.error("Erreur lors du traitement de la demande:", error)
    return NextResponse.json(
      {
        success: false,
        message: "Une erreur est survenue lors du traitement de votre demande",
        debug: {
          error: error instanceof Error ? error.message : "Erreur inconnue",
          stack: error instanceof Error ? error.stack : null,
        },
      },
      { status: 500 },
    )
  }
}
