import type { Metadata } from "next";
import { Outfit, Geist_Mono } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Neel Sheth | Tech Content Creator & Backend Engineer",
  description:
    "Portfolio of Neel Sheth, Tech Content Creator and Backend and DevOps Automation Engineer specializing in Generative AI, LLM integration, and cloud infrastructure.",
  keywords: [
    "Neel Sheth",
    "Portfolio",
    "Backend Engineer",
    "DevOps",
    "Generative AI",
    "LLM",
    "Cloud Infrastructure",
    "Full Stack Developer",
  ],
  authors: [{ name: "Neel Sheth" }],
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    title: "Neel Sheth | Tech Content Creator & Backend Engineer",
    description:
      "Portfolio of Neel Sheth, Tech Content Creator and Backend and DevOps Automation Engineer.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${outfit.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
