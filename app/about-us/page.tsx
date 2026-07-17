import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbJsonLd, organizationJsonLd } from "@/lib/jsonld";
import { SITE_URL } from "@/lib/site";

const SEO_TITLE = "About Us – W9 Bet App Pakistan Information & Guides";
const META_DESCRIPTION =
  "Learn about W9 Bet App Pakistan, our mission, content standards, and commitment to providing helpful W9 Bet App guides, updates, and safety information.";
const FOCUS_KEYWORD = "W9 Bet App Pakistan";
const ABOUT_IMAGE = {
  src: "/images/Blog/About-Us.webp",
  width: 1200,
  height: 675,
  alt: "About W9 Bet App Pakistan — informational guides and safety resources",
} as const;

export const metadata: Metadata = {
  title: { absolute: SEO_TITLE },
  description: META_DESCRIPTION,
  keywords: [FOCUS_KEYWORD, "W9 Bet", "W9 Bet Pakistan", "W9 Bet guides", "About W9 Bet"],
  alternates: { canonical: `${SITE_URL}/about-us` },
  openGraph: {
    title: SEO_TITLE,
    description: META_DESCRIPTION,
    url: `${SITE_URL}/about-us`,
    type: "website",
    locale: "en_PK",
    images: [
      {
        url: `${SITE_URL}${ABOUT_IMAGE.src}`,
        width: ABOUT_IMAGE.width,
        height: ABOUT_IMAGE.height,
        alt: ABOUT_IMAGE.alt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SEO_TITLE,
    description: META_DESCRIPTION,
    images: [`${SITE_URL}${ABOUT_IMAGE.src}`],
  },
};

export default function AboutUsPage() {
  const aboutJsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: SEO_TITLE,
    description: META_DESCRIPTION,
    url: `${SITE_URL}/about-us`,
    inLanguage: "en-PK",
    isPartOf: {
      "@type": "WebSite",
      name: "W9 Bet Game",
      url: SITE_URL,
    },
    publisher: organizationJsonLd(),
    about: {
      "@type": "Thing",
      name: FOCUS_KEYWORD,
      description:
        "Informational guides and tutorials for W9 Bet app users in Pakistan covering download, deposits, withdrawals, and safety.",
    },
  };

  const crumbs = breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about-us" },
  ]);

  return (
    <div className="main-grid">
      <article className="content-page">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbs) }} />

        <h1 className="content-title">About Us – W9 Bet App Pakistan</h1>

        <p className="content-intro">
          Welcome to <strong>W9 Bet App Pakistan</strong>, a dedicated informational platform created to provide users with
          helpful guides, tutorials, and updates related to the W9 Bet gaming experience. Our purpose is to make it easier
          for visitors to understand app features, account procedures, payment-related information, gameplay options, and
          important safety practices.
        </p>

        <div className="content-card">
          <section className="content-section">
            <p>
              As digital gaming platforms continue to gain attention among users in Pakistan, finding clear and reliable
              information has become increasingly important. At W9 Bet App Pakistan, we focus on creating simple, detailed,
              and user-friendly content that helps visitors understand different aspects of the platform before using its
              features.
            </p>
            <p>
              Our website is designed to provide educational resources, practical guides, and updated information so users
              can explore topics with better understanding and awareness. Dedicated articles on download, deposit,
              withdrawal, and safety are available on the <Link href="/blog">blog hub</Link>.
            </p>
          </section>
        </div>

        <div className="content-card">
          <section className="content-section" id="mission">
            <h2>Our Mission</h2>
            <p>
              The mission of W9 Bet App Pakistan is to provide accurate, easy-to-follow, and valuable information for users
              searching for W9 Bet-related guides.
            </p>
            <p>We aim to simplify complex topics by providing:</p>
            <ul>
              <li>Step-by-step tutorials</li>
              <li>App usage guides</li>
              <li>Registration and login information</li>
              <li>Deposit and withdrawal explanations</li>
              <li>Feature breakdowns</li>
              <li>Security awareness tips</li>
              <li>Helpful answers to common questions</li>
            </ul>
            <p>Our goal is to help users access useful information in a clear and organized way.</p>
          </section>
        </div>

        <div className="content-card">
          <section className="content-section" id="what-we-do">
            <h2>What We Do</h2>
            <p>
              At W9 Bet App Pakistan, we create content focused on helping users understand different features and processes
              associated with the platform.
            </p>
            <p>Our website covers various topics, including:</p>

            <h3>W9 Bet App Guides</h3>
            <p>
              We provide detailed articles explaining app features, navigation options, and general usage instructions.
              Start with the <Link href="/blog/w9-bet-download">W9 Bet download guide</Link> for install and registration
              steps.
            </p>

            <h3>Account Setup Information</h3>
            <p>
              Creating and managing an account can sometimes be confusing for new users. Our guides explain important steps
              related to registration, login, account access, and common account-related questions. Payment setup continues
              in the <Link href="/blog/w9-bet-deposit">W9 Bet deposit guide</Link>.
            </p>

            <h3>Payment and Transaction Guides</h3>
            <p>
              We provide informational content about payment-related features, including available payment options, deposit
              procedures, withdrawal information, and transaction safety practices. Cash-out steps are covered in the{" "}
              <Link href="/blog/w9-bet-withdrawal">W9 Bet withdrawal guide</Link>.
            </p>
            <p>Our aim is to help users understand processes clearly and avoid common mistakes.</p>

            <h3>Security and Safety Resources</h3>
            <p>
              Online safety is an important part of any digital platform. We share useful security practices that help users
              protect their accounts, personal information, and transaction details in the{" "}
              <Link href="/blog/w9-bet-safety-check-pakistan">W9 Bet safety check Pakistan guide</Link>. For login errors and
              crashes, see the <Link href="/blog/w9-bet-troubleshooting-guide">W9 Bet troubleshooting guide</Link>.
            </p>
          </section>
        </div>

        <div className="content-card">
          <section className="content-section" id="why-us">
            <h2>Why W9 Bet App Pakistan?</h2>
            <p>
              The internet contains a large amount of gaming-related information, but not all sources provide clear and
              organized explanations. Our purpose is to create a reliable knowledge resource where users can easily find useful
              information.
            </p>
            <p>We focus on:</p>

            <h3>Simple and Clear Information</h3>
            <p>
              Our content is written in an easy-to-understand format so users can quickly find answers without dealing with
              unnecessary complexity.
            </p>

            <h3>User-Focused Guides</h3>
            <p>
              Every article is created around common user questions and real search needs. We focus on providing practical
              explanations instead of generic information.
            </p>

            <h3>Updated Content</h3>
            <p>
              Digital platforms and online services continue to change. We aim to keep our guides relevant by improving and
              updating information whenever necessary.
            </p>

            <h3>Responsible Usage Awareness</h3>
            <p>
              We encourage users to understand platform features, protect their information, and follow responsible online
              practices.
            </p>
          </section>
        </div>

        <div className="content-card">
          <section className="content-section" id="content-approach">
            <h2>Our Content Approach</h2>
            <p>At W9 Bet App Pakistan, quality and usefulness are our main priorities.</p>
            <p>We follow a user-first approach by focusing on:</p>
            <ul>
              <li>Accurate explanations</li>
              <li>Easy navigation</li>
              <li>Detailed guides</li>
              <li>Helpful solutions</li>
              <li>Clear instructions</li>
            </ul>
            <p>
              Our content is created to answer important questions users may have before exploring different platform
              features.
            </p>
            <p>We avoid unnecessary information and focus on providing content that helps visitors make informed decisions.</p>
          </section>
        </div>

        <div className="content-card">
          <section className="content-section" id="security">
            <h2>Security and Privacy Awareness</h2>
            <p>
              Protecting personal information is an important part of the online experience. We believe users should always
              follow basic security practices when using any digital application.
            </p>
            <p>Users should:</p>
            <ul>
              <li>Keep passwords private</li>
              <li>Never share OTP codes</li>
              <li>Avoid suspicious links</li>
              <li>Download applications from trusted sources</li>
              <li>Verify transaction details carefully</li>
              <li>Monitor account activity regularly</li>
            </ul>
            <p>
              Following these practices can help users maintain better control over their online accounts.
            </p>
          </section>
        </div>

        <div className="content-card">
          <section className="content-section" id="commitment">
            <h2>Our Commitment to Users</h2>
            <p>
              Our commitment at W9 Bet App Pakistan is to continue providing useful, informative, and easy-to-understand
              content.
            </p>
            <p>We aim to become a helpful resource by covering topics that matter most to users, including:</p>
            <ul>
              <li>App guides</li>
              <li>Feature explanations</li>
              <li>Payment information</li>
              <li>Safety tips</li>
              <li>Frequently asked questions</li>
            </ul>
            <p>We continuously work to improve our content quality and provide visitors with a better browsing experience.</p>
          </section>
        </div>

        <div className="content-card">
          <section className="content-section" id="transparency">
            <h2>Transparency and User Trust</h2>
            <p>Trust is an important part of any online information platform. We focus on providing content that is clear, balanced, and informative.</p>
            <p>Our website aims to:</p>
            <ul>
              <li>Explain features accurately</li>
              <li>Provide practical guidance</li>
              <li>Highlight important safety considerations</li>
              <li>Avoid misleading information</li>
            </ul>
            <p>
              We believe users should have access to understandable information before making decisions about any online
              platform.
            </p>
          </section>
        </div>

        <div className="content-card">
          <section className="content-section" id="contact">
            <h2>Contact Us</h2>
            <p>We appreciate feedback, suggestions, and questions from our visitors.</p>
            <p>
              If you have any suggestions for improving our guides or want to share feedback about our content, visit{" "}
              <Link href="/contact-us">Contact Us</Link>. You can also review our{" "}
              <Link href="/privacy-policy">Privacy Policy</Link>.
            </p>
            <p>Your feedback helps us improve our resources and create better content for users interested in W9 Bet App Pakistan.</p>
          </section>
        </div>

        <div className="content-card">
          <section className="content-section" id="disclaimer">
            <h2>Disclaimer</h2>
            <p>
              W9 Bet App Pakistan is an informational website created to provide guides, tutorials, and educational resources
              related to the W9 Bet platform. The full legal wording is also available on our{" "}
              <Link href="/disclaimer">Disclaimer</Link> page.
            </p>
            <p>
              We do not claim to represent or operate the official W9 Bet service. Users should always verify information,
              follow responsible usage practices, and understand applicable rules and regulations in their location.
            </p>
            <p>
              Any decisions, transactions, or activities performed on third-party platforms are the user&apos;s own
              responsibility.
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
