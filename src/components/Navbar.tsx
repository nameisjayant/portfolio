"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#works", label: "Works" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#testimonial", label: "Testimonial" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between px-5 md:px-8 transition-all ${
          scrolled
            ? "bg-cream/85 backdrop-blur-md rounded-full shadow-[0_4px_30px_rgba(0,0,0,0.06)] mx-4 md:mx-8"
            : ""
        }`}
      >
        <a
          href="#home"
          className="font-serif italic text-2xl tracking-tight text-ink"
        >
          Jayant<span className="text-accent">.</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-ink/80 hover:text-ink transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden md:inline-flex items-center rounded-full bg-ink text-cream px-6 py-3 text-sm font-medium hover:bg-accent transition-colors"
          >
            Contact
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex h-11 w-11 items-center justify-center rounded-full bg-ink text-cream"
            aria-label="Toggle menu"
          >
            <span
              className={`block h-0.5 w-5 bg-cream transition-transform ${
                open ? "translate-y-0.5 rotate-45" : "-translate-y-1"
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-cream absolute transition-opacity ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-cream absolute transition-transform ${
                open ? "-translate-y-0.5 -rotate-45" : "translate-y-1"
              }`}
            />
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden mx-4 mt-3 rounded-3xl bg-cream/95 backdrop-blur-md p-6 shadow-lg">
          <nav className="flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-ink/80 hover:text-ink"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-ink text-cream px-5 py-3 text-sm font-medium"
            >
              Contact
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
