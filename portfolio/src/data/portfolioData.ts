import {
  Github,
  Linkedin,
  Instagram,
  FileDown
} from "lucide-react";

export interface Project {
  title: string;
  description: string;
  tags: string[];
  github: string;
  live: string;
  gradient: string;
}

export interface SocialLink {
  icon: any; // Using any for Lucide icons to avoid complex type issues in this data file
  href: string;
  label: string;
}

export const personalInfo = {
  name: "Neel Sheth",
  role: "Tech Content Creator | Backend & DevOps Automation Engineer",
  focus: "Generative AI | LLM Integration | Cloud Infrastructure",
  resume: "https://drive.google.com/file/d/1tlVsGS39iIV5S1pM9_7WAn_W67Dl4fnq/view?usp=drive_link",
};

export const socialLinks: SocialLink[] = [
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

export const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
];

export const projects: Project[] = [
  {
    title: "Client Project: Algo Trading Automation",
    description:
      "Strategy Engineering: Developed and backtested quantitative trading strategies (SMC, Momentum) using Python, Pandas, and NumPy. Execution & API: Automated live order execution and data streaming by integrating Groww SDK/APIs via Python for low-latency trading. Cloud Infrastructure: Architected and deployed the automated engine on Groww Cloud to ensure 24/7 uptime and high-availability execution.",
    tags: ["Python", "Pandas", "NumPy", "Groww API", "Cloud Infrastructure"],
    github: "https://github.com/neelshet007", // Placeholder or specific link if known
    live: "https://github.com/neelshet007",   // Placeholder
    gradient: "from-purple-600/20 to-indigo-600/20",
  },
  {
    title: "LifeLink",
    description:
      "A full-stack health-tech platform connecting donors, patients, hospitals, and blood banks in real time, with intelligent blood matching and mission-critical synchronization.",
    tags: ["Next.js", "Node.js", "MongoDB", "Real-time WebSockets"],
    github: "https://github.com/neelshet007/lifelink",
    live: "https://github.com/neelshet007/lifelink",
    gradient: "from-red-600/20 to-rose-600/20",
  },
  {
    title: "VideoTube Backend",
    description:
      "A production-ready MERN backend for video sharing with JWT access and refresh token flows, bcrypt hashing, Cloudinary storage, Multer-based file staging, and optimized MongoDB aggregation pipelines.",
    tags: ["Node.js", "Express", "MongoDB", "Cloudinary", "JWT"],
    github: "https://github.com/neelshet007/videoapp",
    live: "https://github.com/neelshet007/videoapp",
    gradient: "from-emerald-600/20 to-teal-600/20",
  },
  {
    title: "MedTech E-Commerce",
    description:
      "A robust medical supply chain platform with role-based access for admins and patients, Razorpay payments, n8n automation for AI prescription analysis, and a Dockerized architecture prepared for AWS deployment.",
    tags: ["Next.js", "n8n", "Razorpay", "Docker", "AWS"],
    github: "https://github.com/neelshet007/medtech",
    live: "https://github.com/neelshet007/medtech",
    gradient: "from-cyan-600/20 to-blue-600/20",
  },
  {
    title: "Moodflix",
    description:
      "A cinematic React application integrated with Appwrite, featuring a custom recommendation engine driven by user sentiment and mood analysis.",
    tags: ["React", "Appwrite", "Recommendation Logic"],
    github: "https://github.com/neelshet007/mood-flix",
    live: "https://github.com/neelshet007/mood-flix",
    gradient: "from-indigo-600/20 to-sky-600/20",
  },
];
