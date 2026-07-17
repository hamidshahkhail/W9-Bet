/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384, 480],
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
  async headers() {
    return [
      {
        source: "/images/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
  async redirects() {
    const removedPages = ["/terms"];
    const removedBlogs = [
      "w9-bet-game-download",
      "w9-bet-withdrawal-guide",
      "w9-bet-account-setup",
      "w9-bet-game-safety",
      "how-w9-bet-game-works",
      "w9-bet-game-guide",
      "earn-money-in-w9-bet-game",
    ];

    return [
      {
        source: "/about",
        destination: "/about-us",
        permanent: true,
      },
      {
        source: "/contact",
        destination: "/contact-us",
        permanent: true,
      },
      {
        source: "/privacy",
        destination: "/privacy-policy",
        permanent: true,
      },
      {
        source: "/blog/w9-bet-game-download",
        destination: "/blog/w9-bet-download",
        permanent: true,
      },
      {
        source: "/blog/w9-bet-withdrawal-guide",
        destination: "/blog/w9-bet-withdrawal",
        permanent: true,
      },
      ...removedPages.map((source) => ({
        source,
        destination: "/",
        permanent: true,
      })),
      ...removedBlogs
        .filter((slug) => slug !== "w9-bet-game-download" && slug !== "w9-bet-withdrawal-guide")
        .map((slug) => ({
          source: `/blog/${slug}`,
          destination: "/blog",
          permanent: true,
        })),
    ];
  },
};

module.exports = nextConfig;
