"use client";

import Link from "next/link";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { navigationLinks } from "./navigation";
import { cn } from "../../../lib/utils";
import { siteData } from "@/data/site";

interface MobileNavProps {
  isOpen: boolean;
  activeSection: string;
  onClose: () => void;
}

export default function MobileNav({
  isOpen,
  activeSection,
  onClose,
}: MobileNavProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="fixed top-0 right-0 z-50 flex h-screen w-80 flex-col border-l border-white/10 bg-[#06080f]/95 p-7 backdrop-blur-3xl lg:hidden"
          >
            <button
              onClick={onClose}
              aria-label="Close navigation menu"
              className="mb-10 ml-auto rounded-2xl p-2 text-slate-300 transition hover:bg-white/10 hover:text-white"
            >
              <X size={28} />
            </button>

            <div className="flex flex-col gap-6">
              {navigationLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  className={cn(
                    "text-lg transition duration-300",
                    activeSection === item.href
                      ? "font-semibold text-white"
                      : "text-slate-300 hover:text-slate-100"
                  )}
                >
                  {item.label}
                </Link>
              ))}

              <a
                href={siteData.resumePath}
                className="mt-6 rounded-2xl border border-white/10 bg-white/10 px-5 py-3 text-center text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/15"
              >
                {siteData.resumeDownloadLabel}
              </a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
