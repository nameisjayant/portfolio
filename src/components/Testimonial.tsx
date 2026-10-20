"use client";

import { useState, type CSSProperties } from "react";
import { testimonials } from "@/lib/profile";
import { tint } from "./tints";
import { SectionHeader } from "./Works";

export default function Testimonial() {
  const [idx, setIdx] = useState(0);
  const t = testimonials[idx];

  return (
    <section
      id="testimonial"
      className="wrap py-24 md:py-32"
      aria-labelledby="testimonial-title"
    >
      <SectionHeader
        id="testimonial-title"
        eyebrow="Testimonial"
        title={
          <>
            Kind words from
            <br />
            <mark>collaborators</mark>
          </>
        }
      />

      <div className="mt-14 grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
        <div className="postcard lg:col-span-3 p-8 md:p-12">
          <span
            className="tape"
            style={{ "--t": tint(idx) } as CSSProperties}
          />
          <span
            className="display block text-[7rem] leading-[0.6] text-tangerine select-none"
            aria-hidden
          >
            &ldquo;
          </span>
          <p className="mt-2 text-2xl md:text-3xl font-medium leading-snug" aria-live="polite">
            {t.quote}
          </p>
          <div className="mt-10 flex flex-wrap items-end justify-between gap-6">
            <div>
              <div className="font-display text-2xl font-extrabold uppercase [font-stretch:85%]">
                {t.name}
              </div>
              <div className="hand text-2xl text-green">{t.role}</div>
            </div>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() =>
                  setIdx((i) => (i === 0 ? testimonials.length - 1 : i - 1))
                }
                className="round"
                aria-label="Previous testimonial"
              >
                ←
              </button>
              <span className="font-mono text-sm">
                {String(idx + 1).padStart(2, "0")} /{" "}
                {String(testimonials.length).padStart(2, "0")}
              </span>
              <button
                type="button"
                onClick={() => setIdx((i) => (i + 1) % testimonials.length)}
                className="round"
                aria-label="Next testimonial"
              >
                →
              </button>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2 flex flex-col gap-6">
          {testimonials.map((tm, i) => {
            const on = i === idx;
            return (
              <button
                key={tm.name}
                type="button"
                onClick={() => setIdx(i)}
                aria-pressed={on}
                className={`sticky-note text-left transition-[rotate,translate] duration-300 ${
                  on ? "rotate-0 -translate-x-2" : i % 2 ? "rotate-2" : "-rotate-2"
                } ${on ? "" : "opacity-80 hover:opacity-100"}`}
                style={{ "--t": tint(i) } as CSSProperties}
              >
                <span className="flex items-center justify-between gap-3">
                  <span className="font-display text-lg font-extrabold uppercase [font-stretch:85%]">
                    {tm.name}
                  </span>
                  {on && (
                    <span className="font-mono text-[10px] uppercase tracking-widest rounded-full border-2 border-[#141218] bg-white px-2">
                      Reading
                    </span>
                  )}
                </span>
                <span className="text-sm opacity-75">{tm.role}</span>
                <span className="mt-1 text-sm line-clamp-2">{tm.quote}</span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
