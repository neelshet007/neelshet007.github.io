"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";

export const HeroButtons: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6 sm:mt-8 z-30"
    >
      {/* Primary CTA Button matching reference Pill style */}
      <a
        href="#projects"
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-[#FF7A2F] text-white font-bold text-sm sm:text-base shadow-lg shadow-[#FF7A2F]/30 hover:bg-[#FF7A2F]/90 hover:scale-105 hover:shadow-xl transition-all duration-200"
      >
        <span>Portfolio</span>
        <ArrowUpRight className="w-5 h-5" />
      </a>

      {/* Secondary Glass Button */}
      <a
        href="#contact"
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-white/80 backdrop-blur-md border border-gray-300/80 text-[#111111] font-bold text-sm sm:text-base hover:bg-gray-100 hover:border-gray-400 hover:scale-105 transition-all duration-200 shadow-sm"
      >
        <Mail className="w-4 h-4 text-[#FF7A2F]" />
        <span>Contact Me</span>
      </a>
    </motion.div>
  );
};
