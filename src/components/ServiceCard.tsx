"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  index,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      whileHover={{ y: -10, scale: 1.02 }}
      className="group relative p-8 rounded-3xl dark-glass bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-[#FF7A2F]/50 shadow-xl hover:shadow-2xl hover:shadow-[#FF7A2F]/10 transition-all duration-300 flex flex-col justify-between"
    >
      <div>
        {/* Icon Badge */}
        <div className="w-16 h-16 rounded-2xl bg-[#FF7A2F]/10 border border-[#FF7A2F]/20 flex items-center justify-center text-[#FF7A2F] group-hover:bg-[#FF7A2F] group-hover:text-white transition-all duration-300 mb-6 shadow-sm">
          {icon}
        </div>

        {/* Title matching reference layout */}
        <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3 group-hover:text-[#FF7A2F] transition-colors">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
          {description}
        </p>
      </div>

      {/* Explore Arrow */}
      <div className="mt-8 flex items-center text-xs sm:text-sm font-bold text-[#FF7A2F] gap-1.5 group-hover:translate-x-1.5 transition-transform duration-300">
        <span>Explore Architecture</span>
        <ArrowUpRight className="w-4 h-4" />
      </div>
    </motion.div>
  );
};
