"use client";

import { motion } from "framer-motion";
import {
  Cloud,
  Container,
  Server,
  Globe,
  Code2,
  Network,
  Brain,
  Bot,
  Zap,
  Terminal,
  Database,
  Boxes,
  Wrench,
  Settings2,
  type LucideIcon,
} from "lucide-react";

interface SkillCategory {
  title: string;
  icon: LucideIcon;
  color: string;
  glowColor: string;
  skills: { name: string; icon: LucideIcon }[];
}

const categories: SkillCategory[] = [
  {
    title: "DevOps & Cloud",
    icon: Cloud,
    color: "text-blue-400",
    glowColor: "rgba(59,130,246,0.3)",
    skills: [
      { name: "AWS (EC2, S3, Lambda)", icon: Server },
      { name: "Docker Containerization", icon: Container },
      { name: "Infrastructure as Code", icon: Boxes },
      { name: "Bash Scripting", icon: Terminal },
      { name: "Linux System Administration", icon: Settings2 },
      { name: "Computer Networking", icon: Network },
    ],
  },
  {
    title: "Full-Stack Development",
    icon: Code2,
    color: "text-emerald-400",
    glowColor: "rgba(52,211,153,0.3)",
    skills: [
      { name: "Next.js (App Router)", icon: Code2 },
      { name: "TypeScript", icon: Wrench },
      { name: "React.js", icon: Globe },
      { name: "Node.js", icon: Server },
      { name: "Express", icon: Terminal },
      { name: "MongoDB Aggregation Pipelines", icon: Database },
      { name: "Appwrite", icon: Boxes },
    ],
  },
  {
    title: "AI & Automation",
    icon: Brain,
    color: "text-purple-400",
    glowColor: "rgba(192,132,252,0.3)",
    skills: [
      { name: "n8n & Zapier Agentic Workflows", icon: Zap },
      { name: "Generative AI (Gemini / Claude API)", icon: Brain },
      { name: "LLM Integration, LangGraph & MCP", icon: Bot },
      { name: "Automation Architecture", icon: Wrench },
    ],
  },
];

export default function SkillsCloud() {
  return (
    <section id="skills" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="gradient-text">Skills & Expertise</span>
          </h2>
          <p className="text-muted text-lg max-w-xl mx-auto">
            Technologies and tools I work with to build scalable, automated
            solutions.
          </p>
        </motion.div>

        {/* Skill Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((cat, catIdx) => {
            const CatIcon = cat.icon;
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: catIdx * 0.1 }}
                className="glass p-6 group transition-all duration-300"
                style={
                  {
                    "--cat-glow": cat.glowColor,
                  } as React.CSSProperties
                }
                whileHover={{
                  boxShadow: `0 0 30px var(--cat-glow), 0 0 60px ${cat.glowColor}`,
                }}
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className={`w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center ${cat.color}`}
                  >
                    <CatIcon className="w-5 h-5" />
                  </div>
                  <h3 className={`text-lg font-semibold ${cat.color}`}>
                    {cat.title}
                  </h3>
                </div>

                {/* Skill Tags */}
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, skillIdx) => {
                    const SkillIcon = skill.icon;
                    return (
                      <motion.span
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.3,
                          delay: catIdx * 0.1 + skillIdx * 0.05,
                        }}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 text-sm text-foreground/80 transition-all duration-200 hover:bg-white/10 hover:border-white/15 cursor-default"
                      >
                        <SkillIcon className="w-3.5 h-3.5" />
                        {skill.name}
                      </motion.span>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
