export interface ExperienceItem {
  id: string;
  organization: string;
  subOrganization?: string;
  role: string;
  duration: string;
  statusBadge: string;
  isCurrent?: boolean;
  description: string[];
  focusAreas?: string[];
}

export const experienceData: ExperienceItem[] = [
  {
    id: "djcsi",
    organization: "DJCSI — Computer Society of India",
    subOrganization: "D. J. Sanghvi College of Engineering",
    role: "Web Developer & Co-Committee Member",
    duration: "August 2026 – Present",
    statusBadge: "Current Role",
    isCurrent: true,
    description: [
      "Contribute to web development initiatives and collaborate with committee members to support the development and maintenance of web-based platforms for the student technical community.",
      "Work with the team to implement website features, improve user experience, and support technical initiatives and events organized by the society.",
    ],
    focusAreas: [
      "Web Development",
      "Platform Maintenance",
      "Technical Community",
      "Feature Implementation",
      "Event Support",
    ],
  },
];
