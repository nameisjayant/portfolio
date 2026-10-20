import { profile } from "@/lib/profile";

export default function Footer() {
  return (
    <footer className="bg-asphalt text-chalk">
      <div className="wrap flex flex-col md:flex-row items-center justify-between gap-3 border-t-2 border-dashed border-white/35 py-6 text-sm">
        <p>
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
        <p className="hand text-2xl text-sun">
          Designed & developed with care.
        </p>
      </div>
    </footer>
  );
}
