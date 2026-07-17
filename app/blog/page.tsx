import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BLOG_POSTS } from "@/app/blog/posts";
import { breadcrumbJsonLd } from "@/lib/jsonld";
import { HERO_IMAGE, SITE_URL } from "@/lib/site";

const BLOG_TITLE = "W9 Bet Blog — Download, Deposit, Withdrawal & Safety Guides";
const BLOG_DESCRIPTION =
  "W9 Bet guides for Pakistan: APK download, Easypaisa and JazzCash deposits, withdrawals, safety check, and troubleshooting for common app errors.";

export const metadata: Metadata = {
  title: { absolute: BLOG_TITLE },
  description: BLOG_DESCRIPTION,
  keywords: [
    "W9 Bet Download",
    "W9 Bet Deposit",
    "W9 Bet Withdrawal",
    "W9 Bet safety check Pakistan",
    "W9 Bet Troubleshooting Guide",
    "W9 Bet",
    "Pakistan",
  ],
  alternates: { canonical: `${SITE_URL}/blog` },
  openGraph: {
    title: BLOG_TITLE,
    description: BLOG_DESCRIPTION,
    url: `${SITE_URL}/blog`,
    type: "website",
    images: [
      {
        url: `${SITE_URL}${HERO_IMAGE.src}`,
        width: HERO_IMAGE.width,
        height: HERO_IMAGE.height,
        alt: HERO_IMAGE.alt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: BLOG_TITLE,
    description: BLOG_DESCRIPTION,
    images: [`${SITE_URL}${HERO_IMAGE.src}`],
  },
};

export default function BlogIndexPage() {
  const collectionJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: BLOG_TITLE,
    description: BLOG_DESCRIPTION,
    url: `${SITE_URL}/blog`,
    inLanguage: "en-PK",
    hasPart: BLOG_POSTS.map((post) => ({
      "@type": "Article",
      headline: post.title,
      url: `${SITE_URL}/blog/${post.slug}`,
      articleSection: post.category,
    })),
  };

  const crumbs = breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
  ]);

  return (
    <div className="main-grid">
      <div className="content-page">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbs) }} />
        <h1 className="content-title">{BLOG_TITLE}</h1>
        <p className="content-intro">
          Five focused guides for Pakistani players: install the APK, add funds, cash out safely, verify the platform is real, and fix common errors. Start from the{" "}
          <Link href="/">homepage guide</Link> for the full overview, or read{" "}
          <Link href="/about-us">About Us</Link> to learn how these guides are written.
        </p>

        <section className="content-section" aria-label="Blog guides">
          <div className="blog-grid blog-grid-two">
            {BLOG_POSTS.map((post) => (
              <article key={post.slug} className="blog-card blog-card-minimal">
                <Image
                  src={post.featureImage}
                  alt={post.featureImageAlt ?? post.title}
                  width={1200}
                  height={675}
                  className="blog-card-image"
                  sizes="(max-width: 640px) 100vw, (max-width: 960px) 50vw, 400px"
                  loading="lazy"
                />
                <h2 className="blog-card-title">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
              </article>
            ))}
          </div>
        </section>

        <p style={{ marginTop: "1rem" }}>
          <Link href="/contact-us" className="back-home-btn">
            Contact Us
          </Link>
        </p>
      </div>
    </div>
  );
}
