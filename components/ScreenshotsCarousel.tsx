"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

const SLIDES: { src: string; alt: string }[] = [
  { src: "/images/W9Bet-Download.webp", alt: "W9 Bet activity and bonus promotions screen" },
  { src: "/images/W9-Bet-Game.webp", alt: "W9 Bet games lobby with slots and multiplayer" },
  { src: "/images/W9-Bet-Pakistan.webp", alt: "W9 Bet Pakistan recharge with Easypaisa and JazzCash" },
  { src: "/images/W9-Bet-Money-Game.webp", alt: "W9 Bet agent referral and commission dashboard" },
];

export function ScreenshotsCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollBySlide = useCallback((direction: -1 | 1) => {
    const el = trackRef.current;
    if (!el) return;
    const w = el.clientWidth;
    el.scrollBy({ left: direction * w, behavior: "smooth" });
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const width = el.clientWidth || 1;
        const nextIndex = Math.round(el.scrollLeft / width);
        if (nextIndex !== activeIndex) {
          setActiveIndex(Math.max(0, Math.min(SLIDES.length - 1, nextIndex)));
        }
      });
    };

    el.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener("scroll", onScroll);
    };
  }, [activeIndex]);

  return (
    <div className="screenshots-carousel" role="region" aria-labelledby="screenshots-heading">
      <div className="screenshots-carousel-header">
        <h3 id="screenshots-heading" className="screenshots-carousel-title">
          Screenshots
        </h3>
      </div>

      <div className="screenshots-carousel-frame">
        <button
          type="button"
          className="screenshots-carousel-btn screenshots-carousel-btn-left"
          onClick={() => scrollBySlide(-1)}
          aria-label="Previous screenshot"
        >
          ‹
        </button>
        <button
          type="button"
          className="screenshots-carousel-btn screenshots-carousel-btn-right"
          onClick={() => scrollBySlide(1)}
          aria-label="Next screenshot"
        >
          ›
        </button>
        <div
          ref={trackRef}
          className="screenshots-carousel-track"
          tabIndex={0}
          aria-label="Swipe or use buttons to browse screenshots"
          onKeyDown={(e) => {
            if (e.key === "ArrowLeft") {
              e.preventDefault();
              scrollBySlide(-1);
            } else if (e.key === "ArrowRight") {
              e.preventDefault();
              scrollBySlide(1);
            }
          }}
        >
          {SLIDES.map((slide, index) => (
            <figure
              key={slide.src}
              className={`screenshots-carousel-slide${index === activeIndex ? " is-active" : ""}`}
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                className="screenshots-carousel-img"
                width={1024}
                height={576}
                sizes="(max-width: 900px) 100vw, min(900px, 100%)"
                draggable={false}
                priority={index === 0}
                loading={index === 0 ? "eager" : "lazy"}
              />
            </figure>
          ))}
        </div>
      </div>
    </div>
  );
}
