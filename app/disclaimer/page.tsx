import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbJsonLd, organizationJsonLd } from "@/lib/jsonld";
import { HERO_IMAGE, SITE_URL } from "@/lib/site";

const TITLE = "Disclaimer – W9 Bet App Pakistan";
const DESCRIPTION =
  "Read the W9 Bet App Pakistan disclaimer. This site provides informational guides only and does not operate the official W9 Bet service.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  keywords: ["W9 Bet App Pakistan", "Disclaimer", "W9 Bet"],
  robots: { index: false, follow: true },
  alternates: { canonical: `${SITE_URL}/disclaimer` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/disclaimer`,
    type: "website",
    images: [{ url: `${SITE_URL}${HERO_IMAGE.src}`, width: HERO_IMAGE.width, height: HERO_IMAGE.height, alt: HERO_IMAGE.alt }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [`${SITE_URL}${HERO_IMAGE.src}`],
  },
};

export default function DisclaimerPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/disclaimer`,
    inLanguage: "en-PK",
    isPartOf: { "@type": "WebSite", name: "W9 Bet Game", url: SITE_URL },
    publisher: organizationJsonLd(),
  };

  const crumbs = breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Disclaimer", path: "/disclaimer" },
  ]);

  return (
    <div className="main-grid">
      <article className="content-page">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbs) }} />

        <h1 className="content-title">Disclaimer – W9 Bet App Pakistan</h1>
        <p className="content-intro">
          W9 Bet App Pakistan is an informational website created to provide guides, tutorials, and educational resources
          related to the W9 Bet platform.
        </p>

        <div className="content-card">
          <section className="content-section">
            <h2>Independent Informational Resource</h2>
            <p>
              We do not claim to represent or operate the official W9 Bet service. Brand names and app references are used
              for informational and descriptive purposes only.
            </p>
            <p>
              Users should always verify information, follow responsible usage practices, and understand applicable rules
              and regulations in their location.
            </p>
          </section>
        </div>

        <div className="content-card">
          <section className="content-section">
            <h2>User Responsibility</h2>
            <p>
              Any decisions, transactions, or activities performed on third-party platforms are the user&apos;s own
              responsibility. This website does not guarantee outcomes, bonuses, payouts, or continued availability of any
              third-party feature.
            </p>
            <p>
              For platform overview and content standards, visit <Link href="/about-us">About Us</Link>. For how we handle
              site browsing data, see the <Link href="/privacy-policy">Privacy Policy</Link>. Questions about our content
              can go through <Link href="/contact-us">Contact Us</Link>.
            </p>
          </section>
        </div>

        <p style={{ marginTop: "1rem" }}>
          <Link href="/" className="back-home-btn">
            Back to homepage
          </Link>
        </p>
      </article>
    </div>
  );
}
