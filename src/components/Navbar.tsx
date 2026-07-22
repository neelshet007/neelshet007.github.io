"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { portfolioConfig } from "@/config/portfolioConfig";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
];

export const Navbar: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-4 sm:top-6 inset-x-0 z-50 flex justify-center px-4"
    >
      {/* Floating Pill Container - Dark #111827 Background */}
      <div
        className={`w-full max-w-5xl flex items-center justify-between px-4 sm:px-6 py-2.5 sm:py-3 rounded-full bg-[#111827]/90 text-white shadow-2xl border border-white/10 backdrop-blur-md transition-all duration-300 ${
          scrolled ? "shadow-black/60 border-white/20" : "shadow-black/40"
        }`}
      >
        {/* Left Side Active Home Pill / Brand Logo */}
        <div className="flex items-center gap-3">
          <a
            href="#home"
            onClick={() => setActiveTab("Home")}
            className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FF7A2F] text-white font-bold text-sm sm:text-base shadow-sm hover:scale-105 transition-transform"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-white animate-pulse" />
            <span>Home</span>
          </a>
        </div>

        {/* Center Navigation Links: About, Skills, Projects, Education, Services */}
        <nav className="hidden md:flex items-center gap-1 sm:gap-2">
          {navItems.slice(1, -1).map((item) => {
            const isActive = activeTab === item.name;
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setActiveTab(item.name)}
                className={`relative px-3.5 py-1.5 text-xs sm:text-sm font-medium rounded-full transition-colors duration-200 ${
                  isActive ? "text-white font-semibold" : "text-gray-400 hover:text-white"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="desktop-active-pill"
                    className="absolute inset-0 bg-[#FF7A2F] rounded-full -z-10 shadow-sm"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {item.name}
              </a>
            );
          })}
        </nav>

        {/* Center Brand Badge */}
        <div className="hidden lg:flex items-center gap-2 font-extrabold tracking-wider text-base">
          <span className="w-8 h-8 rounded-full bg-[#FF7A2F] text-white flex items-center justify-center text-xs font-black shadow-inner">
            {portfolioConfig.initials}
          </span>
          <span className="text-white tracking-widest text-sm font-bold">
            {portfolioConfig.brandName}
          </span>
        </div>

        {/* Right Side Contact Link */}
        <div className="hidden md:flex items-center gap-2">
          <a
            href="#contact"
            onClick={() => setActiveTab("Contact")}
            className={`relative px-5 py-1.5 text-xs sm:text-sm font-medium rounded-full transition-colors duration-200 ${
              activeTab === "Contact" ? "text-white" : "text-gray-400 hover:text-white"
            }`}
          >
            {activeTab === "Contact" && (
              <motion.div
                layoutId="desktop-active-pill"
                className="absolute inset-0 bg-[#FF7A2F] rounded-full -z-10 shadow-sm"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
            Contact
          </a>
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-full text-white hover:bg-white/10 transition-colors"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5 text-[#FF7A2F]" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Full-width Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-16 left-4 right-4 bg-[#111827] border border-white/15 rounded-3xl p-6 shadow-2xl md:hidden z-50 flex flex-col gap-3"
          >
            <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-1">
              <div className="flex items-center gap-2">
                <span className="w-7 h-7 rounded-full bg-[#FF7A2F] text-white flex items-center justify-center text-xs font-bold">
                  {portfolioConfig.initials}
                </span>
                <span className="text-white font-bold text-sm">{portfolioConfig.name}</span>
              </div>
              <span className="text-xs text-[#FF7A2F] font-semibold uppercase tracking-wider">
                Full Stack &amp; DevOps
              </span>
            </div>

            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => {
                  setActiveTab(item.name);
                  setMobileMenuOpen(false);
                }}
                className={`px-4 py-3 rounded-2xl text-sm font-medium transition-all ${
                  activeTab === item.name
                    ? "bg-[#FF7A2F] text-white font-semibold shadow-md"
                    : "text-gray-300 hover:bg-white/5 hover:text-white"
                }`}
              >
                {item.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
