"use client";

import React from "react";
import { motion } from "framer-motion";

interface FloatingBadgeProps {
  label: string;
  icon?: React.ReactNode;
  side: "left" | "right";
  delay?: number;
  className?: string;
}

export const FloatingBadge: React.FC<FloatingBadgeProps> = ({
  label,
  icon,
  side,
  delay = 0,
  className = "",
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: side === "left" ? -20 : 20, y: 10 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      whileHover={{ scale: 1.04, y: -2 }}
      className={`flex items-center gap-2 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl bg-[#111827]/90 backdrop-blur-md border border-gray-700/80 shadow-md shadow-black/40 text-[#F3F4F6] text-xs sm:text-xs xl:text-sm font-semibold hover:border-[#FF7A2F]/60 hover:shadow-xl transition-all duration-300 pointer-events-auto cursor-default group select-none whitespace-nowrap ${className}`}
    >
      <span className="w-2 h-2 rounded-full bg-[#FF7A2F] group-hover:scale-125 transition-transform shrink-0" />
      {icon && <span className="text-[#FF7A2F] text-xs sm:text-sm shrink-0">{icon}</span>}
      <span className="tracking-tight">{label}</span>
    </motion.div>
  );
};
