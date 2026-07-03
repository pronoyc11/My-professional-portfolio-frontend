"use client";

import Link from "next/link";
import { FileDown, FolderKanban } from "lucide-react";
import { heroData } from "@/data/hero";
import { siteData } from "@/data/site";

export default function HeroButtons() {
  return (
    <div className="mt-10 flex flex-col gap-4 sm:flex-row">
      <a
        href={siteData.resumePath}
        className="inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/10 px-7 py-4 text-sm font-semibold text-white shadow-[0_24px_80px_-52px_rgba(255,255,255,0.12)] transition duration-300 hover:-translate-y-0.5 hover:bg-white/15"
      >
        <FileDown size={18} />
        {heroData.resumeButtonText}
      </a>

      <Link
        href="/#projects"
        className="inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-7 py-4 text-sm font-semibold text-white backdrop-blur-xl transition duration-300 hover:-translate-y-0.5 hover:bg-white/10"
      >
        <FolderKanban size={18} />
        {heroData.projectButtonText}
      </Link>
    </div>
  );
}
