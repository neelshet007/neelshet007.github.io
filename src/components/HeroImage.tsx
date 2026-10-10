"use client";

import React from "react";
import { motion } from "framer-motion";
import { ProfileImage } from "./ProfileImage";
import { FloatingBadge } from "./FloatingBadge";
import { portfolioConfig } from "@/config/portfolioConfig";
import {
  GitPullRequest,
  Terminal,
  Server,
  Layers,
  Cloud,
  Bot,
  Sparkles,
  Brain,
  Workflow,
  Cpu,
  Container as DockerIcon,
  GitBranch,
  Zap,
  Boxes,
  Code2,
  Database,
  TrendingUp,
  LineChart,
  Activity,
} from "lucide-react";

export const HeroImage: React.FC = () => {
  const leftBadges = [
    { label: "Open Source", icon: <GitPullRequest className="w-4 h-4" /> },
    { label: "DevOps", icon: <Terminal className="w-4 h-4" /> },
    { label: "AWS", icon: <Server className="w-4 h-4" /> },
    { label: "Kubernetes", icon: <Layers className="w-4 h-4" /> },
    { label: "Linux", icon: <Terminal className="w-4 h-4" /> },
    { label: "Cloud Infrastructure", icon: <Cloud className="w-4 h-4" /> },
    { label: "Agentic AI", icon: <Bot className="w-4 h-4" /> },
    { label: "Generative AI", icon: <Sparkles className="w-4 h-4" /> },
    { label: "LLMs", icon: <Brain className="w-4 h-4" /> },
    { label: "LangGraph", icon: <Workflow className="w-4 h-4" /> },
  ];

  const rightBadges = [
    { label: "MCP", icon: <Cpu className="w-4 h-4" /> },
    { label: "Docker", icon: <DockerIcon className="w-4 h-4" /> },
    { label: "CI/CD", icon: <GitBranch className="w-4 h-4" /> },
    { label: "Automation", icon: <Zap className="w-4 h-4" /> },
    { label: "Terraform", icon: <Boxes className="w-4 h-4" /> },
    { label: "Full Stack", icon: <Code2 className="w-4 h-4" /> },
    { label: "Backend", icon: <Database className="w-4 h-4" /> },
    { label: "Algorithmic Trading", icon: <TrendingUp className="w-4 h-4" /> },
    { label: "Trading Systems", icon: <LineChart className="w-4 h-4" /> },
    { label: "Monitoring & Infrastructure", icon: <Activity className="w-4 h-4" /> },
  ];

  return (
    <div className="relative w-full max-w-6xl xl:max-w-7xl mx-auto mt-8 sm:mt-12 flex flex-col lg:flex-row items-center justify-between gap-4 xl:gap-8 px-4">
      {/* Symmetrical Left Skill Badges Stack (Desktop) */}
      <div className="hidden lg:flex flex-col gap-2 xl:gap-2.5 items-end w-[240px] xl:w-[280px] z-30">
        {leftBadges.map((badge, idx) => (
          <FloatingBadge
            key={badge.label}
            label={badge.label}
            icon={badge.icon}
            side="left"
            delay={0.04 * idx}
          />
        ))}
      </div>

      {/* Centered Image Frame */}
      <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:w-auto flex justify-center items-end mx-auto">
        {/* Decorative Greeting Spark */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.8, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="absolute -top-10 left-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-none z-30"
        >
          <div className="px-3.5 py-1 rounded-full border border-gray-300 bg-white/90 shadow-sm text-[#111111] text-xs font-bold mb-1">
            Hello!
          </div>
          <svg className="w-6 h-6 text-[#FF7A2F]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 2v4M5 5l3 3M19 5l-3 3" />
          </svg>
        </motion.div>

        {/* Large Orange Semicircle Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative w-72 h-72 sm:w-80 sm:h-80 xl:w-96 xl:h-96 rounded-t-full bg-[#FF7A2F] flex items-end justify-center shadow-2xl shadow-[#FF7A2F]/25 overflow-hidden border-4 border-[#FF7A2F]"
        >
          <div className="relative w-full h-full z-20">
            <ProfileImage
              imageUrl={portfolioConfig.profileImageUrl}
              altText={`${portfolioConfig.name} - ${portfolioConfig.roles.firstLine}`}
            />
          </div>
        </motion.div>
      </div>

      {/* Symmetrical Right Skill Badges Stack (Desktop) */}
      <div className="hidden lg:flex flex-col gap-2 xl:gap-2.5 items-start w-[240px] xl:w-[280px] z-30">
        {rightBadges.map((badge, idx) => (
          <FloatingBadge
            key={badge.label}
            label={badge.label}
            icon={badge.icon}
            side="right"
            delay={0.04 * idx}
          />
        ))}
      </div>

      {/* Mobile & Tablet Clean Responsive Skill Layout */}
      <div className="lg:hidden w-full max-w-2xl mx-auto mt-8 px-2 z-30">
        <div className="flex flex-wrap justify-center gap-2">
          {leftBadges.map((badge, idx) => (
            <FloatingBadge
              key={badge.label}
              label={badge.label}
              icon={badge.icon}
              side="left"
              delay={0.02 * idx}
            />
          ))}
          {rightBadges.map((badge, idx) => (
            <FloatingBadge
              key={badge.label}
              label={badge.label}
              icon={badge.icon}
              side="right"
              delay={0.02 * (idx + leftBadges.length)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
