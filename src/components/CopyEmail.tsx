"use client";

import { useState } from "react";

export default function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // Clipboard can be blocked (e.g. insecure origin); the mailto link still works.
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      aria-live="polite"
      className="rounded-full border-[2.5px] border-ink bg-sun px-4 py-2 text-sm font-bold leading-none text-on-tint shadow-[2px_2px_0_var(--ink)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
    >
      {copied ? "Copied!" : "Copy"}
    </button>
  );
}
