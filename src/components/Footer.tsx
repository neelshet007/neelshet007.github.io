"use client";

import React from "react";
import { Container } from "./Container";
import { portfolioConfig } from "@/config/portfolioConfig";
import { MapPin } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#111111] text-gray-300 pt-16 pb-12 border-t border-white/10 text-sm">
      <Container className="relative z-10">
        {/* 3-Column Desktop Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-12 border-b border-white/10">
          {/* Column 1: Brand & Tagline */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-10 h-10 rounded-full bg-[#FF7A2F] text-white font-extrabold flex items-center justify-center text-sm shadow-md">
                {portfolioConfig.initials}
              </span>
              <div>
                <h3 className="text-white font-bold text-lg leading-tight">{portfolioConfig.name}</h3>
                <p className="text-xs text-[#FF7A2F] font-semibold">{portfolioConfig.roles.firstLine}</p>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
              {portfolioConfig.tagline}
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-[#FF7A2F] font-bold">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#home" className="hover:text-[#FF7A2F] transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#FF7A2F] transition-colors">About</a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#FF7A2F] transition-colors">Services ({portfolioConfig.agencyName})</a>
              </li>
              <li>
                <a href="#skills" className="hover:text-[#FF7A2F] transition-colors">Skills &amp; Expertise</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#FF7A2F] transition-colors">Contact</a>
              </li>
              <li>
                <a href="#resume" className="hover:text-[#FF7A2F] transition-colors">Resume</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Location & Availability */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-[#FF7A2F] font-bold">
              Locations &amp; Reach
            </h4>
            <div className="flex items-start gap-2 text-xs sm:text-sm text-gray-300">
              <MapPin className="w-4 h-4 text-[#FF7A2F] shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-white">
                  {portfolioConfig.locations.primary} <span className="text-[#FF7A2F]">↕</span> {portfolioConfig.locations.secondary}
                </p>
                <p className="text-xs text-gray-400 mt-1">{portfolioConfig.locations.note}</p>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-[#FF7A2F] font-semibold mt-2">
              <span className="w-2 h-2 rounded-full bg-[#FF7A2F] animate-pulse" />
              <span>Available for Remote Projects Worldwide</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>© {new Date().getFullYear()} {portfolioConfig.name}. All rights reserved.</p>
          <p>
            Designed &amp; Engineered with <span className="text-[#FF7A2F]">❤️</span> using Next.js &amp; TypeScript.
          </p>
        </div>
      </Container>
    </footer>
  );
};
