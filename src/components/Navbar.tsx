"use client";

import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "#home", label: "Home" },
  { href: "#clients", label: "Clients" },
  { href: "#works", label: "Works" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#testimonial", label: "Testimonial" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  // Highlight the tab for whichever section sits under the nav.
  useEffect(() => {
    const sections = links
      .map((l) => document.querySelector<HTMLElement>(l.href))
      .filter((el): el is HTMLElement => el !== null);

    const onScroll = () => {
      const y = window.scrollY + 120;
      let current = links[0].href;
      for (const el of sections) {
        if (el.offsetTop <= y) current = `#${el.id}`;
      }
      setActive(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b-2 border-ink bg-paper/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-[78rem] items-center gap-4 px-[var(--pad)] py-2.5">
        <a
          href="#home"
          aria-label="Jayant Kumar, back to top"
          className="grid h-11 w-11 shrink-0 place-items-center rounded-full border-[2.5px] border-ink bg-[#0f7a4a] font-display text-xl font-extrabold text-sun transition-[rotate] duration-300 [font-stretch:75%] hover:-rotate-12"
        >
          JK
        </a>

        <nav aria-label="Sections" className="mx-auto hidden lg:flex gap-1.5">
          {links.map((l) => {
            const on = active === l.href;
            return (
              <a
                key={l.href}
                href={l.href}
                aria-current={on ? "true" : undefined}
                className={`rounded-[10px] border-2 px-3.5 py-1.5 text-sm font-semibold transition-colors ${
                  on
                    ? "border-ink bg-sun text-on-tint shadow-[2px_2px_0_var(--ink)]"
                    : "border-transparent hover:border-ink"
                }`}
              >
                {l.label}
              </a>
            );
          })}
        </nav>

        <div className="ml-auto lg:ml-0 flex items-center gap-3">
          <ThemeToggle />
          <a href="#contact" className="chunky chunky-sm hidden sm:inline-flex">
            Let&apos;s talk
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="round relative lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <span
              className={`absolute block h-0.5 w-5 bg-ink transition-transform ${
                open ? "rotate-45" : "-translate-y-1.5"
              }`}
            />
            <span
              className={`absolute block h-0.5 w-5 bg-ink transition-opacity ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute block h-0.5 w-5 bg-ink transition-transform ${
                open ? "-rotate-45" : "translate-y-1.5"
              }`}
            />
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t-2 border-ink bg-paper px-[var(--pad)] py-5">
          <nav className="flex flex-col gap-2">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`rounded-[10px] border-2 px-4 py-2 font-semibold ${
                  active === l.href
                    ? "border-ink bg-sun text-on-tint shadow-[2px_2px_0_var(--ink)]"
                    : "border-transparent"
                }`}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="chunky chunky-sm mt-2 justify-center"
            >
              Let&apos;s talk
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
