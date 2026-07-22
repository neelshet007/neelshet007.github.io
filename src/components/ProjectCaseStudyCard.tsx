"use client";

import React from "react";
import { motion } from "framer-motion";
import { Project } from "@/data/projectsData";
import { 
  Github, 
  ExternalLink, 
  CheckCircle2, 
  Sparkles, 
  TrendingUp, 
  Server, 
  Activity, 
  Database 
} from "lucide-react";

interface ProjectCaseStudyCardProps {
  project: Project;
  index: number;
}

const iconMap: Record<string, React.ReactNode> = {
  TrendingUp: <TrendingUp className="w-5 h-5 text-[#FF7A2F]" />,
  Server: <Server className="w-5 h-5 text-[#10B981]" />,
  Activity: <Activity className="w-5 h-5 text-[#EF4444]" />,
  Database: <Database className="w-5 h-5 text-[#8B5CF6]" />,
  Sparkles: <Sparkles className="w-5 h-5 text-[#3B82F6]" />,
};

export const ProjectCaseStudyCard: React.FC<ProjectCaseStudyCardProps> = ({
  project,
  index,
}) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`relative w-full rounded-3xl bg-[#111827] border ${
        project.isFeatured ? "border-[#FF7A2F]/40 shadow-2xl shadow-[#FF7A2F]/10" : "border-gray-800 shadow-xl"
      } p-6 sm:p-10 overflow-hidden group hover:border-[#FF7A2F]/50 transition-all duration-500`}
    >
      {/* Featured Banner Ribbon */}
      {project.isFeatured && (
        <div className="absolute top-6 right-6 flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#FF7A2F]/20 border border-[#FF7A2F]/40 text-[#FF7A2F] text-xs font-bold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Featured Case Study</span>
        </div>
      )}

      <div className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-12 ${isEven ? "" : "lg:flex-row-reverse"}`}>
        {/* Left / Right Case Study Graphic Frame */}
        <div className="w-full lg:w-1/2 relative group-hover:scale-[1.02] transition-transform duration-500">
          <div
            className={`w-full h-64 sm:h-80 md:h-96 rounded-2xl bg-gradient-to-br ${project.imagePlaceholderBg} border border-white/10 flex flex-col items-center justify-center p-6 relative overflow-hidden shadow-inner`}
          >
            {/* Subtle Abstract Graphic Grid Lines */}
            <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
            
            {/* Central Icon Illustration */}
            <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform">
              {iconMap[project.typeIconName] || <Sparkles className="w-8 h-8 text-[#FF7A2F]" />}
            </div>

            <h4 className="text-xl sm:text-2xl font-black text-white text-center tracking-tight">
              {project.title}
            </h4>
            <span className="mt-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-semibold text-gray-300">
              {project.categoryBadge}
            </span>
          </div>
        </div>

        {/* Content Column */}
        <div className="w-full lg:w-1/2 space-y-5">
          {/* Badge */}
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-[#FF7A2F]/10 border border-[#FF7A2F]/30 text-[#FF7A2F] text-xs font-bold uppercase tracking-wider">
              {project.categoryBadge}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight group-hover:text-[#FF7A2F] transition-colors">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-normal">
            {project.description}
          </p>

          {/* Engineering Highlights */}
          <div className="space-y-2">
            <h4 className="text-xs uppercase tracking-wider text-gray-400 font-bold">
              Key Engineering Highlights:
            </h4>
            <ul className="space-y-1.5">
              {project.engineeringHighlights.map((highlight, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-gray-300 leading-snug">
                  <CheckCircle2 className="w-4 h-4 text-[#FF7A2F] shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack Chips */}
          <div className="pt-2 space-y-2">
            <h4 className="text-xs uppercase tracking-wider text-gray-400 font-bold">
              Technology Stack:
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg bg-gray-800/90 border border-gray-700 text-xs font-semibold text-gray-200 hover:border-[#FF7A2F]/40 hover:text-[#FF7A2F] transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Engineering Metrics */}
          <div className="flex flex-wrap gap-2 pt-1">
            {project.metrics.map((metric) => (
              <span
                key={metric}
                className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-[#FF7A2F]"
              >
                ✓ {metric}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-3">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#FF7A2F] text-white font-bold text-xs sm:text-sm shadow-md hover:bg-[#FF7A2F]/90 hover:scale-105 transition-all"
              >
                <span>View Project</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gray-800 border border-gray-700 text-white font-bold text-xs sm:text-sm hover:bg-gray-700 hover:scale-105 transition-all"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
