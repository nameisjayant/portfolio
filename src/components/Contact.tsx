import { profile } from "@/lib/profile";
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
    <section id="contact" className="relative py-24 md:py-32 bg-ink text-cream">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-end">
          <div className="md:col-span-2">
            <div className="inline-flex items-center gap-2">
              <span className="h-px w-8 bg-cream" />
              <span className="text-xs font-medium uppercase tracking-widest text-cream/70">
                Let&apos;s work together
              </span>
            </div>
            <h2 className="mt-5 font-black uppercase tracking-tight text-cream leading-[0.9] text-[13vw] md:text-[8vw]">
              Have an idea?
              <br />
              <span className="italic font-serif normal-case tracking-normal text-accent-soft">
                Let&apos;s build it.
              </span>
            </h2>
          </div>

          <a
            href={`mailto:${profile.email}`}
            className="md:justify-self-end group inline-flex items-center gap-3 rounded-full bg-cream text-ink px-7 py-4 text-lg font-medium hover:bg-accent hover:text-cream transition-colors"
          >
            {profile.email}
            <ArrowUpRight className="h-5 w-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-cream/60">
              Elsewhere
            </p>
            <div className="mt-6 grid grid-cols-2 gap-3">
              {socialLinks.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between gap-3 rounded-2xl border border-cream/20 px-5 py-4 hover:border-cream hover:bg-cream hover:text-ink transition-colors"
                >
                  <span className="flex items-center gap-3">
                    <Icon className="h-5 w-5" />
                    <span className="font-medium">{label}</span>
                  </span>
                  <ArrowUpRight className="h-4 w-4 opacity-60 group-hover:opacity-100" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-cream/60">
              Read my writing
            </p>
            <div className="mt-6 space-y-3">
              {profile.socials.medium.map((m) => (
                <a
                  key={m.href}
                  href={m.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between gap-3 rounded-2xl border border-cream/20 px-5 py-4 hover:border-cream hover:bg-cream hover:text-ink transition-colors"
                >
                  <span className="flex items-center gap-3">
                    <MediumIcon className="h-5 w-5" />
                    <span>
                      <span className="font-medium">Medium — {m.label}</span>
                      <span className="block text-xs opacity-60 truncate max-w-[220px]">
                        {m.href.replace(/^https?:\/\//, "")}
                      </span>
                    </span>
                  </span>
                  <ArrowUpRight className="h-4 w-4 opacity-60 group-hover:opacity-100" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
