"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { heroData } from "@/data/hero";

const tagPositions = [
  "left-[8%] top-[8%]",
  "right-[8%] top-[8%]",
  "right-[-12%] top-[43%]",
  "right-[7%] bottom-[8%]",
  "bottom-[-1%] left-1/2 -translate-x-1/2",
  "left-[-12%] top-[43%]",
];

export default function HeroImage() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[520px]">
      <div className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[78%] w-[78%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(125,211,252,0.2),rgba(138,184,255,0.08)_42%,transparent_72%)] blur-[32px]" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[62%] w-[62%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.06] blur-[54px]" />

      <div className="absolute left-1/2 top-1/2 z-10 w-[min(70vw,340px)] -translate-x-1/2 -translate-y-1/2">
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut" }}
          className="overflow-hidden rounded-full border border-white/10 bg-white/5 p-2 shadow-[0_34px_90px_-55px_rgba(0,0,0,0.7)]"
        >
          <Image
            src={heroData.profileImage}
            alt={heroData.name}
            width={340}
            height={340}
            priority
            className="aspect-auto rounded-full object-cover"
          />
        </motion.div>
      </div>

      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-20 max-sm:hidden">
        {heroData.floatingTech.map((tech, index) => (
          <div key={tech} className={`absolute ${tagPositions[index]}`}>
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{
                opacity: 1,
                scale: 1,
                x: [0, index % 2 === 0 ? 5 : -5, 0],
                y: [0, index % 3 === 0 ? -7 : 7, 0],
              }}
              transition={{
                delay: index * 0.18,
                duration: 4.6 + index * 0.25,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="whitespace-nowrap rounded-full border border-white/10 bg-[#06080f]/95 px-4 py-2 text-sm text-slate-100 shadow-[0_16px_40px_-24px_rgba(0,0,0,0.6)] backdrop-blur-xl"
            >
              {tech}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}
