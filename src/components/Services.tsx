import type { CSSProperties } from "react";
import { services } from "@/lib/profile";
import { tint } from "./tints";
import { SectionHeader } from "./Works";

export default function Services() {
  return (
    <section
      id="services"
      className="wrap py-24 md:py-32"
      aria-labelledby="services-title"
    >
      <SectionHeader
        id="services-title"
        eyebrow="Services"
        title={
          <>
            What I bring to
            <br />
            the <mark>table</mark>
          </>
        }
      />

      <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((s, i) => (
          <div
            key={s.title}
            className="grid content-start gap-3 rounded-2xl border-[3px] border-ink p-7 md:p-9 text-on-tint shadow-[5px_5px_0_var(--ink)] transition-transform duration-300 hover:-translate-y-1 hover:-rotate-1"
            style={{ background: tint(i) } as CSSProperties}
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-sm rounded-full border-2 border-[#141218] bg-white px-2.5">
                0{i + 1}
              </span>
              <span className="h-3.5 w-3.5 rounded-full border-2 border-[#141218] bg-tangerine" />
            </div>
            <h3 className="display mt-3 text-[clamp(2rem,1.5rem+1.6vw,2.8rem)]">
              {s.title}
            </h3>
            <p className="leading-relaxed text-[#2b2830]">{s.description}</p>
            <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
              {s.bullets.map((b) => (
                <li key={b} className="flex items-center gap-2 text-sm font-semibold">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#141218]" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
