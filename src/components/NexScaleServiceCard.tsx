"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { portfolioConfig } from "@/config/portfolioConfig";

interface NexScaleServiceCardProps {
  title: string;
  items: string[];
  isComingSoon?: boolean;
  index: number;
}

export const NexScaleServiceCard: React.FC<NexScaleServiceCardProps> = ({
  title,
  items,
  isComingSoon = false,
  index,
}) => {
  const handleRequestSolution = () => {
    const text = encodeURIComponent(
      `Hello ${portfolioConfig.name},\n\nI am interested in requesting a solution for: *${title}* via NexScale.`
    );
    window.open(`https://wa.me/${portfolioConfig.whatsappNumber}?text=${text}`, "_blank");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8, scale: 1.01 }}
      className="relative p-7 rounded-3xl dark-glass bg-white/[0.04] border border-white/10 hover:border-[#FF7A2F]/50 hover:bg-white/[0.07] transition-all duration-300 flex flex-col justify-between overflow-hidden group shadow-xl"
    >
      {/* Coming Soon Ribbon */}
      {isComingSoon && (
        <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-[#FF7A2F]/20 border border-[#FF7A2F]/40 text-[#FF7A2F] text-xs font-bold uppercase tracking-wider">
          Coming Soon
        </div>
      )}

      <div>
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 pr-16 group-hover:text-[#FF7A2F] transition-colors">
          {title}
        </h3>

        <ul className="space-y-2 mb-6">
          {items.map((item) => (
            <li key={item} className="flex items-center gap-2 text-xs sm:text-sm text-gray-300">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF7A2F]" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <button
        onClick={handleRequestSolution}
        className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#FF7A2F]/10 border border-[#FF7A2F]/30 text-[#FF7A2F] group-hover:bg-[#FF7A2F] group-hover:text-white font-bold text-xs sm:text-sm transition-all duration-300 shadow-sm"
      >
        <span>Request Solution</span>
        <ArrowUpRight className="w-4 h-4" />
      </button>
    </motion.div>
  );
};
