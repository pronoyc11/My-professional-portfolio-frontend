import type { MetadataRoute } from "next";
import { siteData } from "@/data/site";
import { projectService } from "@/services/project.service";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteData.url,
      lastModified: new Date(),
    },
    ...projectService.getAllProjects().map((project) => ({
      url: `${siteData.url}/projects/${project.slug}`,
      lastModified: new Date(),
    })),
  ];
}
