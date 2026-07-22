"use client";

import React from "react";
import { motion } from "framer-motion";

interface FloatingBadgeProps {
  label: string;
  icon?: React.ReactNode;
  side: "left" | "right";
  delay?: number;
}

export const FloatingBadge: React.FC<FloatingBadgeProps> = ({
  label,
  icon,
  side,
  delay = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: side === "left" ? -25 : 25, y: 10 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      whileHover={{ scale: 1.05, y: -4 }}
      className="flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-[#111827]/90 backdrop-blur-md border border-gray-700/80 shadow-lg shadow-black/40 text-[#F3F4F6] text-xs sm:text-sm font-bold hover:border-[#FF7A2F]/60 hover:shadow-xl transition-all duration-300 pointer-events-auto cursor-default group"
    >
      <span className="w-2.5 h-2.5 rounded-full bg-[#FF7A2F] group-hover:scale-125 transition-transform" />
      {icon && <span className="text-[#FF7A2F] text-sm sm:text-base">{icon}</span>}
      <span className="tracking-tight">{label}</span>
    </motion.div>
  );
};
