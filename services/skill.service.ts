import { skillsData, skillsSection } from "@/data/skills";
import type { SkillGroup, SkillsSection } from "@/types/portfolio";

export const skillService = {
  async getSkills(): Promise<SkillGroup[]> {
    return skillsData;
  },

  async getSkillsSection(): Promise<SkillsSection> {
    return skillsSection;
  },
};
