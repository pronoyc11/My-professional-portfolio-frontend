import { projectsData } from "@/data/projects";

export const projectService = {
  getAllProjects() {
    return projectsData;
  },

  getFeaturedProjects() {
    return projectsData.filter((project) => project.featured);
  },

  getProjectBySlug(slug: string) {
    return projectsData.find((project) => project.slug === slug);
  },
};
