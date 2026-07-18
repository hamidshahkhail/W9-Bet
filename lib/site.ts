/** Live Search Console / canonical domain — do not point at w9betgame.com.pk. */
export const SITE_URL = "https://w9betapp.com.pk";

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
