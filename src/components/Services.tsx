"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "./Container";
import { ServiceCard } from "./ServiceCard";
import { Cpu, Cloud, Code } from "lucide-react";

const services = [
  {
    icon: <Cpu className="w-8 h-8" />,
    title: "DevOps Engineering",
    description:
      "Automating deployment pipelines, infrastructure as code, container orchestration, and zero-downtime CI/CD workflows.",
  },
  {
    icon: <Cloud className="w-8 h-8" />,
    title: "Cloud Infrastructure",
    description:
      "Architecting resilient, highly available, and cost-effective multi-cloud solutions across AWS, Docker, Kubernetes & Terraform.",
  },
  {
    icon: <Code className="w-8 h-8" />,
    title: "Full Stack Development",
    description:
      "Building high-performance web applications and backend APIs tuned for extreme scale, security, and developer productivity.",
  },
];

export const Services: React.FC = () => {
  return (
    <section
      id="services"
      className="relative bg-[#111111] text-white pt-24 pb-32 rounded-t-[3rem] sm:rounded-t-[4.5rem] overflow-hidden -mt-14 z-20 shadow-2xl"
    >
      {/* Subtle Dotted/Grid Pattern Backdrop matching reference */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1.5px,transparent_1.5px)] [background-size:32px_32px]" />

      <Container className="relative z-10">
        {/* Section Header matching Reference Layout */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-16 sm:mb-20">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl sm:text-6xl font-black text-[#FF7A2F] tracking-tight"
            >
              Services
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="max-w-xl text-gray-300 text-base sm:text-lg leading-relaxed font-normal"
          >
            I provide end-to-end cloud engineering and backend systems design focused on automation, continuous delivery, and bulletproof infrastructure.
          </motion.p>
        </div>

        {/* 3 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, idx) => (
            <ServiceCard
              key={service.title}
              index={idx}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};
