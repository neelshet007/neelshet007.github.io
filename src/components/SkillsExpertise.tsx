"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "./Container";
import { Server, Code, Bot, LineChart } from "lucide-react";

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "DevOps & Cloud",
    icon: <Server className="w-6 h-6" />,
    skills: [
      "Docker",
      "AWS",
      "Linux",
      "Terraform",
      "CI/CD",
      "GitHub Actions",
    ],
  },
  {
    title: "Full Stack",
    icon: <Code className="w-6 h-6" />,
    skills: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "MongoDB",
    ],
  },
  {
    title: "AI & Automation",
    icon: <Bot className="w-6 h-6" />,
    skills: [
      "n8n",
      "LangGraph",
      "MCP",
      "Claude API",
      "Gemini API",
      "Automation Workflows",
    ],
  },
  {
    title: "Trading Technology",
    icon: <LineChart className="w-6 h-6" />,
    skills: [
      "Python",
      "Trading Dashboards",
      "Algorithmic Trading",
      "Analytics",
      "Visualization",
    ],
  },
];

export const SkillsExpertise: React.FC = () => {
  return (
    <section
      id="skills"
      className="relative bg-white text-[#111111] py-20 sm:py-28 overflow-hidden border-t border-gray-100"
    >
      <Container className="relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-18">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-widest text-[#FF7A2F] font-bold"
          >
            Technical Tools
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-2 text-3xl sm:text-5xl font-black text-[#111111] tracking-tight"
          >
            Skills &amp; Technologies
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-gray-600 text-sm sm:text-base leading-relaxed"
          >
            Technologies and tools I use to design, build, deploy, and automate software projects.
          </motion.p>
        </div>

        {/* 4 Categorized Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="p-8 rounded-3xl bg-white border border-gray-200/90 shadow-md shadow-black/5 hover:border-[#FF7A2F]/50 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#FF7A2F]/10 text-[#FF7A2F] flex items-center justify-center shadow-sm">
                  {category.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#111111]">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3.5 py-1.5 rounded-full bg-gray-50 border border-gray-200 text-xs sm:text-sm font-semibold text-[#111111] hover:bg-[#FF7A2F]/10 hover:border-[#FF7A2F]/30 hover:text-[#FF7A2F] transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};
