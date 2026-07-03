import { useAsyncData } from "@/hooks/useAsyncData";
import { socialService } from "@/services/social.service";
import type { SocialData } from "@/types/portfolio";

export function useSocial() {
  const { data, loading, error, refetch } = useAsyncData<SocialData>(() => socialService.getSocial());

  return {
    social: data,
    loading,
    error,
    refetch,
  };
}
