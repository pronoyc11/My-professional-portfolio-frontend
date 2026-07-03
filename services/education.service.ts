import { educationData, educationSection } from "@/data/education";
import type { TimelineItem, EducationSection } from "@/types/portfolio";

export const educationService = {
  async getEducation(): Promise<TimelineItem[]> {
    return educationData;
  },

  async getEducationSection(): Promise<EducationSection> {
    return educationSection;
  },
};
