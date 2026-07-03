import type { HeroData } from "@/types/portfolio";
import { siteData } from "./site";

export const heroData: HeroData = {
  greeting: "Hello, I'm",
  name: siteData.name,
  designation: siteData.designation,
  shortDescription:
    "I build fast, scalable, and polished web applications with Next.js, React, Node.js, TypeScript, Prisma, and PostgreSQL.",
  resumeButtonText: "Download Resume",
  projectButtonText: "View Projects",
  profileImage: siteData.profileImage,
  floatingTech: ["React", "Next.js", "TypeScript", "Node.js", "Prisma", "PostgreSQL"],
};
