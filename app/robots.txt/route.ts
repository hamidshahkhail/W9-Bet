import { siteOrigin } from "@/lib/sitemap-xml";

export const dynamic = "force-static";

export function GET() {
  const host = siteOrigin();
  const body = `# robots.txt for w9betgame.com.pk

# ============================================
# AI CONTENT USAGE POLICY (Informational Only)
# ============================================
# This website reserves all rights regarding AI usage of content.
# By crawling this site, AI bots agree to the following:
# - Search indexing: Allowed
# - AI-generated answers: Allowed for user queries
# - AI model training: NOT ALLOWED
#
# ANY UNAUTHORIZED USE FOR AI TRAINING IS EXPRESSLY PROHIBITED AND
# CONSTITUTES A RESERVATION OF RIGHTS UNDER ARTICLE 4 OF THE EUROPEAN
# UNION DIRECTIVE 2019/790 ON COPYRIGHT AND RELATED RIGHTS IN THE
# DIGITAL SINGLE MARKET.

# ============================================
# MAIN CRAWLER RULES
# ============================================

# Allow search engines and general bots
User-agent: *
Allow: /
Disallow: /api/
Disallow: /admin/

# ============================================
# AI BOT RESTRICTIONS (Block Training Bots)
# ============================================

# OpenAI GPTBot (Training)
User-agent: GPTBot
Disallow: /

# Anthropic ClaudeBot (Training)
User-agent: ClaudeBot
Disallow: /

# Google Extended (AI Training only, not search)
User-agent: Google-Extended
Disallow: /

# Meta AI External Agent
User-agent: meta-externalagent
Disallow: /

# Meta AI Bot
User-agent: FacebookBot
Disallow: /

# Amazon Bot
User-agent: Amazonbot
Disallow: /

# Apple AI Extended
User-agent: Applebot-Extended
Disallow: /

# ByteDance/TikTok Spider
User-agent: Bytespider
Disallow: /

# Common Crawl Bot (AI Training)
User-agent: CCBot
Disallow: /

# Perplexity AI Bot
User-agent: PerplexityBot
Disallow: /

# Cohere AI Bot
User-agent: cohere-ai
Disallow: /

# Diffbot
User-agent: Diffbot
Disallow: /

# Omgili Bot
User-agent: omgili
Disallow: /

# ============================================
# SEARCH ENGINE BOTS (Explicitly Allow)
# ============================================

# Google Search Bot (Regular search - not AI training)
User-agent: Googlebot
Allow: /

# Google Image Bot
User-agent: Googlebot-Image
Allow: /

# Bing Bot
User-agent: Bingbot
Allow: /

# Baidu Spider (Chinese search)
User-agent: Baiduspider
Allow: /

# Yandex Bot (Russian search)
User-agent: Yandex
Allow: /

# ============================================
# SITEMAPS
# ============================================

Sitemap: ${host}/sitemap-index.xml
Sitemap: ${host}/sitemap.xml
Sitemap: ${host}/sitemap-images.xml
Sitemap: ${host}/sitemap-blogs.xml

# ============================================
# HOST
# ============================================

Host: ${host}
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, s-maxage=86400, stale-while-revalidate=604800",
    },
  });
}
