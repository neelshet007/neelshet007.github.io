"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "./Container";
import { ArrowUpRight, MessageSquare } from "lucide-react";
import { portfolioConfig } from "@/config/portfolioConfig";

export const NexScaleCTA: React.FC = () => {
  return (
    <section
      id="services"
      className="relative bg-[#111111] text-white py-20 sm:py-28 overflow-hidden z-20 shadow-2xl"
    >
      {/* Subtle Dotted Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1.5px,transparent_1.5px)] [background-size:32px_32px]" />

      <Container className="relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FF7A2F]/20 border border-[#FF7A2F]/30 text-[#FF7A2F] text-xs font-bold uppercase tracking-wider mb-2"
          >
            <span>Ventures &amp; Solutions</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-black text-white tracking-tight"
          >
            Building solutions through {portfolioConfig.agencyName}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-300 text-base sm:text-lg leading-relaxed font-normal"
          >
            I also build technology solutions through NexScale for businesses looking to automate workflows, modernize infrastructure, or develop custom software.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <a
              href={portfolioConfig.links.nexscale}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-[#FF7A2F] text-white font-bold text-sm sm:text-base shadow-lg shadow-[#FF7A2F]/30 hover:bg-[#FF7A2F]/90 hover:scale-105 transition-all duration-200"
            >
              <span>Visit NexScale</span>
              <ArrowUpRight className="w-5 h-5" />
            </a>

            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold text-sm sm:text-base hover:bg-white/20 hover:scale-105 transition-all duration-200"
            >
              <MessageSquare className="w-4 h-4 text-[#FF7A2F]" />
              <span>Let&apos;s Connect</span>
            </a>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
