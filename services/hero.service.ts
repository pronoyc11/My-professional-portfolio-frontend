import { heroData } from "@/data/hero";
import type { HeroData } from "@/types/portfolio";

export const heroService = {
  async getHero(): Promise<HeroData> {
    return heroData;
  },
};
