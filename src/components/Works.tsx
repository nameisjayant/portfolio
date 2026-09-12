import { works } from "@/lib/profile";
import { ArrowUpRight } from "./Icons";

export default function Works() {
  return (
    <section id="works" className="relative py-24 md:py-32 bg-cream">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeader
          eyebrow="Selected Works"
          title={
            <>
              Crafted mobile apps,
              <br />
              from concept to <span className="italic font-serif">store</span>.
            </>
          }
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          {works.map((w, i) => (
            <a
              key={w.title}
              href={w.href}
              target="_blank"
              rel="noreferrer"
              className={`group relative overflow-hidden rounded-3xl border border-ink/10 bg-cream-soft p-8 md:p-10 transition-all hover:border-ink hover:-translate-y-1 ${
                i % 3 === 0 ? "md:col-span-2" : ""
              }`}
            >
              <div className="flex items-start justify-between gap-6">
                <div>
                  <p className="text-xs font-medium uppercase tracking-widest text-accent">
                    {w.category}
                  </p>
                  <h3 className="mt-3 font-serif text-3xl md:text-4xl leading-tight text-ink">
                    {w.title}
                  </h3>
                  <p className="mt-4 max-w-xl text-ink/70 leading-relaxed">
                    {w.description}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {w.tags.map((t) => (
                      <span
                        key={t}
                        className="inline-flex items-center rounded-full border border-ink/20 px-3 py-1 text-xs font-medium text-ink/70"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="shrink-0 rounded-full border border-ink p-3 group-hover:bg-ink group-hover:text-cream transition-colors">
                  <ArrowUpRight className="h-5 w-5" />
                </div>
              </div>
              <div className="pointer-events-none absolute -bottom-24 -right-24 h-56 w-56 rounded-full bg-accent/10 blur-3xl transition-all group-hover:bg-accent/20" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: React.ReactNode;
}) {
  return (
    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
      <div>
        <div className="inline-flex items-center gap-2">
          <span className="h-px w-8 bg-ink" />
          <span className="text-xs font-medium uppercase tracking-widest text-ink/70">
            {eyebrow}
          </span>
        </div>
        <h2 className="mt-5 text-4xl md:text-6xl font-black leading-[1.02] tracking-tight text-ink">
          {title}
        </h2>
      </div>
    </div>
  );
}
