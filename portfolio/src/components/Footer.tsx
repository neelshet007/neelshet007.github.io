"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, FileDown, Heart } from "lucide-react";
import { socialLinks, personalInfo } from "@/data/portfolioData";


export default function Footer() {
  return (
    <footer id="footer" className="relative py-16 px-6 border-t border-white/5">
      <div className="max-w-4xl mx-auto text-center">
        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-center gap-4 mb-8"
        >
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="w-12 h-12 rounded-xl glass flex items-center justify-center text-muted hover:text-foreground hover:border-accent/40 hover:shadow-[0_0_20px_rgba(124,58,237,0.2)] transition-all duration-300 hover:-translate-y-1"
            >
              <link.icon className="w-5 h-5" />
            </a>
          ))}
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-muted text-sm mb-2"
        >
          Built with{" "}
          <Heart className="inline w-3.5 h-3.5 text-rose-400 fill-rose-400" />{" "}
          using Next.js, Tailwind CSS & Framer Motion
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-muted/60 text-xs"
        >
          &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
        </motion.p>
      </div>
    </footer>
  );
}
