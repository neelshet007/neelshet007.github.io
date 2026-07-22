"use client";

import React from "react";
import { motion } from "framer-motion";
import { MessageSquare, ArrowDown } from "lucide-react";
import { portfolioConfig } from "@/config/portfolioConfig";

export const HeroButtons: React.FC = () => {
  const handleHireMeWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello ${portfolioConfig.name},\n\nI visited your portfolio and would like to discuss an opportunity / project with you.`
    );
    window.open(`https://wa.me/${portfolioConfig.whatsappNumber}?text=${text}`, "_blank");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6 sm:mt-8 z-30"
    >
      {/* Primary CTA Button - "Hire Me" opening WhatsApp directly */}
      <button
        onClick={handleHireMeWhatsApp}
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-[#FF7A2F] text-white font-bold text-sm sm:text-base shadow-lg shadow-[#FF7A2F]/30 hover:bg-[#FF7A2F]/90 hover:scale-105 hover:shadow-xl transition-all duration-200 cursor-pointer"
      >
        <MessageSquare className="w-5 h-5" />
        <span>Hire Me</span>
      </button>

      {/* Secondary Glass Button - "Let's Connect" smoothly scrolling to Contact section */}
      <a
        href="#contact"
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-[#111827] border border-gray-700 text-white font-bold text-sm sm:text-base hover:bg-gray-800 hover:border-gray-600 hover:scale-105 transition-all duration-200 shadow-md"
      >
        <span>Let&apos;s Connect</span>
        <ArrowDown className="w-4 h-4 text-[#FF7A2F]" />
      </a>
    </motion.div>
  );
};
