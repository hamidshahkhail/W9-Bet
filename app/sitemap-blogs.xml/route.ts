import { BLOG_POSTS } from "@/app/blog/posts";
import { escapeXml, siteOrigin } from "@/lib/sitemap-xml";

export const dynamic = "force-static";

export function GET() {
  const base = siteOrigin();

  const urls = BLOG_POSTS.map((post) => {
    const loc = `${base}/blog/${post.slug}`;
    const lastmod = post.dateModified.slice(0, 10);
    return `  <url>
    <loc>${escapeXml(loc)}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
    <mobile:mobile/>
  </url>`;
  }).join("\n");

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0">
${urls}
</urlset>
`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
