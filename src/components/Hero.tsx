"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "./Container";
import { HeroButtons } from "./HeroButtons";
import { HeroImage } from "./HeroImage";
import { SocialProofGrid } from "./SocialProofGrid";
import { ScrollIndicator } from "./ScrollIndicator";
import { portfolioConfig } from "@/config/portfolioConfig";

export const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative pt-24 sm:pt-32 pb-12 overflow-hidden bg-[#0B0F17] text-[#F3F4F6]"
    >
      <Container className="relative z-10 text-center">
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FF7A2F]/10 border border-[#FF7A2F]/30 text-[#FF7A2F] text-xs sm:text-sm font-semibold mb-6 max-w-[95vw] text-center"
        >
          <span className="w-2 h-2 rounded-full bg-[#FF7A2F] animate-ping shrink-0" />
          <span className="leading-snug">
            Open to Internships • Freelance Projects • Collaborations • Full-Time Opportunities
          </span>
        </motion.div>

        {/* Large Bold Greeting Scale */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-none text-white"
        >
          Hi, I&apos;m{" "}
          <span className="text-[#FF7A2F] relative inline-block">
            {portfolioConfig.name}
            <span className="absolute -right-3 -top-1 text-2xl sm:text-4xl">,</span>
          </span>
        </motion.h1>

        {/* Main Title: Full Stack Engineer • DevOps & Cloud Engineer • Open Source Enthusiast */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-3 sm:mt-5 max-w-5xl mx-auto"
        >
          <div className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-white flex flex-wrap items-center justify-center gap-x-2.5 sm:gap-x-3 gap-y-1">
            <span>{portfolioConfig.roles.firstLine}</span>
            <span className="text-[#FF7A2F] font-bold">•</span>
            <span>{portfolioConfig.roles.secondLine}</span>
            <span className="text-[#FF7A2F] font-bold hidden sm:inline">•</span>
            <span className="text-[#FF7A2F] block sm:inline w-full sm:w-auto mt-1 sm:mt-0">
              {portfolioConfig.roles.thirdLine}
            </span>
          </div>
        </motion.div>

        {/* Improved Description Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-3xl mx-auto mt-6 text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed font-normal"
        >
          {portfolioConfig.subtitle}
        </motion.p>

        {/* Conversion CTA Buttons */}
        <HeroButtons />

        {/* Symmetrical Hero Image & Semicircle with Floating Tech Badges */}
        <HeroImage />

        {/* 8-Platform Social Proof Grid */}
        <SocialProofGrid />

        {/* Scroll Indicator */}
        <ScrollIndicator />
      </Container>
    </section>
  );
};
