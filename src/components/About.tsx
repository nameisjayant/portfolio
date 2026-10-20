import type { CSSProperties } from "react";
import { tint } from "./tints";
import { SectionHeader } from "./Works";

const stats = [
  { value: "5+", label: "Years shipping mobile apps" },
  { value: "300+", label: "Articles on Medium" },
  { value: "10k+", label: "Developers reached on YouTube" },
  { value: "4", label: "Platforms mastered" },
];

const stack = [
  "Kotlin",
  "Swift",
  "Dart",
  "TypeScript",
  "Jetpack Compose",
  "SwiftUI",
  "React Native",
  "Flutter",
  "Coroutines",
  "Combine",
  "Riverpod",
  "Redux",
  "Room",
  "Core Data",
  "Retrofit",
  "Firebase",
];

export default function About() {
  return (
    <section
      id="about"
      className="wrap py-24 md:py-32"
      aria-labelledby="about-title"
    >
      <SectionHeader
        id="about-title"
        eyebrow="About"
        title={
          <>
            Building mobile apps that
            <br />
            feel <mark>effortless</mark>
          </>
        }
      />

      <div className="mt-14 grid grid-cols-1 lg:grid-cols-[minmax(0,1.7fr)_minmax(0,0.75fr)] gap-10 lg:gap-14 items-start">
        <div className="sheet spiral grid gap-5 rounded-lg px-6 pt-12 pb-9 md:px-10 shadow-[7px_7px_0_var(--ink)] bg-[repeating-linear-gradient(to_bottom,transparent_0_31px,var(--line)_31px_32px)] [background-position:0_14px]">
          <h3 className="display text-[clamp(2.2rem,1.6rem+2vw,3.2rem)]">
            A bit about me
          </h3>
          <div className="space-y-5 text-lg leading-relaxed text-ink-2">
            <p>
              I&apos;m Jayant — a mobile developer who obsesses over the details
              that make apps feel alive. I&apos;ve spent years working across
              Android, iOS, React Native and Flutter, shipping products from
              scrappy prototypes to store releases used by real people.
            </p>
            <p>
              I write about what I build. My articles on Medium and videos on
              YouTube help thousands of developers level up on Jetpack Compose,
              SwiftUI, React Native and Flutter every month.
            </p>
            <p>
              When I&apos;m not coding, I&apos;m probably tinkering with a new
              framework, sketching UI ideas, or explaining a tricky concept in
              plain English on{" "}
              <span className="hand text-2xl text-green">
                Programming Simplified
              </span>
              .
            </p>
          </div>

          <div className="mt-2">
            <p className="mono-label text-muted">Tech Stack</p>
            <ul className="tags mt-4 flex flex-wrap gap-2.5" aria-label="Tech stack">
              {stack.map((s, i) => (
                <li
                  key={s}
                  className="tag"
                  style={{ "--t": tint(i) } as CSSProperties}
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div>
          <p className="hand -rotate-2 text-3xl">at a glance</p>
          <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
            {stats.map((s, i) => (
              <p
                key={s.label}
                className={`sticky-note ${
                  ["rotate-3", "-rotate-2", "rotate-2", "-rotate-3"][i % 4]
                }`}
                style={{ "--t": tint(i) } as CSSProperties}
              >
                <b className="display text-[clamp(2.2rem,1.6rem+1.6vw,2.8rem)]">
                  {s.value}
                </b>
                <span className="text-[0.95rem] leading-snug">{s.label}</span>
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
