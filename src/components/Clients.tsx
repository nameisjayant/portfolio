import type { CSSProperties } from "react";
import { clients } from "@/lib/profile";
import { asset } from "@/lib/path";
import { ArrowUpRight } from "./Icons";
import { tint } from "./tints";
import { SectionHeader, clientAnchor } from "./Works";

const tilts = ["-rotate-3", "rotate-2", "-rotate-1", "rotate-3", "-rotate-2"];

export default function Clients() {
  const featured = clients.filter((c) => !c.isOther && c.logo);

  return (
    <section
      id="clients"
      className="wrap py-24 md:py-32"
      aria-labelledby="clients-title"
    >
      <SectionHeader
        id="clients-title"
        eyebrow="Clients"
        title={
          <>
            Brands I&apos;ve <mark>shipped</mark> for
          </>
        }
      />

      <ul className="mt-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-10">
        {featured.map((c, i) => (
          <li key={c.name}>
            <a
              href={`#${clientAnchor(c.name)}`}
              className={`polaroid tilt-hover hover:rotate-0 hover:-translate-y-1 group flex h-full flex-col text-[#141218] ${
                tilts[i % tilts.length]
              }`}
            >
              <span
                className="tape"
                style={{ "--t": tint(i) } as CSSProperties}
              />
              <span className="flex aspect-[4/3] items-center justify-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={asset(c.logo!)}
                  alt={`${c.name} logo`}
                  className="h-full w-full object-contain p-3"
                />
              </span>
              <span className="mt-3 flex items-start justify-between gap-2">
                <span className="hand text-2xl leading-none">{c.name}</span>
                <ArrowUpRight className="h-4 w-4 shrink-0 opacity-40 transition-opacity group-hover:opacity-100" />
              </span>
              <span className="mt-1.5 font-mono text-[11px] uppercase tracking-wider text-[#847d8c]">
                {c.projects.length}{" "}
                {c.projects.length === 1 ? "project" : "projects"}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
