"use client";

import { useLayoutEffect } from "react";
import { THEME_STORAGE_KEY as STORAGE_KEY } from "@/lib/theme";

function systemTheme() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function storedTheme() {
  try {
    return localStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
}

function applyTheme(theme: string) {
  document.documentElement.setAttribute("data-theme", theme);
}

export default function ThemeToggle({ className = "" }: { className?: string }) {
  useLayoutEffect(() => {
    // Re-apply after React's dev remount clears the attribute (no-op in prod).
    applyTheme(storedTheme() ?? systemTheme());

    // Follow the OS setting until the visitor picks a theme explicitly.
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => {
      if (!storedTheme()) applyTheme(systemTheme());
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  function toggle() {
    const current = document.documentElement.getAttribute("data-theme");
    const next = current === "dark" ? "light" : "dark";
    applyTheme(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {}
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle dark mode"
      title="Toggle dark mode"
      className={`round ${className}`}
    >
      {/* Moon in light mode, sun in dark mode — CSS-driven so SSR and client agree. */}
      <svg
        className="h-5 w-5 dark:hidden"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
      </svg>
      <svg
        className="hidden h-5 w-5 dark:block"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
      </svg>
    </button>
  );
}
