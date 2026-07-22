"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "./Container";
import { projectsData } from "@/data/projectsData";
import { ProjectCaseStudyCard } from "./ProjectCaseStudyCard";

export const ProjectsSection: React.FC = () => {
  return (
    <section
      id="projects"
      className="relative bg-[#0B0F17] text-[#F3F4F6] py-20 sm:py-32 overflow-hidden border-t border-gray-800"
    >
      <Container className="relative z-10">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-widest text-[#FF7A2F] font-bold"
          >
            Engineering Case Studies
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-2 text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight"
          >
            Featured Projects
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-gray-400 text-base sm:text-lg leading-relaxed font-normal"
          >
            Detailed technical case studies showcasing system architecture, quantitative automation, backend infrastructure, and full-stack software development.
          </motion.p>
        </div>

        {/* Stack of Alternating Full-Width Case Studies */}
        <div className="space-y-12 sm:space-y-20 max-w-6xl mx-auto">
          {projectsData.map((project, idx) => (
            <ProjectCaseStudyCard
              key={project.id}
              project={project}
              index={idx}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};
