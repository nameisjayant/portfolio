import type { CSSProperties } from "react";
import { profile } from "@/lib/profile";
import CopyEmail from "./CopyEmail";
import { tint } from "./tints";
import {
  ArrowUpRight,
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  MediumIcon,
  YoutubeIcon,
} from "./Icons";

const socialLinks = [
  {
    label: "LinkedIn",
    href: profile.socials.linkedin,
    Icon: LinkedinIcon,
  },
  { label: "GitHub", href: profile.socials.github, Icon: GithubIcon },
  {
    label: "YouTube",
    href: profile.socials.youtube,
    Icon: YoutubeIcon,
  },
  {
    label: "Instagram",
    href: profile.socials.instagram,
    Icon: InstagramIcon,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="band band-asphalt mt-14 pt-20 pb-16 md:pt-28 md:pb-24"
      aria-labelledby="contact-title"
    >
      <div className="wrap grid gap-14 md:gap-20">
        <div className="grid justify-items-center gap-3 text-center">
          <p className="hand -rotate-2 text-[clamp(1.3rem,1rem+1vw,1.8rem)] text-sun">
            Let&apos;s work together ↓
          </p>
          <h2
            id="contact-title"
            className="display text-[clamp(3.4rem,1.6rem+8vw,9rem)] text-chalk [text-shadow:0.05em_0.05em_0_#0f7a4a]"
          >
            Have an idea?
            <br />
            Let&apos;s build it.
          </h2>
        </div>

        <div className="mx-auto grid w-full max-w-[64rem] grid-cols-1 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] gap-12 items-start">
          <div className="postcard grid gap-6 p-7 md:p-10">
            <div className="postcard-stamp" aria-hidden>
              <svg viewBox="0 0 40 30" className="w-10" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="9" y="2" width="22" height="26" rx="4" />
                <path d="M16 6h8M18 24h4" />
              </svg>
              <span className="font-mono text-[0.62rem] tracking-[0.1em]">
                {profile.location.toUpperCase()}
              </span>
            </div>

            <p className="hand pr-16 text-3xl text-green">to: you, with an idea</p>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-3">
              <a
                href={`mailto:${profile.email}`}
                className="wavy-link font-extrabold tracking-tight [overflow-wrap:anywhere] text-[clamp(1.3rem,0.9rem+1.8vw,2.1rem)]"
              >
                {profile.email}
              </a>
              <CopyEmail email={profile.email} />
            </div>

            <div>
              <p className="mono-label text-muted">Elsewhere</p>
              <div className="mt-4 grid grid-cols-2 gap-3">
                {socialLinks.map(({ label, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="chunky chunky-sm chunky-paper justify-between"
                  >
                    <span className="flex items-center gap-2">
                      <Icon className="h-4 w-4" />
                      {label}
                    </span>
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div>
            <p className="hand -rotate-2 text-3xl text-sun">read my writing</p>
            <div className="mt-5 grid gap-6">
              {profile.socials.medium.map((m, i) => (
                <a
                  key={m.href}
                  href={m.href}
                  target="_blank"
                  rel="noreferrer"
                  className={`sticky-note group transition-[rotate] duration-300 hover:rotate-0 ${
                    i % 2 ? "rotate-2" : "-rotate-2"
                  }`}
                  style={{ "--t": tint(i + 1) } as CSSProperties}
                >
                  <span className="flex items-center justify-between gap-3">
                    <span className="flex items-center gap-2 font-display text-lg font-extrabold uppercase [font-stretch:85%]">
                      <MediumIcon className="h-5 w-5" />
                      Medium — {m.label}
                    </span>
                    <ArrowUpRight className="h-4 w-4 shrink-0 opacity-60 group-hover:opacity-100" />
                  </span>
                  <span className="font-mono text-xs opacity-70 truncate">
                    {m.href.replace(/^https?:\/\//, "")}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
