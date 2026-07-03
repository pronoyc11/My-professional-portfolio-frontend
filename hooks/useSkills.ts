import { useAsyncData } from "@/hooks/useAsyncData";
import { useEffect, useState } from "react";
import { skillService } from "@/services/skill.service";
import type { SkillGroup, SkillsSection } from "@/types/portfolio";

export function useSkills() {
  const { data, loading, error, refetch } = useAsyncData<SkillGroup[]>(() => skillService.getSkills());
  const [section, setSection] = useState<SkillsSection | null>(null);

  useEffect(() => {
    let active = true;

    skillService.getSkillsSection().then((sectionData) => {
      if (active) {
        setSection(sectionData);
      }
    });

    return () => {
      active = false;
    };
  }, []);

  return {
    skills: data ?? [],
    section,
    loading,
    error,
    refetch,
  };
}
