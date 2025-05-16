import { NextResponse } from "next/server"

export async function GET() {
  const missingVars = []

  if (!process.env.NOTION_API_KEY) {
    missingVars.push("NOTION_API_KEY")
  }

  if (!process.env.NOTION_DATABASE_ID) {
    missingVars.push("NOTION_DATABASE_ID")
  }

  if (missingVars.length > 0) {
    return NextResponse.json({
      success: false,
      message: `Variables d'environnement manquantes : ${missingVars.join(", ")}`,
      missingVars,
    })
  }

  return NextResponse.json({
    success: true,
  })
}
