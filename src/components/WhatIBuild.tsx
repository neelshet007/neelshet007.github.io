"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "./Container";
import { Code2, Server, Bot, LineChart } from "lucide-react";

interface WhatIBuildCard {
  title: string;
  icon: React.ReactNode;
  tags: string[];
}

const buildAreas: WhatIBuildCard[] = [
  {
    title: "Full Stack Development",
    icon: <Code2 className="w-6 h-6" />,
    tags: ["Modern web applications", "Backend APIs", "Responsive interfaces"],
  },
  {
    title: "DevOps & Cloud",
    icon: <Server className="w-6 h-6" />,
    tags: ["Docker", "AWS", "CI/CD", "Linux"],
  },
  {
    title: "AI & Automation",
    icon: <Bot className="w-6 h-6" />,
    tags: ["LLMs", "Automation", "Agentic AI", "Business workflows"],
  },
  {
    title: "Algorithmic Trading",
    icon: <LineChart className="w-6 h-6" />,
    tags: ["Trading dashboards", "Automation", "Analytics", "System development"],
  },
];

export const WhatIBuild: React.FC = () => {
  return (
    <section className="relative bg-[#0B0F17] text-[#F3F4F6] py-20 sm:py-28 overflow-hidden">
      <Container className="relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-18">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-widest text-[#FF7A2F] font-bold"
          >
            Areas of Focus
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-2 text-3xl sm:text-5xl font-black text-white tracking-tight"
          >
            What I Build
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-gray-400 text-sm sm:text-base leading-relaxed"
          >
            A quick overview of the technical domains I actively work on and build projects in.
          </motion.p>
        </div>

        {/* 4 Minimal Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {buildAreas.map((area, idx) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="p-8 rounded-3xl bg-[#111827] border border-gray-800 shadow-xl shadow-black/20 hover:border-[#FF7A2F]/50 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#FF7A2F]/10 text-[#FF7A2F] flex items-center justify-center mb-6 shadow-sm">
                  {area.icon}
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
                  {area.title}
                </h3>

                <ul className="space-y-2">
                  {area.tags.map((tag) => (
                    <li key={tag} className="flex items-center gap-2 text-sm text-gray-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FF7A2F]" />
                      <span>{tag}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};
