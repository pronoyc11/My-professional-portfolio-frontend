import { useAsyncData } from "@/hooks/useAsyncData";
import { siteService } from "@/services/site.service";
import type { SiteData } from "@/types/portfolio";

export function useSite() {
  const { data, loading, error, refetch } = useAsyncData<SiteData>(() => siteService.getSiteData());

  return {
    site: data,
    loading,
    error,
    refetch,
  };
}
