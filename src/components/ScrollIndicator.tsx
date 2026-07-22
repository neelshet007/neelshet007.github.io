"use client";

import React from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export const ScrollIndicator: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.8 }}
      className="flex flex-col items-center justify-center mt-12 sm:mt-16 gap-2 cursor-pointer"
      onClick={() => {
        document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
      }}
    >
      <span className="text-xs uppercase tracking-widest text-[#111111]/50 font-medium">
        Scroll Down
      </span>
      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-[#FF7A2F] bg-white shadow-sm"
      >
        <ChevronDown className="w-4 h-4" />
      </motion.div>
    </motion.div>
  );
};
