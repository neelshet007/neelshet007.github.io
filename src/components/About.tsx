"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "./Container";
import { portfolioConfig } from "@/config/portfolioConfig";
import { GitPullRequest, ExternalLink } from "lucide-react";

export const About: React.FC = () => {
  return (
    <section
      id="about"
      className="relative bg-[#0F141F] text-[#F3F4F6] py-20 sm:py-28 overflow-hidden border-t border-b border-gray-800/80"
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
            className="text-3xl sm:text-5xl font-black text-center text-white tracking-tight mb-8"
          >
            About Me
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-[#111827] border border-gray-800 rounded-3xl p-6 sm:p-10 shadow-xl leading-relaxed text-gray-300 space-y-5 text-base sm:text-lg font-normal"
          >
            <p>
              I&apos;m a junior Full Stack &amp; DevOps Engineer passionate about building scalable applications, cloud infrastructure, AI-powered automation, and algorithmic trading systems.
            </p>
            <p>
              Alongside engineering, I&apos;m growing <strong className="text-[#FF7A2F] font-bold">{portfolioConfig.agencyName}</strong>, where I explore real-world software solutions and work on projects that combine development, infrastructure, and automation.
            </p>
            <p>
              I&apos;m also exploring open-source contribution opportunities, particularly within the <strong className="text-white font-semibold">Cloud Native Computing Foundation (CNCF) ecosystem</strong> and projects like <strong className="text-white font-semibold">Jenkins</strong>. I&apos;m currently learning how established codebases work, understanding their contribution workflows, and working toward making my first meaningful contribution.
            </p>
            <p>
              Every project and codebase I explore helps me improve my understanding of system architecture, clean code, automation, and reliable deployment practices.
            </p>

            {/* Open Source Journey & Community Interest Badge */}
            <div className="pt-6 border-t border-gray-800/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#FF7A2F]/10 border border-[#FF7A2F]/30 flex items-center justify-center text-[#FF7A2F] shrink-0">
                  <GitPullRequest className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="text-sm font-bold text-white">Open Source Journey</h4>
                    <span className="px-2 py-0.5 rounded-full bg-[#FF7A2F]/10 text-[#FF7A2F] text-[10px] font-semibold uppercase tracking-wider border border-[#FF7A2F]/20">
                      Actively Learning
                    </span>
                  </div>
                  <p className="text-xs text-gray-400 mt-0.5">
                    Exploring CNCF &amp; Jenkins codebases • Learning contribution workflows
                  </p>
                </div>
              </div>

              <a
                href={portfolioConfig.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800/80 border border-gray-700 hover:border-[#FF7A2F]/50 text-xs font-semibold text-gray-200 hover:text-white transition-all duration-200 shrink-0"
              >
                <span>GitHub Profile</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#FF7A2F]" />
              </a>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
