import { NextResponse } from "next/server"
import { Resend } from "resend"
import type { ContactFormData } from "@/lib/types"

export async function POST(request: Request) {
  try {
    const data = (await request.json()) as ContactFormData

    if (!data.name || !data.email || !data.message) {
      return NextResponse.json(
        { success: false, message: "Veuillez remplir tous les champs obligatoires" },
        { status: 400 },
      )
    }

    const resend = new Resend(process.env.RESEND_API_KEY)

    const { error } = await resend.emails.send({
      from: "Smart Impulsion <contact@smart-impulsion.com>",
      to: "laurent@smart-impulsion.com",
      replyTo: data.email,
      subject: `Nouveau contact : ${data.name}${data.company ? ` — ${data.company}` : ""}`,
      html: `
        <h2>Nouveau message depuis le site Smart Impulsion</h2>
        <table style="border-collapse: collapse; width: 100%; max-width: 600px;">
          <tr style="border-bottom: 1px solid #eee;">
            <td style="padding: 12px 16px; font-weight: bold; color: #666; width: 120px;">Nom</td>
            <td style="padding: 12px 16px;">${data.name}</td>
          </tr>
          <tr style="border-bottom: 1px solid #eee;">
            <td style="padding: 12px 16px; font-weight: bold; color: #666;">Email</td>
            <td style="padding: 12px 16px;"><a href="mailto:${data.email}">${data.email}</a></td>
          </tr>
          ${data.company ? `
          <tr style="border-bottom: 1px solid #eee;">
            <td style="padding: 12px 16px; font-weight: bold; color: #666;">Entreprise</td>
            <td style="padding: 12px 16px;">${data.company}</td>
          </tr>` : ""}
          ${data.service ? `
          <tr style="border-bottom: 1px solid #eee;">
            <td style="padding: 12px 16px; font-weight: bold; color: #666;">Service</td>
            <td style="padding: 12px 16px;">${data.service}</td>
          </tr>` : ""}
          <tr>
            <td style="padding: 12px 16px; font-weight: bold; color: #666; vertical-align: top;">Message</td>
            <td style="padding: 12px 16px; white-space: pre-wrap;">${data.message}</td>
          </tr>
        </table>
        <p style="margin-top: 24px; color: #999; font-size: 12px;">
          Envoyé depuis le formulaire de contact smart-impulsion.com le ${new Date().toLocaleDateString("fr-FR", { year: "numeric", month: "long", day: "numeric", hour: "2-digit", minute: "2-digit" })}
        </p>
      `,
    })

    if (error) {
      console.error("Erreur Resend:", error)
      return NextResponse.json(
        { success: false, message: "Une erreur est survenue lors de l'envoi" },
        { status: 500 },
      )
    }

    return NextResponse.json({
      success: true,
      message: "Votre message a été envoyé avec succès",
    })
  } catch (error) {
    console.error("Erreur lors du traitement:", error)
    return NextResponse.json(
      { success: false, message: "Une erreur est survenue lors du traitement de votre demande" },
      { status: 500 },
    )
  }
}
