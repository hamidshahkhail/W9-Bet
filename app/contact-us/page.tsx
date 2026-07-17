import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbJsonLd, organizationJsonLd } from "@/lib/jsonld";
import { HERO_IMAGE, SITE_URL } from "@/lib/site";

const TITLE = "Contact Us – W9 Bet App Pakistan";
const DESCRIPTION =
  "Contact W9 Bet App Pakistan for guide feedback, content suggestions, and questions about our W9 Bet download, deposit, and safety resources.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  keywords: ["W9 Bet App Pakistan", "Contact Us", "W9 Bet support"],
  robots: { index: false, follow: true },
  alternates: { canonical: `${SITE_URL}/contact-us` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/contact-us`,
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

export default function ContactUsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/contact-us`,
    inLanguage: "en-PK",
    isPartOf: { "@type": "WebSite", name: "W9 Bet Game", url: SITE_URL },
    publisher: organizationJsonLd(),
    mainEntity: {
      "@type": "Organization",
      name: "W9 Bet App Pakistan",
      url: SITE_URL,
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer support",
        url: `${SITE_URL}/contact-us`,
        availableLanguage: ["English", "Urdu"],
      },
    },
  };

  const crumbs = breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Contact Us", path: "/contact-us" },
  ]);

  return (
    <div className="main-grid">
      <article className="content-page">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbs) }} />

        <h1 className="content-title">Contact Us – W9 Bet App Pakistan</h1>
        <p className="content-intro">
          We appreciate feedback, suggestions, and questions from visitors of W9 Bet App Pakistan. Your input helps us
          improve our guides and keep information useful for Pakistani players.
        </p>

        <div className="content-card">
          <section className="content-section">
            <h2>How to Reach Us</h2>
            <p>
              This website is an informational resource. For feedback about our articles, corrections, or content
              suggestions, start from the <Link href="/about-us">About Us</Link> page to learn how we create guides, then
              browse the <Link href="/blog">blog hub</Link> for the topics you want improved.
            </p>
            <p>
              For account, deposit, or withdrawal help inside the W9 Bet app, use the in-app live chat support after you
              log in. Our pages explain common steps but do not replace official platform support. Before writing to us,
              check the <Link href="/blog/w9-bet-troubleshooting-guide">W9 Bet troubleshooting guide</Link> for common
              app fixes.
            </p>
            <p>
              You can also review our <Link href="/privacy-policy">Privacy Policy</Link> and{" "}
              <Link href="/disclaimer">Disclaimer</Link>.
            </p>
          </section>
        </div>

        <div className="content-card">
          <section className="content-section">
            <h2>What Feedback Helps Most</h2>
            <ul>
              <li>Unclear steps in a download, deposit, or withdrawal guide</li>
              <li>Outdated payment or install details</li>
              <li>Suggestions for new troubleshooting topics</li>
              <li>Broken links or missing information</li>
            </ul>
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
