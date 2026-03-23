"use client";

import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SkillsCloud from "@/components/SkillsCloud";
import ProjectCarousel from "@/components/ProjectCarousel";
import EducationTimeline from "@/components/EducationTimeline";
import Footer from "@/components/Footer";

// Dynamically import the 3D background (avoid SSR for Three.js)
const ParticleBackground = dynamic(
  () => import("@/components/ParticleBackground"),
  { ssr: false }
);

export default function Home() {
  return (
    <>
      <ParticleBackground />
      <Navbar />
      <main>
        <Hero />
        <SkillsCloud />
        <ProjectCarousel />
        <EducationTimeline />
      </main>
      <Footer />
    </>
  );
}
