import { useAsyncData } from "@/hooks/useAsyncData";
import { heroService } from "@/services/hero.service";
import type { HeroData } from "@/types/portfolio";

export function useHero() {
  const { data, loading, error, refetch } = useAsyncData<HeroData>(() => heroService.getHero());

  return {
    hero: data,
    loading,
    error,
    refetch,
  };
}
