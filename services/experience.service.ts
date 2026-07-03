import { experienceData, experienceSection } from "@/data/experience";
import type { TimelineItem, ExperienceSection } from "@/types/portfolio";

export const experienceService = {
  async getExperience(): Promise<TimelineItem[]> {
    return experienceData;
  },

  async getExperienceSection(): Promise<ExperienceSection> {
    return experienceSection;
  },
};
