import { useAsyncData } from "@/hooks/useAsyncData";
import { useEffect, useState } from "react";
import { educationService } from "@/services/education.service";
import type { TimelineItem, EducationSection } from "@/types/portfolio";

export function useEducation() {
  const { data, loading, error, refetch } = useAsyncData<TimelineItem[]>(() => educationService.getEducation());
  const [section, setSection] = useState<EducationSection | null>(null);

  useEffect(() => {
    let active = true;

    educationService.getEducationSection().then((sectionData) => {
      if (active) {
        setSection(sectionData);
      }
    });

    return () => {
      active = false;
    };
  }, []);

  return {
    education: data ?? [],
    section,
    loading,
    error,
    refetch,
  };
}
