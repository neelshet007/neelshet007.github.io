"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "./Container";
import { experienceData, ExperienceItem } from "@/data/experienceData";
import { Users, Calendar, Building2, CheckCircle2 } from "lucide-react";

export const ExperienceSection: React.FC = () => {
  return (
    <section
      id="experience"
      className="relative bg-[#0B0F17] text-[#F3F4F6] py-20 sm:py-28 overflow-hidden border-t border-gray-800"
    >
      <Container className="relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-18">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-widest text-[#FF7A2F] font-bold"
          >
            Leadership &amp; Roles
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-2 text-3xl sm:text-5xl font-black text-white tracking-tight"
          >
            Experience
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-gray-400 text-sm sm:text-base leading-relaxed"
          >
            Collaborative web engineering and technical contributions within active student developer communities.
          </motion.p>
        </div>

        {/* Experience Cards Stack / Timeline */}
        <div className="max-w-4xl mx-auto space-y-8">
          {experienceData.map((item: ExperienceItem, idx: number) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              whileHover={{ y: -4 }}
              className="group relative p-6 sm:p-10 rounded-3xl bg-[#111827] border border-gray-800 shadow-xl shadow-black/30 hover:border-[#FF7A2F]/50 transition-all duration-300 overflow-hidden"
            >
              {/* Expanding Top Accent Line */}
              <div className="absolute top-0 inset-x-0 h-1 bg-[#FF7A2F]/20 group-hover:bg-[#FF7A2F] transition-all duration-300" />

              {/* Card Header */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-6 border-b border-gray-800/80">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#FF7A2F]/10 text-[#FF7A2F] flex items-center justify-center shrink-0 shadow-sm group-hover:bg-[#FF7A2F] group-hover:text-white transition-colors duration-300">
                    <Users className="w-6 h-6" />
                  </div>

                  <div>
                    <h3 className="text-xl sm:text-2xl font-black text-white group-hover:text-[#FF7A2F] transition-colors leading-snug">
                      {item.role}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2 mt-1.5 text-sm text-gray-300 font-semibold">
                      <span className="text-[#FF7A2F]">{item.organization}</span>
                      {item.subOrganization && (
                        <>
                          <span className="text-gray-600 hidden sm:inline">•</span>
                          <span className="flex items-center gap-1 text-gray-400 text-xs sm:text-sm font-normal">
                            <Building2 className="w-3.5 h-3.5 text-gray-500" />
                            {item.subOrganization}
                          </span>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                {/* Duration Badge */}
                <div className="sm:self-start">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gray-800/90 border border-gray-700 text-xs font-bold text-gray-200">
                    <Calendar className="w-3.5 h-3.5 text-[#FF7A2F]" />
                    <span>{item.duration}</span>
                    {item.isCurrent && (
                      <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                    )}
                  </div>
                </div>
              </div>

              {/* Description Content */}
              <div className="pt-6 space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed font-normal">
                {item.description.map((paragraph, pIdx) => (
                  <p key={pIdx}>{paragraph}</p>
                ))}
              </div>

              {/* Focus Areas Pill Chips */}
              {item.focusAreas && item.focusAreas.length > 0 && (
                <div className="pt-6 mt-6 border-t border-gray-800/80 flex flex-wrap items-center gap-2">
                  <span className="text-xs uppercase tracking-wider text-gray-400 font-bold mr-1">
                    Focus Areas:
                  </span>
                  {item.focusAreas.map((area) => (
                    <span
                      key={area}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gray-800/70 border border-gray-700/80 text-xs font-semibold text-gray-300 hover:border-[#FF7A2F]/40 hover:text-white transition-colors"
                    >
                      <CheckCircle2 className="w-3 h-3 text-[#FF7A2F]" />
                      <span>{area}</span>
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};
