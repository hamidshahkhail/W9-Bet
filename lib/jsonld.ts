import { BRAND_LOGO, SITE_URL } from "@/lib/site";

const ORG_NAME = "W9BetApp.com.pk";

/** Shared Organization node for publisher/author references. */
export function organizationJsonLd() {
  return {
    "@type": "Organization" as const,
    name: ORG_NAME,
    url: SITE_URL,
    logo: {
      "@type": "ImageObject" as const,
      url: `${SITE_URL}${BRAND_LOGO.src}`,
    },
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "W9 Bet Game",
    alternateName: "W9BetApp.com.pk",
    url: SITE_URL,
    inLanguage: "en-PK",
    publisher: organizationJsonLd(),
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.path === "/" ? SITE_URL : `${SITE_URL}${item.path}`,
    })),
  };
}
