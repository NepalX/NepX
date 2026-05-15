import type { Metadata, Viewport } from "next";
import { Inter, Montserrat } from "next/font/google";
import { SiteFooter, SiteHeader } from "./components";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://nepx.org";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Nepal Innovate 2024 | Startup Hackathon for +2 Students",
    template: "%s | Nepal Innovate 2024",
  },
  description:
    "Nepal Innovate 2024 is a 48-hour startup hackathon for +2 students in Nepal, with mentors, tracks, resources, and registration.",
  applicationName: "NepX",
  keywords: [
    "Nepal Innovate 2024",
    "NepX",
    "Nepal hackathon",
    "+2 students Nepal",
    "student startup event",
    "technology mentors Nepal",
  ],
  authors: [{ name: "NepX" }],
  creator: "NepX",
  publisher: "NepX",
  openGraph: {
    title: "Nepal Innovate 2024",
    description:
      "A 48-hour startup hackathon for +2 students in Nepal.",
    url: "/",
    siteName: "Nepal Innovate 2024",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Nepal Innovate 2024 hackathon",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nepal Innovate 2024",
    description:
      "Build the future of Nepal through a 48-hour student startup hackathon.",
    images: ["/twitter-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/icon.svg",
  },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#fcf8f9",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${inter.variable}`}>
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
