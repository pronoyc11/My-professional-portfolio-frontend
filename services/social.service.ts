import { socialData } from "@/data/social";
import type { SocialData } from "@/types/portfolio";

export const socialService = {
  async getSocial(): Promise<SocialData> {
    return socialData;
  },
};
