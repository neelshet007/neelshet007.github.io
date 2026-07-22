"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "./Container";
import { NexScaleServiceCard } from "./NexScaleServiceCard";
import { portfolioConfig } from "@/config/portfolioConfig";

const nexScaleServices = [
  {
    title: "Website Development",
    items: [
      "Business Websites",
      "Portfolio Websites",
      "Landing Pages",
      "Custom Web Applications",
    ],
  },
  {
    title: "Business Automation",
    items: [
      "WhatsApp Automation",
      "Lead Management",
      "Customer Follow-ups",
      "Workflow Automation",
    ],
  },
  {
    title: "Customer Retention Systems",
    items: [
      "Customer Engagement",
      "Festival Campaigns",
      "Referral Workflows",
      "Re-engagement Automation",
    ],
  },
  {
    title: "Review & Referral Systems",
    items: [
      "Google Review Collection",
      "Referral Programs",
      "Review Automation",
      "Customer Recommendation Systems",
    ],
  },
  {
    title: "AI Solutions",
    items: [
      "AI Agents",
      "Generative AI",
      "Business AI",
      "LLM Integration & Automation",
    ],
  },
  {
    title: "Trading Technology Solutions",
    items: [
      "Algorithmic Trading",
      "Trading Dashboards",
      "Trading Automation",
      "Data Visualization",
    ],
  },
  {
    title: "DevOps & Cloud Solutions",
    isComingSoon: true,
    items: [
      "Cloud Infrastructure",
      "Docker Deployments",
      "CI/CD Pipelines",
      "Monitoring & VPS Management",
    ],
  },
];

export const NexScaleServices: React.FC = () => {
  return (
    <section
      id="services"
      className="relative bg-[#111111] text-white pt-24 pb-32 rounded-t-[3rem] sm:rounded-t-[4.5rem] overflow-hidden -mt-10 z-20 shadow-2xl"
    >
      {/* Background Dotted Grid Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1.5px,transparent_1.5px)] [background-size:32px_32px]" />

      <Container className="relative z-10">
        {/* Section Title Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FF7A2F]/20 border border-[#FF7A2F]/30 text-[#FF7A2F] text-xs font-bold uppercase tracking-wider mb-4"
          >
            <span>Powered by {portfolioConfig.agencyName}</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight"
          >
            High-Performance Technology Solutions for Enterprise Growth
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-gray-300 text-base sm:text-lg leading-relaxed font-normal"
          >
            From modern web platforms to AI-powered automation and cloud infrastructure, we build software engineered for business growth.
          </motion.p>
        </div>

        {/* Grid of 7 Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {nexScaleServices.map((service, idx) => (
            <NexScaleServiceCard
              key={service.title}
              index={idx}
              title={service.title}
              items={service.items}
              isComingSoon={service.isComingSoon}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};
