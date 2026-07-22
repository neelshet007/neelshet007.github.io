"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "./Container";
import { portfolioConfig } from "@/config/portfolioConfig";

export const About: React.FC = () => {
  return (
    <section
      id="about"
      className="relative bg-gray-50 text-[#111111] py-20 sm:py-28 overflow-hidden border-t border-b border-gray-200/80"
    >
      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-4">
            <motion.span
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs uppercase tracking-widest text-[#FF7A2F] font-bold"
            >
              Background &amp; Journey
            </motion.span>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-black text-center text-[#111111] tracking-tight mb-8"
          >
            About Me
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white border border-gray-200 rounded-3xl p-6 sm:p-10 shadow-sm leading-relaxed text-gray-700 space-y-6 text-base sm:text-lg font-normal"
          >
            <p>
              I&apos;m a junior Full Stack &amp; DevOps Engineer passionate about building scalable applications, cloud infrastructure, AI-powered automation, and algorithmic trading systems. Alongside engineering, I&apos;m growing <strong className="text-[#FF7A2F] font-bold">{portfolioConfig.agencyName}</strong>, where I explore real-world software solutions while continuously learning and improving as a developer.
            </p>
            <p>
              I enjoy solving engineering problems that combine software, infrastructure, and automation. My interests span full-stack development, DevOps, AI workflows, and algorithmic trading systems. Every project is an opportunity to learn better architecture, cleaner code, and more reliable deployment practices.
            </p>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
