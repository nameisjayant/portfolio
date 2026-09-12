import { SectionHeader } from "./Works";

const stats = [
  { value: "5+", label: "Years shipping mobile apps" },
  { value: "40+", label: "Articles on Medium" },
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
    <section id="about" className="relative py-24 md:py-32 bg-cream-soft">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeader
          eyebrow="About"
          title={
            <>
              Building mobile apps that
              <br />
              feel <span className="italic font-serif">effortless</span>.
            </>
          }
        />

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-6 text-lg leading-relaxed text-ink/80">
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
              <span className="italic font-serif">Programming Simplified</span>.
            </p>
          </div>

          <div className="rounded-3xl bg-ink text-cream p-8">
            <p className="text-xs uppercase tracking-widest text-cream/60">
              At a glance
            </p>
            <div className="mt-6 grid grid-cols-2 gap-6">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="font-serif text-4xl">{s.value}</div>
                  <div className="mt-1 text-xs text-cream/70 leading-relaxed">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16">
          <p className="text-xs font-medium uppercase tracking-widest text-ink/60">
            Tech Stack
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {stack.map((s) => (
              <span
                key={s}
                className="inline-flex items-center rounded-full border border-ink/20 bg-cream px-4 py-2 text-sm font-medium text-ink/80 hover:border-ink hover:bg-white transition-colors"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
