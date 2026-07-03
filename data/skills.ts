import type { SkillGroup, SkillsSection } from "@/types/portfolio";

export const skillsSection: SkillsSection = {
  eyebrow: "Skills",
  title: "Modern tools, practical execution",
  description:
    "A focused technical stack for designing, building, and shipping polished full stack applications.",
};

export const skillsData: SkillGroup[] = [
  {
    category: "Frontend",
    skills: [
      { name: "React", icon: "react", percentage: 90 },
      { name: "Next.js", icon: "next", percentage: 88 },
      { name: "TypeScript", icon: "typescript", percentage: 84 },
      { name: "Tailwind CSS", icon: "tailwind", percentage: 92 },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", icon: "node", percentage: 82 },
      { name: "Express", icon: "express", percentage: 80 },
      { name: "Prisma", icon: "database", percentage: 76 },
    ],
  },
  {
    category: "Database",
    skills: [
      { name: "PostgreSQL", icon: "postgres", percentage: 78 },
      { name: "MongoDB", icon: "mongo", percentage: 74 },
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "Git", icon: "git", percentage: 86 },
      { name: "Figma", icon: "figma", percentage: 72 },
      { name: "Vercel", icon: "cloud", percentage: 82 },
    ],
  },
];
