"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { heroData } from "@/data/hero";

const positions = [
  { x: -120, y: -80 },
  { x: 120, y: -60 },
  { x: -120, y: 120 },
  { x: 120, y: 110 },
  { x: 0, y: -150 },
  { x: 0, y: 160 },
];

export default function HeroImage() {
  return (
    <div className="relative mx-auto flex w-full max-w-[340px] justify-center overflow-hidden">
      <div className="pointer-events-none absolute left-[-28px] top-8 h-56 w-56 rounded-full bg-white/10 blur-3xl" />
      <div className="pointer-events-none absolute right-[-20px] top-24 h-48 w-48 rounded-full bg-slate-300/10 blur-3xl" />

      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-10 overflow-hidden rounded-full border border-white/10 bg-white/5 p-2 shadow-[0_34px_90px_-55px_rgba(0,0,0,0.7)]"
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

      {heroData.floatingTech.map((tech, index) => (
        <motion.div
          key={tech}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1, y: [0, -6, 0] }}
          transition={{ delay: index * 0.25, duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute z-20 rounded-full border border-white/10 bg-[#06080f]/95 px-4 py-2 text-sm text-slate-100 backdrop-blur-xl shadow-[0_16px_40px_-24px_rgba(0,0,0,0.6)] max-sm:hidden"
          style={{ transform: `translate(${positions[index]?.x ?? 0}px, ${positions[index]?.y ?? 0}px)` }}
        >
          {tech}
        </motion.div>
      ))}
    </div>
  );
}
