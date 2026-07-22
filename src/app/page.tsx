import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { WhatIBuild } from "@/components/WhatIBuild";
import { SkillsExpertise } from "@/components/SkillsExpertise";
import { ProjectsSection } from "@/components/ProjectsSection";
import { EducationSection } from "@/components/EducationSection";
import { NexScaleCTA } from "@/components/NexScaleCTA";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B0F17] text-[#F3F4F6] antialiased">
      {/* Floating Header Navbar */}
      <Navbar />

      {/* Hero Section + 6 Social Platform Grid */}
      <Hero />

      {/* About Me Section */}
      <About />

      {/* What I Build Minimal Focus Cards */}
      <WhatIBuild />

      {/* Skills & Technologies Categorized Grid (Moved ABOVE Projects) */}
      <SkillsExpertise />

      {/* Featured Projects Case Studies */}
      <ProjectsSection />

      {/* Modern Education Section */}
      <EducationSection />

      {/* NexScale CTA Bridge */}
      <NexScaleCTA />

      {/* Direct WhatsApp Contact Section */}
      <ContactSection />

      {/* 3-Column Footer */}
      <Footer />
    </main>
  );
}
