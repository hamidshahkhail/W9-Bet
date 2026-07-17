import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BLOG_POSTS, BLOG_POSTS_BY_SLUG } from "@/app/blog/posts";
import { breadcrumbJsonLd, organizationJsonLd } from "@/lib/jsonld";
import { renderInternalLinks } from "@/lib/render-internal-links";
import { SITE_URL } from "@/lib/site";

type PageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const post = BLOG_POSTS_BY_SLUG.get(params.slug);
  if (!post) {
    return {
      title: "Blog Post Not Found",
      robots: { index: false, follow: false },
    };
  }

  const canonical = `${SITE_URL}/blog/${post.slug}`;
  const ogImage = `${SITE_URL}${post.featureImage}`;

  return {
    title: { absolute: post.seoTitle },
    description: post.description,
    keywords: [post.focusKeyword, "W9 Bet", "Pakistan", post.category],
    alternates: { canonical },
    openGraph: {
      title: post.seoTitle,
      description: post.description,
      url: canonical,
      type: "article",
      locale: "en_PK",
      publishedTime: post.datePublished,
      modifiedTime: post.dateModified,
      images: [{ url: ogImage, alt: post.featureImageAlt ?? post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.seoTitle,
      description: post.description,
      images: [ogImage],
    },
  };
}

export default function BlogPostPage({ params }: PageProps) {
  const post = BLOG_POSTS_BY_SLUG.get(params.slug);
  if (!post) notFound();

  const canonical = `${SITE_URL}/blog/${post.slug}`;
  const org = organizationJsonLd();

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    keywords: post.focusKeyword,
    datePublished: post.datePublished,
    dateModified: post.dateModified,
    inLanguage: "en-PK",
    articleSection: post.category,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${canonical}#webpage`,
      url: canonical,
    },
    image: [`${SITE_URL}${post.featureImage}`],
    author: org,
    publisher: org,
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: post.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const crumbs = breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: post.title, path: `/blog/${post.slug}` },
  ]);

  return (
    <div className="main-grid">
      <article className="content-page">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbs) }} />
        <header className="content-section">
          <p className="blog-breadcrumb" aria-label="Breadcrumb">
            <span>Home</span>
            <span aria-hidden="true"> / </span>
            <span>Blog</span>
            <span aria-hidden="true"> / </span>
            <span>{post.category}</span>
          </p>
          <h1 className="content-title">{post.title}</h1>
          <p className="blog-card-meta">
            <span className="blog-category-badge">{post.category}</span>
            <span>{post.readTime}</span>
          </p>
          <p className="content-intro">{post.description}</p>
          <Image
            src={post.featureImage}
            alt={post.featureImageAlt ?? post.title}
            width={1200}
            height={675}
            className="blog-feature-image"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1100px"
            priority
            fetchPriority="high"
          />
          <p className="content-intro">
            New here? Start from the <Link href="/">homepage guide</Link> for a full overview, or browse the{" "}
            <Link href="/blog">blog hub</Link>.
          </p>
        </header>

        {post.sections.map((section) => (
          <section key={section.heading} className="content-section">
            <h2>{section.heading}</h2>
            {(section.paragraphs ?? []).map((text) => (
              <p key={text}>{renderInternalLinks(text)}</p>
            ))}
            {section.bullets && (
              <ul>
                {section.bullets.map((item) => (
                  <li key={item}>{renderInternalLinks(item)}</li>
                ))}
              </ul>
            )}
            {section.image && (
              <Image
                src={section.image.src}
                alt={section.image.alt}
                width={1200}
                height={700}
                className="blog-section-image"
                sizes="(max-width: 1200px) 100vw, 960px"
              />
            )}
          </section>
        ))}

        <section className="content-section">
          <h2>FAQs</h2>
          <ul className="faq-list">
            {post.faqs.map((faq) => (
              <li key={faq.question}>
                <p className="faq-q">{faq.question}</p>
                <p className="faq-a">{faq.answer}</p>
              </li>
            ))}
          </ul>
        </section>
      </article>
    </div>
  );
}
