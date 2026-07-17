import Image from "next/image";
import Link from "next/link";
import { BRAND_LOGO } from "@/lib/site";

export function Footer() {
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="site-footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <Image
              src={BRAND_LOGO.src}
              alt={BRAND_LOGO.alt}
              width={BRAND_LOGO.width}
              height={BRAND_LOGO.height}
              className="footer-brand-logo"
              sizes="(max-width: 900px) 85vw, min(520px, 100%)"
            />
            <p className="footer-brand-text">
              Download the latest version of W9 Bet APK with clear steps, safe-use guidance, and simple support links.
            </p>
          </div>

          <div className="footer-links">
            <div className="footer-col">
              <div className="footer-col-title">Important Links</div>
              <Link href="/about-us">About Us</Link>
              <Link href="/contact-us">Contact Us</Link>
              <Link href="/privacy-policy">Privacy Policy</Link>
              <Link href="/disclaimer">Disclaimer</Link>
            </div>

            <div className="footer-col">
              <div className="footer-col-title">Important Pages</div>
              <Link href="/blog/w9-bet-download">Download & Account Guide</Link>
              <Link href="/blog/w9-bet-safety-check-pakistan">Safety Guide</Link>
              <Link href="/">How It Works</Link>
              <Link href="/blog">All Beginner Guides</Link>
              <Link href="/blog/w9-bet-troubleshooting-guide">Troubleshooting</Link>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">
            <Link href="/">W9 Bet Game</Link> © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}
