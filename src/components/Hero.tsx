"use client";

import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Instagram,
  FileDown,
  Cog,
  Cpu,
  Workflow,
} from "lucide-react";

const socials = [
  {
    icon: Github,
    href: "https://github.com/neelshet007",
    label: "GitHub",
  },
  {
    icon: Linkedin,
    href: "https://linkedin.com/in/neelsheth2007",
    label: "LinkedIn",
  },
  {
    icon: Instagram,
    href: "https://instagram.com/neel_sheth2007",
    label: "Instagram",
  },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-6 py-24"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-5xl mx-auto text-center"
      >
        {/* Floating 3D Automation Element */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-8 flex justify-center"
        >
          <div className="relative animate-float">
            <div className="w-28 h-28 rounded-2xl glass glow flex items-center justify-center relative">
              <Cog
                className="w-10 h-10 text-accent-light animate-spin-slow absolute"
                strokeWidth={1.5}
              />
              <Cpu
                className="w-6 h-6 text-accent absolute top-2 right-2"
                strokeWidth={1.5}
              />
              <Workflow
                className="w-6 h-6 text-blue-400 absolute bottom-2 left-2"
                strokeWidth={1.5}
              />
            </div>
            {/* Orbiting dot */}
            <div className="absolute inset-0 animate-spin-slow">
              <div className="absolute -top-2 left-1/2 w-2 h-2 rounded-full bg-accent-light shadow-[0_0_8px_rgba(167,139,250,0.8)]" />
            </div>
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight mb-4"
        >
          <span className="gradient-text">Neel Sheth</span>
        </motion.h1>

        {/* Headline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-lg sm:text-xl lg:text-2xl text-muted font-light max-w-2xl mx-auto mb-3"
        >
          Tech Content Creator&nbsp;
          <span className="text-foreground font-medium">|</span>&nbsp;Backend &
          DevOps Automation Engineer
        </motion.p>

        {/* Core Focus */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.75 }}
          className="text-sm sm:text-base text-accent-light font-medium tracking-wide uppercase mb-10"
        >
          Generative AI | LLM Integration | Cloud Infrastructure
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <a
            href="https://drive.google.com/file/d/1kWKpaEINogDmFaE3XjiciYg5DXZydjh7/view?usp=sharing"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent hover:bg-accent/80 text-white font-semibold transition-all duration-300 hover:shadow-[0_0_30px_rgba(124,58,237,0.4)] hover:-translate-y-0.5"
          >
            <FileDown className="w-5 h-5" />
            Resume
          </a>
          {socials.map((s) => {
            const Icon = s.icon;
            return (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl glass text-foreground font-medium transition-all duration-300 hover:border-accent/40 hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(124,58,237,0.2)]"
              >
                <Icon className="w-5 h-5" />
                {s.label}
              </a>
            );
          })}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.05 }}
          className="flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 rounded-full border-2 border-muted/40 flex justify-center pt-2"
          >
            <div className="w-1 h-2 rounded-full bg-accent-light" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
