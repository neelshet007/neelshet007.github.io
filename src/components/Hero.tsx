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
        {/* Large Bold Heading Scale */}
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

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-2 sm:mt-3 text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-none text-white"
        >
          <span className="block">{portfolioConfig.roles.firstLine}</span>
          <span className="text-[#FF7A2F] block mt-1 sm:mt-2">
            {portfolioConfig.roles.secondLine}
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-2xl mx-auto mt-6 text-base sm:text-lg md:text-xl text-gray-400 leading-relaxed font-medium"
        >
          {portfolioConfig.subtitle}
        </motion.p>

        {/* CTA Buttons */}
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
