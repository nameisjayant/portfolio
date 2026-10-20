import type { CSSProperties } from "react";
import { profile } from "@/lib/profile";
import { tint } from "./tints";

export default function Hero() {
  return (
    <section id="home" aria-labelledby="hero-name">
      <div className="hero-board">
        <Doodles />

        <p className="hero-hello hand">
          <span>Hey, there. I&apos;m</span>
          <svg
            viewBox="0 0 48 40"
            className="h-auto w-10"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            <path d="M4 6c10 2 22 8 28 24" />
            <path d="M22 26l10 6 4-12" />
          </svg>
        </p>

        <div className="name-wrap">
          <div className="name-box">
            <h1 id="hero-name" className="name">
              {profile.firstName}
            </h1>
            <div className="sel" aria-hidden>
              <i className="tl" />
              <i className="tr" />
              <i className="bl" />
              <i className="br" />
              <span className="sel-measure">{profile.title}</span>
            </div>
          </div>
          {profile.stack.map((s, i) => (
            <span
              key={s}
              className={`hero-tag hero-tag-${i % 4}`}
              style={{ "--t": tint(i + 1) } as CSSProperties}
            >
              {s}
            </span>
          ))}
        </div>

        <p className="hero-line">{profile.tagline}</p>

        <div className="relative z-[3] flex flex-wrap items-center justify-center gap-x-6 gap-y-4">
          <a className="chunky" href="#works">
            See my work
          </a>
          <span className="hand text-2xl">
            or{" "}
            <a className="hand-link" href="#contact">
              let&apos;s talk ↗
            </a>
          </span>
        </div>

        <p className="stamp relative z-[3]">
          <span className="relative inline-flex h-2.5 w-2.5" aria-hidden>
            <span className="absolute inset-0 rounded-full bg-leaf pulse-dot" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-leaf" />
          </span>
          Available for new opportunities · {profile.location}
        </p>
      </div>

      <StackMarquee />
    </section>
  );
}

function StackMarquee() {
  const items = [
    "Android",
    "iOS",
    "React Native",
    "Flutter",
    "Kotlin",
    "Swift",
    "Jetpack Compose",
    "SwiftUI",
    "TypeScript",
    "Dart",
  ];
  const track = [...items, ...items];
  return (
    <div className="overflow-hidden border-y-[3px] border-ink bg-card">
      <div className="flex marquee-track w-max py-3 whitespace-nowrap">
        {track.map((t, i) => (
          <span
            key={i}
            aria-hidden={i >= items.length}
            className="mx-5 inline-flex items-center gap-10 display text-2xl md:text-3xl"
          >
            {t}
            <span className="text-tangerine">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

// Hand-drawn decorations scattered around the hero. Purely decorative.
function Doodles() {
  const stroke = {
    fill: "none",
    stroke: "var(--ink)",
    strokeWidth: 3,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  } as const;

  return (
    <>
      {/* Phone */}
      <div
        className="doodle doodle-phone"
        style={{ left: "6%", top: "62%", width: "6.5rem", rotate: "-10deg" }}
        aria-hidden
      >
        <svg viewBox="0 0 80 130">
          <rect x="6" y="6" width="68" height="118" rx="14" {...stroke} fill="var(--color-sky)" />
          <rect x="14" y="20" width="52" height="84" rx="4" {...stroke} fill="#ffffff" strokeWidth={2.5} />
          <path d="M30 13h20" {...stroke} />
          <circle cx="40" cy="114" r="4" fill="var(--ink)" />
          <path d="M22 34h28M22 46h36M22 58h20" {...stroke} strokeWidth={2.5} stroke="var(--color-tangerine)" />
          <rect x="22" y="70" width="36" height="24" rx="4" {...stroke} fill="var(--color-mint)" strokeWidth={2.5} />
        </svg>
      </div>

      {/* Code brackets */}
      <div
        className="doodle doodle-hide-sm"
        style={{ left: "8%", top: "12%", width: "7rem", rotate: "-6deg" }}
        aria-hidden
      >
        <svg viewBox="0 0 120 80">
          <rect x="4" y="4" width="112" height="72" rx="14" {...stroke} fill="var(--color-lilac)" />
          <path d="M40 24L22 40l18 16M80 24l18 16-18 16M66 20L54 60" {...stroke} strokeWidth={4} />
        </svg>
      </div>

      {/* Paper plane */}
      <div
        className="doodle doodle-hide-sm"
        style={{ left: "74%", top: "14%", width: "7.5rem", rotate: "6deg" }}
        aria-hidden
      >
        <svg viewBox="0 0 130 90">
          <path d="M6 84c14-6 22-16 26-28" {...stroke} strokeDasharray="2 9" />
          <path d="M40 46L124 6 92 76 74 56z" {...stroke} fill="#ffffff" />
          <path d="M124 6L74 56l-6 22 12-16" {...stroke} fill="var(--color-pink)" />
        </svg>
      </div>

      {/* Sparkles */}
      <div
        className="doodle doodle-hide-sm"
        style={{ left: "30%", top: "5%", width: "3.5rem" }}
        aria-hidden
      >
        <svg viewBox="0 0 60 60">
          <path d="M30 4c3 14 8 20 26 26-18 6-23 12-26 26-3-14-8-20-26-26 18-6 23-12 26-26z" {...stroke} fill="var(--color-sun)" />
        </svg>
      </div>
      <div
        className="doodle doodle-hide-sm"
        style={{ left: "88%", top: "56%", width: "2.6rem", rotate: "14deg" }}
        aria-hidden
      >
        <svg viewBox="0 0 60 60">
          <path d="M30 4c3 14 8 20 26 26-18 6-23 12-26 26-3-14-8-20-26-26 18-6 23-12 26-26z" {...stroke} fill="var(--color-mint)" />
        </svg>
      </div>

      {/* Coffee mug */}
      <div
        className="doodle doodle-hide-sm"
        style={{ left: "80%", top: "76%", width: "5.5rem", rotate: "8deg" }}
        aria-hidden
      >
        <svg viewBox="0 0 90 90">
          <path d="M30 6c-4 6 4 10 0 16M46 6c-4 6 4 10 0 16" {...stroke} strokeWidth={2.5} />
          <path d="M10 30h56v34a20 20 0 0 1-20 20H30a20 20 0 0 1-20-20z" {...stroke} fill="var(--color-tangerine)" />
          <path d="M66 40h6a10 10 0 0 1 0 20h-6" {...stroke} />
        </svg>
      </div>
    </>
  );
}
