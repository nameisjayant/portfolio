import { profile } from "@/lib/profile";

export default function Footer() {
  return (
    <footer className="bg-ink text-cream/70 border-t border-cream/10">
      <div className="mx-auto max-w-7xl px-5 md:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm">
          © {new Date().getFullYear()} {profile.name}. Built with Next.js &
          Tailwind.
        </p>
        <p className="text-sm font-serif italic">
          Designed & developed with care.
        </p>
      </div>
    </footer>
  );
}
