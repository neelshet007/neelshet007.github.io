import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { WhatIBuild } from "@/components/WhatIBuild";
import { SkillsExpertise } from "@/components/SkillsExpertise";
import { NexScaleCTA } from "@/components/NexScaleCTA";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-[#111111] antialiased">
      {/* Floating Header Navbar */}
      <Navbar />

      {/* Hero Section + 8 Social Platform Grid */}
      <Hero />

      {/* About Me Section (Light gray background #F9FAFB) */}
      <About />

      {/* What I Build Minimal 4 Focus Cards (White background) */}
      <WhatIBuild />

      {/* Skills & Technologies Categorized Grid (White background) */}
      <SkillsExpertise />

      {/* NexScale CTA Bridge (Dark charcoal #111111 background) */}
      <NexScaleCTA />

      {/* Direct WhatsApp Contact Section (White background) */}
      <ContactSection />

      {/* 3-Column Footer (Dark charcoal #111111 background) */}
      <Footer />
    </main>
  );
}
