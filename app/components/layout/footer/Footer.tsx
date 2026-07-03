"use client";

import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { siteData } from "@/data/site";
import { Container } from "@/app/components/ui/container";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <Container className="flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-slate-400">{siteData.copyright}</p>
        <Link
          href="/#home"
          aria-label={siteData.backToTopLabel}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition duration-300 hover:-translate-y-0.5 hover:bg-white/10 hover:text-white"
        >
          <ArrowUp size={18} />
        </Link>
      </Container>
    </footer>
  );
}
