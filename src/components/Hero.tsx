import { profile } from "@/lib/profile";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden hero-gradient min-h-screen pt-28 pb-16"
    >
      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        {/* Script "Hey, there" */}
        <div className="relative flex justify-center pt-6">
          <h1 className="font-serif italic text-[18vw] md:text-[15vw] leading-[0.85] text-ink text-center whitespace-nowrap">
            Hey, <span className="italic">there</span>
          </h1>
        </div>

        {/* Availability + tagline row */}
        <div className="mt-16 md:mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 items-end">
          <div className="flex md:justify-start">
            <div className="inline-flex items-center gap-3 rounded-full bg-white/90 backdrop-blur px-5 py-3 shadow-sm">
              <span className="relative inline-flex h-2.5 w-2.5">
                <span className="absolute inset-0 rounded-full bg-accent pulse-dot" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent" />
              </span>
              <span className="text-sm font-medium text-ink">
                Available for new opportunities
              </span>
            </div>
          </div>

          <div className="hidden md:block" />

          <div className="md:justify-self-end md:text-right max-w-xs">
            <p className="text-sm md:text-base leading-relaxed text-ink/80">
              {profile.tagline}
            </p>
          </div>
        </div>

        {/* Bold "I AM JAYANT" + role */}
        <div className="mt-10 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 items-end">
          <div className="md:col-span-2">
            <h2 className="font-sans font-black uppercase tracking-tight text-ink leading-[0.85] text-[18vw] md:text-[11vw]">
              I AM
              <br />
              JAYANT
            </h2>
          </div>
          <div className="md:justify-self-end">
            <h3 className="font-sans font-black uppercase tracking-tight leading-[0.9] text-ink text-[10vw] md:text-[3.2vw] md:text-right">
              MOBILE
              <br />
              DEVELOPER
            </h3>
          </div>
        </div>
      </div>

      <StackMarquee />
    </section>
  );
}

function StackMarquee() {
  const items = [
    "Android",
    "iOS",
    "React Native",
    "Flutter",
    "Kotlin",
    "Swift",
    "Jetpack Compose",
    "SwiftUI",
    "TypeScript",
    "Dart",
  ];
  const track = [...items, ...items];
  return (
    <div className="mt-16 md:mt-24 overflow-hidden border-y border-ink/10 bg-cream/40 backdrop-blur-sm">
      <div className="flex marquee-track py-4 whitespace-nowrap">
        {track.map((t, i) => (
          <span
            key={i}
            className="mx-6 inline-flex items-center gap-6 font-serif italic text-2xl md:text-3xl text-ink/80"
          >
            {t}
            <span className="text-accent">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
