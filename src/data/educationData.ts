export interface EducationItem {
  id: string;
  degree: string;
  field: string;
  institution: string;
  specialization?: string;
  statusBadge: string;
  isCurrentlyPursuing?: boolean;
}

export const educationData: EducationItem[] = [
  {
    id: "btech",
    degree: "Bachelor of Technology (B.Tech)",
    field: "Computer Science & Engineering",
    institution: "D.J. Sanghvi College of Engineering",
    specialization: "IoT • Cybersecurity • Blockchain",
    statusBadge: "🎓 Currently Pursuing",
    isCurrentlyPursuing: true,
  },
  {
    id: "hsc",
    degree: "Higher Secondary (HSC)",
    field: "Academic Preparation with ALLEN Career Institute",
    institution: "Shrivane Vidyalaya & Junior College",
    statusBadge: "Completed",
  },
  {
    id: "ssc",
    degree: "Secondary School (SSC)",
    field: "Completed Secondary Education",
    institution: "Lead School",
    statusBadge: "Completed",
  },
];
