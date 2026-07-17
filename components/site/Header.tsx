"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { BRAND_LOGO } from "@/lib/site";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const onEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMobileMenuOpen(false);
    };
    window.addEventListener("keydown", onEsc);
    return () => window.removeEventListener("keydown", onEsc);
  }, [isMobileMenuOpen]);

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="site-header" role="banner">
      <div className="site-header-inner">
        <Link href="/" className="site-brand" aria-label="W9 Bet Game Home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={BRAND_LOGO.src}
            alt={BRAND_LOGO.alt}
            width={BRAND_LOGO.width}
            height={BRAND_LOGO.height}
            className="site-brand-logo"
            decoding="async"
            fetchPriority="low"
          />
        </Link>

        <nav className="site-nav" aria-label="Primary">
          <Link href="/">Home</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/blog/w9-bet-download">Download</Link>
          <Link href="/blog/w9-bet-deposit">Deposit</Link>
          <Link href="/blog/w9-bet-withdrawal">Withdraw</Link>
        </nav>

        <button
          type="button"
          className="mobile-menu-toggle"
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="mobile-menu-backdrop" onClick={closeMenu} role="presentation">
          <aside
            className="mobile-menu-panel"
            role="dialog"
            aria-modal="true"
            aria-label="Main menu"
            onClick={(event) => event.stopPropagation()}
          >
            <button type="button" className="mobile-menu-close" aria-label="Close menu" onClick={closeMenu}>
              ×
            </button>
            <nav className="mobile-menu-list" aria-label="Mobile primary">
              <Link href="/" onClick={closeMenu}>
                Home
              </Link>
              <Link href="/blog" onClick={closeMenu}>
                Blog
              </Link>
              <Link href="/blog/w9-bet-download" onClick={closeMenu}>
                Download
              </Link>
              <Link href="/blog/w9-bet-deposit" onClick={closeMenu}>
                Deposit
              </Link>
              <Link href="/blog/w9-bet-withdrawal" onClick={closeMenu}>
                Withdraw
              </Link>
            </nav>
          </aside>
        </div>
      )}
    </header>
  );
}
