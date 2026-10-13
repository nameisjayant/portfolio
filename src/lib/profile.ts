export const profile = {
  name: "Jayant Kumar",
  firstName: "Jayant",
  title: "Mobile Developer",
  stack: ["Android", "iOS", "React Native", "Flutter"],
  tagline:
    "Specialized in Android, iOS, React Native and Flutter — building crafted, production-grade mobile experiences.",
  location: "India",
  email: "nameisjayant1@gmail.com",
  socials: {
    github: "https://github.com/nameisjayant",
    linkedin:
      "https://www.linkedin.com/in/jayant-kumar-%F0%9F%87%AE%F0%9F%87%B3-262597171/",
    youtube: "https://www.youtube.com/@ProgrammingSimplified0",
    instagram: "https://www.instagram.com/programming_simplified",
    medium: [
      { label: "Main", href: "https://nameisjayant.medium.com/" },
      { label: "Kotlin & Compose", href: "https://medium.com/@nameisjayant1" },
      { label: "Cross-platform", href: "https://medium.com/@nameisjayant2" },
    ],
  },
};

export type Work = {
  title: string;
  category: string;
  description: string;
  tags: string[];
  href: string;
};

export const works: Work[] = [
  {
    title: "Compose Bootcamp — Material 3",
    category: "Android · Jetpack Compose",
    description:
      "A hands-on Jetpack Compose playground covering Material 3 components, layouts, and animation patterns.",
    tags: ["Kotlin", "Jetpack Compose", "Material 3"],
    href: "https://github.com/nameisjayant",
  },
  {
    title: "React Native UI Kit",
    category: "React Native",
    description:
      "Reusable, themeable components and screens for shipping React Native apps faster.",
    tags: ["React Native", "TypeScript", "Reanimated"],
    href: "https://github.com/nameisjayant",
  },
  {
    title: "Flutter Commerce",
    category: "Flutter",
    description:
      "A modern e-commerce experience in Flutter with Riverpod, animations, and clean architecture.",
    tags: ["Flutter", "Dart", "Riverpod"],
    href: "https://github.com/nameisjayant",
  },
  {
    title: "SwiftUI Playground",
    category: "iOS · SwiftUI",
    description:
      "Interactive SwiftUI experiments — gestures, transitions, and glassy interfaces on iOS 17+.",
    tags: ["Swift", "SwiftUI", "iOS"],
    href: "https://github.com/nameisjayant",
  },
];

export type Service = {
  title: string;
  description: string;
  bullets: string[];
};

export const services: Service[] = [
  {
    title: "Android Development",
    description:
      "Native Android apps with Kotlin, Jetpack Compose and Material 3.",
    bullets: [
      "Jetpack Compose UI",
      "MVVM · Clean Architecture",
      "Coroutines · Flow",
      "Room · Retrofit · Hilt",
    ],
  },
  {
    title: "iOS Development",
    description:
      "Elegant iOS apps built with SwiftUI and modern Swift concurrency.",
    bullets: [
      "SwiftUI · UIKit",
      "async/await · Combine",
      "Swift Data · Core Data",
      "App Store release",
    ],
  },
  {
    title: "React Native",
    description:
      "Cross-platform apps that feel native, powered by TypeScript.",
    bullets: [
      "Expo · Bare workflow",
      "Reanimated · Gesture Handler",
      "Redux · Zustand",
      "Native modules",
    ],
  },
  {
    title: "Flutter",
    description:
      "Pixel-perfect Flutter apps with buttery animations and clean state.",
    bullets: [
      "Riverpod · Bloc",
      "Custom paint · Rive",
      "Firebase · GraphQL",
      "iOS + Android release",
    ],
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Jayant’s work on our Compose migration was outstanding — clean architecture, beautiful UI, delivered on time.",
    name: "Ananya Sharma",
    role: "Engineering Lead",
  },
  {
    quote:
      "One of the sharpest mobile engineers I’ve worked with. He treats performance and pixel detail with equal care.",
    name: "Rahul Verma",
    role: "Product Manager",
  },
  {
    quote:
      "His articles helped our team level up on Jetpack Compose faster than any course we tried.",
    name: "Sam Patel",
    role: "Android Developer",
  },
];
