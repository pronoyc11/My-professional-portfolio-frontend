import { siteData } from "@/data/site";
import type { SiteData } from "@/types/portfolio";

export const siteService = {
  getSiteData(): SiteData {
    return siteData;
  },
};
