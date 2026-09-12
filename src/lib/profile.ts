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

export type Project = {
  name: string;
  description: string;
  tech?: string[];
  playStoreUrl?: string;
  appStoreUrl?: string;
};

export type Client = {
  name: string;
  tagline?: string;
  logo?: string; // path under /public, e.g. "/logos/awfis.svg"
  isOther?: boolean; // treat card as the "Other Projects" bucket
  projects: Project[];
};

export const currentRole = {
  company: "Antino Labs",
  title: "Lead Mobile Engineer",
  subtitle: "Associate Vice President",
  period: "Current",
  logo: "/logos/antino.png",
  companyUrl: "https://antino.com",
  summary:
    "Leading mobile engineering across Android, iOS, React Native and Flutter for clients spanning workspace, EV, POS, mobility and news.",
  highlights: [
    "Android · iOS · React Native · Flutter",
    "Team leadership & mentoring",
    "0 → 1 product delivery",
  ],
};

// Grouped by client, not employer.
// Add real client logos to /public/logos/ and set the `logo` field to the path.
// Fill in Play Store / App Store URLs on each project as you go.
export const clients: Client[] = [
  {
    name: "Awfis",
    tagline: "India's largest workspace network — full mobile suite.",
    projects: [
      {
        name: "Awfis App",
        description: "Flagship Awfis workspace app for members.",
        tech: ["React Native"],
        playStoreUrl: "",
        appStoreUrl: "",
      },
      {
        name: "Awfis Meeting Room",
        description: "Meeting-room discovery and booking experience.",
        tech: ["React Native"],
        playStoreUrl: "",
        appStoreUrl: "",
      },
      {
        name: "Awfis BPM",
        description: "Business-process management for Awfis operations teams.",
        tech: ["React Native"],
        playStoreUrl: "",
        appStoreUrl: "",
      },
      {
        name: "Awfis VMS",
        description: "Visitor-management system for Awfis centres.",
        tech: ["React Native"],
        playStoreUrl: "",
        appStoreUrl: "",
      },
      {
        name: "Awfis Care",
        description: "Facility-care app for on-site issue reporting.",
        tech: ["React Native"],
        playStoreUrl: "",
        appStoreUrl: "",
      },
      {
        name: "Awfis POS",
        description:
          "Point-of-sale app for Awfis cafes and services — native Android.",
        tech: ["Android", "Kotlin", "Jetpack Compose"],
        playStoreUrl: "",
        appStoreUrl: "",
      },
      {
        name: "Awfis Cafe",
        description: "Cafe ordering experience for Awfis members.",
        tech: ["React Native"],
        playStoreUrl: "",
        appStoreUrl: "",
      },
      {
        name: "Awfis Co-working",
        description: "Co-working discovery and booking flows.",
        tech: ["React Native"],
        playStoreUrl: "",
        appStoreUrl: "",
      },
      {
        name: "Elevate",
        description:
          "Built for Awfis MO (Managed Office) clients — a dedicated experience for managed-office members.",
        tech: ["React Native"],
        playStoreUrl: "",
        appStoreUrl: "",
      },
    ],
  },
  {
    name: "Queuebuster",
    tagline: "POS suite for retailers — merchants, distributors and stores.",
    projects: [
      {
        name: "Queuebuster",
        description:
          "The flagship POS app — manage stocks, khata and billing for small businesses.",
        tech: ["Android", "Jetpack Compose"],
        playStoreUrl: "",
        appStoreUrl: "",
      },
      {
        name: "Merchant App",
        description:
          "My first Flutter app — merchants can view product details and renew their license.",
        tech: ["Flutter", "Dart"],
        playStoreUrl: "",
        appStoreUrl: "",
      },
      {
        name: "Distributor App",
        description:
          "Distributors can create leads and view license details across the Queuebuster network.",
        tech: ["Android", "Jetpack Compose"],
        playStoreUrl: "",
        appStoreUrl: "",
      },
    ],
  },
  {
    name: "Eneready",
    tagline: "EV charging for Singapore.",
    projects: [
      {
        name: "Eneready",
        description:
          "My first real-world Jetpack Compose app — Singapore-based EV charging for drivers on the go.",
        tech: ["Android", "Jetpack Compose"],
        playStoreUrl: "",
        appStoreUrl: "",
      },
    ],
  },
  {
    name: "Yassir",
    tagline: "Super-app leader in North Africa.",
    projects: [
      {
        name: "Yassir",
        description:
          "A cab-booking application based in Algeria, North Africa.",
        tech: ["Mobile"],
        playStoreUrl: "",
        appStoreUrl: "",
      },
    ],
  },
  {
    name: "GMR",
    tagline: "The company behind Delhi Airport — green-energy mobility.",
    projects: [
      {
        name: "GMR Green Energy EV",
        description:
          "Users can search for nearby EV charging stations. Built in Jetpack Compose with modern Android practices.",
        tech: ["Android", "Jetpack Compose"],
        playStoreUrl: "",
        appStoreUrl: "",
      },
    ],
  },
  {
    name: "Other Projects",
    tagline: "Independent projects across news, social, government and jobs.",
    isOther: true,
    projects: [
      {
        name: "Opinito",
        description:
          "A news app where users can read, like and share the latest stories.",
        tech: ["Android", "Jetpack Compose"],
        playStoreUrl: "",
        appStoreUrl: "",
      },
      {
        name: "ASCO (Street Light)",
        description:
          "A Bihar government app to raise street-light requests across districts. Migrated the entire project to Jetpack Compose.",
        tech: ["Android", "Jetpack Compose"],
        playStoreUrl: "",
        appStoreUrl: "",
      },
      {
        name: "Torbit",
        description: "A real-estate consultant app built with Flutter.",
        tech: ["Flutter", "Dart"],
        playStoreUrl: "",
        appStoreUrl: "",
      },
      {
        name: "Genuin",
        description:
          "A social app for short videos, communities, loops and stories — Instagram-style experience.",
        tech: ["Android"],
        playStoreUrl: "",
        appStoreUrl: "",
      },
      {
        name: "GetWork",
        description:
          "A job-search app across many fields, built in React Native.",
        tech: ["React Native", "TypeScript"],
        playStoreUrl: "",
        appStoreUrl: "",
      },
    ],
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
