import { useAsyncData } from "@/hooks/useAsyncData";
import { useEffect, useState } from "react";
import { experienceService } from "@/services/experience.service";
import type { TimelineItem, ExperienceSection } from "@/types/portfolio";

export function useExperience() {
  const { data, loading, error, refetch } = useAsyncData<TimelineItem[]>(() => experienceService.getExperience());
  const [section, setSection] = useState<ExperienceSection | null>(null);

  useEffect(() => {
    let active = true;

    experienceService.getExperienceSection().then((sectionData) => {
      if (active) {
        setSection(sectionData);
      }
    });

    return () => {
      active = false;
    };
  }, []);

  return {
    experience: data ?? [],
    section,
    loading,
    error,
    refetch,
  };
}
