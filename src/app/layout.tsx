import type { Metadata } from "next";
import {
  Bricolage_Grotesque,
  Caveat,
  DM_Mono,
  Figtree,
} from "next/font/google";
import "./globals.css";
import { themeInitScript } from "@/lib/theme";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  display: "swap",
});

// Includes the width axis so `font-stretch: 75%` gives the condensed display cut.
const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  axes: ["wdth"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  display: "swap",
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jayant Kumar — Mobile Developer",
  description:
    "Portfolio of Jayant Kumar, mobile developer specializing in Android, iOS, React Native and Flutter.",
  metadataBase: new URL("https://jayant.dev"),
  openGraph: {
    title: "Jayant Kumar — Mobile Developer",
    description:
      "Android · iOS · React Native · Flutter. Building crafted mobile experiences.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-theme="light"
      suppressHydrationWarning
      className={`${figtree.variable} ${bricolage.variable} ${caveat.variable} ${dmMono.variable} h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="min-h-full flex flex-col text-ink font-sans">
        {children}
      </body>
    </html>
  );
}
