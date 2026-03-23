"use client";

import { motion } from "framer-motion";
import { GraduationCap, School, BookOpen, type LucideIcon } from "lucide-react";

interface TimelineEntry {
  title: string;
  institution: string;
  details: string;
  icon: LucideIcon;
  color: string;
}

const timeline: TimelineEntry[] = [
  {
    title: "B.Tech in CSE",
    institution: "D.J. Sanghvi College of Engineering",
    details: "Specialization: IoT, Cybersecurity & Blockchain",
    icon: GraduationCap,
    color: "text-purple-400",
  },
  {
    title: "Grade 12 — HSC",
    institution: "Shrivane Vidyalaya & Junior College",
    details: "With Allen Coaching Institute",
    icon: School,
    color: "text-blue-400",
  },
  {
    title: "Grade 10 — SSC",
    institution: "Lead School",
    details: "Secondary School Education",
    icon: BookOpen,
    color: "text-emerald-400",
  },
];

export default function EducationTimeline() {
  return (
    <section id="education" className="relative py-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="gradient-text">Education</span>
          </h2>
          <p className="text-muted text-lg max-w-xl mx-auto">
            My academic journey through technology and engineering.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-linear-to-b from-accent/50 via-accent/20 to-transparent" />

          {timeline.map((entry, i) => {
            const Icon = entry.icon;
            return (
              <motion.div
                key={entry.title}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className={`relative flex items-start mb-12 last:mb-0 ${
                  i % 2 === 0
                    ? "md:flex-row"
                    : "md:flex-row-reverse"
                }`}
              >
                {/* Dot on timeline */}
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-accent shadow-[0_0_12px_rgba(124,58,237,0.6)] z-10 mt-6" />

                {/* Card */}
                <div
                  className={`ml-14 md:ml-0 md:w-[45%] ${
                    i % 2 === 0 ? "md:pr-8" : "md:pl-8 md:ml-auto"
                  }`}
                >
                  <div className="glass p-6 hover:shadow-[0_0_30px_rgba(124,58,237,0.15)] transition-all duration-300">
                    <div className="flex items-center gap-3 mb-3">
                      <div
                        className={`w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center ${entry.color}`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-lg font-semibold text-foreground">
                        {entry.title}
                      </h3>
                    </div>
                    <p className="text-foreground/90 font-medium mb-1">
                      {entry.institution}
                    </p>
                    <p className="text-muted text-sm">{entry.details}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
