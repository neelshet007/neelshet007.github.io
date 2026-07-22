"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "./Container";
import { educationData, EducationItem } from "@/data/educationData";
import { GraduationCap, Award } from "lucide-react";

export const EducationSection: React.FC = () => {
  return (
    <section
      id="education"
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
            Academic Foundation
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-2 text-3xl sm:text-5xl font-black text-white tracking-tight"
          >
            Education
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-gray-400 text-sm sm:text-base leading-relaxed"
          >
            A strong academic foundation that supports my journey in software engineering, cloud technologies, and modern application development.
          </motion.p>
        </div>

        {/* 3 Premium Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {educationData.map((item: EducationItem, idx: number) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              whileHover={{ y: -6 }}
              className="group relative p-7 rounded-3xl bg-[#111827] border border-gray-800 shadow-xl shadow-black/20 hover:border-[#FF7A2F]/50 transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              {/* Expanding Orange Accent Top Line */}
              <div className="absolute top-0 inset-x-0 h-1 bg-[#FF7A2F]/20 group-hover:bg-[#FF7A2F] transition-all duration-300" />

              <div>
                {/* Header: Graduation Cap Icon & Status Badge */}
                <div className="flex items-center justify-between gap-2 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#FF7A2F]/10 text-[#FF7A2F] flex items-center justify-center shadow-sm group-hover:bg-[#FF7A2F] group-hover:text-white transition-colors duration-300">
                    <GraduationCap className="w-6 h-6" />
                  </div>

                  <span
                    className={`px-3 py-1 rounded-full text-xs font-bold ${
                      item.isCurrentlyPursuing
                        ? "bg-[#FF7A2F]/20 border border-[#FF7A2F]/40 text-[#FF7A2F]"
                        : "bg-gray-800 border border-gray-700 text-gray-300"
                    }`}
                  >
                    {item.statusBadge}
                  </span>
                </div>

                {/* Degree Title */}
                <h3 className="text-xl font-extrabold text-white mb-2 group-hover:text-[#FF7A2F] transition-colors leading-snug">
                  {item.degree}
                </h3>

                {/* Field / Prep */}
                <p className="text-sm font-semibold text-[#FF7A2F] mb-3">
                  {item.field}
                </p>

                {/* Institution Name */}
                <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-400 font-medium mb-4">
                  <Award className="w-4 h-4 text-gray-500 shrink-0" />
                  <span>{item.institution}</span>
                </div>
              </div>

              {/* Specialization (If Available) */}
              {item.specialization && (
                <div className="pt-4 border-t border-gray-800/80 mt-2">
                  <span className="block text-xs uppercase tracking-wider text-gray-500 font-bold mb-1">
                    Specialization:
                  </span>
                  <span className="text-xs font-bold text-gray-200">
                    {item.specialization}
                  </span>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};
