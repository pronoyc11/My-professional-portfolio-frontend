"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { motion } from "framer-motion";
import { siteData } from "@/data/site";

import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("/#home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      const sections = document.querySelectorAll<HTMLElement>("section[id]");

      sections.forEach((section) => {
        const top = section.offsetTop - 120;
        const bottom = top + section.offsetHeight;

        if (window.scrollY >= top && window.scrollY < bottom) {
          setActiveSection(`/#${section.id}`);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -70 }}
        animate={{ y: 0 }}
        className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
          isScrolled
            ? "border-b border-white/10 bg-[#080a12]/85 backdrop-blur-3xl shadow-[0_24px_80px_-50px_rgba(0,0,0,0.6)]"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-24 max-w-7xl items-center justify-between gap-6 px-6">
          <Link href="/#home" className="font-heading text-2xl font-semibold tracking-tight text-white">
            {siteData.logo}
          </Link>

          <DesktopNav activeSection={activeSection} />

          <div className="hidden lg:block">
            <a
              href={siteData.resumePath}
              className="rounded-2xl border border-white/10 bg-white/10 px-5 py-3 text-sm font-semibold text-white shadow-[0_20px_50px_-40px_rgba(255,255,255,0.12)] transition duration-300 hover:-translate-y-0.5 hover:bg-white/15"
            >
              {siteData.resumeLabel}
            </a>
          </div>

          <button
            onClick={() => setIsOpen(true)}
            aria-label="Open navigation menu"
            className="rounded-2xl border border-white/10 bg-white/5 p-2 text-white transition duration-300 hover:bg-white/10 lg:hidden"
          >
            <Menu size={28} />
          </button>
        </div>
      </motion.header>

      <MobileNav
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        activeSection={activeSection}
      />
    </>
  );
}
