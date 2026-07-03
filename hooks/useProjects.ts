import { useAsyncData } from "@/hooks/useAsyncData";
import { useEffect, useState } from "react";
import { projectService } from "@/services/project.service";
import type { Project, ProjectsSection } from "@/types/portfolio";

export function useProjects() {
  const { data, loading, error, refetch } = useAsyncData<Project[]>(() => projectService.getProjects());
  const [section, setSection] = useState<ProjectsSection | null>(null);

  useEffect(() => {
    let active = true;

    projectService.getProjectSection().then((sectionData) => {
      if (active) {
        setSection(sectionData);
      }
    });

    return () => {
      active = false;
    };
  }, []);

  return {
    projects: data ?? [],
    section,
    loading,
    error,
    refetch,
  };
}
