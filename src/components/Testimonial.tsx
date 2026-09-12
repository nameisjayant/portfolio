"use client";

import { useState } from "react";
import { testimonials } from "@/lib/profile";
import { SectionHeader } from "./Works";

export default function Testimonial() {
  const [idx, setIdx] = useState(0);
  const t = testimonials[idx];

  return (
    <section id="testimonial" className="relative py-24 md:py-32 bg-cream-soft">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeader
          eyebrow="Testimonial"
          title={
            <>
              Kind words from
              <br />
              <span className="italic font-serif">collaborators</span>.
            </>
          }
        />

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-5 gap-8 items-stretch">
          <div className="lg:col-span-3 rounded-3xl bg-ink text-cream p-10 md:p-14 relative overflow-hidden">
            <span className="font-serif text-[10rem] leading-none absolute -top-6 left-6 text-cream/10 select-none">
              &ldquo;
            </span>
            <p className="relative font-serif text-2xl md:text-3xl leading-snug">
              {t.quote}
            </p>
            <div className="relative mt-10 flex items-center justify-between">
              <div>
                <div className="font-medium">{t.name}</div>
                <div className="text-sm text-cream/60">{t.role}</div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() =>
                    setIdx((i) =>
                      i === 0 ? testimonials.length - 1 : i - 1,
                    )
                  }
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-cream/30 hover:bg-cream hover:text-ink transition-colors"
                  aria-label="Previous testimonial"
                >
                  ←
                </button>
                <button
                  onClick={() =>
                    setIdx((i) => (i + 1) % testimonials.length)
                  }
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-cream/30 hover:bg-cream hover:text-ink transition-colors"
                  aria-label="Next testimonial"
                >
                  →
                </button>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 flex flex-col gap-4">
            {testimonials.map((tm, i) => (
              <button
                key={tm.name}
                onClick={() => setIdx(i)}
                className={`text-left rounded-2xl p-5 border transition-all ${
                  i === idx
                    ? "border-ink bg-cream"
                    : "border-ink/10 bg-cream hover:border-ink/40"
                }`}
              >
                <div className="font-medium">{tm.name}</div>
                <div className="text-sm text-ink/60">{tm.role}</div>
                <p className="mt-2 text-sm text-ink/70 line-clamp-2">
                  {tm.quote}
                </p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
