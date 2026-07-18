import { BLOG_POSTS } from "@/app/blog/posts";
import { escapeXml, siteOrigin } from "@/lib/sitemap-xml";

export const dynamic = "force-static";

type SitemapEntry = {
  path: string;
  lastmod: string;
  changefreq: "daily" | "weekly" | "monthly" | "yearly";
  priority: string;
};

function formatDate(iso: string): string {
  return iso.slice(0, 10);
}

function latestBlogDate(): string {
  return BLOG_POSTS.map((p) => p.dateModified).sort().at(-1) ?? "2026-07-17";
}

export function GET() {
  const base = siteOrigin();
  const blogUpdated = formatDate(latestBlogDate());

  const entries: SitemapEntry[] = [
    { path: "/", lastmod: blogUpdated, changefreq: "daily", priority: "1.0" },
    { path: "/blog", lastmod: blogUpdated, changefreq: "weekly", priority: "0.8" },
    ...BLOG_POSTS.map((post) => ({
      path: `/blog/${post.slug}`,
      lastmod: formatDate(post.dateModified),
      changefreq: "weekly" as const,
      priority: "0.9",
    })),
    { path: "/about-us", lastmod: "2026-07-13", changefreq: "monthly", priority: "0.7" },
    { path: "/contact-us", lastmod: "2026-07-13", changefreq: "monthly", priority: "0.7" },
    { path: "/privacy-policy", lastmod: "2026-07-13", changefreq: "yearly", priority: "0.6" },
    { path: "/disclaimer", lastmod: "2026-07-13", changefreq: "yearly", priority: "0.6" },
  ];

  const urls = entries
    .map((entry) => {
      const loc = entry.path === "/" ? `${base}/` : `${base}${entry.path}`;
      return `  <url>
    <loc>${escapeXml(loc)}</loc>
    <lastmod>${entry.lastmod}</lastmod>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority}</priority>
    <mobile:mobile/>
  </url>`;
    })
    .join("\n");

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
