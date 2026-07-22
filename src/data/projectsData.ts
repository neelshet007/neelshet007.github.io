export interface Project {
  id: string;
  title: string;
  categoryBadge: string;
  isFeatured?: boolean;
  description: string;
  engineeringHighlights: string[];
  techStack: string[];
  metrics: string[];
  githubUrl?: string;
  demoUrl?: string;
  imagePlaceholderBg?: string;
  typeIconName: string;
}

export const projectsData: Project[] = [
  {
    id: "algo-trading",
    title: "Algo Trading Automation Platform",
    categoryBadge: "Commercial Project",
    isFeatured: true,
    description:
      "Designed and developed an automated algorithmic trading platform for quantitative strategy execution, integrating live market data, cloud deployment, and real-time order execution. The system emphasizes reliability, automation, and low-latency performance for production trading environments.",
    engineeringHighlights: [
      "Developed and backtested quantitative trading strategies including Smart Money Concepts (SMC) and Momentum-based systems using Python, Pandas, and NumPy.",
      "Integrated the Groww API for live market data, automated order execution, and real-time trading workflows.",
      "Architected the cloud deployment to support continuous 24/7 operation with high availability and reliable execution.",
    ],
    techStack: ["Python", "Pandas", "NumPy", "Groww API", "Cloud Infrastructure"],
    metrics: ["Commercial Project", "Production Ready", "Cloud Deployed", "Real-Time"],
    githubUrl: "https://github.com/neelshet007",
    demoUrl: "https://nexscale-psi.vercel.app/",
    imagePlaceholderBg: "from-[#FF7A2F]/20 to-[#111827]",
    typeIconName: "TrendingUp",
  },
  {
    id: "kisan-alert",
    title: "Kisan Alert – AI-Powered Agricultural Intelligence Platform",
    categoryBadge: "🏆 National Hackathon Project",
    description:
      "Developed Kisan Alert, a full-stack AI-powered agricultural intelligence platform that empowers farmers with intelligent, data-driven decision making throughout the farming lifecycle. The platform enables farmers to upload Soil Health Cards for AI-based crop recommendations, receive localized weather and irrigation advisories, detect crop diseases from leaf images using multimodal AI, and interact with an AI assistant in multiple Indian languages.",
    engineeringHighlights: [
      "AI Crop Recommendation & Soil Health Card OCR & Analysis.",
      "Localized Weather & Irrigation Advisory with Crop Disease Detection.",
      "Multilingual AI Assistant with Farmer & Expert Dashboards.",
      "Cloud-ready deployment with Docker, Render, and Neon PostgreSQL.",
    ],
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Prisma ORM",
      "Google Gemini 2.5 Flash",
      "Multimodal AI",
      "OCR",
      "Docker",
      "Render",
      "Neon PostgreSQL",
      "Vercel",
    ],
    metrics: [
      "National Hackathon",
      "AI Powered",
      "Cloud Deployed",
      "Multimodal AI",
      "OCR",
      "Responsive",
      "Production Ready",
      "Full Stack",
    ],
    githubUrl: "https://github.com/neelshet007",
    demoUrl: "https://kissanalert-red.vercel.app/",
    imagePlaceholderBg: "from-[#10B981]/25 to-[#111827]",
    typeIconName: "Sparkles",
  },
  {
    id: "transit-ops",
    title: "TransitOps — Fleet Management ERP",
    categoryBadge: "Enterprise ERP",
    description:
      "TransitOps is an enterprise Fleet Management ERP designed to help organizations manage vehicles, drivers, maintenance schedules, operational expenses, fuel consumption, trips, and analytics through a secure, scalable platform with role-based access control.",
    engineeringHighlights: [
      "Designed a scalable PostgreSQL database architecture using Prisma ORM.",
      "Implemented JWT authentication and Role-Based Access Control (RBAC).",
      "Built analytics dashboards with interactive charts and operational insights.",
      "Structured the project for containerized deployment with Docker and CI/CD readiness.",
    ],
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Express.js",
      "Node.js",
      "PostgreSQL",
      "Prisma ORM",
      "JWT",
      "Docker",
      "GitHub Actions",
      "Recharts",
    ],
    metrics: ["Role-Based Security", "Containerized", "CI/CD Ready"],
    githubUrl: "https://github.com/neelshet007",
    demoUrl: "https://nexscale-psi.vercel.app/",
    imagePlaceholderBg: "from-[#3B82F6]/20 to-[#111827]",
    typeIconName: "Server",
  },
  {
    id: "smart-blood-network",
    title: "Smart Blood Network",
    categoryBadge: "Health-Tech",
    description:
      "A real-time health-tech platform connecting blood donors, patients, hospitals, and blood banks with intelligent blood matching and synchronized emergency communication.",
    engineeringHighlights: [
      "Built real-time synchronization using WebSockets.",
      "Designed scalable APIs for hospital and donor management.",
      "Implemented intelligent blood matching workflows.",
    ],
    techStack: ["Next.js", "Node.js", "MongoDB", "WebSockets"],
    metrics: ["Real-Time Sync", "REST APIs", "Responsive"],
    githubUrl: "https://github.com/neelshet007",
    demoUrl: "https://nexscale-psi.vercel.app/",
    imagePlaceholderBg: "from-[#EF4444]/20 to-[#111827]",
    typeIconName: "Activity",
  },
  {
    id: "videotube-backend",
    title: "VideoTube Backend Architecture",
    categoryBadge: "Backend Engineering",
    description:
      "A production-ready backend architecture for a video-sharing platform featuring secure authentication, media storage, optimized database aggregation, and scalable REST APIs.",
    engineeringHighlights: [
      "JWT access & refresh authentication pipeline.",
      "Cloudinary media storage & Multer upload pipeline.",
      "MongoDB aggregation optimization for high-throughput video queries.",
    ],
    techStack: ["Node.js", "Express", "MongoDB", "JWT", "Cloudinary", "Multer"],
    metrics: ["Production Ready", "REST APIs", "Performance Optimized"],
    githubUrl: "https://github.com/neelshet007",
    demoUrl: "https://nexscale-psi.vercel.app/",
    imagePlaceholderBg: "from-[#8B5CF6]/20 to-[#111827]",
    typeIconName: "Database",
  },
  {
    id: "moodflix",
    title: "Moodflix – Movie Recommendation Platform",
    categoryBadge: "AI Recommendation System",
    description:
      "A React-based movie recommendation platform integrating Appwrite with a custom recommendation engine driven by user preferences, sentiment, and mood analysis.",
    engineeringHighlights: [
      "Integrated Appwrite database for seamless user preference persistence.",
      "Engineered mood-based sentiment analysis for tailored movie suggestions.",
      "Optimized client-side rendering and responsive user interfaces.",
    ],
    techStack: ["React", "Appwrite", "Recommendation Engine", "REST APIs"],
    metrics: ["AI Driven", "Responsive", "REST APIs"],
    githubUrl: "https://github.com/neelshet007",
    demoUrl: "https://nexscale-psi.vercel.app/",
    imagePlaceholderBg: "from-[#EC4899]/20 to-[#111827]",
    typeIconName: "Sparkles",
  },
];
