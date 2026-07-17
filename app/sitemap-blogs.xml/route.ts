import { BLOG_POSTS } from "@/app/blog/posts";
import { escapeXml, siteOrigin } from "@/lib/sitemap-xml";

export const dynamic = "force-static";

export function GET() {
  const base = siteOrigin();
  const urls = BLOG_POSTS.map((p) => ({
    loc: `${base}/blog/${p.slug}`,
    priority: ["w9-bet-download", "w9-bet-deposit", "w9-bet-withdrawal", "w9-bet-safety-check-pakistan", "w9-bet-troubleshooting-guide"].includes(p.slug) ? "0.9" : "0.75",
  }));

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    ({ loc, priority }) => `  <url>
    <loc>${escapeXml(loc)}</loc>
    <changefreq>weekly</changefreq>
    <priority>${priority}</priority>
  </url>`,
  )
  .join("\n")}
</urlset>
`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
