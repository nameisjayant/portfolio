import { clients } from "@/lib/profile";
import { asset } from "@/lib/path";
import { ArrowUpRight } from "./Icons";
import { SectionHeader, clientAnchor } from "./Works";

export default function Clients() {
  const featured = clients.filter((c) => !c.isOther && c.logo);

  return (
    <section id="clients" className="relative py-24 md:py-32 bg-cream-soft">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeader
          eyebrow="Clients"
          title={
            <>
              Brands I&apos;ve
              <br />
              <span className="italic font-serif">shipped</span> for.
            </>
          }
        />

        <ul className="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {featured.map((c) => (
            <li key={c.name}>
              <a
                href={`#${clientAnchor(c.name)}`}
                className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-ink/10 bg-cream p-5 transition-all hover:border-ink hover:-translate-y-1"
              >
                <div className="flex h-28 items-center justify-center rounded-2xl border border-ink/10 bg-white">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={asset(c.logo!)}
                    alt={`${c.name} logo`}
                    className="h-full w-full object-contain p-4"
                  />
                </div>
                <div className="mt-4 flex items-start justify-between gap-2">
                  <h3 className="font-serif text-xl text-ink leading-tight">
                    {c.name}
                  </h3>
                  <ArrowUpRight className="h-4 w-4 shrink-0 text-ink/30 group-hover:text-ink transition-colors" />
                </div>
                <span className="mt-2 inline-flex w-fit items-center rounded-full border border-ink/20 px-2.5 py-0.5 text-[11px] font-medium text-ink/70">
                  {c.projects.length}{" "}
                  {c.projects.length === 1 ? "project" : "projects"}
                </span>
                <div className="pointer-events-none absolute -top-10 -right-10 h-32 w-32 rounded-full bg-accent/5 blur-2xl group-hover:bg-accent/15 transition-all" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
