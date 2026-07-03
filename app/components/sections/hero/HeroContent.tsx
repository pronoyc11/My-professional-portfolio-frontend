"use client";

import { heroData } from "@/data/hero";
import HeroButtons from "./HeroButtons";
import SocialLinks from "./SocialLinks";

export default function HeroContent() {
  return (
    <div className="max-w-2xl">
      <p className="mb-6 text-sm font-semibold uppercase tracking-[0.32em] text-slate-400">
        {heroData.greeting}
      </p>

      <h1 className="text-balance mb-6 font-heading text-4xl font-semibold leading-tight tracking-[-0.03em] text-white sm:text-5xl lg:text-5xl">
        {heroData.name}
      </h1>

      <h2 className="mb-8 max-w-xl text-2xl font-semibold leading-tight text-slate-200 sm:text-3xl">
        {heroData.designation}
      </h2>

      <p className="max-w-xl text-base leading-8 text-slate-400 sm:text-lg">
        {heroData.shortDescription}
      </p>

      <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
        <HeroButtons />
      </div>
      <SocialLinks />
    </div>
  );
}
