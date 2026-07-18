import { BLOG_POSTS } from "@/app/blog/posts";
import { BRAND_LOGO, HERO_IMAGE } from "@/lib/site";
import { escapeXml, siteOrigin } from "@/lib/sitemap-xml";

export const dynamic = "force-static";

export function GET() {
  const base = siteOrigin();
  const homepageImages = [
    { file: HERO_IMAGE.src.replace(/^\/images\//, ""), title: HERO_IMAGE.alt },
    { file: BRAND_LOGO.src.replace(/^\/images\//, ""), title: BRAND_LOGO.alt },
    { file: "W9Bet-Download.webp", title: "W9 Bet download and bonus promotions" },
    { file: "W9-Bet-Game.webp", title: "W9 Bet games lobby screenshot" },
    { file: "W9-Bet-Pakistan.webp", title: "W9 Bet Pakistan Easypaisa recharge screen" },
    { file: "W9-Bet-Money-Game.webp", title: "W9 Bet agent referral dashboard" },
  ];

  const homepageXml = `  <url>
    <loc>${escapeXml(`${base}/`)}</loc>
${homepageImages
  .map(
    ({ file, title }) => `    <image:image>
      <image:loc>${escapeXml(`${base}/images/${file}`)}</image:loc>
      <image:title>${escapeXml(title)}</image:title>
    </image:image>`,
  )
  .join("\n")}
  </url>`;

  const aboutXml = `  <url>
    <loc>${escapeXml(`${base}/about-us`)}</loc>
    <image:image>
      <image:loc>${escapeXml(`${base}/images/Blog/About-Us.webp`)}</image:loc>
      <image:title>${escapeXml("About W9 Bet App Pakistan")}</image:title>
    </image:image>
  </url>`;

  const blogXml = BLOG_POSTS.map((post) => {
    const pageLoc = `${base}/blog/${post.slug}`;
    const imageLoc = post.featureImage.startsWith("http") ? post.featureImage : `${base}${post.featureImage}`;
    return `  <url>
    <loc>${escapeXml(pageLoc)}</loc>
    <image:image>
      <image:loc>${escapeXml(imageLoc)}</image:loc>
      <image:title>${escapeXml(post.featureImageAlt ?? post.title)}</image:title>
    </image:image>
  </url>`;
  }).join("\n");

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${homepageXml}
${aboutXml}
${blogXml}
</urlset>
`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
