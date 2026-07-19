import { blogPosts } from "@/lib/blog-data"

export const dynamic = "force-static"

const escapeXml = (value: string) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;")

export function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://dionismarkov.com"
  const items = blogPosts
    .map((post) => {
      const link = `${baseUrl}/blog/${post.slug}`
      return `
    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${link}</link>
      <guid isPermaLink="true">${link}</guid>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <description>${escapeXml(post.excerpt)}</description>
    </item>`
    })
    .join("")

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>Dionis Markov — Blog</title>
    <link>${baseUrl}/blog</link>
    <description>Technical articles on engineering, AI, cloud infrastructure, and open-source development.</description>${items}
  </channel>
</rss>`

  return new Response(xml, {
    headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
  })
}
