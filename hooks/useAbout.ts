import { useAsyncData } from "@/hooks/useAsyncData";
import { aboutService } from "@/services/about.service";
import type { AboutData } from "@/types/portfolio";

export function useAbout() {
  const { data, loading, error, refetch } = useAsyncData<AboutData>(() => aboutService.getAbout());

  return {
    about: data,
    loading,
    error,
    refetch,
  };
}
