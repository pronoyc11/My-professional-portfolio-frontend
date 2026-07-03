import { aboutData } from "@/data/about";
import type { AboutData } from "@/types/portfolio";

export const aboutService = {
  async getAbout(): Promise<AboutData> {
    return aboutData;
  },
};
