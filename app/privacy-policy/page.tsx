import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbJsonLd, organizationJsonLd } from "@/lib/jsonld";
import { HERO_IMAGE, SITE_URL } from "@/lib/site";

const TITLE = "Privacy Policy – W9 Bet App Pakistan";
const DESCRIPTION =
  "Read the W9 Bet App Pakistan privacy policy. Learn how this informational website handles browsing data and visitor privacy.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  keywords: ["W9 Bet App Pakistan", "Privacy Policy", "W9 Bet"],
  robots: { index: false, follow: true },
  alternates: { canonical: `${SITE_URL}/privacy-policy` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/privacy-policy`,
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

export default function PrivacyPolicyPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/privacy-policy`,
    inLanguage: "en-PK",
    isPartOf: { "@type": "WebSite", name: "W9 Bet Game", url: SITE_URL },
    publisher: organizationJsonLd(),
  };

  const crumbs = breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Privacy Policy", path: "/privacy-policy" },
  ]);

  return (
    <div className="main-grid">
      <article className="content-page">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbs) }} />

        <h1 className="content-title">Privacy Policy – W9 Bet App Pakistan</h1>
        <p className="content-intro">
          This Privacy Policy explains how W9 Bet App Pakistan handles information when you visit our informational
          website. We are not the official W9 Bet operator and do not process gameplay deposits or withdrawals on this
          site.
        </p>

        <div className="content-card">
          <section className="content-section">
            <h2>Information We May Collect</h2>
            <p>
              Like most websites, basic technical data may be collected automatically — for example browser type, device
              type, pages visited, and approximate location derived from IP address — to keep the site secure and
              understand how guides are used.
            </p>
            <p>
              We do not ask you to create an account on this website, and we do not collect Easypaisa, JazzCash, or other
              payment credentials through our pages.
            </p>
          </section>
        </div>

        <div className="content-card">
          <section className="content-section">
            <h2>Cookies and Analytics</h2>
            <p>
              Cookies or similar technologies may be used for essential site functions and performance measurement. You
              can control cookies through your browser settings.
            </p>
          </section>
        </div>

        <div className="content-card">
          <section className="content-section">
            <h2>Third-Party Links</h2>
            <p>
              Our guides may link to the official W9 Bet download destination or other external sites. Those third-party
              sites have their own privacy practices. Review their policies before sharing personal information.
            </p>
          </section>
        </div>

        <div className="content-card">
          <section className="content-section">
            <h2>Updates</h2>
            <p>
              We may update this Privacy Policy when our practices change. The latest version will always be available on
              this page. For more about our informational purpose, see <Link href="/about-us">About Us</Link>, reach us
              via <Link href="/contact-us">Contact Us</Link>, or read our <Link href="/disclaimer">Disclaimer</Link>.
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
