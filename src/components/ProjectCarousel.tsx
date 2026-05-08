"use client";

import { useState, useRef, MouseEvent } from "react";
import { motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Github,
  Layers,
} from "lucide-react";

interface Project {
  title: string;
  description: string;
  tags: string[];
  github: string;
  live: string;
  gradient: string;
}

const projects: Project[] = [
  {
    title: "LifeLink",
    description:
      "A full-stack health-tech platform connecting donors, patients, hospitals, and blood banks in real time, with intelligent blood matching and mission-critical synchronization.",
    tags: ["Next.js", "Node.js", "MongoDB", "Real-time WebSockets"],
    github: "#",
    live: "#",
    gradient: "from-red-600/20 to-rose-600/20",
  },
  {
    title: "Moodflix",
    description:
      "A cinematic React application integrated with Appwrite, featuring a custom recommendation engine driven by user sentiment and mood analysis.",
    tags: ["React", "Appwrite", "Recommendation Logic"],
    github: "#",
    live: "#",
    gradient: "from-indigo-600/20 to-sky-600/20",
  },
  {
    title: "VideoTube Backend",
    description:
      "A production-ready MERN backend for video sharing with JWT access and refresh token flows, bcrypt hashing, Cloudinary storage, Multer-based file staging, and optimized MongoDB aggregation pipelines.",
    tags: ["Node.js", "Express", "MongoDB", "Cloudinary", "JWT"],
    github: "#",
    live: "#",
    gradient: "from-emerald-600/20 to-teal-600/20",
  },
  {
    title: "MedTech E-Commerce",
    description:
      "A robust medical supply chain platform with role-based access for admins and patients, Razorpay payments, n8n automation for AI prescription analysis, and a Dockerized architecture prepared for AWS deployment.",
    tags: ["Next.js", "n8n", "Razorpay", "Docker", "AWS"],
    github: "#",
    live: "#",
    gradient: "from-cyan-600/20 to-blue-600/20",
  },
];

function TiltCard({
  project,
  isActive,
}: {
  project: Project;
  isActive: boolean;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const rotateX = ((e.clientY - centerY) / (rect.height / 2)) * -8;
    const rotateY = ((e.clientX - centerX) / (rect.width / 2)) * 8;
    setTilt({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: "1000px",
        transformStyle: "preserve-3d",
      }}
      className="shrink-0 w-[340px] sm:w-[380px]"
    >
      <motion.div
        animate={{
          rotateX: tilt.x,
          rotateY: tilt.y,
          scale: isHovered ? 1.02 : 1,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className={`glass p-6 h-full bg-linear-to-br ${project.gradient} transition-shadow duration-300 ${
          isHovered
            ? "shadow-[0_0_40px_rgba(124,58,237,0.2)]"
            : ""
        } ${isActive ? "ring-1 ring-accent/30" : ""}`}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Icon */}
        <div
          className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-4"
          style={{ transform: "translateZ(20px)" }}
        >
          <Layers className="w-6 h-6 text-accent-light" />
        </div>

        {/* Title */}
        <h3
          className="text-xl font-bold text-foreground mb-2"
          style={{ transform: "translateZ(15px)" }}
        >
          {project.title}
        </h3>

        {/* Description */}
        <p
          className="text-muted text-sm leading-relaxed mb-4"
          style={{ transform: "translateZ(10px)" }}
        >
          {project.description}
        </p>

        {/* Tags */}
        <div
          className="flex flex-wrap gap-2 mb-6"
          style={{ transform: "translateZ(10px)" }}
        >
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-md bg-white/5 border border-white/5 text-xs text-foreground/70"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div
          className="flex gap-3"
          style={{ transform: "translateZ(20px)" }}
        >
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-foreground transition-colors"
          >
            <Github className="w-4 h-4" />
            Code
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-foreground transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            Live
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function ProjectCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const cardWidth = 400;
    const newIndex =
      direction === "left"
        ? Math.max(0, activeIndex - 1)
        : Math.min(projects.length - 1, activeIndex + 1);
    setActiveIndex(newIndex);
    scrollRef.current.scrollTo({
      left: newIndex * cardWidth,
      behavior: "smooth",
    });
  };

  return (
    <section id="projects" className="relative py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-muted text-lg max-w-xl mx-auto">
            A focused set of production-style builds across health-tech,
            commerce, backend infrastructure, and AI-powered product workflows.
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={() => scroll("left")}
            disabled={activeIndex === 0}
            className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full glass flex items-center justify-center text-foreground hover:bg-white/10 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Previous project"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={() => scroll("right")}
            disabled={activeIndex === projects.length - 1}
            className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full glass flex items-center justify-center text-foreground hover:bg-white/10 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Next project"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Scrollable container */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory px-2"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {projects.map((project, i) => (
              <TiltCard
                key={project.title}
                project={project}
                isActive={i === activeIndex}
              />
            ))}
          </div>

          {/* Dot indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {projects.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setActiveIndex(i);
                  scrollRef.current?.scrollTo({
                    left: i * 400,
                    behavior: "smooth",
                  });
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === activeIndex
                    ? "bg-accent w-6"
                    : "bg-white/20 hover:bg-white/40"
                }`}
                aria-label={`Go to project ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
