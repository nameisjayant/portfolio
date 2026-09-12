import { services } from "@/lib/profile";
import { SectionHeader } from "./Works";

export default function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32 bg-cream">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeader
          eyebrow="Services"
          title={
            <>
              What I bring to the
              <br />
              <span className="italic font-serif">table</span>.
            </>
          }
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-4">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="group relative overflow-hidden rounded-3xl border border-ink/10 bg-cream-soft p-8 md:p-10 transition-all hover:border-ink"
            >
              <div className="flex items-start justify-between">
                <span className="font-serif italic text-xl text-ink/40">
                  0{i + 1}
                </span>
                <span className="h-3 w-3 rounded-full bg-accent" />
              </div>
              <h3 className="mt-6 font-serif text-3xl md:text-4xl text-ink">
                {s.title}
              </h3>
              <p className="mt-3 text-ink/70 leading-relaxed">
                {s.description}
              </p>
              <ul className="mt-6 grid grid-cols-2 gap-x-4 gap-y-2">
                {s.bullets.map((b) => (
                  <li
                    key={b}
                    className="text-sm text-ink/80 flex items-center gap-2"
                  >
                    <span className="h-1 w-1 rounded-full bg-ink" />
                    {b}
                  </li>
                ))}
              </ul>
              <div className="pointer-events-none absolute -top-10 -right-10 h-40 w-40 rounded-full bg-accent/5 blur-2xl group-hover:bg-accent/15 transition-all" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
