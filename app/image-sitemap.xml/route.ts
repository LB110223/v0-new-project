import { blogArticles } from "@/lib/blog-data"

const baseUrl = "https://www.smart-impulsion.com"

export function GET() {
  const urls = blogArticles
    .map((article) => {
      const imageUrl = article.image.startsWith("http")
        ? article.image
        : `${baseUrl}${article.image}`
      const imageTitle = article.imageAlt || article.title

      return `  <url>
    <loc>${baseUrl}/blog/${article.slug}</loc>
    <image:image>
      <image:loc>${imageUrl}</image:loc>
      <image:title>${escapeXml(imageTitle)}</image:title>
    </image:image>
  </url>`
    })
    .join("\n")

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urls}
</urlset>`

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
    },
  })
}

function escapeXml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;")
}
