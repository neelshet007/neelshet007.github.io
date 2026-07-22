"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  FileText, 
  Github, 
  Linkedin, 
  Globe, 
  Instagram, 
  Youtube, 
  ArrowUpRight 
} from "lucide-react";
import { portfolioConfig } from "@/config/portfolioConfig";

const iconMap: Record<string, React.ReactNode> = {
  FileText: <FileText className="w-4 h-4" />,
  Github: <Github className="w-4 h-4" />,
  Linkedin: <Linkedin className="w-4 h-4" />,
  Globe: <Globe className="w-4 h-4" />,
  Instagram: <Instagram className="w-4 h-4" />,
  Youtube: <Youtube className="w-4 h-4" />,
};

export const SocialProofGrid: React.FC = () => {
  const links = portfolioConfig.socialLinks;
  const row1 = links.slice(0, 4);
  const row2 = links.slice(4, 8);

  return (
    <div className="w-full max-w-5xl mx-auto mt-12 sm:mt-16 px-4">
      <div className="text-center mb-6">
        <span className="text-xs uppercase tracking-widest text-[#FF7A2F] font-bold">
          Connect &amp; Explore Platforms
        </span>
      </div>

      {/* Desktop: 2 rows of 4 cards; Tablet: 2 cols; Mobile: 1 col */}
      <div className="flex flex-col gap-3 sm:gap-4">
        {/* Row 1 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {row1.map((item, idx) => (
            <motion.a
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 * idx }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="group flex items-center justify-between px-4 py-3 rounded-2xl bg-white border border-gray-200/90 shadow-md shadow-black/5 hover:border-[#FF7A2F]/50 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-[#FF7A2F]/10 text-[#FF7A2F] flex items-center justify-center group-hover:bg-[#FF7A2F] group-hover:text-white transition-colors duration-300">
                  {iconMap[item.iconName]}
                </div>
                <span className="text-xs sm:text-sm font-bold text-[#111111] group-hover:text-[#FF7A2F] transition-colors">
                  {item.name}
                </span>
              </div>
              <ArrowUpRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-[#FF7A2F] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </motion.a>
          ))}
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {row2.map((item, idx) => (
            <motion.a
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 + 0.1 * idx }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="group flex items-center justify-between px-4 py-3 rounded-2xl bg-white border border-gray-200/90 shadow-md shadow-black/5 hover:border-[#FF7A2F]/50 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-[#FF7A2F]/10 text-[#FF7A2F] flex items-center justify-center group-hover:bg-[#FF7A2F] group-hover:text-white transition-colors duration-300">
                  {iconMap[item.iconName]}
                </div>
                <span className="text-xs sm:text-sm font-bold text-[#111111] group-hover:text-[#FF7A2F] transition-colors">
                  {item.name}
                </span>
              </div>
              <ArrowUpRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-[#FF7A2F] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
};
