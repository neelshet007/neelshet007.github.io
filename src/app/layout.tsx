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
  title: "Neel | Full Stack & DevOps Engineer",
  description:
    "Portfolio of Neel, Full Stack Engineer & DevOps Specialist designing, building and automating scalable cloud infrastructure, backend systems, and deployment pipelines.",
  keywords: [
    "Neel",
    "DevOps Engineer",
    "Full Stack Engineer",
    "Cloud Infrastructure",
    "Kubernetes",
    "Docker",
    "AWS",
    "Terraform",
    "CI/CD",
  ],
  authors: [{ name: "Neel" }],
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    title: "Neel | Full Stack & DevOps Engineer",
    description:
      "Full Stack & DevOps Specialist designing, building and automating scalable cloud infrastructure and deployment pipelines.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${sora.variable} ${inter.variable} font-sans bg-white text-[#111111] antialiased selection:bg-[#FF7A2F] selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
