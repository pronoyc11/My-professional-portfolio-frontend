import { projectsData, projectsSection } from "@/data/projects";

export const projectService = {
  getAllProjects() {
    return projectsData;
  },

  getProjects() {
    return projectsData;
  },

  getFeaturedProjects() {
    return projectsData.filter((project) => project.featured);
  },

  getProjectBySlug(slug: string) {
    return projectsData.find((project) => project.slug === slug);
  },

  getProjectSection() {
    return Promise.resolve(projectsSection);
  },
};
