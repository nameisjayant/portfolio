import type { CSSProperties } from "react";
import {
  clients,
  currentRole,
  type Client,
  type Project,
} from "@/lib/profile";
import { asset } from "@/lib/path";
import { ArrowUpRight } from "./Icons";
import { AppStoreIcon, PlayStoreIcon } from "./StoreIcons";
import { tint } from "./tints";

export default function Works() {
  const projectCount = clients.reduce((n, c) => n + c.projects.length, 0);

  return (
    <section
      id="works"
      className="band band-sun py-24 md:py-32"
      aria-labelledby="works-title"
    >
      <div className="wrap">
        <div className="flex flex-wrap items-end justify-between gap-x-8 gap-y-4">
          <h2
            id="works-title"
            className="display text-[clamp(3.2rem,1.8rem+6vw,7.5rem)] [text-shadow:0.05em_0.05em_0_var(--color-tangerine)]"
          >
            Where I&apos;ve built
            <br />
            real-world apps
          </h2>
          <p className="hand -rotate-2 text-[clamp(1.4rem,1.1rem+1vw,1.9rem)]">
            {clients.length} clients · {projectCount} projects ↓
          </p>
        </div>

        <CurrentRoleBanner />

        <div className="mt-12 space-y-12">
          {clients.map((c, i) => (
            <ClientCard key={c.name} client={c} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CurrentRoleBanner() {
  return (
    <div
      className="page ruled mt-14 grid grid-cols-1 lg:grid-cols-[auto_1fr_auto] items-center gap-8 lg:gap-12 p-7 md:p-10"
      style={{ "--c": "var(--color-tangerine)" } as CSSProperties}
    >
      <a
        href={currentRole.companyUrl}
        target="_blank"
        rel="noreferrer"
        className="polaroid relative block w-32 md:w-36 -rotate-3 transition-[rotate] hover:rotate-0"
        aria-label={`${currentRole.company} website`}
      >
        <span className="tape" style={{ "--t": "var(--color-sky)" } as CSSProperties} />
        <span className="flex aspect-square items-center justify-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={asset(currentRole.logo)}
            alt={`${currentRole.company} logo`}
            className="h-full w-full object-contain p-2"
          />
        </span>
        <span className="absolute -bottom-3 -right-4 inline-flex items-center gap-1.5 rotate-6 rounded-md border-2 border-[#141218] bg-leaf px-2 py-0.5 font-mono text-[10px] font-medium uppercase tracking-widest text-[#141218]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#141218] pulse-dot" />
          Now
        </span>
      </a>

      <div className="min-w-0">
        <p className="page-stamp">
          <span>Now</span>
          Currently working · {currentRole.period}
        </p>
        <h3 className="display mt-4 text-[clamp(2.4rem,1.4rem+3vw,4.2rem)]">
          {currentRole.title}
        </h3>
        <p className="hand mt-2 text-2xl md:text-3xl text-green">
          {currentRole.subtitle}
        </p>
        <p className="mt-4 text-ink-2">
          at{" "}
          <a
            href={currentRole.companyUrl}
            target="_blank"
            rel="noreferrer"
            className="wavy-link font-bold text-ink"
          >
            {currentRole.company}
          </a>
        </p>
        <p className="mt-4 max-w-2xl text-ink-2 leading-relaxed">
          {currentRole.summary}
        </p>
      </div>

      <div className="min-w-[220px] lg:border-l-2 lg:border-dashed lg:border-ink/25 lg:pl-8">
        <p className="mono-label text-muted">Focus</p>
        <ul className="points mt-3 text-sm text-ink-2">
          {currentRole.highlights.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function clientAnchor(name: string) {
  return `client-${name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
}

function ClientCard({ client, index }: { client: Client; index: number }) {
  return (
    <article
      id={clientAnchor(client.name)}
      className="page ruled scroll-mt-24 p-6 md:p-10"
      style={{ "--c": tint(index) } as CSSProperties}
      aria-label={client.name}
    >
      <header className="flex flex-col md:flex-row md:items-center gap-6 pb-8 border-b-2 border-dashed border-ink/25">
        <ClientLogo client={client} index={index} />
        <div className="flex-1 min-w-0">
          <p className="page-stamp">
            <span>{String(index + 1).padStart(2, "0")}</span>
            {client.projects.length}{" "}
            {client.projects.length === 1 ? "project" : "projects"}
          </p>
          <h3 className="display mt-3 text-[clamp(2.4rem,1.4rem+3vw,4.4rem)] leading-[0.85]">
            {client.name}
          </h3>
          {client.tagline && (
            <p className="mt-3 max-w-3xl text-ink-2 leading-relaxed">
              {client.tagline}
            </p>
          )}
        </div>
      </header>

      <ul className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
        {client.projects.map((p) => (
          <ProjectRow key={p.name} project={p} />
        ))}
      </ul>
    </article>
  );
}

function ClientLogo({ client, index }: { client: Client; index: number }) {
  const initials = client.isOther
    ? "◆"
    : client.name
        .split(/\s+/)
        .map((w) => w[0])
        .join("")
        .slice(0, 2)
        .toUpperCase();

  return (
    <div
      className={`polaroid relative w-24 shrink-0 ${
        index % 2 === 0 ? "-rotate-3" : "rotate-3"
      }`}
    >
      <span
        className="tape w-16 h-5 -top-2.5"
        style={{ "--t": tint(index + 2) } as CSSProperties}
      />
      <div className="flex aspect-square items-center justify-center overflow-hidden">
        {client.logo ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={asset(client.logo)}
            alt={`${client.name} logo`}
            className="h-full w-full object-contain"
          />
        ) : (
          <span
            className="grid h-full w-full place-items-center display text-4xl text-[#141218]"
            style={{ background: "var(--c)" }}
          >
            {initials}
          </span>
        )}
      </div>
    </div>
  );
}

function ProjectRow({ project }: { project: Project }) {
  return (
    <li className="group flex flex-col rounded-xl border-[2.5px] border-ink bg-card p-5 shadow-[4px_4px_0_var(--ink)] transition-transform hover:-translate-y-1">
      <div className="flex items-start justify-between gap-3">
        <h4 className="font-display text-2xl font-extrabold uppercase leading-[0.95] [font-stretch:85%]">
          {project.name}
        </h4>
        <ArrowUpRight className="h-5 w-5 shrink-0 text-muted transition-colors group-hover:text-ink" />
      </div>
      <p className="mt-2 text-[0.95rem] text-ink-2 leading-relaxed">
        {project.description}
      </p>
      {project.tech && project.tech.length > 0 && (
        <div className="tags mt-4 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="tag tag-sm"
              style={{ "--t": "var(--c)" } as CSSProperties}
            >
              {t}
            </span>
          ))}
        </div>
      )}

      <div className="mt-auto flex flex-wrap gap-2.5 pt-5">
        <StoreLink
          href={project.playStoreUrl}
          label="Play Store"
          Icon={PlayStoreIcon}
          tone="chunky-sun"
        />
        <StoreLink
          href={project.appStoreUrl}
          label="App Store"
          Icon={AppStoreIcon}
          tone="chunky-paper"
        />
      </div>
    </li>
  );
}

function StoreLink({
  href,
  label,
  Icon,
  tone,
}: {
  href?: string;
  label: string;
  Icon: (props: { className?: string }) => React.ReactElement;
  tone: string;
}) {
  const active = Boolean(href && href.trim().length > 0);

  if (active) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className={`chunky chunky-xs ${tone}`}
      >
        <Icon className="h-3.5 w-3.5" />
        {label}
      </a>
    );
  }

  return (
    <span className="chunky-off" title="Link coming soon">
      <Icon className="h-3.5 w-3.5" />
      {label}
    </span>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  id,
}: {
  eyebrow: string;
  title: React.ReactNode;
  id?: string;
}) {
  return (
    <div>
      <p className="hand -rotate-2 text-[clamp(1.6rem,1.3rem+1vw,2.1rem)] text-green">
        {eyebrow} ↓
      </p>
      <h2
        id={id}
        className="display mt-3 text-[clamp(3rem,1.6rem+5vw,6rem)]"
      >
        {title}
      </h2>
    </div>
  );
}
