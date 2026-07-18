import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { websiteJsonLd } from "@/lib/jsonld";
import { HERO_IMAGE, SITE_URL } from "@/lib/site";

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "W9 Bet Download – Free APK for Pakistan 2026",
  description:
    "Explore W9 Bet: download APK, claim bonuses, play slots, card & prediction games, deposit via Easypaisa/JazzCash. Full Pakistan guide 2026.",
  formatDetection: { telephone: false },
  robots: { index: true, follow: true },
  // Favicons: app/icon.png (192) + app/apple-icon.png (180) from W9.BET mark.
  // Cropped to W+9 only for clarity at small sizes; PNG for Safari compatibility.
  openGraph: {
    type: "website",
    locale: "en_PK",
    siteName: "W9 Bet Game",
    url: SITE_URL,
    images: [{ url: HERO_IMAGE.src, width: HERO_IMAGE.width, height: HERO_IMAGE.height, alt: HERO_IMAGE.alt }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const siteSchema = websiteJsonLd();

  return (
    <html lang="en-PK">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteSchema) }}
        />
        <Header />
        <main id="main-content" className="page">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
