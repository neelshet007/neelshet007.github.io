import type { Metadata } from "next";
import { Sora, Inter } from "next/font/google";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Neel | Full Stack Engineer • DevOps & Cloud Engineer • Open Source Enthusiast",
  description:
    "I'm a junior engineer building scalable applications, cloud infrastructure, AI-powered automation, and algorithmic trading systems — while exploring open source and creating technical content.",
  keywords: [
    "Neel",
    "Full Stack Engineer",
    "DevOps Engineer",
    "Cloud Engineer",
    "Open Source Enthusiast",
    "Cloud Infrastructure",
    "Kubernetes",
    "Docker",
    "AWS",
    "Terraform",
    "CI/CD",
    "Agentic AI",
    "Algorithmic Trading",
  ],
  authors: [{ name: "Neel" }],
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    title: "Neel | Full Stack Engineer • DevOps & Cloud Engineer • Open Source Enthusiast",
    description:
      "I'm a junior engineer building scalable applications, cloud infrastructure, AI-powered automation, and algorithmic trading systems — while exploring open source and creating technical content.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${sora.variable} ${inter.variable} font-sans bg-[#0B0F17] text-[#F3F4F6] antialiased selection:bg-[#FF7A2F] selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
