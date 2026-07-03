import type { MetadataRoute } from "next";
import { siteData } from "@/data/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${siteData.name} Portfolio`,
    short_name: siteData.name,
    description: siteData.description,
    start_url: "/",
    display: "standalone",
    background_color: "#0F172A",
    theme_color: "#0F172A",
    icons: [
      {
        src: siteData.favicon,
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
