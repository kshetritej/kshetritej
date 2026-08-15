import type { Metadata, Viewport } from "next";
import { Inter_Tight, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const interTight = Inter_Tight({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
});


const ogImage = "/og-image.png"

export const metadata: Metadata = {
  title: "Tej Kshetri | Code Monkey",
  description:
    "Fullstack Developer/ Engineer shipping products end to end, owning planning, development, deployment and aftermath scenarios.",
  authors: [{ name: "Tej Kshetri" }],
  openGraph: {
    title: "Tej Kshetri | Code Monkey",
    description:
      "Fullstack Developer/ Engineer shipping products end to end, owning planning, development, deployment and aftermath scenarios.",
    type: "website",
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tej Kshetri | Code Monkey",
    description:
      "Fullstack Developer/ Engineer shipping products end to end, owning planning, development, deployment and aftermath scenarios.",
    images: [ogImage],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${interTight.variable} ${jetbrainsMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
