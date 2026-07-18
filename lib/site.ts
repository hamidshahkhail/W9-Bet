const DEFAULT_SITE_URL = "https://w9betgame.com.pk";

/** Avoids invalid `metadataBase` when env is empty or not a valid URL. */
function normalizeSiteUrl(raw: string | undefined): string {
  const trimmed = raw?.trim() ?? "";
  if (!trimmed) return DEFAULT_SITE_URL;
  const withProtocol = /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`;
  try {
    return new URL(withProtocol).origin.replace(/\/$/, "");
  } catch {
    return DEFAULT_SITE_URL;
  }
}

/** Canonical site origin for metadata, sitemap, and robots. Override with NEXT_PUBLIC_SITE_URL in production. */
export const SITE_URL = normalizeSiteUrl(process.env.NEXT_PUBLIC_SITE_URL);

/** External download target used by all download CTAs. */
export const DOWNLOAD_URL = "https://w9.bet/download?from_gameid=7872231&channelCode=100000";

/** Primary hero / OG image — square app icon. */
export const HERO_IMAGE = {
  src: "/images/w9-bet-app-icon.webp",
  alt: "W9.BET app icon — download free APK for Pakistan gaming",
  width: 512,
  height: 512,
} as const;

/** Header / footer wordmark banner (icon + W9 Bet text). */
export const BRAND_LOGO = {
  src: "/images/w9-bet-pakistan-logo-banner.webp",
  alt: "W9 Bet Pakistan — official gaming app logo and download site",
  width: 440,
  height: 80,
} as const;
