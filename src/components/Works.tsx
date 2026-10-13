import {
  clients,
  currentRole,
  type Client,
  type Project,
} from "@/lib/profile";
import { asset } from "@/lib/path";
import { ArrowUpRight } from "./Icons";
import { AppStoreIcon, PlayStoreIcon } from "./StoreIcons";

export default function Works() {
  return (
    <section id="works" className="relative py-24 md:py-32 bg-cream">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeader
          eyebrow="Experience"
          title={
            <>
              Where I&apos;ve built
              <br />
              <span className="italic font-serif">real-world</span> apps.
            </>
          }
        />

        <CurrentRoleBanner />

        <div className="mt-6 space-y-6">
          {clients.map((c) => (
            <ClientCard key={c.name} client={c} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CurrentRoleBanner() {
  return (
    <div className="mt-12 relative overflow-hidden rounded-[2rem] border border-ink/10 bg-cream-soft shadow-[0_10px_40px_rgba(0,0,0,0.04)]">
      {/* Warm accent glow */}
      <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-24 h-72 w-72 rounded-full bg-accent-soft/30 blur-3xl" />

      <div className="relative grid grid-cols-1 lg:grid-cols-[auto_1fr_auto] gap-8 lg:gap-12 p-8 md:p-10 items-center">
        {/* Logo card */}
        <a
          href={currentRole.companyUrl}
          target="_blank"
          rel="noreferrer"
          className="group relative flex items-center justify-center h-28 w-28 md:h-32 md:w-32 rounded-3xl bg-white border border-ink/10 shadow-sm transition-transform hover:-translate-y-1"
          aria-label={`${currentRole.company} website`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={asset(currentRole.logo)}
            alt={`${currentRole.company} logo`}
            className="h-full w-full object-contain p-5"
          />
          <span className="absolute -top-2 -right-2 inline-flex items-center gap-1.5 rounded-full bg-accent text-cream px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-cream pulse-dot" />
            Now
          </span>
        </a>

        {/* Role + company */}
        <div>
          <div className="inline-flex items-center gap-2">
            <span className="h-px w-6 bg-ink/60" />
            <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-ink/60">
              Currently working
            </span>
          </div>
          <h3 className="mt-4 font-black tracking-tight text-ink text-3xl md:text-4xl lg:text-5xl leading-[0.95]">
            {currentRole.title}
          </h3>
          <p className="mt-2 font-serif italic text-xl md:text-2xl text-ink/80">
            {currentRole.subtitle}
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1 text-ink/70">
            <span className="text-sm">at</span>
            <a
              href={currentRole.companyUrl}
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-ink hover:text-accent transition-colors underline decoration-ink/20 hover:decoration-accent underline-offset-4"
            >
              {currentRole.company}
            </a>
            <span className="text-ink/30">·</span>
            <span className="text-sm">{currentRole.period}</span>
          </div>
          <p className="mt-5 text-ink/70 leading-relaxed max-w-2xl">
            {currentRole.summary}
          </p>
        </div>

        {/* Highlights strip */}
        <div className="lg:border-l lg:border-ink/10 lg:pl-8 flex flex-col gap-3 min-w-[220px]">
          <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-ink/60">
            Focus
          </p>
          <ul className="space-y-2.5">
            {currentRole.highlights.map((h) => (
              <li key={h} className="flex items-start gap-2.5 text-sm text-ink/80">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function ClientCard({ client }: { client: Client }) {
  return (
    <article
      className={`rounded-3xl border overflow-hidden ${
        client.isOther
          ? "border-ink/15 bg-cream-soft"
          : "border-ink/10 bg-cream-soft"
      }`}
    >
      <header className="flex flex-col md:flex-row md:items-center gap-5 p-8 md:p-10 border-b border-ink/10">
        <ClientLogo client={client} />
        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-3">
            <h3 className="font-serif text-3xl md:text-4xl text-ink leading-tight">
              {client.name}
            </h3>
            <span className="inline-flex items-center rounded-full border border-ink/20 px-3 py-0.5 text-[11px] font-medium text-ink/70">
              {client.projects.length}{" "}
              {client.projects.length === 1 ? "project" : "projects"}
            </span>
          </div>
          {client.tagline && (
            <p className="mt-2 text-ink/70 leading-relaxed max-w-3xl">
              {client.tagline}
            </p>
          )}
        </div>
      </header>

      <div className="p-6 md:p-8">
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {client.projects.map((p) => (
            <ProjectRow key={p.name} project={p} />
          ))}
        </ul>
      </div>
    </article>
  );
}

function ClientLogo({ client }: { client: Client }) {
  const initials = client.isOther
    ? "◆"
    : client.name
        .split(/\s+/)
        .map((w) => w[0])
        .join("")
        .slice(0, 2)
        .toUpperCase();

  return (
    <div className="relative h-20 w-20 shrink-0 rounded-2xl border border-ink/10 bg-cream flex items-center justify-center overflow-hidden">
      {client.logo ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={asset(client.logo)}
          alt={`${client.name} logo`}
          className="h-full w-full object-contain p-3"
        />
      ) : (
        <span className="font-serif text-3xl text-ink/70">{initials}</span>
      )}
    </div>
  );
}

function ProjectRow({ project }: { project: Project }) {
  return (
    <li className="group rounded-2xl border border-ink/10 bg-cream p-5 hover:border-ink/40 transition-colors">
      <div className="flex items-start justify-between gap-3">
        <h4 className="font-serif text-xl text-ink leading-tight">
          {project.name}
        </h4>
        <ArrowUpRight className="h-4 w-4 text-ink/30 group-hover:text-ink transition-colors" />
      </div>
      <p className="mt-2 text-sm text-ink/70 leading-relaxed">
        {project.description}
      </p>
      {project.tech && project.tech.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="inline-flex items-center rounded-full border border-ink/15 px-2.5 py-0.5 text-[11px] font-medium text-ink/70"
            >
              {t}
            </span>
          ))}
        </div>
      )}

      <div className="mt-4 flex flex-wrap gap-2">
        <StoreLink
          href={project.playStoreUrl}
          label="Play Store"
          Icon={PlayStoreIcon}
        />
        <StoreLink
          href={project.appStoreUrl}
          label="App Store"
          Icon={AppStoreIcon}
        />
      </div>
    </li>
  );
}

function StoreLink({
  href,
  label,
  Icon,
}: {
  href?: string;
  label: string;
  Icon: (props: { className?: string }) => React.ReactElement;
}) {
  const active = Boolean(href && href.trim().length > 0);
  const className =
    "inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-medium border transition-colors";

  if (active) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className={`${className} border-ink text-ink hover:bg-ink hover:text-cream`}
      >
        <Icon className="h-3.5 w-3.5" />
        {label}
      </a>
    );
  }

  return (
    <span
      className={`${className} border-ink/15 text-ink/40 cursor-not-allowed`}
      title="Link coming soon"
    >
      <Icon className="h-3.5 w-3.5" />
      {label}
    </span>
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
